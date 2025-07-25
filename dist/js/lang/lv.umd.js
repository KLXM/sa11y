
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 4.1.9
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2025 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sa11yLangLv = factory());
})(this, (function () { 'use strict';

  /*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
  var lv = {
    // Latvian
    strings: {
      LANG_CODE: 'lv',
      MAIN_TOGGLE_LABEL: 'Pārbaudiet pieejamību',
      CONTAINER_LABEL: 'Pieejamības pārbaudītājs',
      ERROR: 'Kļūda',
      ERRORS: 'Kļūdas',
      WARNING: 'Brīdinājums',
      WARNINGS: 'Brīdinājumi',
      GOOD: 'Labi',
      ON: 'Ieslēgts',
      OFF: 'Izslēgts',
      ALERT_TEXT: 'Brīdinājums',
      ALERT_CLOSE: 'Aizvērt',
      OUTLINE: 'Struktūra',
      READABILITY_DESC: 'Cilnē <strong>Struktūra</strong> rāda lasāmības rādītāju, lai palīdzētu novērtēt lasīšanas grūtības.',
      TITLE: 'Nosaukums',
      ALT: 'ALT',
      IMAGES: 'Attēli',
      EDIT: 'Rediģēt',
      NO_IMAGES: 'Nav atrasts neviens attēls.',
      DECORATIVE: 'Dekoratīvs',
      MISSING: 'Trūkst',
      PAGE_ISSUES: 'Lapas problēmas',
      SETTINGS: 'Iestatījumi',
      DEVELOPER_CHECKS: 'Izstrādātāja pārbaudes',
      DEVELOPER_DESC: 'Pārbauda problēmas, kuru novēršanai var būt nepieciešamas programmēšanas zināšanas, piemēram, HTML atribūtus, veidlapas un citus.',
      DARK_MODE: 'Tumšais režīms',
      SHORTCUT_SR: 'Pāriet uz nākamo numuru. Tastatūras saīsne: Alt S',
      SKIP_TO_ISSUE: 'Pāriet uz jautājumu',
      NEW_TAB: 'Atver jaunu cilni',
      LINKED: 'Saistīts',
      PANEL_HEADING: 'Pieejamības pārbaude',
      NO_ERRORS_FOUND: 'Kļūdas nav atrastas.',
      WARNINGS_FOUND: 'atrasti brīdinājumi.',
      TOTAL_FOUND: 'kopējais atrasto problēmu skaits.',
      NOT_VISIBLE: 'Mēģinātais apskatīt vienums nav redzams; iespējams, tas ir paslēpts vai atrodas akordeona vai cilnes komponenta iekšpusē. Šeit ir priekšskatījums:',
      MISSING_ROOT: 'Tika pārbaudīta visas lapas pieejamība, jo mērķa apgabals <code>%(root)</code> nepastāv.',
      MISSING_READABILITY_ROOT: 'Lasāmības vērtējums ir balstīts uz satura apgabalu <code>%(fallback)</code>, jo mērķa apgabals <code>%(root)</code> nepastāv.',
      HEADING_NOT_VISIBLE: 'Virsraksts nav redzams; tas var būt paslēpts vai akordeona vai cilnes komponenta iekšpusē.',
      SKIP_TO_PAGE_ISSUES: 'Pāriet uz lapas jautājumiem',
      CONSOLE_ERROR: 'Atvainojiet, bet šajā lapā ir problēma ar pieejamības pārbaudītāju. Vai varat, lūdzu, <a href="%(link)">ziņot par to, izmantojot šo formu</a> vai <a href="%(link)">GitHub</a>?',
      APPEARANCE: 'Izskats',
      MOVE_PANEL: 'Pārvietot paneli',

      // Dismiss
      PANEL_DISMISS_BUTTON: 'Rādīt %(dismissCount) noraidītos',
      DISMISS: 'Noraidīt',
      DISMISS_ALL: 'Noraidīt visu',
      DISMISSED: 'Noraidīts',
      DISMISS_REMINDER: 'Lūdzu, ņemiet vērā, ka brīdinājumi ir tikai <strong>pagaidu</strong> noraidīti. Dzēšot pārlūkprogrammas vēsturi un sīkdatnes, visi iepriekš noraidītie brīdinājumi tiks atjaunoti visās lapās.',

      // Export
      DATE: 'Datums',
      PAGE_TITLE: 'Lapas nosaukums',
      RESULTS: 'Rezultāti',
      EXPORT_RESULTS: 'Eksportēt rezultātus',
      GENERATED: 'Rezultāti ģenerēti ar %(tool).',
      PREVIEW: 'Priekšskatījums',
      ELEMENT: 'Elements',
      PATH: 'Ceļš',

      // Colour filters
      COLOUR_FILTER: 'Krāsu filtrs',
      PROTANOPIA: 'Protanopija',
      DEUTERANOPIA: 'Deuteranopija',
      TRITANOPIA: 'Tritanopia',
      MONOCHROMACY: 'Vienkrāsainība',
      COLOUR_FILTER_MESSAGE: 'Pārbaudiet, vai nav grūti pamanāmi vai no citām krāsām atšķirami elementi.',
      RED_EYE: 'Sarkanais aklais.',
      GREEN_EYE: 'Zaļās žalūzijas.',
      BLUE_EYE: 'Zilā žalūzija.',
      MONO_EYE: 'Sarkans, zils un zaļš akls.',
      COLOUR_FILTER_HIGH_CONTRAST: 'Krāsu filtri nedarbojas augsta kontrasta režīmā.',

      // Alternative text stop words
      SUS_ALT_STOPWORDS: [
        'attēls',
        'grafikas',
        'foto',
        'photo',
        'image',
        'graphic',
      ],
      PLACEHOLDER_ALT_STOPWORDS: [
        'alt',
        'attēls',
        'foto',
        'dekoratīvs',
        'photo',
        'image',
        'graphic',
        'vietvārds',
        'aizvietotāja attēls',
        'starplikas',
      ],
      PARTIAL_ALT_STOPWORDS: [
        'noklikšķiniet uz',
        'klikšķiniet šeit',
        'klikšķiniet šeit, lai uzzinātu vairāk',
        'klikšķinot šeit',
        'apskatīt',
        'sīkāka informācija šeit',
        'sīkāk šeit',
        'lejupielādēt',
        'lejupielādēt šeit',
        'uzzināt',
        'uzzināt vairāk',
        'veidlapa',
        'šeit',
        'informācija',
        'saite',
        'uzzināt',
        'iemācīties',
        'vairāk',
        'lapa',
        'papīrs',
        'lasīt vairāk',
        'lasīt',
        'izlasiet šo',
        'šis',
        'šo lapu',
        'šo tīmekļa vietni',
        'skatīt',
        'apskatīt mūsu',
        'tīmekļa vietne',
      ],
      CLICK: ['click', 'klikšķis'],
      NEW_WINDOW_PHRASES: [
        'ārējais',
        'jauna cilne',
        'jauns logs',
        'uznirstošais',
        'uznirstošais logs',
      ],
      FILE_TYPE_PHRASES: ['dokuments', 'izklājlapa', 'aprēķinu lapa', 'saspiests fails', 'arhivēts fails', 'darblapa', 'powerpoint', 'prezentācija', 'instalēt', 'video', 'audio', 'pdf'],

      // Readabililty
      READABILITY: 'Lasāmība',
      AVG_SENTENCE: 'Vidējais vārdu skaits teikumā:',
      COMPLEX_WORDS: 'Sarežģīti vārdi:',
      TOTAL_WORDS: 'Vārdi:',
      VERY_DIFFICULT: 'Ļoti grūti',
      DIFFICULT: 'Grūtības',
      FAIRLY_DIFFICULT: 'Diezgan grūti',
      READABILITY_NO_CONTENT: 'Nav iespējams aprēķināt lasāmības rezultātu. Nav atrasta neviena rindkopa <code>&lt;p&gt;</code> vai saraksta saturs <code>&lt;li&gt;</code>.',
      READABILITY_NOT_ENOUGH: 'Nepietiek satura, lai aprēķinātu lasāmības rādītāju.',

      // Headings
      HEADING_SKIPPED_LEVEL: 'Virsraksti nedrīkst izlaist līmeņus vai pāriet no <strong>Virsraksta %(PREV_LEVEL)</strong> uz <strong {C}>Virsrakstu %(LEVEL)</strong>, jo tas traucē satura kārtību un hierarhiju, padarot to grūtāk uztveramu. <hr> Ja <strong {C}>%(HEADING)</strong> atrodas sadaļā <strong>%(PREV_HEADING)</strong>, apsveriet to formatēt kā <strong>Virsrakstu %(LEVEL)</strong>.',
      HEADING_EMPTY: 'Tukša pozīcija atrasta! Lai to novērstu, dzēsiet šo rindu vai mainiet tās formātu no <strong {C}>Galviņa %(level)</strong> uz <strong>Normāls</strong> vai <strong>Apakšsadaļa</strong>.',
      HEADING_LONG: 'Virsraksts ir garš! Virsraksti jāizmanto, lai sakārtotu saturu un izteiktu struktūru. Tām jābūt īsām, informatīvām un unikālām. Lūdzu, lai virsraksti būtu īsāki par %(MAX_LENGTH) rakstzīmēm (ne garāki par vienu teikumu). <hr> <strong {C}>%(HEADING_LENGTH) Rakstzīmes</strong>',
      HEADING_FIRST: 'Pirmais virsraksts lapā parasti ir 1. vai 2. virsraksts. Ar 1. virsrakstu jāsāk galvenā satura sadaļa, un tas ir galvenais virsraksts, kas raksturo lapas vispārējo mērķi. Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Galveno virsrakstu struktūru</a>.',
      HEADING_MISSING_ONE: 'Trūkst 1. virsraksta. 1. virsrakstam jābūt galvenā satura laukuma sākumam, un tas ir galvenais virsraksts, kas apraksta lapas vispārējo mērķi. Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Galveno struktūru</a>.',
      HEADING_EMPTY_WITH_IMAGE: 'Virsrakstā nav teksta, bet ir attēls. Ja tas nav virsraksts, mainiet tā formātu no <strong {C}>Virsraksts %(level)</strong> uz <strong>Normāls</strong> vai <strong>Apakšsadaļa</strong>. Pretējā gadījumā pievienojiet attēlam alt tekstu, ja tas nav dekoratīvs.',
      PANEL_HEADING_MISSING_ONE: 'Trūkst 1. pozīcijas!',
      PANEL_NO_HEADINGS: 'Virsraksti nav atrasti.',

      // Links
      LINK_EMPTY: 'Dzēst tukšas saites bez teksta.',
      LINK_EMPTY_LABELLEDBY: 'Saitei ir <code>aria-labelledby</code> ir tās vērtībai jābūt tukšai, vai nu tā nesakrīt ar citu elementu lapā, kam ir atribūts <code>id</code>.',
      LINK_EMPTY_NO_LABEL: 'Saitei nav atpazīstama teksta, kas būtu redzams ekrānlasītājiem un citām palīgtehnoloģijām. Lai labotu: <ul><li>Pievienojiet īsu tekstu, kas apraksta, kur saite ved.</li><li>Ja tā ir <a href="https://a11y-101.com/development/icons-and-links">ikonas saite vai SVG,</a>, tai, visticamāk, trūkst aprakstoša marķējuma.</li><li>Ja domājat, ka šī saite ir kļūda, kas radusies kopēšanas/ielīmēšanas kļūdas dēļ, apsveriet tās dzēšanu.</li></ul>',
      LINK_STOPWORD: 'Saite teksts, iespējams, nav pietiekami aprakstošs ārpus konteksta: <strong {C}>%(ERROR)</strong>',
      LINK_STOPWORD_ARIA: 'Lai arī tika norādīts pieejams nosaukums, apsveriet iespēju pārskatīt redzamo saites tekstu. Tādas frāzes kā &quot;<strong {C}>%(ERROR)</strong>&quot; nav nozīmīgas.',
      LINK_TIP: '<hr> <strong>Padoms!</strong> Izmantojiet skaidru un unikālu saites tekstu, kas apraksta saites galamērķi, parasti lapas vai dokumenta nosaukumu.',
      LINK_CLICK_HERE: 'Frāze "klikšķiniet" vai "klikšķiniet šeit" uzsver peles mehānismu, lai gan daudzi cilvēki neizmanto peli vai var skatīt šo tīmekļa vietni mobilajā ierīcē. Apsveriet iespēju izmantot citu darbības vārdu, kas attiecas uz uzdevumu.',
      DUPLICATE_TITLE: 'Atribūts <code>title</code> saitēm un attēliem ir paredzēts papildu informācijas sniegšanai, un tam vajadzētu būt <strong>atšķirīgam</strong> no teksta vai alt teksta. Nosaukuma teksts tiek parādīts, novietojot peli virs elementa, bet tas nav pieejams ar tastatūru vai pieskārienu ievadi. Apsveriet <a href="https://www.a11yproject.com/posts/title-attributes/">pilnībā izvairīties no title atribūta.</a>',
      LINK_SYMBOLS: 'Izvairieties izmantot simbolus kā aicinājumu rīkoties saites tekstā, ja vien tie nav paslēpti no palīgtehnoloģijām. Ekrāna lasītāji var nolasīt simbolus skaļi, kas var būt mulsinoši. Apsveriet to noņemšanu: <strong {C}>%(ERROR)</strong>',
      LINK_URL: 'Garākus, mazāk saprotamus URL, kas tiek izmantoti kā saites teksts, var būt grūti saprast, kad tiem piekļūst ar palīgtehnoloģiju palīdzību. Vairumā gadījumu URL vietā ir labāk izmantot cilvēkam saprotamu tekstu. Īsi URL (piemēram, vietnes sākumlapa) ir piemēroti.',
      LINK_DOI: 'Tīmekļa lapām vai tikai tiešsaistes resursiem <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA stila rokasgrāmatā</a> ir ieteikts izmantot aprakstošas saites, ap darba virsrakstu aptinot tā URL vai DOI. Garākus, mazāk saprotamus URL, kas tiek izmantoti kā saites teksts, var būt grūti saprast, kad tiem piekļūst ar palīgtehnoloģiju palīdzību.',
      LINK_NEW_TAB: 'Saite atveras jaunā cilnē vai logā bez brīdinājuma. Tas var radīt apjukumu, jo īpaši cilvēkiem, kuriem ir grūtības uztvert vizuālo saturu. Otrkārt, ne vienmēr ir laba prakse kontrolēt kāda cilvēka pieredzi vai pieņemt lēmumus viņa vietā. Norādiet, ka saite atveras jaunā logā, saites tekstā. <hr> <strong>Padoms!</strong> Apgūstiet labāko praksi: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">atvērt saites jaunos pārlūkprogrammas logos un cilnēs</a>.',
      LINK_FILE_EXT: 'Saite norāda uz PDF vai lejupielādējamu failu (piemēram, MP3, Zip, Word Doc) bez brīdinājuma. Saites tekstā norādiet faila veidu. Ja tas ir liels fails, apsveriet iespēju norādīt faila lielumu. <hr> <strong>Piemērs:</strong> Vadības ziņojums (PDF, 3 MB).',
      LINK_IDENTICAL_NAME: 'Saitei ir identisks teksts kā citai saitei, lai gan tā norāda uz citu lapu. Vairākas saites ar vienādu tekstu var radīt neskaidrības cilvēkiem, kuri izmanto ekrānlasītājus. <strong>Padomājiet, vai šādu saiti nevajadzētu padarīt aprakstošāku, lai palīdzētu to atšķirt no citām saitēm.</strong> <hr> <strong {B}>Pieejamais nosaukums</strong> <strong {C}>%(TEXT)</strong>',

      // Images
      MISSING_ALT_LINK_HAS_TEXT: 'Attēls tiek izmantots kā saite ar apkārtējo tekstu, lai gan atribūtam alt jābūt atzīmētam kā dekoratīvam vai nulles atribūtam.',
      MISSING_ALT_LINK: 'Attēls tiek izmantots kā saite, bet tam trūkst teksta! Lūdzu, pārliecinieties, ka alt tekstā ir aprakstīts, uz kurieni jūs aizved saite.',
      MISSING_ALT: 'Trūkst alt teksta! Ja attēls ir stāsts, noskaņa vai svarīga informācija, noteikti aprakstiet attēlu.',
      LINK_ALT_FILE_EXT: 'Alternatīvais teksts nedrīkst ietvert failu paplašinājumus vai attēlu izmērus. Pārliecinieties, ka alt teksts apraksta saites galamērķi, nevis burtisku attēla aprakstu. Noņemt: <strong {C}>%(ERROR)</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_PLACEHOLDER_ALT: 'Atrasts nenoteikts vai aizvietotājs alt teksts saistītajā attēlā. Pārliecinieties, ka alt teksts apraksta saites galamērķi, nevis burtisku attēla aprakstu. Aizstājiet šādu alt tekstu. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_SUS_ALT: 'Palīgtehnoloģijas jau norāda, ka tas ir attēls, tāpēc &quot;<strong {C}>%(ERROR)</strong>&quot; var būt lieks. Pārliecinieties, ka alt teksts apraksta saites galamērķi, nevis burtisku attēla aprakstu. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      ALT_FILE_EXT: 'Alternatīvais teksts nedrīkst ietvert failu paplašinājumus vai attēlu izmērus. Ja attēls ir stāsts, noskaņa vai svarīga informācija, noteikti aprakstiet attēlu. Noņemt: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      ALT_PLACEHOLDER: 'Atrasts nenoteikts vai aizvietotājs alt teksts. Aizstājiet šādu alt tekstu ar jēgpilnāku. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      SUS_ALT: 'Palīgtehnoloģijas jau norāda, ka tas ir attēls, tāpēc &quot;<strong {C}>%(ERROR)</strong>&quot; var būt lieks. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_NO_ALT_TEXT: 'Attēls saitē ir atzīmēts kā dekoratīvs, un saites teksta nav. Lūdzu, pievienojiet attēlam alt tekstu, kas apraksta saites galamērķi.',
      LINK_IMAGE_TEXT: 'Attēls ir atzīmēts kā dekoratīvs, lai gan saite izmanto apkārtējo tekstu kā aprakstošu etiķeti.',
      LINK_IMAGE_LONG_ALT: 'Alt teksta apraksts saistītajam attēlam ir <strong>pārāk garš</strong>. Saistīto attēlu alt tekstam ir jāapraksta, uz kurieni ved saite, nevis burtisks attēla apraksts. <strong>Vēlams kā alttekstu izmantot tās lapas virsrakstu, uz kuru ir saite.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Rakstzīmes</strong> <strong {C}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT: 'Attēla saitē ir ietverts alt teksts. <strong>Vai alt tekstā ir aprakstīts, uz kurieni jūs aizved saite?</strong> Apsveriet iespēju kā alt tekstu izmantot tās lapas nosaukumu, uz kuru ir saite. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT_AND_TEXT: 'Attēla saitē ir <strong>gan alt teksts, gan apkārt esošais saites teksts.</strong> Ja šis attēls ir dekoratīvs un tiek izmantots kā funkcionāla saite uz citu lapu, apsveriet iespēju atzīmēt attēlu kā dekoratīvu vai nulles tekstu - pietiek ar apkārtējo saites tekstu. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>Pieejamais nosaukums</strong> {L} <strong {B}>%(TEXT)</strong>',
      IMAGE_FIGURE_DECORATIVE: 'Attēls ir atzīmēts kā <strong>dekoratīvs</strong>, un palīgtehnoloģijas to ignorēs. <hr> Lai gan ir sniegts <strong>uzraksts</strong>, vairumā gadījumu attēlam ir jābūt arī alt tekstam. <ul><li>Alttekstam būtu jāsniedz īss attēlā redzamā apraksts.</li><li>Parakstā parasti būtu jāsniedz konteksts, lai sasaistītu attēlu ar apkārtējo saturu vai pievērstu uzmanību kādai konkrētai informācijai.</li></ul> Uzziniet vairāk: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>.',
      IMAGE_FIGURE_DUPLICATE_ALT: 'Neizmantojiet tieši tos pašus vārdus gan alt, gan virsraksta tekstā. Ekrānlasītāji informāciju paziņos divreiz. <ul><li>Alt tekstā būtu īsi jāapraksta, kas ir attēlā.</li><li>Papildinājumā parasti būtu jāsniedz konteksts, lai attēls būtu saistīts ar apkārtējo saturu, vai jāpievērš uzmanība kādai konkrētai informācijai.</li></ul> Uzziniet vairāk: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      IMAGE_DECORATIVE: 'Attēls ir atzīmēts kā <strong>dekoratīvs</strong>, un palīgtehnoloģijas to ignorēs. Ja attēls atspoguļo stāstu, noskaņu vai svarīgu informāciju, noteikti pievienojiet alt tekstu.',
      IMAGE_DECORATIVE_CAROUSEL: 'Attēls ir atzīmēts kā dekoratīvs, taču visiem attēliem karuselē vai galerijā jāiekļauj aprakstošs alternatīvs teksts, lai nodrošinātu vienādu pieredzi visiem.',
      IMAGE_ALT_TOO_LONG: 'Alt teksta apraksts ir <strong>pārāk garš</strong>. Alt tekstam ir jābūt īsam, bet jēgpilnam kā <em>tweet</em> (apmēram 100 rakstzīmes). Ja tas ir sarežģīts attēls vai grafiks, apsveriet iespēju ievietot garu attēla aprakstu tekstā zemāk vai akordeona komponentē. <hr> {ALT} <strong {B}>%(altLength) Rakstzīmes</strong> <strong {C}>%(ALT_TEXT)</strong>',
      IMAGE_PASS: '{ALT} %(ALT_TEXT)',

      // Form labels
      LABELS_MISSING_IMAGE_INPUT: 'Attēla pogai trūkst alt teksta. Lūdzu, pievienojiet alt tekstu, lai nodrošinātu pieejamu nosaukumu. Piemēram: Piemēram, <em>Meklēšana</em> vai <em>Nosūtīt</em>.',
      LABELS_INPUT_RESET: 'Atiestatīšanas pogas <strong>nevajadzētu izmantot, ja vien tas nav īpaši nepieciešams, jo tās var viegli aktivizēt kļūdas pēc. <hr> <strong>Tip!</strong> Uzziniet, kāpēc <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Pārtraukšanas un atcelšanas pogas rada lietojamības problēmas</a>.',
      LABELS_ARIA_LABEL_INPUT: 'Ievadei ir pieejams nosaukums, tomēr pārliecinieties, ka ir redzams arī marķējums. <hr> <strong {B}>Pieejamais nosaukums</strong> <strong {C}>%(TEXT)</strong>',
      LABELS_NO_FOR_ATTRIBUTE: 'Šim ievadam nav piesaistīta etiķete. Pievienojiet <code>for</code> atribūtu etiķetei, kas atbilst šīs ievades <code>id</code>. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
      LABELS_MISSING_LABEL: 'Šim ievadam nav piesaistīta etiķete. Lūdzu, pievienojiet šim ievadam <code>id</code> un pievienojiet etiķetei atbilstošu atribūtu <code>for</code>.',
      LABELS_PLACEHOLDER: 'Izšķirošais vietturis teksts apgrūtina cilvēkiem atcerēties, kāda informācija pieder laukam, un noteikt un labot validācijas problēmas. Tā vietā apsveriet iespēju izmantot pastāvīgi redzamu norādi pirms veidlapas lauka. <hr> Uzziniet vairāk: <a href="https://www.nngroup.com/articles/form-design-placeholders/">Vietturis veidlapu laukos ir kaitīgs.</a>',

      // Embedded content
      EMBED_VIDEO: 'Lūdzu, pārliecinieties, ka <strong>visiem videoklipiem ir slēptie titri.</strong> Visu audio un video materiālu titru nodrošināšana ir obligāta A līmeņa prasība. Titri palīdz cilvēkiem, kuri ir nedzirdīgi vai vājdzirdīgi.',
      EMBED_AUDIO: 'Lūdzu, nodrošiniet <strong>transkriptu visiem podkāstiem.</strong> Transkriptu nodrošināšana audio saturam ir obligāta A līmeņa prasība. Transkripcijas palīdz cilvēkiem, kuri ir nedzirdīgi vai vājdzirdīgi, taču tās var būt noderīgas ikvienam. Apsveriet iespēju transkriptu izvietot zem vai akordeona panelī.',
      EMBED_DATA_VIZ: 'Šādi datu vizualizācijas logrīki bieži rada problēmas cilvēkiem, kuri navigācijai izmanto tastatūru vai ekrāna lasītāju, un var radīt ievērojamas grūtības cilvēkiem ar vāju redzi vai krāsu aklumu. Ieteicams to pašu informāciju sniegt alternatīvā (teksta vai tabulas) formātā zem logrīka. <hr> Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/images/complex">sarežģītiem attēliem</a>.',
      EMBED_MISSING_TITLE: 'Iegultajam saturam ir nepieciešams pieejams nosaukums, kas raksturo tā saturu. Lūdzu, norādiet unikālu <code>title</code> vai <code>aria-label</code> atribūtu elementā <code>iframe</code>. Uzziniet vairāk par <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrame.</a>',
      EMBED_GENERAL: 'Nevar pārbaudīt iegulto saturu. Lūdzu, pārliecinieties, ka attēliem ir alt teksts, videoklipiem ir uzraksti, tekstam ir pietiekams kontrasts un interaktīvie komponenti ir <a href="https://webaim.org/techniques/keyboard/">pieejami no tastatūras.</a>.',
      EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> ar neuzmanāmiem elementiem nevajadzētu būt <code>tabindex="-1"</code>. Iegultais saturs nebūs pieejams ar tastatūru.',

      // QA
      QA_BAD_LINK: 'Atrasta slikta saite. Šķiet, ka saite norāda uz izstrādes vidi. <hr> {L} <strong {C}>%(LINK)</strong>',
      QA_IN_PAGE_LINK: 'Sapušušā saites uz vienu un to pašu lapu. Saistītās lapas mērķis neatbilst nevienam elementam šajā lapā.',
      QA_STRONG_ITALICS: 'Trešraksta un slīpraksta tagiem ir semantiska nozīme, un tos nevajadzētu izmantot, lai izceltu veselas rindkopas. Teksts treknrakstā jāizmanto, lai <strong>uzsvērtu kādu vārdu vai frāzi</strong>. Kursīvs jāizmanto, lai izceltu īpašvārdus (piemēram, grāmatu un rakstu nosaukumus), svešvārdus, citātus. Garie citāti jānoformē kā bloka citāts.',
      QA_PDF: 'Nevar pārbaudīt PDF failu pieejamību. PDF tiek uzskatīti par tīmekļa saturu, un arī tiem jābūt pieejamiem. PDF formātos bieži ir problēmas cilvēkiem, kas izmanto ekrānlasītājus (trūkst strukturālo tagu vai veidlapu lauku marķējumu), un cilvēkiem ar vāju redzi (teksts nepalielinās, kad tiek palielināts). <ul><li>Ja tā ir veidlapa, apsveriet iespēju kā alternatīvu izmantot pieejamu HTML veidlapu.</li><li>Ja tas ir dokuments, apsveriet iespēju to pārveidot par tīmekļa lapu.</li><li>Ja tas ir dokuments, apsveriet iespēju to pārveidot par tīmekļa vietni.</li></ul> Tādā gadījumā pārbaudiet <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF pieejamību programmā Acrobat DC.</a>',
      QA_DOCUMENT: 'Nevar pārbaudīt dokumenta pieejamību. Saistītie dokumenti tiek uzskatīti par tīmekļa saturu, un arī tiem jābūt pieejamiem. Lūdzu, pārbaudiet šo dokumentu manuāli. <ul><li>Padariet savu <a href="https://support.google.com/docs/answer/6199477?hl=lv">Google Workspace dokumentu vai prezentāciju pieejamāku.</a></li><li>Padariet savu <a href="https://support.microsoft.com/lv/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office dokumentu pieejamāku.</a></li></ul>',
      QA_BLOCKQUOTE: 'Vai šis ir virsraksts? <strong {C}>%(TEXT)</strong> <hr> Kvadrātiņi jāizmanto tikai pēdiņām. Ja tas ir paredzēts kā virsraksts, nomainiet šo blokcitāti uz semantisku virsrakstu (piemēram, 2. vai 3. virsraksts).',
      QA_FAKE_HEADING: 'Vai šis ir virsraksts? <strong {C}>%(TEXT)</strong> <hr> Rindiņa ar treknu vai lielu tekstu var izskatīties kā virsraksts, bet cilvēks, kas izmanto ekrāna lasītāju, nevar noteikt, ka tas ir svarīgs, vai pāriet uz tā saturu. Trešais vai lielais teksts nekad nedrīkst aizstāt semantiskos virsrakstus (no 2. līdz 6. virsrakstam).',
      QA_FAKE_LIST: 'Vai mēģināt izveidot sarakstu? Atrasts iespējamais saraksta vienums: <strong {C}>%(firstPrefix)</strong> <hr> Pārliecinieties, ka izmantojat semantiskos sarakstus, to vietā izmantojot lodītes vai skaitļu formatēšanas pogas. Izmantojot semantisko sarakstu, palīgtehnoloģijas spēj nodot tādu informāciju kā kopējais elementu skaits un katra elementa relatīvā pozīcija sarakstā. Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">semantiskajiem sarakstiem.</a>',
      QA_UPPERCASE: 'Atrasti visi vāciņi. Daži ekrāna lasītāji var interpretēt tekstu ar lielajiem burtiem kā akronīmu un lasīt katru burtu atsevišķi. Turklāt dažiem cilvēkiem ir grūtāk lasīt tekstu ar lielajiem burtiem, un tas var radīt iespaidu, ka teksts ir RAKSTS.',
      QA_UNDERLINE: 'Pasvītroto tekstu var sajaukt ar saitēm. Apsveriet iespēju izmantot citu stilu, piemēram, <code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> vai <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
      QA_SUBSCRIPT: 'Apakšindiksu un augšindiksu formatēšanas opcijas jāizmanto tikai, lai mainītu teksta pozīciju tipogrāfisko konvenciju vai standartu vajadzībām. Tās nevajadzētu <strong>nevajadzētu</strong> izmantot tikai noformējuma vai izskata nolūkos. Veselu teikumu formatēšana rada lasāmības problēmas. Piemēroti lietošanas gadījumi būtu eksponentu, kārtas skaitļu, piemēram, 4<sup>tā</sup> vietā ceturtā, un ķīmisko formulu (piemēram, H<sub>2</sub>O) attēlošana.',
      QA_NESTED_COMPONENTS: 'Izvairieties no interaktīvo izkārtojuma komponentu ieliktajiem, piemēram, akordeonu ievietošanas cilnēs vai cilņu ievietošanas akordeonos. Tas var sarežģīt navigāciju, palielināt kognitīvo slodzi un izraisīt satura ignorēšanu.',
      QA_JUSTIFY: 'Izvairieties no izmantošanas izlīdzinātam tekstam, kas izlīdzināts gan pie kreisās, gan pie labās malas. Tas var būt grūti lasāms dažiem cilvēkiem, jo vārdu starpā ir nevienmērīgas atstarpes. Labākai lasāmībai izmantojiet tekstu, kas izlīdzināts pa kreisi.',
      QA_SMALL_TEXT: 'Mazs teksts ir grūtāk lasāms, it īpaši cilvēkiem ar vāju redzi. Lai nodrošinātu labāku lasāmību, izvairieties no fontu izmēriem, kas ir mazāki par noklusējuma izmēru.',

      // Shared
      ACC_NAME: '<strong {B}>Pieejamais nosaukums</strong> %(TEXT)',
      ACC_NAME_TIP: '<hr><strong>Ieteikums!</strong> "Pieejamais nosaukums" ir galīgā etiķete, kas tiek sazināta ar cilvēkiem, kuri izmanto palīgtehnoloģijas, un kuru aprēķina ARIA. Tas palīdz viņiem saprast saites vai pogas mērķi.',
      HIDDEN_FOCUSABLE: 'Saites vai pogas atribūtam ir <code>aria-hidden=&quot;true&quot;</code>, bet tas ir joprojām fokusējams no tastatūras. Ja jūs vēlaties paslēpt dublējošu saiti vai pogu, pievienojiet arī <code>tabindex=&quot;-1&quot;</code>. Pretējā gadījumā <code>aria-hidden=&quot;true&quot;</code> nedrīkst izmantot elementiem, kas var saņemt fokusu. <hr> Uzziniet vairāk par <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">aria-hidden atribūtu.</a>',

      // Developer
      DUPLICATE_ID: 'Atrasts <strong>duplicate ID</strong>. Ir zināms, ka dubultā ID kļūdas rada problēmas palīgtehnoloģijām, kad tās mēģina mijiedarboties ar saturu. Lūdzu, noņemiet vai mainiet šādu ID. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
      UNCONTAINED_LI: 'Visiem <code>&lt;li&gt;</code> saraksta elementiem jābūt ievietotiem <code>&lt;ul&gt;</code> nesakārtotas vai <code>&lt;ol&gt;</code> sakārtotas elementus. Šī struktūra palīdz ekrāna lasītājiem precīzi paziņot sarakstu un tā elementus.',
      TABINDEX_ATTR: 'Elementam nevajadzētu būt ar <code>tabindex</code> atribūtu, kas ir lielāks par 0.',

      // Meta
      META_LANG: 'Lapas valoda nav deklarēta! Lūdzu, <a href="https://www.w3.org/International/questions/qa-html-language-declarations">deklarējiet valodu HTML tagā.</a>',
      META_TITLE: 'Trūkst lapas virsraksta! Lūdzu, norādiet <a href="https://developer.mozilla.org/lv/docs/Web/HTML/Element/title">lapas virsrakstu.</a>',
      META_SCALABLE: 'Noņemiet parametru <code>user-scalable="no"</code> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta atzīmē</a>, lai atļautu mērogošanu.',
      META_MAX: 'Pārliecinieties, ka parametrs <code>maximum-scale</code> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta atzīmē</a> nav mazāks par 2.',
      META_REFRESH: 'Lapai nedrīkst automātiski atsvaidzināt, izmantojot meta tagu.',

      // Buttons
      BTN_EMPTY: 'Poga ir bez pieejama nosaukuma, kas apraksta tās mērķi.',
      BTN_EMPTY_LABELLEDBY: 'Pogai ir <code>aria-labelledby</code> vērtība, kas ir tukša vai neatbilst cita elementa <code>id</code> vērtībai lapā.',
      BTN: 'poga',
      BTN_TIP: 'Uzziniet, kā izveidot <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">pieejamu pogu.</a>',
      BTN_ROLE_IN_NAME: 'Neiekļaujiet vārdu "poga" pogas nosaukumā. Ekrāna lasītāji jau paziņo elementa lomu papildus tā nosaukumam.',
      LABEL_IN_NAME: 'Šī elementa redzamais teksts šķiet atšķirīgs no pieejamā nosaukuma, kas var radīt neskaidrības palīdzības tehnoloģiju lietotājiem. Lūdzu, pārskatiet: <hr> <strong {B}>Pieejams Nosaukums</strong> <strong {C}>%(TEXT)</strong>',

      // Tables
      TABLES_MISSING_HEADINGS: 'Trūkst tabulu virsrakstu! Pieejamām tabulām ir nepieciešama HTML iezīmēšana, kas norāda virsrakstu šūnas un datu šūnas, kas nosaka to savstarpējo saistību. Šī informācija nodrošina kontekstu cilvēkiem, kuri izmanto palīgtehnoloģijas. Tabulas jāizmanto tikai tabulas datiem. <hr> Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/tables/">pieejamām tabulām</a>.',
      TABLES_SEMANTIC_HEADING: 'Semantiskos virsrakstus, piemēram, Heading 2 vai Heading 3, drīkst izmantot tikai satura sadaļās; <strong>ne</strong> HTML tabulās. Tabulu virsrakstus norādiet, izmantojot elementu <code>&lt;th&gt;</code>. <hr> Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/tables/">pieejamām tabulām</a>.',
      TABLES_EMPTY_HEADING: 'Atrasta tukša tabulas galvene! Tabulu galvenēm <strong>nevajadzētu būt tukšām. Ir svarīgi norādīt rindu un/vai kolonnu galvenes, lai atspoguļotu to saistību. Šī informācija sniedz kontekstu cilvēkiem, kuri izmanto palīgtehnoloģijas. Paturiet prātā, ka tabulas jāizmanto tikai tabulārajiem datiem. <hr> Uzziniet vairāk par <a href="https://www.w3.org/WAI/tutorials/tables/">pieejamām tabulām</a>.',

      // Contrast
      CONTRAST_NORMAL: 'Normāla izmēra tekstam jābūt ar kontrasta attiecību vismaz %(RATIO).',
      CONTRAST_LARGE: 'Liela izmēra tekstam jābūt ar kontrasta attiecību vismaz %(RATIO).',
      CONTRAST_ERROR: 'Tekstam nav pietiekama kontrasta ar fona krāsu, tāpēc tas ir grūti lasāms.',
      CONTRAST_WARNING: 'Šī teksta kontrasts nav zināms un tam jābūt pārbaudītam manuāli. Pārliecinieties, ka tekstam un fonam ir spēcīgs kontrasts.',
      CONTRAST_ERROR_GRAPHIC: 'Grafikai nav pietiekama kontrasta ar fona krāsu, tāpēc to ir grūti redzēt.',
      CONTRAST_WARNING_GRAPHIC: 'Šīs grafikas kontrasts nav zināms un tam jābūt pārbaudītam manuāli.',
      CONTRAST_TIP_GRAPHIC: 'Grafikām un lietotāja interfeisa elementiem jābūt ar kontrasta attiecību vismaz 3:1.',
      CONTRAST_OPACITY: 'Palieliniet necaurspīdīgumu, lai uzlabotu redzamību.',
      CONTRAST_APCA: 'Šis kontrasts nav pietiekams jebkuram teksta izmēram. Apsveriet iespēju izmantot šo krāsu un teksta lieluma kombināciju?',
      CONTRAST_COLOR: 'Apsveriet iespēju izmantot šo krāsu tā vietā?',
      CONTRAST_SIZE: 'Apsveriet iespēju palielināt teksta izmēru šai krāsu kombinācijai?',
      CONTRAST_PLACEHOLDER: 'Šī ievades lauka aizvietotājteksts nav pietiekami kontrastējošs ar fonu, tāpēc to ir grūti lasīt.',
      CONTRAST_PLACEHOLDER_UNSUPPORTED: 'Šī vietturētāja teksta kontrasts nav zināms un tas jāizvērtē manuāli. Pārliecinieties, ka tekstam un fonam ir spēcīgi kontrastējošas krāsas.',
      CONTRAST_INPUT: 'Šī ievades lauka teksts nav pietiekami kontrastējošs ar fonu, tāpēc to ir grūti lasīt.',
      CONTRAST: 'Kontrasts',
      UNKNOWN: 'Nezināms',
      FG: 'Priekšplāns',
      BG: 'Fons',
      NO_SUGGESTION: 'Nekādas pieejamās kombinācijas nevar atrast, mainot tikai teksta krāsu. Pamēģiniet mainīt fona krāsu.',
    },
  };

  return lv;

}));
