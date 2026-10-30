OSCE.fach({
  id: "palli", name: "Palliativmedizin", gruppe: "Gespräch", ordnung: 71, farbe: "#64748b", gewicht: 1,
  quelle: "Evas Ausarbeitung (Palliativ, Extra Wissen); Praktische Aufgaben SPIKES; Altfragen-Stichworte (Pankreas-Ca Angehörige, Kolon-Ca Patient)",
  kern: "Palliativ ist ein **Gespräch nach SPIKES**: schlechte Nachricht überbringen, Pausen aushalten, Emotionen auffangen, gemeinsam planen. Wer SPIKES und NURSE als Gerüst hat, kann jedes Szenario führen.",
  map: [
    { t: "SPIKES", c: ["Setting · Perception · Invitation", "Knowledge · Emotions · Strategy/Summary"] },
    { t: "NURSE (Emotionen)", c: ["Naming · Understanding", "Respecting · Supporting · Exploring"] },
    { t: "Haltung", c: ["Gleiche Augenhöhe, über Eck", "Kurze Sätze, keine Fachbegriffe", "Pausen aushalten, nicht vorschnell trösten"] },
    { t: "Lebensende", c: ["Atemnot: Morphin statt O₂", "Keine parenterale Ernährung", "Rasselatmung erklären"] },
  ],
  merke: ["Immer vorstellen, Anliegen klären, zuerst den Wissensstand erfragen.", "Angehörigen alle Optionen erklären, dann eine **klare ärztliche Empfehlung** geben: Die Verantwortung trägt die Ärztin/der Arzt."],
  fallen: ["Mit Befunden überfallen, ohne vorher nach dem Wissensstand zu fragen", "Schweigen nicht ausgehalten", "Fachchinesisch, Extremaussagen („Wir können nichts mehr tun“)"],
  stationen: [
    {
      id: "spikes", titel: "Schlechte Nachricht überbringen (SPIKES)", typ: "Gespräch", freq: 2,
      af: ["Pankreaskarzinom: Gespräch mit Angehörigen", "Kolonkarzinom: Gespräch mit Patient:in", "Bauchschmerzen links (Palliativ-Setting)"],
      ablauf: [
        "**S · Setting**: eigener ruhiger Raum, Zeit einplanen und nennen, Telefon lautlos, über Eck sitzen, Bezugspersonen einladen",
        "**P · Perception**: „Was wissen Sie bereits? Warum glauben Sie, wurde die Untersuchung gemacht?“",
        "**I · Invitation**: „Darf ich mit Ihnen über die Befunde sprechen? Wie offen soll ich sein?“",
        "**K · Knowledge**: Vorwarnung („Leider habe ich keine guten Nachrichten“), kurze klare Sätze, wichtige Infos wiederholen, Rückfragen zulassen",
        "**E · Emotions**: Pause, Emotion benennen („Ich sehe, dass Sie das sehr trifft“), nicht vorschnell trösten (NURSE)",
        "**S · Strategy/Summary**: zusammenfassen, nächste Schritte, Wünsche erfragen („Wovor haben Sie am meisten Angst? Wie können wir Sie unterstützen?“), Folgetermin",
      ],
      extra: [{ t: "Hilfreiche Sätze", c: ["„Mir fällt es auch nicht leicht, Ihnen das mitzuteilen.“", "„Was brauchen Sie jetzt an Information?“", "„Um wen machen Sie sich die größten Sorgen?“", "„Wenn ich Sie richtig verstehe, …“"] }],
    },
  ],
  details: [
    { t: "Sterbephasen nach Kübler-Ross {anki}", klinik: "Nicht-wahrhaben-Wollen → Zorn → Verhandeln → Depression → Akzeptanz (nicht linear)." },
    { t: "Lebensende: Symptomkontrolle", ther: "Atemnot: Morphin (O₂ hebt die Sättigung ohne dichte Maske kaum). Keine parenterale Ernährung: verbessert weder Lebensqualität noch Überlebenszeit („Man stirbt nicht, weil man nicht isst; man isst nicht, weil man stirbt“). Rasselatmung: Zeichen der Schwäche, Patient erstickt nicht; Angehörige aufklären, ggf. Anticholinergika, Lagerung." },
    { t: "Definition & Aufgaben (WHO)", def: "Verbesserung der Lebensqualität von Patient:innen und Familien bei lebensbedrohlicher Erkrankung durch Vorbeugen und Lindern von Leiden: körperlich, psychosozial, spirituell.", klinik: "Schmerz- und Symptomlinderung, psychosoziale Unterstützung, Pflegeorganisation, Sterbe- und Trauerbegleitung." },
  ],
  anki: [["SPIKES", "Setting · Perception · Invitation · Knowledge · Emotions · Strategy/Summary"], ["NURSE", "Naming · Understanding · Respecting · Supporting · Exploring"]],
});
