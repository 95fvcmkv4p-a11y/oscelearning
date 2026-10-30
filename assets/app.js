/* OSCE 1 Lernseite – App-Logik (keine Abhängigkeiten, funktioniert auch per file://) */
(function () {
  "use strict";
  const O = window.OSCE;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- Speicher (nur dieser Browser) ---------- */
  const KEY = "osce1-lernstand-v1";
  let S = { rating: {}, done: {}, mode: "mittel", exam: "", cover: false, theme: "" };
  try { const raw = localStorage.getItem(KEY); if (raw) S = Object.assign(S, JSON.parse(raw)); } catch (e) {}
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} };
  if (!S.exam) { const d = new Date(); d.setDate(d.getDate() + 42); S.exam = d.toISOString().slice(0, 10); }
  if (S.theme) document.documentElement.setAttribute("data-theme", S.theme);

  /* ---------- Formatierung ---------- */
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function fmt(s) {
    if (s == null) return "";
    let h = esc(s);
    h = h.replace(/\{([tnp])\|([^}]*)\}/g, '<span class="$1">$2</span>');
    h = h.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
    h = h.replace(/\{anki\}/g, '<span class="anki" title="Anki-Kandidat: schwer zu merken">ANKI</span>');
    h = h.replace(/-&gt;/g, "→");
    return h;
  }
  const li = (arr) => (arr || []).map((x) => `<li>${fmt(x)}</li>`).join("");
  const toast = (msg) => { const t = document.createElement("div"); t.className = "toast"; t.textContent = msg; document.body.appendChild(t); setTimeout(() => t.remove(), 1800); };

  const F = O.faecher.slice().sort((a, b) => (a.ordnung || 99) - (b.ordnung || 99));
  const byId = Object.fromEntries(F.map((f) => [f.id, f]));
  const allStations = () => F.flatMap((f) => (f.stationen || []).map((s) => ({ f, s, key: f.id + ":" + s.id })));

  function fachProgress(f) {
    const st = f.stationen || []; let r = 0, y = 0, g = 0;
    st.forEach((s) => { const v = S.rating[f.id + ":" + s.id]; if (v == 1) r++; else if (v == 2) y++; else if (v == 3) g++; });
    return { n: st.length, r, y, g };
  }
  const barHTML = (p) => { const n = p.n || 1; return `<div class="bar" aria-label="${p.g} von ${p.n} Stationen sicher"><i class="r" style="width:${(p.r / n) * 100}%"></i><i class="y" style="width:${(p.y / n) * 100}%"></i><i class="g" style="width:${(p.g / n) * 100}%"></i></div>`; };

  /* ---------- Navigation ---------- */
  function renderNav() {
    const groups = {};
    F.forEach((f) => { (groups[f.gruppe] = groups[f.gruppe] || []).push(f); });
    let h = `<div class="nav-group">Lernen</div>
      <a href="#start" data-r="start"><span class="dot" style="--c:var(--ink)"></span>Start &amp; Ablauf</a>
      <a href="#plan" data-r="plan"><span class="dot" style="--c:var(--warn)"></span>Lernplan</a>
      <a href="#sim" data-r="sim"><span class="dot" style="--c:var(--hl-path)"></span>Stations-Simulator</a>
      <a href="#anki" data-r="anki"><span class="dot" style="--c:var(--hl-test)"></span>Anki-Kandidaten</a>`;
    Object.keys(groups).forEach((g) => {
      h += `<div class="nav-group">${esc(g)}</div>`;
      groups[g].forEach((f) => { const p = fachProgress(f); h += `<a href="#${f.id}" data-r="${f.id}"><span class="dot" style="--c:${f.farbe}"></span>${esc(f.name)}<span class="prog">${p.g}/${p.n}</span></a>`; });
    });
    $("#nav").innerHTML = h;
  }

  /* ---------- Mindmap (SVG) ---------- */
  const PAL = ["#c2410c", "#0f8a74", "#2f6fd0", "#8b5cf6", "#b7791f", "#c0397a", "#4b7f2a"];
  function wrapText(t, max) {
    const words = String(t).split(" "); const lines = []; let cur = "";
    words.forEach((w) => { if ((cur + " " + w).trim().length > max) { if (cur) lines.push(cur); cur = w; } else cur = (cur + " " + w).trim(); });
    if (cur) lines.push(cur); return lines;
  }
  const strip = (s) => String(s).replace(/\{[tnp]\|([^}]*)\}/g, "$1").replace(/\*\*/g, "").replace(/\{anki\}/g, "");
  function mindmapSVG(f) {
    const W = 940, BW = 270, LH = 18, PAD = 10, GAP = 16;
    const br = f.map.map((b, i) => {
      const lines = []; (b.c || []).forEach((c) => wrapText(strip(c), 33).forEach((l, j) => lines.push({ l, first: j === 0 })));
      return { b, i, lines, h: PAD * 2 + 22 + lines.length * LH };
    });
    const left = [], right = [];
    br.forEach((x, i) => (i % 2 === 0 ? right : left).push(x));
    const colH = (col) => col.reduce((a, x) => a + x.h, 0) + GAP * (col.length - 1);
    const H = Math.max(colH(left), colH(right), 140) + 20;
    const cx = W / 2, cy = H / 2;
    let svg = `<svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="Mindmap ${esc(f.name)}">`;
    const place = (col, x, side) => {
      let y = (H - colH(col)) / 2;
      col.forEach((n) => {
        const c = PAL[n.i % PAL.length];
        const ey = y + n.h / 2, ex = side === "r" ? x : x + BW;
        const sx = side === "r" ? cx + 95 : cx - 95;
        const mx = (sx + ex) / 2;
        svg += `<path class="mm-branch-line" stroke="${c}" d="M${sx},${cy} C${mx},${cy} ${mx},${ey} ${ex},${ey}"/>`;
        svg += `<g class="mm-branch"><rect x="${x}" y="${y}" width="${BW}" height="${n.h}" rx="10" stroke="${c}"/>`;
        svg += `<text class="h" x="${x + 12}" y="${y + PAD + 15}">${esc(strip(n.b.t))}</text>`;
        n.lines.forEach((ln, k) => { svg += `<text class="c" x="${x + (ln.first ? 12 : 22)}" y="${y + PAD + 22 + LH * (k + 1) - 3}">${ln.first ? "• " : ""}${esc(ln.l)}</text>`; });
        svg += `</g>`; y += n.h + GAP;
      });
    };
    place(right, W - BW - 10, "r"); place(left, 10, "l");
    const cl = wrapText(f.name, 16);
    svg += `<g class="mm-center"><rect x="${cx - 95}" y="${cy - 18 - cl.length * 10}" width="190" height="${36 + cl.length * 20}" rx="18"/>`;
    cl.forEach((l, k) => { svg += `<text x="${cx}" y="${cy + 6 - (cl.length - 1) * 10 + k * 20}" text-anchor="middle">${esc(l)}</text>`; });
    svg += `</g></svg>`;
    return svg;
  }
  function mindmapList(f) {
    return `<div class="mm-list">${f.map.map((b, i) => `<div class="b" style="--c:${PAL[i % PAL.length]}"><h4>${fmt(b.t)}</h4><ul class="clean">${(b.c || []).map((c) => `<li>• ${fmt(c)}</li>`).join("")}</ul></div>`).join("")}</div>`;
  }

  /* ---------- Station ---------- */
  function freqHTML(n) { return `<span class="freq" title="Häufigkeit in Altfragen">${[1, 2, 3].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`; }
  function tableHTML(head, rows) {
    return `<div class="tbl-wrap"><table><thead><tr>${head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${fmt(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  }
  function stationHTML(f, s) {
    const key = f.id + ":" + s.id, v = S.rating[key] || 0;
    let b = "";
    if (s.af && s.af.length) b += `<div class="af"><h4>So kam es in der Prüfung</h4><ul class="clean">${s.af.map((a) => { const m = /^(\d{4}):\s*(.*)$/.exec(a); return `<li>${m ? `<span class="yr">${m[1]}</span>${fmt(m[2])}` : fmt(a)}</li>`; }).join("")}</ul></div>`;
    if (s.ziel) b += `<p class="kernsatz" style="margin:0">${fmt(s.ziel)}</p>`;
    if (s.ablauf) b += `<div><h4>Ablauf</h4><ol>${li(s.ablauf)}</ol></div>`;
    if (s.befund) b += `<div><h4>Normalbefund zum Aufsagen</h4><div class="befund ${S.cover ? "covered" : ""}"><div class="befund-text">${s.befund.map((p) => `<p>${fmt(p)}</p>`).join("")}</div><button class="cover-btn" type="button">Erst selbst aufsagen, dann tippen zum Aufdecken</button></div></div>`;
    if (s.patho) b += `<div><h4>Pathologisch → denke an</h4>${tableHTML(["Befund", "Bedeutung"], s.patho)}</div>`;
    const g = s.gerust || {};
    if (g.anamnese) b += `<div><h4>Gezielte Anamnese</h4><ul>${li(g.anamnese)}</ul></div>`;
    if (g.redflags) b += `<div><h4>Red Flags</h4>${tableHTML(["Red Flag", "Denke an"], g.redflags)}</div>`;
    if (g.dd) b += `<div><h4>DD-Tabelle</h4>${tableHTML(g.ddHead || ["Diagnose", "Typisch", "Nächster Schritt"], g.dd)}</div>`;
    if (g.diagnostik) b += `<div><h4>Weitere Diagnostik</h4><ul>${li(g.diagnostik)}</ul></div>`;
    if (g.therapie) b += `<div><h4>Therapie / Procedere</h4><ul>${li(g.therapie)}</ul></div>`;
    if (s.extra) s.extra.forEach((x) => { b += `<div><h4>${esc(x.t)}</h4>${x.rows ? tableHTML(x.head, x.rows) : `<ul>${li(x.c)}</ul>`}</div>`; });
    b += galleryHTML(key);
    if (s.tipps) b += `<div><h4>Was Prüfer:innen hören wollten</h4><ul class="tips clean">${li(s.tipps)}</ul></div>`;
    b += `<div class="rate" data-key="${key}"><span>Wie sicher sitzt die Station?</span>
      <button type="button" data-v="1" aria-pressed="${v == 1}">Unsicher</button>
      <button type="button" data-v="2" aria-pressed="${v == 2}">Geht so</button>
      <button type="button" data-v="3" aria-pressed="${v == 3}">Sitzt</button></div>`;
    return `<details class="station" id="st-${f.id}-${s.id}"><summary>
      <span class="st-title">${fmt(s.titel)}</span><span class="st-state" data-v="${v}" title="Selbsteinschätzung"></span>
      <span class="st-sub"><span class="st-type">${esc(s.typ || "Station")}</span>${freqHTML(s.freq || 1)}</span>
    </summary><div class="st-body">${b}</div></details>`;
  }

  function galleryHTML(key) {
    const imgs = (O.bilder || {})[key];
    if (!imgs || !imgs.length) return "";
    return `<div><h4>Abbildungen</h4><div class="gallery">${imgs.map((im) => `<figure><button type="button" class="zoom" data-src="${im.src}" data-cap="${esc(im.cap)}" aria-label="Abbildung vergrößern: ${esc(im.cap)}"><img src="${im.src}" alt="${esc(im.cap)}" loading="lazy"></button><figcaption>${esc(im.cap)}</figcaption></figure>`).join("")}</div></div>`;
  }

  function diseaseHTML(d) {
    const rows = [["Definition", d.def], ["Ursachen / RF", d.aet], ["Klinik", d.klinik], ["Diagnostik", d.diag], ["Therapie", d.ther], ["Komplikationen", d.kompl], ["DD", d.dd], ["Merke", d.merke]].filter((r) => r[1]);
    return `<details class="dz"><summary><span>${fmt(d.t)}</span>${d.kurz ? `<small>${fmt(d.kurz)}</small>` : ""}</summary><dl class="dz-body">${rows.map((r) => `<dt>${r[0]}</dt><dd>${fmt(r[1])}</dd>`).join("")}</dl></details>`;
  }

  /* ---------- Seiten ---------- */
  function pageFach(f) {
    const p = fachProgress(f);
    const nAf = (f.stationen || []).reduce((a, s) => a + (s.af ? s.af.length : 0), 0);
    let h = `<div class="page">
      <header class="fach-head">
        <div class="eyebrow" style="color:${f.farbe}">${esc(f.gruppe)}</div>
        <h1>${esc(f.name)}</h1>
        <div class="meta">${f.gewicht >= 3 ? '<span class="pill hot">Kommt fast immer</span>' : f.gewicht == 2 ? '<span class="pill hot">Häufig</span>' : '<span class="pill">Gelegentlich</span>'}
          <span class="pill">${p.n} Stationen</span><span class="pill">${nAf} Altfragen-Einträge</span><span class="pill ok">${p.g} sitzen</span></div>
        ${barHTML(p)}
      </header>
      <nav class="levels" aria-label="Ebenen">
        <a href="#${f.id}" data-jump="lv1"><b>1</b>Big Picture</a>
        <a href="#${f.id}" data-jump="lv2"><b>2</b>Stationen</a>
        ${f.details && f.details.length ? `<a href="#${f.id}" data-jump="lv3"><b>3</b>Details</a>` : ""}
      </nav>
      <section class="lvl" id="lv1"><h2><span class="num">1</span>Big Picture</h2>
        <p class="intro">Erst das Gerüst: Worum geht es in diesem Fach an der OSCE, welche Stationstypen gibt es, welche Werkzeuge brauchst du immer wieder? Zeichne die Mindmap danach einmal selbst aus dem Kopf nach.</p>
        ${f.kern ? `<p class="kernsatz">${fmt(f.kern)}</p>` : ""}
        <div class="mindmap-wrap" id="mm">${matchMedia("(max-width: 700px)").matches ? mindmapList(f) : mindmapSVG(f)}</div>
        <div class="mm-toggle"><button class="chip-btn" type="button" id="mmToggle">${matchMedia("(max-width: 700px)").matches ? "Als Mindmap zeigen" : "Als Liste zeigen"}</button></div>
        <div class="grid2">
          ${f.merke ? `<div class="box"><h3>Das trägt durch jede Station</h3><ul>${li(f.merke)}</ul></div>` : ""}
          ${f.fallen ? `<div class="box warn"><h3>Typische Punktverluste</h3><ul>${li(f.fallen)}</ul></div>` : ""}
        </div>
      </section>
      <section class="lvl" id="lv2"><h2><span class="num">2</span>Stationen</h2>
        <p class="intro">Jede Karte = eine Prüfungsstation. Oben steht, wie sie in den Altfragen kam (Balken = Häufigkeit). Normalbefunde laut aufsagen, dann aufdecken. Am Ende selbst einschätzen: daraus baut der Lernplan deine Wiederholungen.</p>
        <div class="legend"><span><span class="t">Test/Begriff</span></span><span><span class="n">Normalbefund</span></span><span><span class="p">pathologisch</span></span><span><span class="anki">ANKI</span> = nur das in Anki</span>
          <button class="chip-btn" type="button" id="coverToggle" aria-pressed="${S.cover}">Normalbefunde abdecken</button>
          <button class="chip-btn" type="button" id="openAll">Alle aufklappen</button></div>
        <div class="stations" style="margin-top:14px">${(f.stationen || []).map((s) => stationHTML(f, s)).join("")}</div>
      </section>`;
    if (f.details && f.details.length) h += `<section class="lvl" id="lv3"><h2><span class="num">3</span>Details</h2>
        <p class="intro">Krankheitsbilder auf Kitteltaschen-Tiefe: so viel, wie man für DD, nächste Diagnostik und Therapieprinzip braucht. Erst angehen, wenn Ebene 1 und 2 stehen.</p>
        ${galleryHTML(f.id + ":_details")}<div class="disease-grid">${f.details.map(diseaseHTML).join("")}</div></section>`;
    if (f.quelle) h += `<p class="muted small" style="margin-top:30px">Quellen: ${esc(f.quelle)}</p>`;
    return h + `</div>`;
  }

  function daysLeft() { const t = new Date(); t.setHours(0, 0, 0, 0); const e = new Date(S.exam + "T00:00:00"); return Math.round((e - t) / 864e5); }

  function pageStart() {
    const A = O.ablauf;
    const dl = daysLeft();
    return `<div class="page">
      <section class="hero">
        <div class="eyebrow">OSCE 1 · Medizin JKU Linz</div>
        <h1>Erst das <em>Gerüst</em>,<br>dann die Details.</h1>
        <p class="lede">Alle Fächer der OSCE 1 auf einer Seite, gebaut aus Evas Skript, dem Skript „Praktische Aufgaben“ und den Altfragen 2020–2025. Jedes Fach hat drei Ebenen: Big Picture, Stationen, Details.</p>
        <div class="countdown">
          <div><div class="big">${dl >= 0 ? dl : 0}</div><div class="muted small">Tage bis zur Prüfung</div></div>
          <label for="examDate">Prüfungsdatum<input type="date" id="examDate" value="${S.exam}"></label>
          <a class="btn" href="#plan" style="text-decoration:none">Zum heutigen Lernpensum</a>
        </div>
      </section>
      <section class="home-sec">
        <h2>Der universelle Stationsablauf</h2>
        <p class="muted">An jeder Station gleich. Die grün markierten Schritte gibt es fast gratis, und genau dort gehen laut Altfragen die meisten Punkte verloren.</p>
        <ol class="steps-flow">${A.map((a) => `<li class="${a.gratis ? "gratis" : ""}"><b>${esc(a.t)}</b><br><span class="small muted">${fmt(a.d)}</span></li>`).join("")}</ol>
        <div class="grid2">${O.querschnitt.map((q) => `<div class="box ${q.warn ? "warn" : ""}"><h3>${esc(q.t)}</h3><ul>${li(q.c)}</ul></div>`).join("")}</div>
      </section>
      <section class="home-sec">
        <h2>Fächer</h2>
        <p class="muted">Sortiert nach Gruppen. Der Balken zeigt deine Selbsteinschätzung pro Station (rot · gelb · grün).</p>
        <div class="fach-grid">${F.map((f) => { const p = fachProgress(f); return `<a class="fach-card" href="#${f.id}" style="--c:${f.farbe}"><b>${esc(f.name)}</b><small>${p.n} Stationen · ${f.gewicht >= 3 ? "kommt fast immer" : f.gewicht == 2 ? "häufig" : "gelegentlich"}</small>${barHTML(p)}</a>`; }).join("")}</div>
      </section>
      <section class="home-sec">
        <h2>So nutzt du die Seite</h2>
        <div class="grid2">
          <div class="box"><h3>1 · Big Picture</h3><p class="small" style="margin:0">Mindmap des Fachs lesen, dann aus dem Kopf auf Papier nachzeichnen. Eine Session pro Fach reicht für die erste Runde.</p></div>
          <div class="box"><h3>2 · Stationen</h3><p class="small" style="margin:0">Ablauf laut durchgehen, am besten mit Gegenstand oder Mitbewohner:in. Normalbefund abdecken und aufsagen. Danach rot/gelb/grün markieren.</p></div>
          <div class="box"><h3>3 · Details</h3><p class="small" style="margin:0">Krankheitsbilder nur so tief, wie es für DD, Diagnostik und Therapieprinzip reicht. Nur was mit <span class="anki">ANKI</span> markiert ist, kommt in Anki.</p></div>
          <div class="box"><h3>Simulator</h3><p class="small" style="margin:0">Zieht eine echte Altfrage, gibt dir Lesezeit und Stationszeit. Laut antworten, dann mit der Stationskarte vergleichen.</p></div>
        </div>
        <p class="muted small" style="margin-top:14px">Dein Lernstand (Einschätzungen, erledigte Blöcke) wird nur in diesem Browser gespeichert.</p>
      </section></div>`;
  }

  /* ---------- Lernplan ---------- */
  function buildBlocks() {
    const prio = F.slice().sort((a, b) => (b.gewicht - a.gewicht) || ((a.ordnung || 0) - (b.ordnung || 0)));
    const B = [];
    const add = (phase, id, t, d, min = 50) => B.push({ phase, id, t, d, min });
    prio.forEach((f) => add(1, "bp-" + f.id, `Big Picture: ${f.name}`, "Mindmap lesen → aus dem Kopf nachzeichnen → Punktverluste lesen. Kein Detail lernen.", 25));
    let cnt = 0;
    prio.forEach((f, fi) => {
      const st = f.stationen || [];
      for (let i = 0; i < st.length; i += 2) {
        const pair = st.slice(i, i + 2);
        add(2, `st-${f.id}-${i}`, `${f.name}: ${pair.map((s) => strip(s.titel)).join(" + ")}`, "Ablauf laut üben, Normalbefund abdecken & aufsagen, DD-Tabelle einmal schreiben. Danach einschätzen.");
      }
      if (f.details && f.details.length) add(2, `dz-${f.id}`, `${f.name}: Details`, `${f.details.length} Krankheitsbilder überfliegen, Lücken in der eigenen Mindmap ergänzen.`);
      cnt++;
      if (cnt % 2 === 0) add(2, `mix-${fi}`, "Mix-Wiederholung", "Simulator: 4 Altfragen aus den bisherigen Fächern laut durchspielen. Rote Stationen nochmal öffnen.");
    });
    for (let i = 1; i <= 8; i++) add(3, `sim-${i}`, i % 2 ? "Simulator gemischt (6 Stationen)" : "Rote & gelbe Stationen gezielt", i % 2 ? "Prüfungsbedingungen: 1 min lesen, Station laut, dann mit Karte vergleichen." : "Alle Stationen mit rot/gelb: Ablauf laut, Befund aufsagen, neu einschätzen.");
    add(3, "anki-1", "Anki-Kandidaten einpflegen", "Nur die ANKI-markierten Fakten (Scores, Zahlen, Eponyme), max. 60 Karten.", 25);
    for (let i = 1; i <= 4; i++) add(4, `gp-${i}`, i === 1 ? "Generalprobe mit Lernpartner:in" : i === 4 ? "Letzter Durchgang: Normalbefunde aller Fächer" : "Generalprobe: Untersuchungen am Menschen", i === 1 ? "Jede:r prüft 7 Stationen, mit Timer und Rollenspiel." : i === 4 ? "Nur aufsagen, nichts Neues lernen. Ab 18 Uhr frei." : "Brust, Knie, Lunge, Abdomen, Neuro-Status, BLS am echten Körper durchspielen.");
    return B;
  }
  const PHASES = { 1: ["Big-Picture-Runde", "ca. Woche 1 · alle Fächer einmal im Überblick"], 2: ["Stationen nach Priorität", "ca. Woche 2–4 · häufige Fächer zuerst"], 3: ["Simulation & Lücken", "ca. Woche 5"], 4: ["Generalprobe", "letzte Tage"] };
  const MODES = { gut: { n: 350, t: "Guter Tag", d: "bis 7 Sessions · 50/10" }, mittel: { n: 150, t: "Mittlerer Tag", d: "3 Sessions" }, schlecht: { n: 0, t: "Schwerer Tag", d: "1 Mini-Aufgabe, 10–25 min" } };

  function pagePlan() {
    const B = buildBlocks(); const open = B.filter((b) => !S.done[b.id]);
    const dl = Math.max(daysLeft(), 1); const learnDays = Math.max(Math.round(dl * 6 / 7) - 1, 1);
    const need = (open.reduce((a, b) => a + b.min, 0) / 50 / learnDays);
    const m = MODES[S.mode] || MODES.mittel;
    let acc = 0; const todays = []; for (const b of open) { if (acc + b.min > m.n) break; todays.push(b); acc += b.min; }
    const mini = [
      "Eine Mindmap aus dem Kopf nachzeichnen (10 min)",
      "Einen Normalbefund laut aufsagen, z. B. Mundstatus oder Lungenstatus (10 min)",
      "Eine Station im Simulator ziehen und nur laut antworten (10 min)",
      "Fällige Anki-Karten, nicht mehr (15 min)",
      "Den universellen Stationsablauf einmal laut durchsprechen (5 min)",
    ];
    const blockRow = (b) => `<label class="block ${S.done[b.id] ? "done" : ""}"><input type="checkbox" data-block="${b.id}" ${S.done[b.id] ? "checked" : ""}><span><span class="bt">${esc(b.t)}</span><br><span class="bd">${esc(b.d)}</span></span><span class="bk">${b.min}′</span></label>`;
    let h = `<div class="page"><header class="fach-head"><div class="eyebrow">Flexibel nach Tagesform</div><h1>Lernplan</h1>
      <p class="lede">Keine starren Kalendertage. Der Plan ist eine Reihenfolge von 50-Minuten-Blöcken. Du wählst morgens deine Tagesform, die Seite zeigt dir die nächsten Blöcke. Was du nicht schaffst, rutscht einfach nach.</p></header>
      <div class="status-line"><span class="pill">${B.length - open.length} / ${B.length} Blöcke erledigt</span><span class="pill">${dl} Tage bis zur Prüfung</span><span class="pill ${need > 4.5 ? "hot" : "ok"}">nötig: ca. ${need.toFixed(1).replace(".", ",")} Sessions pro Lerntag</span></div>
      <div class="timer" id="pomo"><div><div class="clock" id="pomoClock">50:00</div><div class="lbl" id="pomoLbl">Fokus-Session</div></div>
        <button class="primary" type="button" id="pomoStart">Start</button><button type="button" id="pomoReset">Zurück</button><button type="button" id="pomoSwitch">Pause 10′</button></div>
      <h2 style="font-size:20px;margin-top:22px">Wie ist heute?</h2>
      <div class="modes">${Object.entries(MODES).map(([k, v]) => `<button type="button" class="mode" data-mode="${k}" aria-pressed="${S.mode === k}"><b>${v.t}</b><small>${v.d}</small></button>`).join("")}</div>
      <div class="today">`;
    if (S.mode === "schlecht") h += `<h3>Eine Sache reicht heute.</h3><p class="muted small" style="margin-top:0">Such dir eine Mini-Aufgabe aus. Wenn danach noch Energie da ist, darfst du den nächsten Block anfangen, musst aber nicht.</p><ul>${li(mini)}</ul>${open[0] ? `<p class="small muted">Nächster regulärer Block wäre: <b>${esc(open[0].t)}</b></p>` : ""}`;
    else h += `<h3>Heute: ${todays.length} ${todays.length === 1 ? "Block" : "Blöcke"} · ca. ${String(Math.round(acc / 5) / 10).replace(".", ",")} Sessions</h3><p class="muted small" style="margin-top:0">Nach 4 Sessions eine lange Pause (30–60 min). Häkchen setzen, wenn erledigt.</p>${todays.map(blockRow).join("") || "<p>Alles erledigt. Stark.</p>"}`;
    h += `</div><h2 style="font-size:20px;margin-top:30px">Gesamtplan</h2><p class="muted small">Reihenfolge nach Prüfungshäufigkeit: Fächer, die praktisch jeden Termin drankommen (BLS, Gyn-Brust, Derma, Auge, Uro, Neuro …), zuerst.</p>`;
    [1, 2, 3, 4].forEach((ph) => { const bl = B.filter((b) => b.phase === ph); const d = bl.filter((b) => S.done[b.id]).length;
      h += `<details class="phase box" ${ph === (open[0] || {}).phase ? "open" : ""}><summary><h3 style="display:inline-flex">${PHASES[ph][0]} <small>${PHASES[ph][1]} · ${d}/${bl.length}</small></h3></summary>${bl.map(blockRow).join("")}</details>`; });
    h += `<button class="chip-btn" type="button" id="resetPlan" style="margin-top:18px">Lernplan-Häkchen zurücksetzen</button><span id="resetConfirm"></span></div>`;
    return h;
  }

  /* ---------- Simulator ---------- */
  let simFilter = new Set(F.map((f) => f.id));
  let simCur = null;
  function simPool() { return allStations().filter((x) => simFilter.has(x.f.id)).flatMap((x) => (x.s.af || []).map((a) => ({ ...x, a }))); }
  function pageSim() {
    return `<div class="page"><header class="fach-head"><div class="eyebrow">Prüfungsbedingungen</div><h1>Stations-Simulator</h1>
      <p class="lede">Zieht eine echte Altfrage. Du bekommst 1 Minute Lesezeit, danach läuft die Station. Antworte laut, als stündest du vor der Prüferin. Danach mit der Stationskarte vergleichen.</p></header>
      <div class="filter" id="simFilter">${F.map((f) => `<button type="button" class="chip-btn" data-f="${f.id}" aria-pressed="${simFilter.has(f.id)}">${esc(f.name)}</button>`).join("")}</div>
      <div class="filter"><button type="button" class="chip-btn" id="simRed">Nur rote/gelbe Stationen</button>
        <label class="small muted" for="simLen">Stationsdauer <select id="simLen"><option value="5">5 min</option><option value="6">6 min</option><option value="7" selected>7 min</option></select></label></div>
      <div id="simArea"></div></div>`;
  }
  let simTimer = null;
  function drawSim(only) {
    let pool = simPool();
    if (only) pool = pool.filter((x) => (S.rating[x.key] || 0) < 3 && S.rating[x.key]);
    const area = $("#simArea");
    if (!pool.length) { area.innerHTML = `<div class="sim-card"><p>Keine passenden Altfragen. ${only ? "Du hast noch keine Station rot oder gelb markiert." : "Wähle mindestens ein Fach."}</p></div>`; return; }
    simCur = pool[Math.floor(Math.random() * pool.length)];
    const m = /^(\d{4}):\s*(.*)$/.exec(simCur.a);
    area.innerHTML = `<div class="sim-card"><div class="fach" style="color:${simCur.f.farbe}">${esc(simCur.f.name)}${m ? " · " + m[1] : ""}</div>
      <h2>Ihre Aufgabe</h2><p class="task">${fmt(m ? m[2] : simCur.a)}</p>
      <div class="timer"><div><div class="clock" id="simClock">1:00</div><div class="lbl" id="simLbl">Lesezeit</div></div><button class="primary" type="button" id="simGo">Starten</button></div>
      <div class="sim-controls"><a class="btn ghost" href="#${simCur.f.id}" data-open="st-${simCur.f.id}-${simCur.s.id}" style="text-decoration:none">Lösung: Station „${esc(strip(simCur.s.titel))}“</a><button class="btn" type="button" id="simNext">Nächste Station</button></div></div>`;
  }
  function runSimTimer() {
    clearInterval(simTimer); const len = +$("#simLen").value * 60; let phase = 0, t = 60;
    const clock = $("#simClock"), lbl = $("#simLbl");
    const tick = () => { clock.textContent = Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0");
      if (t <= 0) { if (phase === 0) { phase = 1; t = len; lbl.textContent = "Station läuft"; } else { clearInterval(simTimer); lbl.textContent = "Zeit ist um. Vergleichen!"; return; } } t--; };
    tick(); simTimer = setInterval(tick, 1000);
  }

  /* ---------- Anki ---------- */
  function pageAnki() {
    const rows = F.flatMap((f) => (f.anki || []).map((a) => ({ f, q: a[0], a: a[1] })));
    const tsv = rows.map((r) => `${strip(r.q)}\t${strip(r.a)}\tOSCE::${r.f.name.replace(/\s+/g, "_")}`).join("\n");
    return `<div class="page"><header class="fach-head"><div class="eyebrow">Nur das, was sich nicht anders merken lässt</div><h1>Anki-Kandidaten</h1>
      <p class="lede">${rows.length} Fakten aus allen Fächern: Scores, Zahlen, Eponyme, Einteilungen. Alles andere lernst du über Mindmap und lautes Üben. Unten kannst du die Liste als Import-Text kopieren (Tab-getrennt: Vorderseite, Rückseite, Deck).</p></header>
      ${F.filter((f) => f.anki && f.anki.length).map((f) => `<h2 style="font-size:20px;margin:22px 0 8px;color:${f.farbe}">${esc(f.name)}</h2>${tableHTML(["Frage", "Antwort"], f.anki)}`).join("")}
      <h2 style="font-size:20px;margin:26px 0 8px">Import-Text für Anki</h2>
      <p class="muted small">In Anki: Datei → Importieren → „Felder getrennt durch Tabulator“, Feld 3 als Deck zuordnen.</p>
      <textarea class="copy" id="ankiTxt" readonly>${esc(tsv)}</textarea>
      <button class="btn" type="button" id="ankiCopy" style="margin-top:8px">Text kopieren</button></div>`;
  }

  /* ---------- Router ---------- */
  function route() {
    const r = (location.hash || "#start").slice(1);
    const view = $("#view");
    if (byId[r]) view.innerHTML = pageFach(byId[r]);
    else if (r === "plan") view.innerHTML = pagePlan();
    else if (r === "sim") { view.innerHTML = pageSim(); drawSim(); }
    else if (r === "anki") view.innerHTML = pageAnki();
    else view.innerHTML = pageStart();
    $$("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.r === (byId[r] || ["plan", "sim", "anki"].includes(r) ? r : "start")));
    closeSide();
    if (pendingOpen) { const el = document.getElementById(pendingOpen); pendingOpen = null; if (el) { el.open = true; setTimeout(() => el.scrollIntoView({ block: "start" }), 30); return; } }
    window.scrollTo(0, 0);
    document.title = (byId[r] ? byId[r].name + " · " : "") + "OSCE 1 Lernseite";
  }
  let pendingOpen = null;

  function closeSide() { $("#side").classList.remove("open"); const s = $(".scrim"); if (s) s.remove(); }

  /* ---------- Pomodoro ---------- */
  let pomo = { t: 3000, run: false, brk: false, iv: null };
  function pomoDraw() { const c = $("#pomoClock"); if (!c) return; c.textContent = Math.floor(pomo.t / 60) + ":" + String(pomo.t % 60).padStart(2, "0"); $("#pomoLbl").textContent = pomo.brk ? "Pause: aufstehen, trinken, kein Handy" : "Fokus-Session"; $("#pomoStart").textContent = pomo.run ? "Anhalten" : "Start"; $("#pomoSwitch").textContent = pomo.brk ? "Fokus 50′" : "Pause 10′"; }
  function pomoSet(brk) { pomo.brk = brk; pomo.t = brk ? 600 : 3000; pomoDraw(); }

  /* ---------- Events ---------- */
  document.addEventListener("click", (e) => {
    const t = e.target;
    const jump = t.closest("[data-jump]"); if (jump) { e.preventDefault(); const el = document.getElementById(jump.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth" }); return; }
    const op = t.closest("[data-open]"); if (op) { pendingOpen = op.dataset.open; if (location.hash === "#" + op.getAttribute("href").slice(1)) { e.preventDefault(); route(); } return; }
    const rb = t.closest(".rate button"); if (rb) { const key = rb.parentElement.dataset.key, v = +rb.dataset.v; S.rating[key] = S.rating[key] === v ? 0 : v; save();
      $$("button", rb.parentElement).forEach((b) => b.setAttribute("aria-pressed", String(+b.dataset.v === S.rating[key])));
      const st = rb.closest("details").querySelector(".st-state"); st.dataset.v = S.rating[key]; renderNav(); route_keepActive(); return; }
    const z = t.closest(".zoom"); if (z) { const lb = document.createElement("div"); lb.className = "lightbox"; lb.innerHTML = `<figure><img src="${z.dataset.src}" alt=""><figcaption>${esc(z.dataset.cap)} · tippen zum Schließen</figcaption></figure>`; lb.onclick = () => lb.remove(); document.body.appendChild(lb); return; }
    const cb = t.closest(".cover-btn"); if (cb) { cb.parentElement.classList.remove("covered"); return; }
    if (t.id === "coverToggle") { S.cover = !S.cover; save(); t.setAttribute("aria-pressed", S.cover); $$(".befund").forEach((b) => b.classList.toggle("covered", S.cover)); return; }
    if (t.id === "openAll") { const all = $$("details.station"); const anyClosed = all.some((d) => !d.open); all.forEach((d) => (d.open = anyClosed)); t.textContent = anyClosed ? "Alle zuklappen" : "Alle aufklappen"; return; }
    if (t.id === "mmToggle") { const f = byId[location.hash.slice(1)]; const isList = !!$("#mm .mm-list"); $("#mm").innerHTML = isList ? mindmapSVG(f) : mindmapList(f); t.textContent = isList ? "Als Liste zeigen" : "Als Mindmap zeigen"; return; }
    const md = t.closest("[data-mode]"); if (md) { S.mode = md.dataset.mode; save(); route(); return; }
    if (t.id === "resetPlan") { $("#resetConfirm").innerHTML = ` <button class="chip-btn" type="button" id="resetYes">Ja, alle Häkchen löschen</button>`; return; }
    if (t.id === "resetYes") { S.done = {}; save(); route(); toast("Lernplan zurückgesetzt"); return; }
    if (t.id === "pomoStart") { pomo.run = !pomo.run; clearInterval(pomo.iv); if (pomo.run) pomo.iv = setInterval(() => { pomo.t--; if (pomo.t <= 0) { pomoSet(!pomo.brk); toast(pomo.brk ? "Session geschafft. 10 Minuten Pause." : "Pause vorbei. Nächster Block."); } pomoDraw(); }, 1000); pomoDraw(); return; }
    if (t.id === "pomoReset") { pomoSet(pomo.brk); return; }
    if (t.id === "pomoSwitch") { pomoSet(!pomo.brk); return; }
    const sf = t.closest("#simFilter [data-f]"); if (sf) { const id = sf.dataset.f; simFilter.has(id) ? simFilter.delete(id) : simFilter.add(id); sf.setAttribute("aria-pressed", simFilter.has(id)); return; }
    if (t.id === "simNext") { clearInterval(simTimer); drawSim(); return; }
    if (t.id === "simRed") { clearInterval(simTimer); drawSim(true); return; }
    if (t.id === "simGo") { runSimTimer(); t.remove(); return; }
    if (t.id === "ankiCopy") { const ta = $("#ankiTxt"); const done = () => toast("Kopiert"); try { navigator.clipboard.writeText(ta.value).then(done, () => { ta.select(); toast("Text markiert, jetzt Strg+C"); }); } catch (er) { ta.select(); toast("Text markiert, jetzt Strg+C"); } return; }
    if (t.id === "menuBtn") { $("#side").classList.add("open"); const s = document.createElement("div"); s.className = "scrim"; s.onclick = closeSide; document.body.appendChild(s); return; }
    if (t.id === "themeBtn") { const cur = document.documentElement.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); S.theme = cur === "dark" ? "light" : "dark"; document.documentElement.setAttribute("data-theme", S.theme); save(); return; }
  });
  function route_keepActive() { /* Nav neu gerendert: aktiven Eintrag wieder markieren */ const r = (location.hash || "#start").slice(1); $$("#nav a").forEach((a) => a.classList.toggle("active", a.dataset.r === r)); }
  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.block) { S.done[t.dataset.block] = t.checked; save(); t.closest(".block").classList.toggle("done", t.checked); if (t.checked) toast("Block erledigt"); return; }
    if (t.id === "examDate" && t.value) { S.exam = t.value; save(); route(); }
  });
  window.addEventListener("hashchange", route);
  renderNav(); route();
})();
