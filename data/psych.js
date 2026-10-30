OSCE.fach({
  id: "psych", name: "Psychiatrie", gruppe: "Gespräch", ordnung: 70, farbe: "#9333ea", gewicht: 3,
  quelle: "Evas Ausarbeitung (Psych-Altfragen); Praktische Aufgaben Psychiatrie; Altfragen 2020–2025",
  kern: "Psychiatrie ist eine **Gesprächsstation ohne Lösungsblatt**: Die Aufgabe heißt oft nur „Stellen Sie sich vor. Klären Sie die Situation.“ Bewertet werden Einstieg, Haltung, Gesprächstechnik und ob man die typischen Symptome gezielt erfragt.",
  map: [
    { t: "Einstieg", c: ["Vorstellen: Name + Funktion (!)", "„Was führt Sie zu mir?“", "Über Eck sitzen, ruhig, offen"] },
    { t: "Technik", c: ["Offene Fragen, ausreden lassen", "Emotionen benennen, spiegeln", "Zusammenfassen, Ergänzungen erfragen"] },
    { t: "Akut", c: ["Psychose / Verfolgungswahn", "Manie", "Panikattacke"] },
    { t: "Affektiv", c: ["Depression: 2 Screeningfragen", "Suizidalität direkt ansprechen", "Schlafstörung + Lebensumstände"] },
    { t: "Anamnese-Inhalte", c: ["Vorerkrankungen, Medikamente", "Substanzen, Familie", "Soziales: Wohnen, Arbeit, Beziehungen"] },
  ],
  merke: [
    "**„Stellen Sie sich vor“ steht oft auf dem Zettel**: offenbar vergessen es viele, und das gibt Punktabzug.",
    "Man muss nicht fertig werden. Ruhig bleiben, eine Beziehung aufbauen, gezielt nach Kernsymptomen fragen.",
    "Wahn nicht bestätigen und nicht ausreden. Gefühl validieren: „Ich verstehe, dass Ihnen das Angst macht.“",
  ],
  fallen: [
    "Nicht vorgestellt",
    "Mit Fachbegriffen gesprochen oder Patient:in unterbrochen",
    "Suizidalität bei depressiver Symptomatik nicht angesprochen",
    "Bei Agitation hektisch geworden statt Ruhe auszustrahlen",
  ],
  stationen: [
    {
      id: "wahn", titel: "Verfolgungswahn / akute Psychose: „Klären Sie die Situation“", typ: "Gespräch", freq: 3,
      af: ["2020: Akute Psychose: einfach reden, Wert auf den Einstieg", "2022: Patientin mit Verfolgungswahn kommt mit Familie in die Allgemeinpraxis: „Stellen Sie sich vor!“, „Klären Sie die Situation“", "2023: „Frau mit Verfolgungswahn. Klären Sie die Situation!“ (wirft eine Schraube, fühlt sich überwacht und gefilmt) → ruhig bleiben", "2024: Patient mit Verfolgungswahn in der Allgemeinpraxis (verhält sich jedes Mal etwas anders); Mann mit V. a. Schizophrenie: Gesprächseinstieg, auf Symptome eingehen", "2024/2025: Psychose-Gespräch; Frau mit Verfolgungswahn, schlichten Sie die Situation"],
      ablauf: ["Eigene Sicherheit: Tür/Fluchtweg im Blick, Abstand", "Vorstellen mit Name und Funktion, nach Namen fragen", "Ruhig, langsam, klar sprechen; reizarme Umgebung anbieten; zum Hinsetzen einladen", "Offene Frage: „Was ist passiert? Erzählen Sie mir, was Sie beunruhigt.“", "Gefühl validieren, Wahn weder bestätigen noch widerlegen", "Gezielt nach Symptomen fragen (Tabelle), behutsam", "Vorerkrankungen, Medikamente, **Drogen**, Schlaf, Familie, Suizid-/Fremdgefährdung", "Zusammenfassen, Hilfe anbieten (Facharzt, stationäre Aufnahme freiwillig), Angehörige einbeziehen"],
      gerust: {
        ddHead: ["Symptom", "So fragen", ""],
        dd: [["Akustische Halluzinationen", "„Hören Sie Stimmen, die andere nicht hören? Was sagen sie? Befehle? Unterhalten sie sich über Sie?“", ""], ["Wahn", "„Haben Sie das Gefühl, verfolgt oder beobachtet zu werden?“", ""], ["Ich-Störungen", "„Haben Sie das Gefühl, dass andere Ihre Gedanken lesen, beeinflussen oder Ihnen Gedanken eingeben?“", ""], ["Formale Denkstörung", "„Reißen Ihre Gedanken plötzlich ab?“ (beobachten: zerfahren)", ""], ["Negativsymptome", "„Fühlen Sie sich leer, gleichgültig, freudlos? Ziehen Sie sich zurück?“", ""], ["Gefährdung", "„Haben Sie daran gedacht, sich oder anderen etwas anzutun?“", ""]],
        diagnostik: ["Organische Ursachen ausschließen: Drogen (Cannabis, Amphetamine), Delir, Hirnorganik, Stoffwechsel", "DD: Schizophrenie, drogeninduzierte Psychose, Manie mit psychotischen Symptomen, Delir"],
        therapie: ["Deeskalation, Beziehung, Sicherheit", "Akut: Antipsychotika, ggf. Benzodiazepin; bei akuter Selbst-/Fremdgefährdung Unterbringung"],
      },
      tipps: ["Prüfer sitzt drin, sagt nichts und schaut ernst, bewertet aber nett", "Die Schauspieler:innen reagieren auf jede Person anders: flexibel bleiben"],
    },
    {
      id: "manie", titel: "Manische Episode", typ: "Gespräch", freq: 2,
      af: ["2022: Pat. wird von Angehörigen nach Autounfall gebracht, wirkt stark verändert → manische Episode: begrüßen, vorstellen, einfach reden", "2022: Manischer Pat. hat Angst um seine Kinder (rennt herum, zieht die Hose aus, Keller sei der sicherste Raum): „Versuchen Sie, die Situation zu lösen“", "2023: Akute Manie"],
      ablauf: ["Ruhig und authentisch auftreten, nicht mitreißen lassen", "Zum Gespräch einladen: „Herr X, wenn Sie sich kurz hinsetzen, können wir gemeinsam einen Weg finden. Ich möchte Ihnen zuhören.“", "Klare Grenzen setzen, aber Freiraum lassen; reizarm", "Sorgen aufgreifen (z. B. Kinder), Sicherheit vermitteln", "Schlaf, Substanzen, Medikamente, frühere Episoden, Depressionen, Familie erfragen"],
      gerust: {
        diagnostik: ["Leitsymptome: gehobene oder gereizte Stimmung, Antriebssteigerung, Ideenflucht, Logorrhö, Größenideen, vermindertes Schlafbedürfnis, Ablenkbarkeit, Distanzlosigkeit, riskantes Verhalten (Geld, Sex, Fahren)", "DD: bipolare Störung, Substanzen (Kokain, Amphetamine, Steroide), Hyperthyreose, Hirnorganik"],
        therapie: ["Akut: Antipsychotika, Benzodiazepine; Phasenprophylaxe: Lithium, Valproat", "Oft stationär (fehlende Krankheitseinsicht, Selbstgefährdung)"],
      },
    },
    {
      id: "depression", titel: "Depression & Suizidalität", typ: "Gespräch", freq: 3,
      af: ["2020: Psychiatrische Ambulanz, Überweisung zur Abklärung Depression: angenehme Atmosphäre, psychiatrische Anamnese bis die Zeit um ist", "2021: Depression nach Trennung (5 min reden)", "2025: Depressive Episode mit **akuter Suizidalität** (Patient hört eine Stimme, die sagt, er solle sich ertränken, und hält das selbst für die beste Idee)"],
      ablauf: ["Vorstellen, ruhige Atmosphäre, offene Einstiegsfrage", "**2 Screeningfragen**: gedrückte Stimmung? Freudlosigkeit/Interessenverlust?", "Haupt- und Nebensymptome erfragen, Dauer (≥ 2 Wochen)", "**Suizidalität aktiv ansprechen**: indirekt über Zukunftspläne, dann direkt mit Vorankündigung", "Psychotische Symptome? (Stimmen mit Aufforderungen = höchstes Risiko)", "Vorerkrankungen, Medikamente, Substanzen, Soziales, Familie, Schutzfaktoren"],
      gerust: {
        ddHead: ["", "Inhalt", ""],
        dd: [["Hauptsymptome", "gedrückte Stimmung · Interessen-/Freudlosigkeit · Antriebsminderung", ""], ["Nebensymptome", "Konzentration ↓, Selbstwert ↓, Schuldgefühle, Hoffnungslosigkeit, Suizidgedanken, Schlafstörung, Appetit-/Libidoverlust", ""], ["Schwere (ICD-10)", "leicht 2+2 · mittel 2+3–4 · schwer 3+≥ 4", ""]],
        diagnostik: ["Suizidalität einschätzen: Gedanken → Pläne → Vorbereitungen (Mittel besorgt) → frühere Versuche; präsuizidales Syndrom (Einengung, Aggressionsumkehr, Suizidphantasien)", "**Je konkreter die Planung, desto höher das Risiko**; Nachfragen erhöht das Risiko nicht, es entlastet", "Organisch abklären: TSH, BB, Elektrolyte, B12, Medikamente"],
        therapie: ["Akute Suizidalität mit Plan oder imperativen Stimmen: nicht allein lassen, **stationäre Aufnahme** (notfalls gegen den Willen), Sicherheit", "Sonst: Psychotherapie, Antidepressiva (SSRI), Absprache, engmaschige Termine, Krisennummern"],
      },
      extra: [{ t: "Suizidalität ansprechen: Formulierungen", c: ["Indirekt: „Was haben Sie für den Sommer geplant?“ (Hinweis: „Da bin ich eh nicht mehr da.“)", "Direkt: „Ich möchte Sie etwas sehr Persönliches fragen. Haben Sie schon einmal daran gedacht, sich das Leben zu nehmen?“", "„Haben Sie schon konkrete Pläne gemacht oder Vorbereitungen getroffen?“"] }],
    },
    {
      id: "panik", titel: "Panikattacke: „Seit gestern stimmt etwas nicht“", typ: "Gespräch", freq: 2,
      af: ["2022: Patientin „seit gestern stimmt etwas nicht“: vorstellen, Situation klären; typische Panikattacke: zuhören, zusammenfassen, nachfragen, aufklären, dass es vermutlich eine Panikattacke ist, nicht gefährlich, Verständnis zeigen", "2025: Panikattacke-Gespräch: reden lassen, Verständnis zeigen, organische Ursachen ausschließen, keine Lebensgefahr, biopsychosoziales Modell"],
      gerust: {
        anamnese: ["Plötzlicher Beginn, Gipfel nach Minuten, Dauer 10–30 min", "Körperlich: Herzrasen, Brustschmerz, Atemnot/Hyperventilation, Zittern, Schwitzen, Schwindel, Übelkeit, Kribbeln", "Kognitiv: Angst zu sterben, Herzinfarkt, Kontrollverlust, ohnmächtig zu werden", "Auslöser, frühere Attacken, Vermeidungsverhalten (Angst vor der Angst)", "Koffein, Drogen, Schilddrüse, Herz; Depression, Substanzgebrauch"],
        diagnostik: ["Organisch ausschließen: EKG, RR, Puls, SpO₂, BZ, TSH, ggf. Troponin", "DD: ACS, Lungenembolie, Rhythmusstörung, Hyperthyreose, Hypoglykämie, Intoxikation/Entzug"],
        therapie: ["Aufklären: körperlich ungefährlich, Teufelskreis der Angst erklären (biopsychosoziales Modell)", "Akut: beruhigen, Atemanleitung (langsam ausatmen); kurzfristig Benzodiazepin möglich", "Langfristig: kognitive Verhaltenstherapie, SSRI"],
      },
    },
    {
      id: "schlaf", titel: "Schlafstörung & Kopfschmerz: Lebensumstände erheben", typ: "Gespräch", freq: 2,
      af: ["2020: Psychosomatische Schmerzen: Gesprächseinstieg, 5 Minuten reden", "2021: Allgemeinarzt, Pat. hat seit 3 Wochen Einschlafprobleme und Kopfschmerzen: **Erheben Sie die Lebensumstände**. Sie müssen nicht fertig werden (Trennung, traurig)"],
      gerust: {
        anamnese: ["Schlaf: Ein- oder Durchschlafstörung, frühes Erwachen, Morgentief, Gedankenkreisen, Mittagsschlaf, Koffein/Alkohol/schweres Essen am Abend, Bildschirm", "Kopfschmerz: seit wann, wie oft, Charakter, Aura, Übelkeit, Licht-/Lärmscheu, Auslöser, was hilft, Schmerzmittelgebrauch, Red Flags", "**Lebensumstände**: Beziehung/Familie, Wohnen, Arbeit/Finanzen, Freunde, Freizeit, Sport, Belastungen, Verluste", "Stimmung (2 Fragen), Suizidgedanken, Substanzen"],
        therapie: ["Schlafhygiene, Stressbewältigung, Entspannungsverfahren", "Psychotherapie/Beratung anbieten, Wiedervorstellung vereinbaren"],
      },
      tipps: ["Prüferin macht sich teils keine Notizen und gibt kein Feedback: davon nicht verunsichern lassen", "Die Schauspielerin erzählt jedem eine andere Geschichte: zuhören statt abfragen"],
    },
  ],
  details: [
    { t: "Biopsychosoziales Modell", def: "Krankheit entsteht aus dem Zusammenspiel biologischer, psychischer und sozialer Faktoren; alle drei werden in Anamnese und Therapie berücksichtigt." },
    { t: "Gesprächstechniken", klinik: "Offene Fragen, aktives Zuhören, Paraphrasieren („Wenn ich Sie richtig verstehe …“), Emotionen benennen („Ich sehe, Sie sind aufgebracht“), Pausen aushalten, zusammenfassen, keine Fachbegriffe." },
    { t: "Zu einem Suizidversuch dazukommen", ther: "Eigene Sicherheit; einfache Sätze, Empathie, Ehrlichkeit („Mir macht die Situation auch Angst“); nach Beziehungsaufbau sanft, aber bestimmt anweisen („Legen Sie jetzt das Messer weg“); akut Benzodiazepine oder Antipsychotika; Akutsituation? Stationär oder ambulant?" },
  ],
  anki: [
    ["2 Screeningfragen Depression", "Oft niedergeschlagen/bedrückt? Weniger Freude an Dingen, die früher Freude machten?"],
    ["Präsuizidales Syndrom (Ringel)", "Einengung · Aggressionsumkehr · Suizidphantasien"],
  ],
});
