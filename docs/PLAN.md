# Projektplan: Personlig webbplats med Tailwind

Denna plan följer den övergripande roadmapen för att bygga en personlig webbplats med huvudsida och UI-galleri. Checklistorna hjälper till att följa upp vad som är klart respektive kvar.

## Mål
- Bygga en tvåsidig webbplats (huvudsida + galleri) som visar bakgrund, erfarenhet och UI-komponenter.
- Skapa professionell, modern design med Tailwind och enkel navigering mellan sidorna.

## Milstolpar och checklistor

### 1. Projektstruktur & Tailwind
- [ ] Initiera projekt (Vite/Next.js eller statisk setup) och installera Tailwind.
- [ ] Konfigurera `tailwind.config.js` och globala stilar.
- [ ] Skapa sidor: `index` (huvudsida) och `gallery` (UI-galleri).

### 2. Design & färgpalett
- [ ] Definiera färgtema: mörk neutral bakgrund med blå/emerald accenter.
- [ ] Sätta typografi, spacing och grid-system.
- [ ] Säkerställa responsivitet (mobile-first) och tillgänglighet.

### 3. Huvudsida (Index)
- [ ] Hero-sektion med namn, titel, kort pitch och kontaktuppgifter.
- [ ] Profil/om-mig med bakgrund inom mjukvaruutveckling och automation.
- [ ] Erfarenhetssektion (WeTeachIT, Nielsen/Gracenote, Cognizant, Tech Mahindra) med resultatpunkter.
- [ ] Utbildning och färdigheter (YH-examen, teknikstack, verktyg, examensprojekt).
- [ ] Projektkort (AI video-generator, Day Trading App, Multiplayer Game Architecture, Android-spel).
- [ ] CTA med länk till UI-galleriet och kontaktmöjlighet.

### 4. Gallery-sida (UI/UX-komponenter)
- [ ] Grid med kort för varje komponent och korta förklaringar.
- [ ] Smooth toggle-knapp med animation.
- [ ] Slider med visuell feedback.
- [ ] Animerad bakgrundsgradient.
- [ ] Accordion/expanderbar panel för kodexempel.
- [ ] Modal/lightbox.
- [ ] Tab-komponent för kodsnippets eller sektioner.
- [ ] Formulärkomponent med enkel validering.
- [ ] Kodrutor med syntax-highlighting (t.ex. Prism.js eller Tailwind utilities).

### 5. Kultur & UX-kvalitet
- [ ] Kommunikation av värden: förtroende, enkelhet, flexibilitet.
- [ ] Konsekvent spacing, kontrast och ARIA-attribut.
- [ ] Tangentbordsnavigation och fokusstilar.

### 6. Extra & optimering
- [ ] Kontaktformulär med tack-meddelande.
- [ ] Eventuell blogg/artikel-sektion.
- [ ] Länkar till GitHub/LinkedIn.
- [ ] Prestandakontroll (bildoptimering, lazy loading, minifiering).
- [ ] Tillgänglighets- och HTML-validering.
- [ ] Tester (Jest/Vitest eller motsvarande) om stacken kräver det.

## Risker och åtgärder
- **Scope creep**: Håll fast vid två sidor och begränsat antal komponenter.
- **Tid**: Prioritera hero, erfarenhet och 3–4 UI-komponenter först.
- **Tillgänglighet**: Följ WCAG-checklistan och testa tangentbordsnavigering tidigt.

## Leverabler
- Färdig huvudsida och galleri-sida med Tailwind.
- Dokumenterad kod med korta förklaringar i galleriet.
- Uppdaterade checklistor som visar status.
