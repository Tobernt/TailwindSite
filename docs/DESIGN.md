# Designdokument: Personlig webbplats med Tailwind

Detta dokument beskriver layout, tonalitet och komponentdesign för både huvudsida och UI-galleri. Checklistor markerar läget för respektive sektion.

## Designprinciper
- **Modern och förtroendeingivande**: mörk bakgrund med blå/emerald accenter, luftiga kort, tydlig hierarki.
- **Tillgänglighet först**: hög kontrast, ARIA-attribut, fokusstilar och tangentbordsnavigering.
- **Responsivt**: mobile-first med flex/grid och tydliga brytpunkter.

### Status
- [x] Palett och typografi fastställd
- [ ] Komponentbibliotek för knappar, kort och formulär definierat
- [x] Navigationsmönster (header/footer) definierade

## Palett och typografi
- **Bas**: mörka neutrala toner (`neutral-950` till `neutral-600`) för bakgrund, paneler och textkontraster.
- **Accenter**: klar blå (`accent-blue-500`/`-600`) för primära CTA och emerald (`accent-emerald-400`) för sekundära highlights och fokusmarkeringar.
- **Typsnitt**: "Inter"/"Manrope" för brödtext och UI, "Space Grotesk" för rubriker; monospace "JetBrains Mono" för kodexempel.
- **Spacing tokens**: `gutter` (1.25rem) för horisontella marginaler samt `section-sm`/`section`/`section-lg` (3.5–6rem) för vertikala rytmer.

## Informationsarkitektur
1. **Huvudsida**
   - Hero (namn, titel, CTA, kontaktuppgifter)
   - Om mig/profil
   - Erfarenhet (kort eller tidslinje)
   - Utbildning & färdigheter
   - Projektkort
   - Call-to-action och länk till galleri
2. **Gallery-sida**
   - Grid med interaktiva UI/UX-komponenter
   - Kodrutor och förklaringar
   - Navigering tillbaka till huvudsidan

### Checklistor för struktur
- [x] Header med logotyp/namn och länk till galleri
- [x] Footer med kontakt och sociala länkar
- [x] Konsistent spacing mellan sektioner (t.ex. `py-16`)

## Layoutdetaljer
### Huvudsida
- **Hero**: tvåkolumn på desktop (text + CTA, ev. illustration), centrerad text på mobil.
- **Profil/om mig**: kort med ljus bakgrund/glas-effekt för att bryta av mot mörk bakgrund.
- **Erfarenhet**: kort/tidslinje med roll, år och mätbara resultat.
- **Utbildning & färdigheter**: grid/listor med badge-styling för teknikstack.
- **Projekt**: kort med kort beskrivning och länkar.
- **CTA**: knappar till kontakt och galleri.

Checklistor:
- [ ] Hero-sektion layout klar
- [ ] Profil/om-mig kort designat
- [ ] Erfarenhetskort/tidslinje designat
- [ ] Utbildning/färdigheter layout klar
- [ ] Projektkort layout klar
- [ ] CTA-komponenter designade

### Gallery-sida
- **Grid**: responsiv 1–3 kolumner beroende på viewport.
- **Komponentkort**: innehåller interaktiv demo, kodruta (`<pre><code>`) och kort text.
- **Interaktion**: mjuka övergångar (`transition`, `shadow`, `transform`).

Komponentchecklistor:
- [ ] Smooth toggle med animering och tillståndsindikator
- [ ] Slider med live-värdevisning
- [ ] Animerad bakgrundsgradient (t.ex. `background-size` + `animation`)
- [ ] Accordion/expanderbar panel
- [ ] Modal/lightbox med overlay och escape-stöd
- [ ] Tab-komponent med aktiv indikator
- [ ] Formulärkomponent med validering och felmeddelanden
- [ ] Kodrutor med monospace, bakgrund och syntaxfärg

## Tonalitet och innehåll
- **Röst**: professionell men personlig, fokuserad på problemlösning och processförbättring.
- **Highlight**: flerspråkig full-stack-kompetens (Python, C#, JS, SQL), automation och integrationsarbete, utbildning med toppbetyg.
- **CTA-text**: ”Kontakta mig” och ”Utforska UI-galleriet”.

### Checklistor för tonalitet
- [ ] Mikrocopy för CTA och kort skrivna
- [ ] Resultat- och effektformuleringar för erfarenhetskort
- [ ] Kodförklaringar skrivna i galleriet

## Tillgänglighet
- [ ] ARIA-attribut på interaktiva element
- [ ] Fokusmarkeringar på knappar, länkar och formulär
- [ ] Kontrasttest för text och bakgrund
- [ ] Tangentbordsnavigering testad

## Implementationstaktik
- Bygg baslayout först, därefter komponenter iterativt.
- Återanvänd Tailwind utility-klasser och extrahera komponentklasser vid behov.
- Lägg till små JavaScript-snippets (vanilla eller Alpine/React enligt val) för interaktivitet.

## Spårning av nästa steg
- [ ] Välj tech-stack (statisk + Tailwind eller Vite/Next.js)
- [x] Sätt upp navigering mellan huvudsida och galleri
- [ ] Implementera 2–3 UI-komponenter som MVP
- [ ] Utvärdera och uppdatera checklistor efter varje milstolpe
