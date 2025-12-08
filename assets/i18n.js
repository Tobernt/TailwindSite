const translations = {
  en: {
    'lang.toggle': 'Svenska',
    'lang.toggle.active': 'English',
    'toggle.on': 'On',
    'toggle.off': 'Off',
    'toggle.label.on': 'Enabled',
    'toggle.label.off': 'Off',
    'slider.value': '{value}%',
    'slider.aria': '{value} percent',
    'form.invalid': 'Check email and role before continuing.',
    'form.valid': 'All set! The form is ready to submit.',
    'copy.success': 'Copied to clipboard.',
    'copy.unsupported': 'Copying is not supported in this environment.',
    'contact.invalid': 'Fill in all fields to send.',
    'contact.success': 'Thanks! I will reply within 24h with a proposal.',
    'gradient.activate': 'Activate gradient',
    'gradient.deactivate': 'Close gradient',
  },
  sv: {
    'lang.toggle': 'Svenska',
    'lang.toggle.active': 'English',
    'nav.home': 'Hem',
    'nav.about': 'Om mig',
    'nav.experience': 'Erfarenhet',
    'nav.gallery': 'UI-galleri',
    'nav.contact': 'Kontakt',
    'hero.eyebrow': 'Fullstackutvecklare & problemlösare',
    'hero.title': 'Jag bygger tillgängliga produkter som levererar mätbar effekt.',
    'hero.lead':
      'Full-stackutvecklare med fokus på automation, datasäkerhet och tydlig kommunikation mellan teknik och verksamhet. Bygger och underhåller system i Python, C#, JavaScript och SQL – från prototyp till drift i produktion.',
    'hero.ctaPrimary': 'Boka ett kort samtal',
    'hero.ctaSecondary': 'Utforska UI-galleriet',
    'hero.tag.location': 'Olofström',
    'hero.tag.availability': 'Tillgänglig för uppdrag',
    'hero.tag.remote': 'Remote-first',
    'hero.focus.title': 'Fokusområden',
    'hero.focus.design':
      '<span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>Design systems i Tailwind med audit-spår och dokumentation.',
    'hero.focus.data':
      '<span class="mt-1 h-2 w-2 rounded-full bg-blue-500"></span>Data pipelines med kontraktstester, observability och rollback-planer.',
    'hero.focus.experiments':
      '<span class="mt-1 h-2 w-2 rounded-full bg-emerald-400"></span>Produktledda experiment med tydliga KPI:er och insiktsdashboards.',
    'hero.summary.fullstack': 'Full-stack',
    'hero.summary.fullstackCopy': 'Python, C#, JavaScript, SQL och Flutter i produktion.',
    'hero.summary.automation': 'Automation',
    'hero.summary.automationCopy': 'CI/CD, datakvalitet och scripts som minskar manuellt arbete.',
    'hero.summary.remote': 'Remote-first',
    'hero.summary.remoteCopy': 'Vana vid distribuerade team och tydlig dokumentation.',
    'about.eyebrow': 'Profil',
    'about.title': 'Om mig',
    'about.subtitle': 'Nyfiken generalist som trivs i gränslandet mellan produkt, data och design.',
    'about.body':
      'Versatil full-stackutvecklare med bakgrund inom media-data, automation och systemintegration. Jag arbetar nära både instruktörer och slutanvändare, skriver kod som är enkel att felsöka och ser till att processer är mätbara och dokumenterade.',
    'about.strengths.title': 'Styrkor',
    'about.strengths.fast': 'Snabba experiment & MVP:er med tydlig KPI.',
    'about.strengths.translate': 'Översätter komplex teknik till beslutsunderlag.',
    'about.strengths.mentorship': 'Mentorskap, pairing och code review-ritualer.',
    'about.tools.title': 'Verktyg',
    'about.tools.devops': 'GitHub Actions, Azure/AWS, Docker & k8s.',
    'about.tools.databases': 'Supabase, PostgreSQL, Redis, OpenSearch.',
    'about.tools.product': 'Figma, Linear, Notion för tydlig spårbarhet.',
    'experience.eyebrow': 'Erfarenhet',
    'experience.title': 'Roller & resultat',
    'experience.subtitle': 'Mätbara effekter på leveransflöden, kostnad och kvalitet.',
    'experience.cta': 'Se UI-exempel',
    'experience.roles.assistant.title': 'Programming Assistant &amp; Developer, WeTeachIT',
    'experience.roles.assistant.dates': '2025–Nu',
    'experience.roles.assistant.one': 'Granskar och felsöker studentkod i Python, Java och C# samt coachar till bättre struktur.',
    'experience.roles.assistant.two': 'Bygger interna full-stackverktyg i Flask och SQLite med säker autentisering.',
    'experience.roles.assistant.three': 'Utvecklar modulärt multiplayer-ramverk i Unity/C# med egen nätverkslogik.',
    'experience.roles.assistant.four': 'Samarbetar med instruktörer för skalbara och underhållbara undervisningsflöden.',
    'experience.roles.editor.title': 'Schedule Editor (Remote), Nielsen / Gracenote',
    'experience.roles.editor.dates': '2022–2023',
    'experience.roles.editor.one': 'Automatiserade metadata- och TV-scheman vilket minskade manuellt arbete.',
    'experience.roles.editor.two': 'Säkerställde datakvalitet för svensk TV och VOD genom validering mot leverantörer.',
    'experience.roles.editor.three': 'Tog fram skript som förbättrade leveranstider och konsekvens i databasen.',
    'experience.roles.exchange.title': 'Exchange Administrator / SME (Remote), Cognizant',
    'experience.roles.exchange.dates': '2018–2021',
    'experience.roles.exchange.one': 'Hantera hybrida Microsoft Exchange-miljöer (2010–2019 och Exchange Online).',
    'experience.roles.exchange.two': 'Automatiserade provisionering, köhantering och rapporter med PowerShell.',
    'experience.roles.exchange.three': 'Byggde CLI-verktyg som kortade rapporttider från timmar till minuter.',
    'experience.roles.exchange.four': 'Stödde regelefterlevnad, retention och migrering i globala team.',
    'experience.roles.enterprise.title': 'Enterprise Support &amp; Automation Specialist, Tech Mahindra',
    'experience.roles.enterprise.dates': '2017–2018',
    'experience.roles.enterprise.one': 'Gav Tier 2-support för VPN, Lotus Notes och Active Directory.',
    'experience.roles.enterprise.two': 'Automatiserade kontoprovisionering och återställning av VPN.',
    'experience.roles.enterprise.three': 'Topp 3 i ett team om 50+ tekniker för problemlösningshastighet.',
    'experience.roles.onsite.title': 'Onsite Technician, InfoCare',
    'experience.roles.onsite.dates': '2023',
    'experience.roles.onsite.one': 'Levererade on-site IT-support och hårdvarudiagnostik i Sverige.',
    'experience.roles.onsite.two': 'Koordinerade med leverantörer och användare för att minimera driftstopp.',
    'experience.roles.producer.title': 'Producer / Founder, Royal Hand Studios',
    'experience.roles.producer.dates': '2014–2015',
    'experience.roles.producer.one': 'Ledde digitala produktioner; erhöll Culture Award 2014 och nominerad Årets entreprenör 2015.',
    'experience.roles.producer.two': 'Ansvarade för projektledning, kundkontakt och leverans av kreativa medieuppdrag.',
    'education.eyebrow': 'Utbildning & färdigheter',
    'education.title': 'Lifelong learning',
    'education.subtitle': 'Jag håller verktygslådan uppdaterad och dokumenterar lärdomar så att teamet slipper gissa.',
    'education.degree': 'Högre yrkesexamen – Mjukvaruutveckling',
    'education.school': 'MÖLK Yrkeshögskola, Linköping • 400/400 YH-poäng',
    'education.focus': 'Fokus på OOP, agila team, databaser, GUI-design och algoritmer. Distinktion i 12 av 14 kurser.',
    'education.project': 'Examensprojekt: modulärt multiplayer-system i C#.',
    'education.stack.title': 'Teknikstack',
    'education.tools.title': 'Verktyg & metoder',
    'education.tools.cicd': 'CI/CD & DevOps',
    'education.tools.design': 'Design systems',
    'education.tools.agile': 'Agila arbetssätt',
    'education.tools.observability': 'Observability',
    'education.tools.audit': 'DX audits',
    'education.tools.ab': 'A/B-testning',
    'projects.eyebrow': 'Projekt',
    'projects.title': 'Utvalda case',
    'projects.subtitle': 'Case med både resultat och kodbeskrivningar.',
    'projects.cta': 'Mer UI-inspiration',
    'projects.items.video.title': 'AI Video Generator',
    'projects.items.video.tag': 'Automation',
    'projects.items.video.summary': 'AI-driven videopipeline med finjusterad styrning av metadata, storyboard och voice-over.',
    'projects.items.video.stack': 'Stack: Python, Flask, Tailwind',
    'projects.items.video.result': 'Resultat: Kortare produktionscykler och mer konsekventa leveranser.',
    'projects.items.trading.title': 'Day Trading App',
    'projects.items.trading.tag': 'Realtime',
    'projects.items.trading.summary': 'Automatiserad strategi som anpassar sig till trend- och callsign-skiften med notifieringar.',
    'projects.items.trading.stack': 'Stack: JavaScript, Supabase, React',
    'projects.items.trading.result': 'Resultat: Snabbare signaldistribution och optimerade kostnader.',
    'projects.items.multiplayer.title': 'Multiplayer Game Architecture',
    'projects.items.multiplayer.tag': 'Scale',
    'projects.items.multiplayer.summary': 'Modulärt full-stacksystem med Unity-verktyg och egen nätverksstack för låg latens.',
    'projects.items.multiplayer.stack': 'Stack: C#, Unity, SignalR, Redis',
    'projects.items.multiplayer.result': 'Resultat: Färre disconnects och bättre spelkänsla.',
    'projects.items.android.title': 'Android Incremental Game',
    'projects.items.android.tag': 'Mobile',
    'projects.items.android.summary': 'Mobilspel med ekonomi-loopar, analytics och lokal lagring.',
    'projects.items.android.stack': 'Stack: Flutter, SQLite',
    'projects.items.android.result': 'Resultat: Iterativ UI-testning gav förbättrad retention.',
    'projects.items.tailwind.title': 'Tailwind &amp; React Job Application',
    'projects.items.tailwind.tag': 'Frontend',
    'projects.items.tailwind.summary': 'Det här portfolio-projektet byggt i Tailwind och React för att presentera kompetens och case för ansökan.',
    'projects.items.tailwind.stack': 'Stack: React, Tailwind CSS',
    'projects.items.tailwind.result': 'Resultat: Snabb prototyp som visar komponentbibliotek, UI-detaljer och responsivitet.',
    'contact.eyebrow': 'UI-galleri',
    'contact.title': 'Redo att börja ett projekt?',
    'contact.subtitle': 'Boka en genomgång av dina utmaningar eller be om en liten prototyp. Jag återkommer inom en arbetsdag.',
    'contact.ctaPrimary': 'Boka en genomgång',
    'contact.ctaSecondary': 'Utforska lösningar i galleriet',
    'contact.tag.workshop': 'Tillgänglig för workshop',
    'contact.tag.response': 'Svar inom 24h',
    'contact.tag.demo': 'Inkl. inspelad demo',
    'contact.form.title': 'Kontaktformulär',
    'contact.form.tag': 'WCAG testat',
    'contact.form.name': 'Namn',
    'contact.form.email': 'E-post',
    'contact.form.message': 'Vad vill du uppnå?',
    'contact.form.note': 'Korten sparas inte – formuläret visar bara hur validering och fokus fungerar.',
    'contact.form.submit': 'Skicka',
    'gallery.hero.eyebrow': 'Komponenter',
    'gallery.hero.title': 'UI-galleri',
    'gallery.hero.subtitle': 'Responsiv grid med demos och kodexempel. Byggd för att enkelt hoppa tillbaka till startsidan.',
    'gallery.hero.cta': 'Tillbaka till projekt',
    'gallery.section.eyebrow': 'Designsystem',
    'gallery.section.title': 'Interaktiva komponenter',
    'gallery.section.subtitle': 'Gridad översikt över återanvändbara UI-mönster med kort kodförklaring.',
    'gallery.section.cta': 'Tillbaka till projekt',
    'gallery.toggle.title': 'Smooth toggle',
    'gallery.toggle.tag': 'Interaktiv',
    'gallery.toggle.summary': 'Animerad toggle med tydlig fokussignal, röstade etiketter och ARIA-stöd.',
    'gallery.toggle.hidden': 'Växla notiser',
    'gallery.toggle.note': 'Använder <code class="text-emerald-300">aria-pressed</code> för att signalera läge.',
    'gallery.slider.title': 'Slider med live-värde',
    'gallery.slider.tag': 'Feedback',
    'gallery.slider.summary': 'Reglaget uppdaterar värdet i realtid med <code class="text-emerald-300">aria-valuetext</code> och <code class="text-emerald-300">aria-live</code>.',
    'gallery.slider.label': 'Välj nivå',
    'gallery.gradient.title': 'Gradient CTA',
    'gallery.gradient.tag': 'Visuell',
    'gallery.gradient.summary': 'Kallar fram en animerad gradient-bakgrund med tydlig kontrast och text som förklarar mönstret.',
    'gallery.gradient.body': 'Gradienten är WCAG AA-testad mot text och aktiveras med knappen nedan.',
    'gallery.gradient.button': 'Aktivera gradient',
    'gallery.accordion.title': 'Accordion',
    'gallery.accordion.tag': 'Struktur',
    'gallery.accordion.summary': 'Expanderbar panel som växlar höjd och uppdaterar <code class="text-emerald-300">aria-expanded</code>.',
    'gallery.accordion.button': 'Hur fungerar komponenten?',
    'gallery.accordion.copy': 'Innehållet kollapsas via CSS-grid radhöjd och får automatiskt rätt semantik för skärmläsare.',
    'gallery.modal.title': 'Modal / lightbox',
    'gallery.modal.tag': 'Overlay',
    'gallery.modal.summary': 'Öppnas via knapp, stängs med overlay, Escape eller knapp. Fokus låses i dialogen.',
    'gallery.modal.button': 'Visa modal',
    'gallery.modal.note': 'Backdropen har <code class="text-emerald-300">role="dialog"</code> och <code class="text-emerald-300">aria-modal="true"</code>.',
    'gallery.modal.header': 'Lightbox',
    'gallery.modal.body': 'Här kan du lägga valfritt innehåll, t.ex. en bild eller en bekräftelse.',
    'gallery.modal.close': 'Stäng',
    'gallery.tabs.title': 'Tabs med tangentbord',
    'gallery.tabs.tag': 'Navigation',
    'gallery.tabs.summary': 'Piltangenterna flyttar fokus mellan flikar; panelerna styrs med <code class="text-emerald-300">aria-controls</code>.',
    'gallery.tabs.result': 'Resultat',
    'gallery.tabs.code': 'Kod',
    'gallery.tabs.process': 'Process',
    'gallery.tabs.resultCopy': 'Automatiserade regressionstester gav 12% fler features utan buggreports.',
    'gallery.tabs.codeCopy': 'Komponenten använder <code class="text-emerald-300">dataset.tab</code> och enklare klasser från Tailwind.',
    'gallery.tabs.processCopy': 'Pairing-sessioner och lätta RFC:er höll intressenter i synk.',
    'gallery.form.title': 'Formulär med validering',
    'gallery.form.tag': 'Form',
    'gallery.form.summary': 'Formuläret visar valideringsfeedback och stoppar skickning tills fälten är rätt.',
    'gallery.form.email': 'Arbets-e-post',
    'gallery.form.role': 'Roll',
    'gallery.form.placeholder': 'Välj roll',
    'gallery.form.developer': 'Utvecklare',
    'gallery.form.designer': 'Designer',
    'gallery.form.manager': 'Produkt/Projekt',
    'gallery.form.submit': 'Validera',
    'gallery.copy.title': 'Kopiera kodblock',
    'gallery.copy.tag': 'Produktivitet',
    'gallery.copy.summary': 'Kopieringsknappen hämtar kodinnehåll och bekräftar för användaren.',
    'gallery.copy.label': 'API-klient',
    'gallery.copy.button': 'Kopiera kod',
    'gallery.contact.title': 'Kontaktkort',
    'gallery.contact.tag': 'CTA',
    'gallery.contact.summary': 'Interaktivt kontaktkort som speglar sajtens formulär utan att spara data.',
    'gallery.contact.name': 'Tobias Berntsson',
    'gallery.contact.role': 'Fullstackutvecklare & lärare',
    'gallery.contact.badge': 'Svar inom 24h',
    'gallery.contact.email': 'E-post',
    'gallery.contact.topic': 'Ämne',
    'gallery.contact.placeholder': 'Välj',
    'gallery.contact.workshop': 'Workshop',
    'gallery.contact.proposal': 'Förslag',
    'gallery.contact.support': 'Support',
    'gallery.contact.submit': 'Skicka förfrågan',
    'footer.title': 'Tobias Berntsson Portfolio',
    'footer.subtitle': 'Tailwind Portfolio. Byggd med fokus på tydlighet, responsivitet och tillgänglighet.',
    'slider.value': '{value}%',
    'slider.aria': '{value} procent',
    'form.invalid': 'Kontrollera e-post och roll innan du fortsätter.',
    'form.valid': 'Allt ser bra ut! Formuläret är redo att skickas.',
    'copy.success': 'Kopierat till urklipp.',
    'copy.unsupported': 'Kopiering stöds inte i denna miljö.',
    'contact.invalid': 'Fyll i alla fält för att skicka.',
    'contact.success': 'Tack! Jag återkommer inom 24h med ett förslag.',
    'gradient.activate': 'Aktivera gradient',
    'gradient.deactivate': 'Stäng gradient',
    'toggle.on': 'På',
    'toggle.off': 'Av',
    'toggle.label.on': 'Aktiverad',
    'toggle.label.off': 'Av',
  },
};

