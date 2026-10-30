OSCE.fach({
  id: "paed", name: "Pädiatrie", gruppe: "Notfall & Allgemein", ordnung: 62, farbe: "#7c3aed", gewicht: 2,
  quelle: "Evas Ausarbeitung (Status Kind, Neugeborenes, Kinder-Altfragen); Praktische Aufgaben Pädiatrie; Altfragen 2021–2025",
  kern: "Pädiatrie-Stationen haben ein festes Format: **„Nennen Sie 4 anamnestische Fragen – untersuchen Sie (Puppe oder echtes Kind) – nennen Sie 4 DD“**. Wer die Reihenfolge der Kinderuntersuchung und ein paar Leitsymptom-Gerüste kann, ist durch.",
  map: [
    { t: "Setting", c: ["Erster Eindruck: AZ, Atmung, Kreislauf", "Ausziehen bis auf Unterwäsche", "Ruhige Untersuchungen zuerst, HNO zuletzt"] },
    { t: "Anamnese", c: ["Spielt es noch? Trinkt es? Nasse Windeln?", "Impfungen, Umgebung, Reisen", "Fieber: Höhe, Dauer, Begleitsymptome"] },
    { t: "Status", c: ["Haut (Exanthem, Petechien!), Rekap", "Herz, Lunge, Abdomen, LK", "Meningismus, Ohr, Mund"] },
    { t: "Leitsymptome", c: ["Fieber + Husten / Halsschmerz", "Bauchschmerz / Erbrechen", "Petechien · Müdigkeit · Kopfschmerz"] },
    { t: "Normwerte", c: ["Perzentilen 3.–97.", "Atemfrequenz & Puls nach Alter", "Neugeborenes: APGAR, Reflexe"] },
  ],
  merke: [
    "Reihenfolge laut sagen: **erst Inspektion und Auskultation (Kind ruhig), dann Abdomen, HNO zum Schluss**.",
    "Bei jedem fiebernden Kind: **Haut ansehen** (Petechien!) und **Meningismus** prüfen.",
    "4 Fragen / 4 DD wörtlich nehmen: lieber 5 nennen als 3.",
  ],
  fallen: [
    "Haut beim Status vergessen",
    "Meningismus nicht erfragt/geprüft",
    "Mund/Ohr am Anfang untersucht (Kind weint danach)",
  ],
  stationen: [
    {
      id: "status", titel: "Kinderstatus & Untersuchungsreihenfolge", typ: "Untersuchung", freq: 3,
      af: ["2021/22: Zwei Kinder mit Fieber: 4 Fragen zum Fieber (Meningismus!), Reihenfolge der Untersuchung, Herz/Lunge beim **echten** 6-Jährigen abhören, was dokumentieren Sie, welche Pathologien bei Fieber", "2024: Halsschmerz + Fieber: Untersuchung an Puppe, Reihenfolge (zuerst Inspektion, Auskultation …, dann HNO), Ohr- & Mundstatus Normalbefund + Pathologie", "2025: Kind mit Fieber und Husten: echtes Kind untersuchen (v. a. Lunge), Atemgeräusch wird vorgespielt (exspiratorisches Giemen)"],
      ablauf: [
        "**Erster Eindruck** (pädiatrisches Beurteilungsdreieck): Aussehen/Bewusstsein, Atemarbeit, Hautperfusion; Bedarf Vitalparameter",
        "Kindgerecht erklären, Instrumente am Teddy zeigen, ggf. auf dem Schoß der Bezugsperson; bis auf Unterwäsche ausziehen",
        "Haut: Kolorit, Turgor, Rekap ≤ 2 s, Exanthem, **Petechien**",
        "Auskultation Herz und Lunge (solange ruhig), Dyspnoezeichen",
        "Abdomen: Auskultation, Palpation (Leber, Milz), Perkussion",
        "Lymphknoten (zervikal, axillär, inguinal)",
        "Meningismus: spielerisch (Knie küssen, zur Decke schauen), passiv",
        "Ohren (Ohrmuschel nach hinten-unten beim Kleinkind) und **Mund zuletzt** („brüllen wie ein Löwe“)",
      ],
      befund: ["{n|Guter AZ und EZ, wach, interessiert. Haut rosig, kein Exanthem, keine Petechien, Rekap < 2 s.}", "{n|Herz: rein, rhythmisch, normofrequent, keine Geräusche. Lunge: vesikuläres Atemgeräusch bds., keine Rasselgeräusche, kein Giemen, keine Einziehungen.}", "{n|Abdomen weich, kein Druckschmerz, keine Resistenzen, Darmgeräusche regelrecht, Leber und Milz nicht vergrößert. LK nicht vergrößert. Kein Meningismus. Trommelfelle bds. reizlos, Rachen reizlos.}"],
      patho: [["Tachypnoe, Nasenflügeln, Einziehungen, head bobbing", "Atemnot (Pneumonie, Bronchiolitis, Asthma)"], ["Exspiratorisches Giemen", "obstruktive Bronchitis, Asthma, Bronchiolitis"], ["Inspiratorischer Stridor, bellender Husten", "Pseudokrupp (DD Epiglottitis!)"], ["Fontanelle vorgewölbt / eingesunken", "Hirndruck, Meningitis / Exsikkose"], ["Petechien + Fieber", "{p|Meningokokkensepsis} bis zum Beweis des Gegenteils"], ["Himbeerzunge, Exanthem", "Scharlach, Kawasaki"]],
      extra: [{ t: "Normwerte nach Alter {anki}", head: ["Alter", "Gewicht · AF · HF · RR syst."], rows: [["Neugeborenes", "2,8–4,2 kg · 30–60 · 120–160 · 60–90"], ["1 Jahr", "10 kg · 25–30 · 90–150 · 70–85"], ["6 Jahre", "20 kg · 20–25 · 65–135 · 85–95"], ["12 Jahre", "40 kg · 15–20 · 60–110 · 90–120"]] }],
      tipps: ["Bei Fieberkurve dokumentieren: „Herz rein, rhythmisch, normofrequent; Lunge vesikulär, kein Giemen, keine RG“", "Prüferin: bei Status Haut nicht vergessen"],
    },
    {
      id: "fieber", titel: "Kind mit Fieber und Husten / Halsschmerzen", typ: "Fallstation", freq: 3,
      af: ["2024: Kind mit Halsschmerzen und Fieber: 4 DD + Ursachen, körperliche Untersuchung an der Puppe, Reihenfolge", "2025: Kind mit Fieber und Husten: 4 anamnestische Fragen, 4 DD, Kind untersuchen, Atemgeräusch beurteilen (exspiratorisches Giemen), weiteres Vorgehen"],
      gerust: {
        anamnese: ["Fieber: seit wann, wie hoch, wie gemessen, Antipyretika?", "Husten (trocken/produktiv, bellend, nachts), Atemnot, Halsschmerz, Ohrenschmerz", "**Trinkt es? Nasse Windeln? Spielt es noch?** Erbrechen, Durchfall", "Hautauffälligkeiten, Bewusstsein, Nackensteife", "Impfstatus (Hib, Pneumokokken, Pertussis), Kita/Umgebung, Reisen, Vorerkrankungen"],
        dd: [["Virale Infekte obere Atemwege", "Schnupfen, gutes AZ", "symptomatisch"], ["(Obstruktive) Bronchitis / Bronchiolitis", "Giemen, < 2 J. Bronchiolitis (RSV)", "SpO₂, RSV-Test"], ["Pneumonie", "Tachypnoe, Einziehungen, feine RG", "SpO₂, CRP, BB, ggf. Rö"], ["Pseudokrupp", "bellender Husten, inspiratorischer Stridor, nachts", "klinisch; Kortison, kühle Luft"], ["Epiglottitis", "plötzlich, hohes Fieber, Speichelfluss, kloßige Sprache", "**nicht in den Rachen schauen**, Intubationsbereitschaft"], ["Tonsillopharyngitis / Scharlach", "Halsschmerz, Exsudat, Himbeerzunge", "Streptokokken-Schnelltest"], ["Otitis media", "Ohrenschmerz", "Otoskopie"], ["Pertussis, Fremdkörperaspiration, Asthma", "Anfallshusten / plötzlich / rezidivierend", ""]],
        diagnostik: ["Vitalparameter, SpO₂, Temperatur", "Labor bei schwerem Verlauf: BB (Leukozytose, Linksverschiebung), CRP, ggf. Blutkultur", "Schnelltests (Streptokokken, RSV, Influenza, SARS-CoV-2)", "Röntgen-Thorax nur bei Unklarheit/schwerem Verlauf"],
        therapie: ["Fiebersenkung (PARACETAMOL, IBUPROFEN), Flüssigkeit", "Obstruktion: inhalatives SALBUTAMOL; Pseudokrupp: Kortison p.o./rektal, ggf. Adrenalin-Inhalation", "Bakterielle Pneumonie/Streptokokken: Amoxicillin bzw. Penicillin", "Warnzeichen für die Eltern: Trinkverweigerung, Atemnot, Apathie, Petechien"],
      },
    },
    {
      id: "bauch", titel: "Kind mit Bauchschmerz / Erbrechen", typ: "Fallstation", freq: 2,
      af: ["Kind mit Bauchschmerzen: 4 Fragen, Abdomen-Normalbefund, pathologische Befunde, Gedeihen prüfen (**Perzentilenkurve** interpretieren)", "2024: Kind mit Erbrechen: 4 anamnestische Fragen, Abdomenstatus (normal vs. pathologisch), 4 DD"],
      gerust: {
        anamnese: ["Seit wann, wie oft, Aussehen des Erbrochenen (gallig? blutig? schwallartig?)", "Durchfall, Fieber, Bauchschmerz (wo?), Harnauffälligkeiten", "**Ess-/Trinkverhalten, nasse Windeln** (Exsikkose)", "Verhalten: weint, spielt nicht mehr, apathisch", "Kopfschmerz, Trauma, Umgebungsfälle, Nahrungsmittel"],
        dd: [["Gastroenteritis", "Erbrechen + Durchfall, Umgebung", "Klinik, Rehydratation"], ["Appendizitis", "Schmerzwanderung rechter UB, Hüpfschmerz", "Labor, Sono"], ["Invagination", "Säugling/Kleinkind, kolikartig, Himbeergelee-Stuhl", "Sono (Kokarde)"], ["Hypertrophe Pylorusstenose", "Säugling 3.–6. Woche, schwallartig, nicht gallig", "Sono"], ["Harnwegsinfekt / Pyelonephritis", "Fieber, Dysurie", "Harn"], ["Obstipation", "häufigste Ursache chron. Bauchschmerz", "Anamnese, Stuhlwalzen"], ["Meningitis / Hirndruck, diabetische Ketoazidose, Hodentorsion", "Kopfschmerz, Polyurie, Hodenschmerz", "Neurostatus, BZ, Hoden untersuchen"]],
        diagnostik: ["Abdomenstatus, Hüpfen (Erschütterungsschmerz), Hoden/Leiste", "Exsikkosezeichen: Gewichtsverlust, trockene Schleimhäute, Turgor, Rekap, Fontanelle", "Harn, BZ, Elektrolyte, Sono", "Gedeihen: Perzentilen (Länge, Gewicht, Kopfumfang, BMI); Norm 3.–97. Perzentile, Kurvenverlauf beachten"],
        therapie: ["Orale Rehydratation (kleine Mengen, häufig), bei Exsikkose i.v.", "Ursache behandeln"],
      },
    },
    {
      id: "petechien", titel: "Kind mit Petechien", typ: "Fallstation", freq: 2,
      af: ["2024: Petechien: 4 anamnestische Fragen, 2 Untersuchungen nennen und durchführen, Ursachen", "2025: Petechien (Kind als Schauspielerin)"],
      gerust: {
        anamnese: ["**Fieber?** Wie geht es dem Kind (AZ, Bewusstsein)?", "Vorangegangener Infekt (1–3 Wochen vorher → ITP)", "Andere Blutungszeichen: Nasen-/Zahnfleischbluten, blaue Flecken, Blut im Harn/Stuhl", "Müdigkeit, Blässe, Knochenschmerzen, Gewichtsverlust, Nachtschweiß (Leukämie)", "Medikamente, Familienanamnese (Gerinnungsstörungen), Trauma (Kindesmisshandlung?)"],
        dd: [["Meningokokkensepsis", "Fieber, schwer krank, rasch progredient", "**Notfall**: Blutkultur, sofort Antibiose (Ceftriaxon)"], ["Immunthrombozytopenie (ITP)", "nach Infekt, sonst gesund", "BB (isolierte Thrombopenie)"], ["Akute Leukämie", "Blässe, Müdigkeit, LK, Hepatosplenomegalie, Knochenschmerz", "BB + Differenzialblutbild, Knochenmark"], ["Purpura Schönlein-Henoch", "tastbare Purpura an Beinen/Gesäß, Bauch-, Gelenkschmerz", "Harn (Nephritis)"], ["Mechanisch (Husten, Erbrechen)", "nur oberhalb der Mamillenlinie", "Klinik"], ["HUS, Gerinnungsstörung, Misshandlung", "", "Labor, Anamnese"]],
        diagnostik: ["**Glasspateltest** (Diaskopie): Petechien sind nicht wegdrückbar", "Ganzkörperinspektion (Unterschenkel wegen Schwerkraft besonders), Schleimhäute", "Lymphknoten tasten, Leber/Milz palpieren, Meningismus", "Labor: BB mit Differenzialblutbild, CRP, Gerinnung, Blutkultur"],
      },
    },
    {
      id: "muede", titel: "Müdes Kind: Lymphknoten & Abdomen", typ: "Fallstation", freq: 1,
      af: ["2024: Müdigkeit: Anamnese, Palpation 3 LK-Stationen, Palpation Abdomen, DD"],
      gerust: {
        anamnese: ["Seit wann? Leistungsknick, Schlaf, Schule", "Fieber, Nachtschweiß, Gewichtsverlust, Blässe, Blutungszeichen", "Halsschmerz, LK-Schwellung (EBV)", "Ernährung (Eisen), Menstruation bei Mädchen, Polyurie/Polydipsie, psychosoziale Belastung"],
        dd: [["Infektiöse Mononukleose (EBV)", "Tonsillitis, LK, Splenomegalie", "Schnelltest, Serologie, BB"], ["Eisenmangelanämie", "Blässe, Ernährung", "BB, Ferritin"], ["Akute Leukämie / Lymphom", "B-Symptome, LK, Hepatosplenomegalie", "BB + Differenzialblutbild"], ["Hypothyreose", "Gewicht ↑, Obstipation", "TSH"], ["Diabetes mellitus Typ 1", "Polyurie, Polydipsie, Gewichtsverlust", "BZ, Harn"], ["Depression, Schlafmangel", "", "Anamnese"]],
        diagnostik: ["LK-Stationen: zervikal/nuchal, supraklavikulär, axillär, inguinal (Größe, Konsistenz, Verschieblichkeit, Schmerz)", "Leber und Milz palpieren", "Labor: BB mit Diff, CRP, Ferritin, TSH, BZ, Leberwerte, EBV-Serologie"],
      },
    },
    {
      id: "kopf", titel: "Kopfschmerz beim Kind & Meningismus", typ: "Fallstation", freq: 1,
      af: ["13-Jähriger mit Kopf-/Nackenschmerzen: Ursachen und Arten, mind. 4 Anamnesefragen, Red Flags, Meningismuszeichen, worauf beim Säugling achten"],
      gerust: {
        anamnese: ["Einmalig, rezidivierend, ständig; Auslöser (Trauma)", "Fieber, Übelkeit/Erbrechen, Sehstörung, Verhaltensänderung, Bewusstsein", "Umfeld betroffen (Meningokokken)?", "Säugling: Fontanelle, Trinken, nasse Windeln, Reizbarkeit"],
        redflags: [["Neuartiger Kopfschmerz, Dauerkopfschmerz", "sekundärer Kopfschmerz"], ["Fieber + Nackensteife", "Meningitis"], ["Fokale Neurologie, Krampfanfall", "Raumforderung, Blutung"], ["Hirndruckzeichen: Nüchternerbrechen, Bewusstseinsstörung", "Tumor, Hydrozephalus"]],
        diagnostik: ["Meningismus: **Knie küssen** (Kind kann Kopf nicht zum Knie beugen), Brudzinski (passive Kopfbeugung → Knie beugen sich), Kernig/Lasègue", "Neurostatus, Fundoskopie (Stauungspapille)", "Primär: Spannungskopfschmerz, Migräne · Sekundär: Infekt, Sinusitis, Medikamentenübergebrauch, Trauma, Raumforderung"],
      },
    },
    {
      id: "ng", titel: "Status Neugeborenes", typ: "Untersuchung", freq: 1,
      af: ["2021 (Allgemeinmedizin): 7 Monate altes Kind: Mutter-Kind-Pass-Untersuchung"],
      ablauf: ["Anamnese: Schwangerschaft, Geburt (Modus, SSW), APGAR, Ernährung (ca. 130–150 ml/kg/d), Gewichtsverlauf (Geburtsgewicht nach ca. 10 d wieder erreicht), Vitamin-D-Prophylaxe", "Kopf: Fontanelle, Form; Haut: Kolorit, Ikterus, Turgor", "Herz/Lunge; Abdomen (Nabel, Leber/Milz)", "**Leistenpulse** (fehlend → Aortenisthmusstenose)", "Genitale, Anus; Hüfte (Abspreizung, Faltensymmetrie), Sakralgrübchen", "Extremitäten, Klavikula; Gesicht zuletzt: Augen (roter Reflex, Leukokorie), Gaumen (Spalte)", "Neugeborenenreflexe"],
      extra: [{ t: "Neugeborenenreflexe {anki}", head: ["Reflex", "Auslösung · verschwindet"], rows: [["Saug-/Schluckreflex", "Finger am Gaumen"], ["Palmar-/Plantargreifreflex", "Druck auf Handfläche/Fußsohle · ca. 9./12. Monat"], ["Galant", "paravertebral bestreichen → Rumpfkrümmung · 6. Monat"], ["Schreitreaktion", "Fußsohlen berühren Unterlage · 3. Monat"], ["Moro", "Kopf leicht fallen lassen → Arme ab- und adduzieren · 4. Monat"], ["Babinski", "bis Ende 1. Lebensjahr physiologisch"]] }, { t: "APGAR (je 0–2)", c: ["Appearance (Hautfarbe) · Pulse (> 100) · Grimace (Reflexe) · Activity (Tonus) · Respiration; nach 1, 5, 10 min"] }],
    },
  ],
  details: [
    { t: "Pseudokrupp (Laryngitis subglottica)", aet: "Viral (Parainfluenza, RSV, Influenza), 6 Monate bis 5 Jahre.", klinik: "Langsam über 1–3 Tage, nachts bellender Husten, inspiratorischer Stridor, Heiserkeit, leichtes Fieber.", ther: "Beruhigen, kühle feuchte Luft; mit Stridor Kortison (rektal/p.o.), O₂, ggf. Adrenalin-Inhalation.", dd: "Epiglottitis, Diphtherie, spasmodischer Krupp, Fremdkörper." },
    { t: "Epiglottitis", aet: "Haemophilus influenzae Typ b (Ungeimpfte).", klinik: "Plötzlich (4–12 h), schwer krank, hohes Fieber, inspiratorischer Stridor, kloßige Sprache, Speichelfluss, sitzende Haltung.", ther: "Nicht in den Rachen schauen; Intensivstation, Intubationsbereitschaft, O₂, Cephalosporin 3. Generation i.v." },
    { t: "Bronchiolitis", aet: "RSV, Säuglinge.", klinik: "Infekt → Tachypnoe, Einziehungen, Nasenflügeln, feinblasige RG/Giemen, Trinkschwäche.", ther: "O₂ bei SpO₂ < 90 %, NaCl-Inhalation, Flüssigkeit; Prophylaxe Nirsevimab." },
    { t: "Meningitis im Kindesalter", aet: "Neugeborene: B-Streptokokken, E. coli, Listerien. Ältere Kinder: Meningokokken, Pneumokokken. Viral: Entero-, Herpesviren, FSME.", klinik: "Fieber, Kopfschmerz, Meningismus, Erbrechen, Bewusstseinsstörung; Säuglinge oft nur Trinkschwäche, Unruhe, gespannte Fontanelle; Meningokokken: Petechien, Waterhouse-Friderichsen.", ther: "Blutkultur, sofort Dexamethason + Cephalosporin 3. Generation (Neugeborene + Ampicillin); bei Virusenzephalitis Aciclovir." },
    { t: "Kinderkrankheiten mit Exanthem", klinik: "Masern (Koplik-Flecken, großfleckig, konfluierend), Röteln (feinfleckig, nuchale LK), Scharlach (Himbeerzunge, periorale Blässe, Schuppung), Ringelröteln (Girlanden, „geohrfeigt“), Dreitagefieber (Fieber, dann Exanthem), Varizellen (Sternenhimmel: alle Stadien nebeneinander)." },
  ],
  anki: [
    ["Pädiatrisches Beurteilungsdreieck", "Aussehen/Bewusstsein · Atemarbeit · Hautperfusion"],
    ["Perzentilen-Normbereich", "3.–97. Perzentile; Kreuzen von Perzentilen beachten"],
  ],
});
