import { path } from '../utils/paths';

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  href: string;
  title: string;
  neighborhood: string;
  buildingType: string;
  year: number;
  duration: string;
  mainImage: string;
  serviceSlugs: string[];
  tags: string[];
  excerpt: string;
  challenge: string;
  solution: string;
  scopeList: string[];
  materialsUsed: string[];
  clientQuote?: {
    quote: string;
    author: string;
    neighborhood: string;
  };
}

export const projectsData: ProjectCaseStudy[] = [
  {
    id: 'bad-st-hanshaugen',
    slug: 'bad-st-hanshaugen',
    href: path('/prosjekter/bad-st-hanshaugen/'),
    title: 'Totalrenovering av bad i klassisk bygård',
    neighborhood: 'St. Hanshaugen, Oslo',
    buildingType: 'Bygård fra 1898',
    year: 2025,
    duration: '4,5 uker',
    mainImage: path('/images/bad.jpg'),
    serviceSlugs: ['oppussing-av-bad-oslo'],
    tags: ['Våtrom', 'Flislegging', 'Bygård', 'Totaloppussing'],
    excerpt: 'Fullstendig forvandling av et utidsmessig bad fra 1980-tallet til et moderne, luksuriøst våtrom med 60x60 granittkeramikk, solid membran og skjult røranlegg.',
    challenge: 'Badet i 4. etasje i en eldre bygård hadde skjeve bjelkelag, et slitt støpejernssluk og trang adkomst i trappeoppgangen. Byggherren ønsket moderne storformatfliser og vegghengt toalett, noe som krevde grundig avstiving av undergulvet for å hindre svikt i flisefugene.',
    solution: 'Vi rev rommet helt ned til bjelkelaget, forsterket etasjeskillet med nye bjelker og etablerte støp med korrekt fall til sluk. Deretter monterte vi våtromsplater, vanntett membran og 60x60 fliser med 45° gjærede hjørner (jolly-kutt). Vi koordinerte rørlegger for rør-i-rør og elektriker for varmekabler og belysning.',
    scopeList: [
      'Riving, miljøsanering og bortkjøring av 2,4 tonn avfall',
      'Forsterkning av trebjelkelag og ny gulvstøp med 1:50 fall i dusjsone',
      'Vanntett våtromsmembran med mansjetter ved alle rørgjennomføringer',
      'Flislegging med 60x60 cm fliser på gulv og vegg, inkl. gjærede hjørner',
      'Montering av 100 cm servantskap, speil med integrert lys og dusjhjørne',
      'Praktisk koordinering med rørlegger og elektriker',
      'Sluttkontroll og grundig gjennomgang sammen med kunden'
    ],
    materialsUsed: [
      'Laticrete / godkjent banemembran',
      '60x60 granittkeramikkfliser fra FagFlis',
      'Geberit innbyggingssisterne og veggskål',
      'Mapei fleksibel flislim og fugefarge'
    ],
    clientQuote: {
      quote: 'Oppussingen av badet gikk knirkefritt. Arbeidsplassen ble støvskjermet, fellesarealene var alltid ryddige, og fremdriftsplanen på 4,5 uker holdt på dagen.',
      author: 'Andreas & Christine',
      neighborhood: 'St. Hanshaugen'
    }
  },
  {
    id: 'kjokken-frogner',
    slug: 'kjokken-frogner',
    href: path('/prosjekter/kjokken-frogner/'),
    title: 'Kjøkkenoppussing og takhøye foringer i Frogner-leilighet',
    neighborhood: 'Frogner, Oslo',
    buildingType: 'Klassisk bygårdsleilighet (3,2 m takhøyde)',
    year: 2025,
    duration: '3 uker',
    mainImage: path('/images/kjokken.jpg'),
    serviceSlugs: ['kjokkenoppussing-oslo', 'gulvlegging-oslo'],
    tags: ['Kjøkken', 'Bygård', 'Foringer', 'IKEA'],
    excerpt: 'Montering av skreddersydd kjøkken med takhøye foringer mot 3,2 meters takhøyde, oppretting av skjeve murvegger og integrerte hvitevarer.',
    challenge: 'Rommet hadde store skjevheter på opptil 4 cm i hjørnene, og kunden ønsket skap som gikk helt opp til takets stukkatur uten glipper. Samtidig måtte det legges nye kurser til platetopp og integrert stekeovn.',
    solution: 'Vi lektrer ut og rettet opp veggene med to lag plater for å sikre optimal bæreevne for tunge overskap. Kjøkkenskrogene ble montert i eksakt vater, og vi produserte skreddersydde foringer tilpasset rommets stukkatur og takprofiler. Underlimt oppvaskkum og heltre eikeplate ble montert med presisjon.',
    scopeList: [
      'Demontering og fjerning av eksisterende 90-talls kjøkken',
      'Oppretting av skjeve vegger med lekter og gipsplater',
      'Montering av over- og underskap med dempere og integrerte skuffer',
      'Skreddersøm av takforinger mot stukkatur og profilert gesims',
      'Tilskjæring og montering av heltre benkeplate med oljet overflate',
      'Flislegging av sprutsone over benk med hvite metrostiler',
      'Koordinering med elektriker og rørlegger for tilkobling'
    ],
    materialsUsed: [
      'IKEA Metod skrog med spesialtilpassede fronter',
      'Heltre benkeplate i massiv hvitpigmentert eik',
      'Waterguard lekkasjestopper med trådløse sensorer',
      'Klassiske hvite fasettslipte metrostiler'
    ],
    clientQuote: {
      quote: 'Foringene mot stukkaturen er en fryd for øyet. Det ser ut som kjøkkenet ble bygget inn i leiligheten fra starten av!',
      author: 'Henrik M.',
      neighborhood: 'Frogner'
    }
  },
  {
    id: 'gulv-majorstuen',
    slug: 'gulv-majorstuen',
    href: path('/prosjekter/gulv-majorstuen/'),
    title: 'Avretting av undergulv og 1-stavs eikeparkett',
    neighborhood: 'Majorstuen, Oslo',
    buildingType: 'Murbygård fra 1920-tallet',
    year: 2024,
    duration: '1 uke',
    mainImage: path('/images/gulv.jpg'),
    serviceSlugs: ['gulvlegging-oslo'],
    tags: ['Gulvlegging', 'Flytsparkel', 'Trinnlyd', 'Parkett'],
    excerpt: 'Komplett avretting av 78 m² ujevnt undergulv med fiberarmert flytsparkel, godkjente trinnlydsplater og legging av børstet 1-stavs eikeparkett.',
    challenge: 'Undergulvet i den romslige leiligheten hadde svanker på opptil 18 mm og knirket kraftig. Sameiet krevde skriftlig dokumentasjon på trinnlydsdemping (53 dB) mot naboen under før parketten kunne legges.',
    solution: 'Vi skrudde fast eksisterende underlag for å stoppe knirk, primet hele arealet og la ut hurtigtørkende fiberarmert avrettingsmasse. Deretter monterte vi Hunton Silencio trinnlydsplater og la 1-stavs mattlakkert eikeparkett med ekspansjonsfuge og underskårne dørkarmer.',
    scopeList: [
      'Fjerning av gammelt gulvbelegg og sliping av underlag',
      'Forsterkning og mekanisk fastskruing mot knirkelyder',
      'Priming og flytsparkling av 78 m² gulvareal til ± 2 mm planhet',
      'Legging av godkjente Hunton Silencio trinnlydsplater',
      'Flytende legging av 1-stavs børstet eikeparkett',
      'Presis underskjæring av 6 dørkarmsett med multimaskin',
      'Montering av nye eikefotlister og overgangstak i børstet stål'
    ],
    materialsUsed: [
      'Hey’di Flyt Støp fiberarmert avrettingsmasse',
      'Hunton Silencio 6 mm trinnlydsplater',
      'Kährs 1-stavs eikeparkett (mattlakkert)',
      'Hvitpigmenterte eikelister'
    ],
    clientQuote: {
      quote: 'Endelig et helt flatt gulv uten knirk! Dokumentasjonen til sameiet ble levert samme dag, og naboen under har ikke hørt et pip.',
      author: 'Therese V.',
      neighborhood: 'Majorstuen'
    }
  },
  {
    id: 'helsparkling-grunerlokka',
    slug: 'helsparkling-grunerlokka',
    href: path('/prosjekter/helsparkling-grunerlokka/'),
    title: 'Helsparkling, støvfri sliping og maling av bygårdsleilighet',
    neighborhood: 'Grünerløkka, Oslo',
    buildingType: 'Klassisk bygårdsleilighet fra 1905',
    year: 2024,
    duration: '1,5 uker',
    mainImage: path('/images/maling.jpg'),
    serviceSlugs: ['malerarbeid-oslo'],
    tags: ['Maling', 'Helsparkling', 'Jotun Lady', 'Støvfri sliping'],
    excerpt: 'Forvandling av grove murvegger og gammel strietapet til silkemyke, slette overflater malt med Jotun Lady Pure Color i tidløse skandinaviske farger.',
    challenge: 'Leiligheten på 65 m² hadde sprukket strietapet og ujevne pussvegger. Eierne ønsket helt slette overflater, men fryktet at slipestøv skulle spre seg til fellesarealer og inventar.',
    solution: 'Vi fjernet all løs tapet, etablerte støvsluser i døråpningene og helsparklet i tre strøk med armeringsbånd i alle plateskjøter og hjørner. Sliping ble utført med giraffsliper koblet til industriell HEPA-støvsuger, som fjernet 99 % av støvet. Toppstrøkene ble rullet med Jotun Lady Pure Color og listverket malt med Supreme Finish.',
    scopeList: [
      'Komplett tildekking av gulv, maskering og montering av støvsluser',
      'Fjerning av løs tapet og flekkbehandling med sperregrunn',
      'Helsparkling av alle rom i tre påføringer for maksimal planhet',
      'Støvfri maskinsliping med HEPA-avtrekk og støvtørking',
      'Akrylfuging av alle hjørneoverganger mot tak og lister',
      'To strøk Jotun Lady Pure Color på vegger og tak',
      'To strøk Jotun Supreme Finish på profilerte vinduskarmer og dører'
    ],
    materialsUsed: [
      'Jotun rullesparkel medium og fin',
      'Jotun papir-armeringsbånd',
      'Jotun Lady Pure Color (fargene Kalk og Space)',
      'Jotun Lady Supreme Finish (halvblank på treverk)'
    ],
    clientQuote: {
      quote: 'Vi ble overrasket over hvor lite støv det faktisk ble. Veggene er snorrette og fargene ble helt nydelige.',
      author: 'Jonas & Julie',
      neighborhood: 'Grünerløkka'
    }
  },
  {
    id: 'garderobe-nordstrand',
    slug: 'garderobe-nordstrand',
    href: path('/prosjekter/garderobe-nordstrand/'),
    title: 'Plassbygd garderobeinnredning og nye innerdører',
    neighborhood: 'Nordstrand, Oslo',
    buildingType: 'Enebolig',
    year: 2024,
    duration: '4 dager',
    mainImage: path('/images/montering.jpg'),
    serviceSlugs: ['montering-oslo'],
    tags: ['Snekkerarbeid', 'Innbygging', 'Garderobe', 'Dører'],
    excerpt: 'Skreddersydd innbygging av modulær garderobe med spesialtilpassede tak- og sideforinger, samt montering av fem nye massive innerdører.',
    challenge: 'Kunden ønsket et eksklusivt "plassbygd" uttrykk i hovedsoverommet til en fornuftig pris, samt utskifting av gamle, skjeve finer-dører fra 1970-tallet som subbet i gulvet.',
    solution: 'Vi monterte IKEA Pax-moduler oppå en spesialbygd sokkel, vatret opp hele konstruksjonen og bygget inn skapene med foringer mot sidevegger og tak. Vi monterte fem nye formpressede Swedoor-innerdører med nye massive karmer, magnetlåskasser og dempelister for lydreduksjon.',
    scopeList: [
      'Bygging av bærende og oppvatret tresokkel for garderoben',
      'Sammensetting og solid forankring av fire garderobeskrog',
      'Tilskjæring og montering av tak- og sideforinger for innebygd finish',
      'Demontering og fjerning av 5 gamle innerdører og karmer',
      'Montering og justering av 5 nye kompakte kvalitetsdører i vater',
      'Montering av nye profilerte gerikter og overgangslister',
      'Fuging og kosmetisk sluttbehandling med rydding'
    ],
    materialsUsed: [
      'IKEA Pax stammer og skuffesystemer',
      'MDF foringer lakkert i matchende fargekode',
      'Swedoor Stable massive innerdører med karmsett',
      'Hoppe dørvridere i børstet stål'
    ],
    clientQuote: {
      quote: 'Garderoben ser ut som den ble levert av et dyrt møbelsnekkerfirma. Dørene lukkes med et dempet, solid klikk.',
      author: 'Eirik & Marte',
      neighborhood: 'Nordstrand'
    }
  },
  {
    id: 'fasademaling-nordstrand',
    slug: 'fasademaling-nordstrand',
    href: path('/prosjekter/fasademaling-nordstrand/'),
    title: 'Utvendig maling av trehus og utskifting av kledningsbord',
    neighborhood: 'Nordstrand / Bekkelaget, Oslo',
    buildingType: 'Klassisk trevilla fra 1928',
    year: 2025,
    duration: '2 uker',
    mainImage: path('/images/utvendig-maling.jpg'),
    serviceSlugs: ['utvendig-maling-oslo'],
    tags: ['Utvendig maling', 'Trehus', 'Jotun Drygolin', 'Fasade'],
    excerpt: 'Fasadevask, soppdreper, skraping og to strøk Jotun Drygolin Nordic Extreme på klassisk trevilla i Oslo, inkludert utskifting av værslitt kledning.',
    challenge: 'Villaens sør- og vestvegg var sterkt utsatt for sol og vær. Malingen flasset flekkvis, det var begynnende overflatesopp i skyggepartier, og tre vannbrett over kjellervinduer hadde råteskader som krevde utbedring før maling.',
    solution: 'Vi monterte godkjent fasadestillas, vasket hele huset med Jotun Kraftvask og sopp-/algedreper. Råteskadedede bord og vannbrett ble erstattet med ny trykkimpregnert trelast. All flakende maling ble skrapet mekanisk, endeved primet med Jotun Visir, og to fyldige toppstrøk med Drygolin Nordic Extreme ble påført kledning og staffasje.',
    scopeList: [
      'Rigg og montering av godkjent fasadestillas rundt hele boligen',
      'Skånsom fasadevask med kraftvask og påføring av sopp-/algedreper',
      'Grundig mekanisk skraping og stålbørsting av løs maling',
      'Snekkerarbeid: utskifting av råteskadede kledningsbord og vannbrett',
      'Grunning av alle snittflater, endeved og bart tre med Jotun Visir',
      'Nøye maskering av vinduer, grunnmur, terrasse og beplantning',
      'To strøk Jotun Drygolin Nordic Extreme på fasade og staffasje',
      'Demontering av stillas, opprydding av tomten og felles sluttbefaring'
    ],
    materialsUsed: [
      'Jotun Kraftvask og sopp-/algedreper',
      'Jotun Visir Oljegrunning (pigmentert)',
      'Jotun Drygolin Nordic Extreme (Oker og Egghvit staffasje)',
      'C24 konstruksjonsvirke og impregnert furukledning'
    ],
    clientQuote: {
      quote: 'Huset ser helt nytt ut! Det gir en enorm trygghet å vite at grunnarbeidet ble gjort skikkelig og at treverket er beskyttet mot råte i mange år fremover.',
      author: 'Lars Petter & Silje',
      neighborhood: 'Nordstrand'
    }
  }
];
