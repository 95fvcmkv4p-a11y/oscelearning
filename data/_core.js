/* Registry + fächerübergreifende Inhalte */
window.OSCE = {
  faecher: [],
  fach(f) { this.faecher.push(f); },
  ablauf: [
    { t: "Hände & Vorstellung", d: "Händedesinfektion. Name **und Funktion** nennen („Turnusärztin in der HNO-Ambulanz“), Patient:in nach Namen fragen.", gratis: true },
    { t: "Anliegen & Einverständnis", d: "„Was führt Sie zu mir?“ Ablauf ankündigen, Einverständnis holen.", gratis: true },
    { t: "Aktuelle Anamnese", d: "OPQRST: Beginn, Provokation/Linderung, Qualität, Region/Ausstrahlung, Stärke 0–10, Zeitverlauf. Begleitsymptome, B-Symptomatik." },
    { t: "Vorgeschichte", d: "Vorerkrankungen, OPs, Medikamente, **Allergien**, Familie, Soziales/Beruf, Noxen, Reisen." },
    { t: "Untersuchung", d: "Ankündigen, Patient:in entkleiden lassen, Seitenvergleich, laut kommentieren: Inspektion → (Auskultation) → Perkussion → Palpation → Funktion." },
    { t: "Zusammenfassen", d: "Kurz zusammenfassen, Verdachtsdiagnose + 2–4 DD nennen.", gratis: true },
    { t: "Procedere", d: "Nächste Diagnostik, Therapieprinzip, Wiedervorstellung, Rückfragen zulassen, verabschieden.", gratis: true },
  ],
  querschnitt: [
    { t: "Die Aufgabenstellung ist dein Gerüst", c: [
      "Die Fragen auf dem Zettel abarbeiten, in der Reihenfolge, wie sie dastehen. Sie sind die Checkliste der Prüfer:innen.",
      "„Untersuchen“ heißt zeigen **und** kommentieren. Bei Zeitdruck: Tests benennen und kurz andeuten.",
      "Fehlt etwas, fragen viele Prüfer:innen nach. Ruhig bleiben, den Punkt bekommt man trotzdem.",
    ] },
    { t: "Universelle Diagnostik-Leiter", c: [
      "Vitalparameter (RR, Puls, SpO₂, AF, Temperatur, BZ)",
      "Labor: BB, CRP, Elektrolyte, Niere, Leber, ggf. spezifisch (BNP, D-Dimer, Lipase, PSA …)",
      "Harn: Streifentest, ggf. Kultur · Sono als erste Bildgebung",
      "Dann gezielt: Röntgen, CT/MRT, Endoskopie, Biopsie/Histologie",
    ] },
    { t: "Häufigste Punktfallen (aus allen Altfragen)", warn: true, c: [
      "Nicht mit Name und Funktion vorgestellt",
      "Nicht nach Allergien gefragt, bevor man etwas verordnet",
      "Patient:in nicht ausziehen lassen (Derma, TVT, Lunge, Brust)",
      "Kein Seitenvergleich (Lunge, Brust, Bein, Pupillen)",
      "Bei Notfällen Eigenschutz, Hilferuf und Defi vergessen",
    ] },
  ],
};
