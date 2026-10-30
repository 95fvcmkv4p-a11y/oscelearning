OSCE.fach({
  id: "am", name: "Allgemeinmedizin", gruppe: "Notfall & Allgemein", ordnung: 61, farbe: "#15803d", gewicht: 3,
  quelle: "Evas Ausarbeitung (Allgemein-Altfragen, Spirometrie, Sono, Extra Wissen); Praktische Aufgaben Allgemeinmedizin (RR, BZ, LK); Altfragen 2020–2025",
  kern: "Allgemeinmedizin ist die **breiteste** Station: Befundbesprechung (Diabetes/Hypertonie), Infekte (Otitis, HWI), Beschwerden mit **abwendbar gefährlichem Verlauf** (Schulter → Herzinfarkt, Rücken → Cauda). Das Gerüst: Anamnese → gezielte Untersuchung → AGV → Diagnostik → Therapie medikamentös und nicht medikamentös.",
  map: [
    { t: "Denkmuster", c: ["Abwendbar gefährlicher Verlauf (AGV)", "Abwartendes Offenhalten", "Wiedervorstellung vereinbaren"] },
    { t: "Befundbesprechung", c: ["Diabetes, Hypertonie, Lipide", "Zielwerte vereinbaren", "Lifestyle + Medikamente"] },
    { t: "Kardio", c: ["Herzinsuffizienz: Ödeme, Dyspnoe", "Vorhofflimmern: EKG, CHA₂DS₂-VASc", "Schlaganfall im Hausarzt-Setting"] },
    { t: "Infekte", c: ["Otitis media (Allergien fragen!)", "HWI mit Harnstreifen", "Fieber, Husten, Tachykardie: Sepsis?"] },
    { t: "Bewegungsapparat", c: ["Rücken + Sensibilitätsstörung", "Linke Schulter beim Diabetiker", "Rheumatoide Arthritis"] },
    { t: "Skills", c: ["RR, BZ, LK-Status", "Sono Niere/Blase", "Spirometrie (→ Pneumologie)"] },
  ],
  merke: [
    "In jede Station einbauen: **„Woran denke ich, das ich nicht übersehen darf?“** (AGV) und **Wiedervorstellung**.",
    "Vor jeder Verordnung **nach Allergien fragen**. Bei der Otitis-Station war das ein wichtiger Punkt.",
    "Therapie immer zweiteilig: nicht medikamentös (Lifestyle) + medikamentös (Wirkstoffgruppen reichen).",
  ],
  fallen: [
    "Allergien vergessen",
    "Bei Schulterschmerz links an Diabetiker kein EKG/Herzinfarkt genannt",
    "Bei der Otitis sofort Antibiose statt Kontrolle nach 2 Tagen",
    "Zeit: In Allgemeinmedizin wird man „nie fertig“. Aufgaben in Reihenfolge abarbeiten",
  ],
  stationen: [
    {
      id: "diabetes", titel: "Befundbesprechung: Diabetes, Hypertonie, Adipositas", typ: "Gespräch", freq: 3,
      af: ["2020: Diabetespatient: Zielwerte für 3 Monate vereinbaren, Labor (HbA1c, Kreatinin, GFR), Fußuntersuchung mit Monofilament und Stimmgabel, Therapie Metformin + Lifestyle", "2021: NBZ 145 mg/dl, HbA1c 8,5 %, BMI 31, RR 170/110: Diagnosen mitteilen, zusätzliche Untersuchungen, nicht-medikamentöse und medikamentöse Maßnahmen", "2024: HbA1c 8 %, NBZ 145, BMI 31, LDL 170, RR einmalig 160/104: gesicherte Diagnosen mitteilen, wahrscheinliche weitere Diagnose (Hypertonie), weitere Labor-/Untersuchungen (postprandialer BZ, Niere, Blutdrucktagebuch, 24-h-RR), Therapie DM + aHT", "2025: Diabetes: Zielwerte vereinbaren + Untersuchung + Labor + Therapie"],
      ablauf: ["Vorstellen, Einverständnis, Befunde in verständlicher Sprache mitteilen", "**Gesichert**: Diabetes mellitus Typ 2 (HbA1c ≥ 6,5 % bzw. NBZ ≥ 126 mg/dl wiederholt), Adipositas Grad I (BMI 30–34,9), Hypercholesterinämie", "**Wahrscheinlich**: arterielle Hypertonie (Einzelmessung reicht nicht → Bestätigung)", "Gemeinsam realistische Zielwerte vereinbaren", "Untersuchung: RR beidseits, Puls, Gewicht/Bauchumfang, Fußstatus (Inspektion, Pulse, Monofilament, Stimmgabel)", "Nicht medikamentös, dann medikamentös besprechen; Wiedervorstellung in 3 Monaten"],
      gerust: {
        diagnostik: ["Labor: HbA1c, Nüchtern- und postprandialer BZ, **Kreatinin/eGFR**, Harn: **Albumin/Kreatinin-Quotient**, Lipidstatus, Leberwerte, Elektrolyte, TSH", "Blutdruck: Selbstmessung/Blutdrucktagebuch, 24-h-RR", "EKG; Augenarzt (Fundus); Fußstatus; ggf. Echo", "Endorganschäden suchen: Retinopathie, Nephropathie, Neuropathie, KHK/pAVK"],
        therapie: ["**Nicht medikamentös**: Gewichtsreduktion, Ernährung (mediterran, wenig Zucker/Salz), Bewegung ≥ 150 min/Woche, Rauchstopp, Alkohol reduzieren, Schulung", "**Diabetes**: METFORMIN (Mittel der 1. Wahl), bei kardiovaskulärem/renalem Risiko SGLT2-Hemmer oder GLP-1-Agonist", "**Hypertonie**: ACE-Hemmer oder Sartan (+ Kalziumantagonist, + Thiazid); Ziel < 130/80", "**Lipide**: Statin (LDL-Ziel nach Risiko, z. B. < 70 bzw. < 55 mg/dl)", "Zielwerte z. B. HbA1c individuell 6,5–7,5 %"],
      },
      tipps: ["„Patient antwortet sehr präzise und kurz angebunden“: Fragen gezielt stellen", "Gesichert vs. wahrscheinlich sauber trennen"],
    },
    {
      id: "otitis", titel: "Ohrenschmerz und Fieber: Otitis media", typ: "Fallstation", freq: 3,
      af: ["2020: Otitis media: Anamnese, Untersuchung, Trommelfell-Bild beurteilen, Therapie, wann wiederbestellen, abwendbar gefährliche Verläufe", "2025: Patient (35) mit Ohrenschmerz rechts und Fieber > 38 °C seit 2 d: Anamnese (**Allergien!**), Otoskopie + Bild, Vorgehen, wann sind AB indiziert (Prüfer wollte primär Kontrolle nach 2 Tagen)", "2025: Otitis media (+ externa): Anamnese, Untersuchung, Befund, Therapie: nicht gleich AB; Otitis externa AB-Ohrentropfen; abschwellende Nasentropfen + Analgetika, Kontrolle nach 2 Tagen; vor Verordnung nach Allergien fragen"],
      gerust: {
        anamnese: ["Schmerz (seit wann, ein-/beidseitig), Fieber, Hörminderung, Ausfluss, Schwindel, Tinnitus", "Vorangegangener Infekt der oberen Atemwege", "Kopfschmerz, Nackensteife, Schwellung hinter dem Ohr (Komplikationen!)", "Vorerkrankungen, Medikamente, **Allergien**"],
        diagnostik: ["Äußeres Ohr: Tragusdruck, Lobuluszug (→ externa), Mastoidklopfschmerz (→ Mastoiditis)", "Otoskopie: gerötetes, vorgewölbtes Trommelfell, fehlender Lichtreflex, ggf. Perforation mit Otorrhö", "Weber/Rinne, **N. facialis** prüfen", "Hals-LK, Rachen, Nase"],
        therapie: ["Abschwellende Nasentropfen, Analgetika/Antipyretika (Ibuprofen, Paracetamol)", "**Kontrolle nach 48 h** (abwartendes Offenhalten)", "Antibiose (Amoxicillin) bei: keiner Besserung nach 48–72 h, schwerem Verlauf/hohem Fieber, Otorrhö, Kindern < 2 J. bds., Risikopatienten, Komplikationszeichen", "Otitis externa: antibiotische (+ Kortison-)Ohrentropfen, Gehörgang reinigen"],
      },
      extra: [{ t: "Abwendbar gefährliche Verläufe", c: ["Mastoiditis, Labyrinthitis, Fazialisparese", "Meningitis, Hirnabszess, Sinusvenenthrombose", "Chronifizierung, Cholesteatom"] }],
      tipps: ["Allergien fragen: war in einer Gruppe eine der wenigen, die es tat, und bekam viel Lob"],
    },
    {
      id: "hi", titel: "Beinödeme und Dyspnoe: Herzinsuffizienz", typ: "Fallstation", freq: 3,
      af: ["2021: Herzinsuffizienz und Dyspnoe: Untersuchung (zeigen, wo Stethoskop, A. radialis tasten), Labor (BNP!), Beratung (Gewicht messen, RR, Bewegung), Medikamente nur Gruppen, Bildgebung (Echo)", "2022: Patient (62) mit bds. Ödemen und Belastungsdyspnoe: Anamnese, Untersuchung, weitere Diagnostik (EKG, Hämoccult, Nierenwerte), VD chronische HI, DD (Anämie), Therapie", "2023: Frau mit Beinödemen: Anamnese, Untersuchungen, HI?, DD, Therapien („man wird nie fertig“)"],
      gerust: {
        anamnese: ["Belastungs-/Ruhedyspnoe, **Orthopnoe** (Kissenanzahl), paroxysmale nächtliche Dyspnoe, Nykturie", "Ödeme seit wann, beidseits, Gewichtszunahme", "Thoraxschmerz, Palpitationen, Leistungsknick, Husten", "Vorerkrankungen: KHK/Infarkt, Hypertonie, Klappen, VHF, Niere, Leber, Schilddrüse; Medikamente (Kalziumantagonisten, NSAR)"],
        dd: [["Herzinsuffizienz", "Orthopnoe, bds. Ödeme, Halsvenen, basale RG", "NT-proBNP, Echo"], ["Niere (nephrotisches Syndrom)", "Proteinurie, Lidödeme", "Harn, Albumin, Kreatinin"], ["Leberzirrhose", "Aszites, Leberhautzeichen", "Albumin, Leberwerte"], ["Venös/CVI, TVT (einseitig)", "", "Sono"], ["Medikamentös (Amlodipin)", "", "Anamnese"], ["Hypothyreose, Anämie, Lymphödem", "", "TSH, BB"]],
        diagnostik: ["Inspektion: Ödeme (eindrückbar, symmetrisch), Halsvenenstauung, Zyanose, Atemhilfsmuskulatur", "Puls (Frequenz, Rhythmus), RR, SpO₂, Gewicht", "Auskultation Herz (3. Herzton, Geräusche) und Lunge (feuchte RG, Erguss), Perkussion, Leber (Hepatomegalie, hepatojugulärer Reflux)", "Labor: **NT-proBNP**, BB (Anämie), Elektrolyte, Kreatinin, Leber, TSH, Albumin, ggf. Troponin; Harn", "EKG, **Echokardiographie**, Röntgen-Thorax"],
        therapie: ["Nicht medikamentös: tägliches Wiegen (> 1 kg/Tag bzw. > 2 kg/3 Tage → melden), Salz- und Trinkmengenbegrenzung, Bewegung, RR messen, Impfungen", "Medikamentös (HFrEF, „Fantastic Four“): ACE-Hemmer/ARNI, Betablocker, Mineralokortikoid-Antagonist, SGLT2-Hemmer; Diuretika symptomatisch", "Grunderkrankung behandeln (KHK, Hypertonie, VHF)"],
      },
      extra: [{ t: "NYHA {anki}", c: ["I keine Beschwerden · II bei stärkerer Belastung · III bei leichter Belastung · IV in Ruhe"] }],
    },
    {
      id: "schulter", titel: "Linke Schulter beim Diabetiker: AGV Herzinfarkt", typ: "Fallstation", freq: 2,
      af: ["2022: Schmerzen in der linken Schulter nach Pool putzen, bekannter Diabetiker: erste Diagnostik (Inspektion, Palpation, Hemd aus, Schürzen-/Nackengriff), Motorik, AGV (Herzinfarkt, Sehnenabriss); welches Organ bei rechter Schulter (Leber/Galle); Akuttherapie", "2025: Diabetiker verletzt beim Pool putzen (rechte Schulter → Leber)"],
      gerust: {
        dd: [["**Myokardinfarkt** (stumm beim Diabetiker!)", "Belastung, vegetativ, Dyspnoe", "**EKG, Troponin**"], ["Rotatorenmanschettenruptur / Sehnenabriss", "nach Belastung, Kraftverlust", "Klinik, Sono"], ["Impingement, Tendinosis calcarea", "Painful Arc", "Röntgen"], ["Frozen Shoulder", "Diabetiker, globale Einschränkung", "Klinik"], ["Rechte Schulter: Leber/Galle (Head-Zone)", "", "Sono, Labor"], ["Linke Schulter: Milz (Kehr-Zeichen), Lungenspitze/Pancoast", "", ""]],
        therapie: ["AGV ausschließen, dann: Schonung, Analgesie (NSAR), Kühlung, ggf. Infiltration, Physiotherapie"],
      },
    },
    {
      id: "ruecken", titel: "Rückenschmerz mit Sensibilitätsstörung: Red Flags & Procedere", typ: "Fallstation", freq: 3,
      af: ["2022: Pat. (42), sportlich, akut Rückenschmerz mit Sensibilitätsverlust im Unterschenkel: Anamnese, Untersuchung (Reflexhammer), welches Segment, Red Flags, weiteres Vorgehen, was soll der Patient nicht tun", "2024: Rückenschmerzen, Red Flags, Procedere", "2025: Rückenschmerz + Sensibilitätsstörung im Bein: Motorik, Reflexe, Sensibilität; Röntgen + MRT; NSAR; Red Flags (Inkontinenz, hohes Fieber, Meningismus); was nicht tun → Alltag zu sehr einschränken, Autofahren; Yellow Flags"],
      gerust: {
        diagnostik: ["Vollständiges Gerüst siehe **Orthopädie → Rückenschmerz mit Ausstrahlung** (Red Flags, Wurzeltabelle L4/L5/S1, DD)", "Segment bestimmen über Dermatom + Kennmuskel + Reflex", "Yellow Flags (Chronifizierung): Depressivität, Distress, Angst-Vermeidung, berufliche Unzufriedenheit, passives Schmerzverhalten, Somatisierung"],
        therapie: ["Bewegung beibehalten, NSAR kurzzeitig, Wärme, Physiotherapie", "**Nicht tun**: Bettruhe, Alltag zu stark einschränken, schwer heben; unter starken Schmerzen/Muskelrelaxanzien kein Autofahren", "Wiedervorstellung, bei Red Flags sofort Bildgebung/Überweisung"],
      },
    },
    {
      id: "vhf", titel: "Vorhofflimmern & EKG", typ: "Fallstation", freq: 2,
      af: ["2021: VHF: EKG, Therapie, Komplikationen, Untersuchungen", "2024: Patient mit VHF: EKG bewerten"],
      gerust: {
        anamnese: ["Palpitationen, Schwindel, Synkope, Dyspnoe, Leistungsknick, Thoraxenge", "Seit wann (< 48 h?), Häufigkeit; Embolien (Insult/TIA)", "Ursachen: Hypertonie, KHK, Herzinsuffizienz, Klappen, Hyperthyreose, Alkohol, Schlafapnoe"],
        diagnostik: ["Puls: absolut arrhythmisch, **Pulsdefizit** (Herzfrequenz > peripherer Puls)", "EKG: unregelmäßige RR-Abstände, **keine P-Wellen**, Flimmerwellen", "Labor: TSH, Elektrolyte, Niere; Echo (Thromben, Klappen, Funktion)", "CHA₂DS₂-VASc (Schlaganfallrisiko), Blutungsrisiko"],
        therapie: ["**Antikoagulation** nach CHA₂DS₂-VASc (DOAK bevorzugt)", "Frequenzkontrolle: Betablocker, Verapamil/Diltiazem, (Digitalis)", "Rhythmuskontrolle: Kardioversion (< 48 h oder nach TEE/Antikoagulation), Amiodaron, Pulmonalvenenisolation", "Komplikationen: Schlaganfall/Embolien, Herzinsuffizienz (Tachymyopathie)"],
      },
      extra: [{ t: "CHA₂DS₂-VASc {anki}", c: ["C Herzinsuffizienz 1 · H Hypertonie 1 · A₂ Alter ≥ 75: 2 · D Diabetes 1 · S₂ Schlaganfall/TIA 2 · V Gefäßerkrankung 1 · A Alter 65–74: 1 · Sc weiblich 1", "Antikoagulation ab 2 (Männer) bzw. 3 (Frauen), erwägen ab 1/2"] }],
    },
    {
      id: "reflux", titel: "Sodbrennen bei Raucher:in: Reflux", typ: "Fallstation", freq: 2,
      af: ["2021: Reflux bei starkem Raucher und Alkoholiker: Anamnese, Untersuchung, gefährliche Ursachen, weitere Diagnostik, Therapie", "2025: Raucherin mit Sodbrennen und Husten: Anamnese, Untersuchung + weitere Abklärung (Holzstäbchen vorhanden), AGV, VD + DD, Therapie"],
      gerust: {
        anamnese: ["Sodbrennen, saures Aufstoßen, Regurgitation, nächtlicher Husten, Heiserkeit", "Auslöser: Liegen, fettes Essen, Alkohol, Kaffee, Rauchen, Medikamente", "**Alarmsymptome**: Dysphagie, Odynophagie, Gewichtsverlust, Hämatemesis/Teerstuhl, Anämie, Erbrechen, Alter > 50 bei Erstauftreten"],
        dd: [["GERD", "typische Symptome", "PPI probatorisch"], ["Ösophagus-/Magenkarzinom", "Alarmsymptome, Raucher, Alkohol", "**Gastroskopie** mit Biopsie"], ["Ulkus, Gastritis (H. pylori, NSAR)", "epigastrischer Schmerz", "Gastroskopie, H.-p.-Test"], ["**ACS / Angina pectoris**", "belastungsabhängig, Risikofaktoren", "EKG, Troponin"], ["Barrett-Ösophagus", "lange Refluxanamnese", "Gastroskopie"]],
        therapie: ["Allgemein: Gewicht reduzieren, kleine fettarme Mahlzeiten, nicht spät essen, Oberkörper hoch schlafen, Nikotin- und Alkoholkarenz", "PPI 4–8 Wochen (probatorisch ohne Alarmsymptome), dann bedarfsadaptiert", "Bei Alarmsymptomen sofort Gastroskopie"],
      },
    },
    {
      id: "ra", titel: "Gelenkschmerzen: rheumatoide Arthritis", typ: "Fallstation", freq: 1,
      af: ["2022: RA: Anamnese und Untersuchung, apparative Diagnostik, Laborwerte, Verdacht erhärtet sich: was tun, medikamentöse und nicht medikamentöse Therapie"],
      gerust: {
        anamnese: ["**Morgensteifigkeit > 30 min**, symmetrisch, MCP/PIP und Handgelenke, Dauer > 6 Wochen", "Schwellung, Nachtschmerz, Müdigkeit, subfebril", "Psoriasis, Gicht, Infekte, Familienanamnese"],
        diagnostik: ["Inspektion/Palpation: Schwellung, Überwärmung, Gaenslen-Zeichen (Querdruck MCP schmerzhaft), Faustschluss; später Ulnardeviation, Schwanenhals, Knopfloch", "Labor: CRP, BSG, BB, **Rheumafaktor, Anti-CCP**, ANA, Harnsäure, Niere/Leber (vor MTX)", "Gelenksono (Erguss, Synovitis, Erosionen), Röntgen Hände/Füße, ggf. MRT", "Rasch zum Rheumatologen („Window of opportunity“)"],
        therapie: ["Medikamentös: NSAR (+ PPI), kurzzeitig Glukokortikoide, **Basistherapie METHOTREXAT** (alternativ Leflunomid, Sulfasalazin), Biologika/JAK-Inhibitoren", "Nicht medikamentös: Physio-, Ergotherapie, Hilfsmittel (Griffverdickungen, Schienen), Gelenkschutz, Kälte im Schub, Bewegung, Rauchstopp"],
        dd: [["Arthrose (Heberden/Bouchard)", "DIP/PIP, Anlaufschmerz", "Röntgen"], ["Psoriasis-Arthritis", "DIP, Daktylitis, Haut/Nägel", "Klinik"], ["Gicht", "akut, Großzehe", "Harnsäure, Punktion"], ["Kollagenosen, Vaskulitiden, reaktive Arthritis", "", "Antikörper"]],
      },
    },
    {
      id: "skills", titel: "Basisfertigkeiten: Blutdruck, Blutzucker, Lymphknoten", typ: "Untersuchung", freq: 2,
      af: ["Kommt als Teilaufgabe in vielen Stationen (RR messen beim Schlaganfall, BZ bei Bewusstlosigkeit, LK bei Gyn/Päd/Onko)", "2024: Schlaganfall im Hausarzt-Setting: Anamnese, FAST, DD, Erstmaßnahmen (**RR messen!**), RR vor Ort senken (150 syst.)? → nein"],
      ablauf: [
        "**RR**: Manschette am Oberarm 2 Querfinger über der Ellenbeuge, Arm leicht gebeugt auf Herzhöhe; Radialispuls tasten, aufpumpen bis Puls weg + 20 mmHg; langsam ablassen; 1. Korotkow-Ton = systolisch, Verschwinden = diastolisch",
        "**BZ**: nüchtern? Hand massieren; desinfizieren; seitlich an der Fingerbeere stechen; ersten Tropfen abwischen; messen; Tupfer aufdrücken lassen",
        "**LK-Status**: okzipital, retro-/präaurikulär, submandibulär, submental, zervikal (auch dorsal des SCM), supraklavikulär, axillär, (kubital), inguinal",
      ],
      patho: [["RR zu hoch gemessen", "zu schmale Manschette, gestreckter Arm, Manschette unter Herzniveau, nach Belastung, Weißkitteleffekt"], ["RR zu niedrig gemessen", "zu breite Manschette, zu wenig aufgepumpt"], ["BZ nüchtern < 100 / postprandial < 140 mg/dl", "Normwerte"], ["LK supraklavikulär, > 1,5 cm, derb, verbacken, schmerzlos, wachsend", "{p|Malignomverdacht} (Virchow-Drüse links)"]],
      extra: [{ t: "Schlaganfall beim Hausarzt", c: ["BE-FAST: Balance, Eyes, Face, Arm, Speech, Time", "Notruf, Zeitpunkt „zuletzt gesund gesehen“, BZ messen, RR messen, nichts essen/trinken (Schluckstörung), Oberkörper 30°", "RR präklinisch **nicht** senken, außer extrem (> 220 mmHg)", "DD: Hypoglykämie, Krampfanfall/Todd-Parese, Migräne mit Aura, Intoxikation, Tumor"] }],
    },
    {
      id: "sono", titel: "Sonographie: Niere bei Kolik & Harnblase", typ: "Untersuchung", freq: 2,
      af: ["2024: Patient mit kolikartigen Nierenschmerzen rechts: Nierensono, Niere am Bild beschreiben, erwarteter Befund bei Stein im rechten Harnleiter", "2024: Sono: Niere mit Urolithiasis", "2025: Allgemeinmedizin: Sono Niere"],
      ablauf: ["Patient flach, Kopfteil runter; rechts vom Patienten sitzen", "Hände desinfizieren (Ellbogen am Spender), Identität und nüchtern? erfragen", "Kleidung mit Papier schützen, Gel auf den Patienten (vorwarnen: kalt), Raum abdunkeln", "Niere im **Längsschnitt** in der Flanke, tief einatmen lassen, ggf. 20–30° zur Gegenseite drehen", "Blase: quer und längs, Volumen ≈ Länge × Breite × Tiefe × 0,5"],
      befund: ["{n|Niere orthotop, normal groß (ca. 10–12 cm), glatt begrenzt, Parenchymsaum normal breit, Nierenbeckenkelchsystem nicht erweitert, kein Konkrement, atemverschieblich.}"],
      patho: [["Echoarmes (schwarzes), erweitertes Nierenbecken", "{p|Harnstau} (z. B. Harnleiterstein)"], ["Echoreicher (heller) Reflex mit dorsalem Schallschatten", "Konkrement"], ["Echofreie Fläche über dem Zwerchfell", "Pleuraerguss"]],
    },
    {
      id: "onko", titel: "Auffälliges Blutbild: Leukozytose + Thrombopenie", typ: "Theorie + Untersuchung", freq: 2,
      af: ["2024: Onkologie: Blutbild mit Leukozytose und Thrombopenie: DD, Leukämieformen, Untersuchungen, Diff-BB mit Vorläuferzellen", "2025: Patientin mit Laborwerten: Untersuchung (Inspektion auf Anämie, LK, blaue Flecken/Petechien v. a. Unterschenkel, Milz), DD der Leukozytose, weitere Untersuchungen (Diff-BB, KM-Stanze); wie verändert sich das BB beim Infekt? Prüfer unterbricht viel"],
      gerust: {
        anamnese: ["Infektzeichen, Fieber, Nachtschweiß, Gewichtsverlust (B-Symptome)", "Blutungszeichen, Müdigkeit, Blässe, Knochenschmerzen, Infektanfälligkeit", "Medikamente (Kortison → Leukozytose), Vorerkrankungen"],
        dd: [["Infekt (bakteriell)", "Neutrophilie mit Linksverschiebung", "CRP, Fokus"], ["Akute Leukämie (AML/ALL)", "Blasten, Anämie, Thrombopenie (Verdrängung)", "Diff-BB, **Knochenmarkpunktion**"], ["CML", "massive Leukozytose, Splenomegalie, alle Reifungsstufen", "BCR-ABL"], ["CLL", "älter, Lymphozytose, LK, Gumprecht-Kernschatten", "Durchflusszytometrie"], ["Reaktiv: Stress, Kortison, Rauchen, Nekrose", "", "Anamnese"]],
        diagnostik: ["Inspektion: Blässe (Anämie), Petechien/Hämatome (besonders Unterschenkel), Gingivahyperplasie", "Lymphknoten aller Stationen, Leber und Milz palpieren", "**Differenzialblutbild** (Aufschlüsselung der Leukozyten-Subpopulationen, Blasten?), Ausstrich, LDH, Harnsäure, Gerinnung", "Knochenmarkpunktion (Zytologie, Immunphänotypisierung, Zytogenetik)"],
      },
      tipps: ["Prüfer redet sofort dazwischen: nicht verwirren lassen, er bewertet trotzdem nett"],
    },
    {
      id: "hwi", titel: "Unterbauchschmerz und Miktionsbeschwerden: HWI", typ: "Fallstation", freq: 1,
      af: ["2025: Frau mit Unterbauchschmerzen und Miktionsstörungen: HWI diagnostizieren, Labor und Harnstreifentest, Therapie", "2024: Patient mit Fieber, Husten, Tachykardie, Dyspnoe, Übelkeit, Bauchschmerz: untersuchen, Labor, AGV (Sepsis!), Therapie"],
      gerust: {
        anamnese: ["Dysurie, Pollakisurie, Drang, Hämaturie, Flankenschmerz, Fieber", "Schwangerschaft?, Ausfluss, frühere HWI, Sexualanamnese, Allergien"],
        diagnostik: ["Harnstreifen (Leukozyten, Nitrit, Blut), ggf. Kultur", "Nierenlager klopfen; bei Fieber: Labor (BB, CRP, Kreatinin), Sono", "AGV: Pyelonephritis, Urosepsis (qSOFA: AF ≥ 22, RR syst. ≤ 100, Bewusstseinsänderung)"],
        therapie: ["Unkomplizierte Zystitis: Fosfomycin einmalig, Nitrofurantoin oder Pivmecillinam; viel trinken", "Pyelonephritis: Fluorchinolon oder Cephalosporin; bei Sepsis stationär"],
      },
    },
  ],
  details: [
    { t: "Abwendbar gefährlicher Verlauf (AGV)", def: "Allgemeinmedizinisches Prinzip: bei jedem Beratungsanlass aktiv an die seltene, aber gefährliche Ursache denken und sie ausschließen (z. B. Schulter → Infarkt, Kopfschmerz → SAB, Rücken → Cauda, Halsschmerz → Peritonsillarabszess)." },
    { t: "Mutter-Kind-Pass (7 Monate)", klinik: "Größe, Gewicht, Kopfumfang (Perzentilen); Entwicklung: sitzt frei, Krabbelansätze, Daumen-Finger-Greifen, lallt; HNO: Hörreaktion, Ohr, Nase, Mund; Hüfte, Augen, Impfungen." },
    { t: "Hypertonie-Grade", klinik: "Optimal < 120/80 · normal < 130/85 · hochnormal 130–139/85–89 · Grad 1 ≥ 140/90 · Grad 2 ≥ 160/100 · Grad 3 ≥ 180/110. Diagnose nicht aus Einzelmessung." },
  ],
  anki: [
    ["Diabetes-Diagnosekriterien", "HbA1c ≥ 6,5 % · Nüchtern-BZ ≥ 126 mg/dl · oGTT 2 h ≥ 200 · Gelegenheits-BZ ≥ 200 + Symptome"],
    ["Herzinsuffizienz „Fantastic Four“", "ACE-Hemmer/ARNI · Betablocker · MRA · SGLT2-Hemmer"],
    ["LK-Malignitätszeichen", "supraklavikulär, > 1,5 cm, derb, verbacken, schmerzlos, wachsend, rund"],
  ],
});