let currentLanguage = 'en';

function translate(key, lang = currentLanguage) {
  return translations[lang]?.[key];
}

function format(key, replacements = {}, lang = currentLanguage) {
  const template = translate(key, lang);
  if (!template) return template;
  return template.replace(/\{(\w+)\}/g, (_, token) => replacements[token] ?? `{${token}}`);
}

function setContent(element, content) {
  if (content == null) return;
  element.innerHTML = content;
}

function applyLanguage(lang = 'en') {
  currentLanguage = lang === 'sv' ? 'sv' : 'en';
  document.documentElement.lang = currentLanguage === 'sv' ? 'sv' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    if (!element.dataset.i18nOriginal) {
      element.dataset.i18nOriginal = element.innerHTML;
    }

    const key = element.dataset.i18n;
    const translated = currentLanguage === 'sv' ? translate(key) : null;
    setContent(element, translated ?? element.dataset.i18nOriginal);
  });

  updateLanguageToggles();
  try {
    localStorage.setItem('preferred-lang', currentLanguage);
  } catch (error) {
    console.warn('Unable to store language preference', error);
  }

  document.dispatchEvent(
    new CustomEvent('i18n:languagechange', {
      detail: { lang: currentLanguage },
    }),
  );
}

function updateLanguageToggles() {
  const activeKey = currentLanguage === 'sv' ? 'lang.toggle.active' : 'lang.toggle';
  const label = translate(activeKey, currentLanguage) ?? (currentLanguage === 'sv' ? 'English' : 'Svenska');

  document.querySelectorAll('[data-lang-toggle]').forEach((button) => {
    button.textContent = label;
    button.setAttribute('aria-pressed', currentLanguage === 'sv' ? 'true' : 'false');
  });
}

function initLanguage() {
  const stored = (() => {
    try {
      return localStorage.getItem('preferred-lang');
    } catch (error) {
      console.warn('Unable to read language preference', error);
      return null;
    }
  })();

  applyLanguage(stored === 'sv' ? 'sv' : 'en');
  document.addEventListener('click', (event) => {
    const toggle = event.target.closest('[data-lang-toggle]');
    if (!toggle) return;
    applyLanguage(currentLanguage === 'sv' ? 'en' : 'sv');
  });
}

document.addEventListener('DOMContentLoaded', initLanguage);

export { applyLanguage, format, getCurrentLanguage, translate };

function getCurrentLanguage() {
  return currentLanguage;
}

if (!window.i18n) {
  window.i18n = { applyLanguage, format, getCurrentLanguage, translate };
}
