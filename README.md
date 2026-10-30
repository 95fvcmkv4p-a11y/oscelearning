# OSCE 1 Lernseite

Lernwebsite für die OSCE 1 (Medizin, JKU Linz) mit 14 Fächern in drei Ebenen:
**Big Picture → Stationen → Details**, dazu Lernplan nach Tagesform, Stations-Simulator mit echten Altfragen und Anki-Export.

Inhaltliche Grundlage: „Evas Ausarbeitung“, Skript „OSCE – Praktische Aufgaben“, Altfragen 2020–2025.
Abbildungen aus dem Skript „Praktische Aufgaben“ liegen in `assets/img/` (Zuordnung in `data/_bilder.js`). Einige tragen fremdes Branding (AMBOSS, MediKnow u. a.): Rechte vor einer öffentlichen Veröffentlichung prüfen bzw. Repo privat halten.

## Lokal öffnen
`index.html` im Browser öffnen. Es wird kein Server gebraucht.

## Auf GitHub Pages veröffentlichen
1. Ordnerinhalt ins Repository legen und pushen.
2. Repository → Settings → Pages → „Deploy from a branch“ → Branch `main`, Ordner `/ (root)`.
3. Nach ca. 1 Minute ist die Seite unter `https://<user>.github.io/<repo>/` erreichbar.

## Aufbau
```
index.html          Seitengerüst
assets/style.css    Design (hell/dunkel)
assets/app.js       Navigation, Lernplan, Simulator, Anki-Export
data/_core.js       Stationsablauf & fächerübergreifende Inhalte
data/<fach>.js      Ein Fach pro Datei
```

## Inhalte ergänzen
Jede Fach-Datei ruft `OSCE.fach({...})` auf. Markierungen im Text:
`{t|Test}` blau · `{n|Normalbefund}` grün · `{p|pathologisch}` rot · `**fett**` · `{anki}` = Anki-Kandidat.
Eine neue Station ist ein weiteres Objekt in `stationen: [...]` mit `titel`, `af` (Altfragen, Format `"2025: …"`), `ablauf`, `befund`, `patho`, `gerust`.

Der Lernstand (Einschätzungen, erledigte Blöcke) wird nur im eigenen Browser gespeichert (localStorage).
