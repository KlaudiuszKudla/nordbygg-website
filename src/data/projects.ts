import { path } from '../utils/paths';

export interface ProjectGalleryImage {
  src: string;
  alt: string;
  caption?: string;
  phase?: 'Bygningen' | 'Før' | 'Under arbeid' | 'Ferdigstilt' | 'Detalj';
}

export interface ProjectCaseStudy {
  id: string;
  slug: string;
  href: string;
  title: string;
  neighborhood: string;
  buildingType: string;
  mainImage: string;
  gallery?: ProjectGalleryImage[];
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
    id: 'langsiktig-eiendomsdrift-frogner-bygard',
    slug: 'langsiktig-eiendomsdrift-frogner-bygard',
    href: path('/prosjekter/langsiktig-eiendomsdrift-frogner-bygard/'),
    title: 'Langsiktig eiendomsdrift og oppgradering av klassisk bygård',
    neighborhood: 'Frogner / Majorstuen, Oslo',
    buildingType: 'Klassisk bygård fra 1890-tallet med næringseiendom og leiligheter',
    mainImage: path('/images/bygard-fasade-osteklokken.jpg'),
    gallery: [
      {
        src: path('/images/bygard-fasade-osteklokken.jpg'),
        alt: 'Klassisk hjørnebygård på Frogner med Osteklokken på gateplan',
        caption: 'Bygningen: Typisk ærverdig Oslo-bygård hvor Waldemar Kudla har hatt helhetlig teknisk driftsansvar, tilsyn og oppfølging over mange år.',
        phase: 'Bygningen'
      },
      {
        src: path('/images/bygard-bakgard-fasade.jpg'),
        alt: 'Bakgårdsfasader og fellesarealer i bygården',
        caption: 'Fellesarealer & fasader: Løpende oppfølging av bakgårdsfasader, taknedløp, belysning og bygningsmasse for sameiet.',
        phase: 'Detalj'
      },
      {
        src: path('/images/bakgard-skifer-arbeid-ovenfra.jpg'),
        alt: 'Under arbeid: mønsterlegging av bruddskifer og belegningsstein sett ovenfra',
        caption: 'Under arbeid: Oppgradering av bakgård – presis mønsterlegging av naturstein/skifer og belegningsstein utført av Waldemar og teamet.',
        phase: 'Under arbeid'
      },
      {
        src: path('/images/bakgard-skifer-ferdig.jpg'),
        alt: 'Ferdigstilt oppgradert bakgård med skifersirkel og belegningsstein',
        caption: 'Ferdigstilt bakgård: Utemiljøet forvandlet til et representativt og trivelig samlingspunkt med sittegrupper til glede for alle beboere.',
        phase: 'Ferdigstilt'
      }
    ],
    serviceSlugs: ['vaktmester-oslo'],
    tags: ['Eiendomsdrift', 'Vaktmester', 'Driftstekniker', 'Bygård', 'Bakgård', 'Skifer', 'Sameie', 'Frogner'],
    excerpt: 'Helhetlig teknisk eiendomsdrift og praktisk forvaltning over mange år i ærverdig hjørnebygård på Frogner, inkludert totaloppgradering av bakgården med skifer og belegningsstein.',
    challenge: 'Klassiske bygårder med kombinert næringsvirksomhet på gateplan og private boligleiligheter stiller strenge krav til pålitelig teknisk oppfølging. Bygget krevde kontinuerlig tilsyn med varmeanlegg, sanitær, avfallshåndtering, fellesarealer, samt en totalrenovering av den slitte og ujevne bakgården for å sikre god vannavrenning og trivsel.',
    solution: 'Waldemar Kudla fungerte som fast teknisk driftspartner og vaktmesteransvarlig for eiendommen over en årrekke. Som en del av verdiskapingen utførte han en total oppgradering av bakgården: ny bærebunn, legging av håndtilpasset bruddskifer i sentersonen, belegningsstein langs ganglinjer, oppretting mot kumlokk og montering av sittegruppe. Waldemar håndterte løpende all koordinering mellom styret, næringsdrivende og beboere.',
    scopeList: [
      'Fast teknisk tilsyn med tekniske rom, pumper, ventilasjon og fellesarealer',
      'Løpende vedlikehold, mindre reparasjoner og koordinering ved akutte hendelser',
      'Oppfølging av takrenner, sluk, overvann og fuktsikring av bygningsmassen',
      'Totalrenovering av felles bakgård: utgraving, pukkfylling og fiberduk',
      'Håndtilpasning og legging av uregelmessig bruddskifer med sentrert dekorativ steinsirkel',
      'Presis legging av belegningsstein og granittkantstein mot fasader og inngangspartier',
      'Fast kontaktledd for beboere og styret for trygg og ryddig drift'
    ],
    materialsUsed: [
      'Norsk bruddskifer (naturstein) med rustikk overflate',
      'Tromlet belegningsstein i gråmix',
      'Granittkantstein for solide overganger',
      'Fiberduk klasse N2 og vasket settegrus 2–4 mm',
      'Ugresshemmende fugesand for varig stabilitet'
    ],
    clientQuote: {
      quote: 'Waldemar har vært en uvurderlig ressurs for gården vår i mange år. Han kjenner hver krik og krok av bygget, og bakgården han oppgraderte er nå gårdens flotteste samlingssted.',
      author: 'Styreleder Sameiet',
      neighborhood: 'Frogner / Majorstuen, Oslo'
    }
  },
  {
    id: 'totalrenovering-stue-apen-kjokkenlosning',
    slug: 'totalrenovering-stue-apen-kjokkenlosning',
    href: path('/prosjekter/totalrenovering-stue-apen-kjokkenlosning/'),
    title: 'Totalrenovering av stue og åpen kjøkkenløsning',
    neighborhood: 'Majorstuen / Sentrum, Oslo',
    buildingType: 'Byleilighet med åpen planløsning',
    mainImage: path('/images/stue-kjokken-totalrenovering-oversikt.jpg'),
    gallery: [
      {
        src: path('/images/stue-kjokken-totalrenovering-oversikt.jpg'),
        alt: 'Sammenhengende allrom med åpen kjøkkenløsning, spiseplass og stue',
        caption: 'Oversikt: Sammenhengende allrom med åpen kjøkkenløsning, spiseplass og stue, opplyst av naturlig dagslys fra balkongdør.',
        phase: 'Ferdigstilt'
      },
      {
        src: path('/images/stue-kjokken-u-kjokken-detalj.jpg'),
        alt: 'U-formet kjøkken med massiv trebenkeplate, integrerte hvitevarer og spotkasse med downlights',
        caption: 'Kjøkkensone: U-kjøkken med matt hvite grepsfrie fronter, massiv trebenkeplate, underlimt vask, integrert koketopp og tilpasset spotkasse med downlights.',
        phase: 'Detalj'
      },
      {
        src: path('/images/stue-kjokken-spisesone-slettvegg.jpg'),
        alt: 'Helsparklede og nymalte slette vegger i lun fargetone og terskelfri gulvovergang',
        caption: 'Overflater & lys: Helsparklede slettvegger malt med supermatt Jotun Lady i lun greige-tone, kombinert med terskelfri gulvovergang for en sømløs romfølelse.',
        phase: 'Detalj'
      },
      {
        src: path('/images/stue-kjokken-salong-innsyn.jpg'),
        alt: 'Helhetlig utsikt fra sofakroken mot spisesone og kjøkkenhalvøy',
        caption: 'Helhet: Perspektiv fra stuesonen mot kjøkkenhalvøy og spisestue som viser rommets naturlige flyt og sonedeling.',
        phase: 'Ferdigstilt'
      }
    ],
    serviceSlugs: ['kjokkenoppussing-oslo', 'malerarbeid-oslo', 'gulvlegging-oslo', 'montering-oslo'],
    tags: ['Totalrenovering', 'Åpen kjøkkenløsning', 'U-kjøkken', 'Helsparkling', 'Parkett', 'Spotkasse', 'Oslo'],
    excerpt: 'Komplett innvendig forvandling av stue og kjøkken til en lys, sammenhengende allromsløsning med spesialtilpasset U-kjøkken, heltre benkeplate, sømløst gulv og helsparklede overflater.',
    challenge: 'Leiligheten hadde opprinnelig en trang, avskjermet kjøkkensone og slitte overflater med ujevne underlag. Eieren ønsket å åpne opp rommet for å etablere en sosial og moderne allromsløsning med god belysning, rikelig benkeplass og gjennomgående gulv uten terskler.',
    solution: 'Vi rev den opprinnelige innredningen, åpnet opp romløsningen og bygget en presis spotkasse i gips over kjøkkensonen med integrerte downlights og ventilasjonsrist. Undergulvet ble kontrollert og avrettet før det ble lagt gjennomgående 1-stavs gulv i hele flaten. Alle vegger ble helsparklet i tre omganger og malt med supermatt Jotun Lady. Det nye U-kjøkkenet ble montert i vater med tilpassede foringer, benkeplate i massivt tre og integrerte hvitevarer.',
    scopeList: [
      'Riving og miljøsanering av gammel kjøkkeninnredning og transport til avfallsmottak',
      'Oppbygging av tilpasset gipskasse (spotkasse) i himling for downlights og ventilasjon',
      'Helsparkling av alle veggflater i tre lag med armeringsbånd for sprekksikring',
      'Støvfri maskinsliping med industrielt HEPA-avtrekk for speilblanke slettvegger',
      'Maling av vegger og himling med supermatt Jotun Lady Pure Color',
      'Avretting av undergulv og legging av gjennomgående 1-stavs gulv uten terskler',
      'Montering av U-kjøkken med grepsløse fronter, tilpassede foringer og sokler',
      'Tilskjæring, oljebehandling og montering av massiv trebenkeplate og bardisk',
      'Felling av induksjonstopp, underliming av servant og montering av armatur',
      'Montering av fotlister, dørgerikter og felles sluttbefaring'
    ],
    materialsUsed: [
      'U-kjøkken med matt hvite grepsfrie fronter',
      'Benkeplate i massivt treverk (oljebehandlet for våtsoner)',
      '1-stavs gulv i lys naturlig eikefinish',
      'Jotun Lady Pure Color supermatt interiørmaling',
      'Gipsplater og stålprofiler for spotkasse i himling',
      'Underlimt vask i rustfritt stål og moderne ettgreps blandebatteri'
    ],
    clientQuote: {
      quote: 'Forvandlingen fra et mørkt, lukket kjøkken til dette åpne og luftige allrommet er helt utrolig. Håndverket på slettveggene og kjøkkendetaljene er i toppklasse!',
      author: 'Leilighetseier',
      neighborhood: 'Majorstuen / Sentrum, Oslo'
    }
  },
  {
    id: 'bad-marmor-sorte-detaljer',
    slug: 'bad-marmor-sorte-detaljer',
    href: path('/prosjekter/bad-marmor-sorte-detaljer/'),
    title: 'Totalrenovering av bad med marmorfliser og sorte detaljer',
    neighborhood: 'Majorstuen / Frogner, Oslo',
    buildingType: 'Klassisk bygårdsleilighet',
    mainImage: path('/images/bad-inngang-terskel-oversikt.jpg'),
    gallery: [
      {
        src: path('/images/bad-inngang-terskel-oversikt.jpg'),
        alt: 'Oversikt fra rommet inn mot nyoppusset bad med dørterskel i eik',
        caption: 'Inngangsparti: Innsyn til nyoppusset bad med forskriftsmessig opphøyd dørterskel i massiv eik iht. TEK17 våtromskrav.',
        phase: 'Ferdigstilt'
      },
      {
        src: path('/images/bad-marmor-dusjhjorne-sort.jpg'),
        alt: 'Dusjsone med buet dusjhjørne, sorte profiler, takdusj og vegghengt toalett',
        caption: 'Dusjsone & toalett: Buet dusjhjørne i herdet glass med sorte profiler, termostatstyrt takdusj, vegghengt toalett og marmorerte veggfliser.',
        phase: 'Detalj'
      },
      {
        src: path('/images/bad-servantskap-speil-detalj.jpg'),
        alt: 'Vegghengt baderomsinnredning i mørk utførelse med sort armatur og speilskap',
        caption: 'Baderomsinnredning: Mørkt servantskap med to dype skuffer, sort blandebatteri, speilskap med integrert LED-lys og stikkontakt.',
        phase: 'Detalj'
      },
      {
        src: path('/images/bad-vegghengt-toalett-dusj.jpg'),
        alt: 'Mosaikkgulv med fall til sluk, innfelt sisterne og matt sort slukrist',
        caption: 'Presisjonsarbeid: Mørkt mosaikkgulv med nøyaktig fall til sluk, matt sort slukrist og innbygget toalettsisterne.',
        phase: 'Ferdigstilt'
      }
    ],
    serviceSlugs: ['oppussing-av-bad-oslo'],
    tags: ['Baderom', 'Våtrom', 'Marmorfliser', 'Mosaikk', 'Matt sort', 'Dusjhjørne', 'Vegghengt toalett', 'Oslo'],
    excerpt: 'Komplett totalrenovering av bad i Oslo-leilighet – vanntett membran, store marmorerte fliser, mørk gulvmosaikk med fall, innbygget toalett og eksklusive matt sorte armaturer.',
    challenge: 'Badet krevde full ombygging med oppgradering av fuktsikring og membran i tråd med TEK17 og våtromsnormen. Rommet krevde presist fall mot sluk i dusjsonen, plassering av vegghengt toalett med innbygget sisterne, samt tilpasning av en solid dørterskel i eik mot tilliggende tregulv.',
    solution: 'Rommet ble strippet ned, og det ble lagt ny gulvstøp med korrekt fall mot slukrist i dusjsonen. Vi monterte godkjente våtromsplater og påførte sertifisert membran med tette mansjetter rundt alle rørgjennomføringer. Veggene ble kledd med store marmormønstrede keramiske fliser, og gulvet ble belagt med mørke mosaikkfliser. Vi monterte vegghengt toalett, buet dusjhjørne med sorte profiler, matt sort takdusj, servantskap og speilskap med LED-belysning.',
    scopeList: [
      'Riving, fjerning av eksisterende fliser og miljøsanering av gammelt våtrom',
      'Oppbygging av gulv med korrekt fall mot sluk i dusjsonen',
      'Montering av godkjente våtromsplater på vegger',
      'Påføring av sertifisert våtromsmembran med tette mansjetter ved alle gjennomføringer',
      'Etablering av forskriftsmessig oppkant og massiv dørterskel i lakkert eik',
      'Flislegging med store marmorerte veggfliser og presis fuging',
      'Legging av mørk marmormosaikk på gulv med nøyaktig tilpasning rundt sluk',
      'Montering av innbyggingssisterne og vegghengt toalettskål',
      'Montering av buet dusjhjørne i herdet glass med sorte profiler',
      'Installasjon av sort takdusj, hånddusj, sort servantbatteri og sort slukrist',
      'Montering av vegghengt baderomsmøbel og speilskap med integrert LED-lys'
    ],
    materialsUsed: [
      'Keramiske marmormønstrede veggfliser i gråtoner',
      'Mørke kvadratiske mosaikkfliser for gulv og dusjsone',
      'Sertifisert våtromsmembran og tetteduk iht. TEK17',
      'Geberit innbyggingssisterne med hvit trykkplate',
      'Buet dusjhjørne i herdet sikkerhetsglass med sorte aluminiumsprofiler',
      'Matt sort takdusjsett og servantarmatur',
      'Vegghengt servantskap med integrert porselensvask',
      'Dørterskel i massiv lakkert eik'
    ],
    clientQuote: {
      quote: 'Badet ble utrolig lekkert! Kontrasten mellom de lyse marmorveggene og de sorte detaljene gir en ekte spafølelse, og arbeidet med membranen og fallet mot sluk er utført til punkt og prikke.',
      author: 'Leilighetseier',
      neighborhood: 'Majorstuen / Frogner, Oslo'
    }
  },
  {
    id: 'rodt-trehus-fasademaling',
    slug: 'rodt-trehus-fasademaling',
    href: path('/prosjekter/rodt-trehus-fasademaling/'),
    title: 'Fasademaling og fornyelse av klassisk trehus',
    neighborhood: 'Holmenkollen / Vestre Aker, Oslo',
    buildingType: 'Klassisk enebolig i tre med glassveranda',
    mainImage: path('/images/rodt-trehus-fasademaling-stillas.jpg'),
    gallery: [
      {
        src: path('/images/rodt-trehus-fasademaling-stillas.jpg'),
        alt: 'Maling av fasade med stillas på rødt trehus',
        caption: 'Under arbeid: Sertifisert fasadestillas, grundig skraping, grunning og påføring av to fyldige strøk Jotun Drygolin Nordic Extreme.',
        phase: 'Under arbeid'
      },
      {
        src: path('/images/rodt-trehus-glassveranda.jpg'),
        alt: 'Ferdigstilt glassveranda med smårutete vinduer og nymalt fasade',
        caption: 'Ferdigstilt detalj: Oszklona weranda i inngangsparti med presisjonsmalte hvite vindusrammer og dyp rød kontrastvegg.',
        phase: 'Ferdigstilt'
      }
    ],
    serviceSlugs: ['utvendig-maling-oslo'],
    tags: ['Husmaling', 'Trehus', 'Glassveranda', 'Drygolin', 'Stillas', 'Holmenkollen'],
    excerpt: 'Komplett utvendig fornyelse av staselig trehus med glassveranda – grundig forarbeid, stillasrigging og to strøk tradisjonsrik rød kledningsmaling med hvite detaljer.',
    challenge: 'Trekledningen bar preg av værslitasje, soltørke og flassing på sør- og vestveggene. Den detaljrike glassverandaen med mange småruter i vinduene krevde ekstrem nøyaktighet, skraping for hånd og spesialpensler for å unngå malingssøl på glassflatene.',
    solution: 'Vi monterte komplett fasadestillas rundt hele boligen, utførte grundig kraftvask med soppdreper, skrapte bort all løs maling ned til bærekraftig treverk og impregnerte bart tre med visirgrunning. Deretter påførte vi to fyldige strøk Jotun Drygolin Nordic Extreme i dyp rød farge, mens vinduer, gesimser og glassveranda ble malt i silkematt hvit for maksimal kontrast og holdbarhet.',
    scopeList: [
      'Montering og sertifisering av godkjent fasadestillas',
      'Fasadevask med sopp- og algedreper og påfølgende tørking',
      'Mekanisk skraping av all flakende og løs maling',
      'Pussing av overganger og grunning av endeved og bart treverk',
      'Presisjonsmaling av glassveranda med smårutede vinduer',
      'To strøk med premium Jotun Drygolin kledningsmaling',
      'Maling av grunnmur, takskjegg og vindskier',
      'Demontering av stillas, opprydding og felles sluttbefaring'
    ],
    materialsUsed: [
      'Jotun Drygolin Nordic Extreme i tradisjonell rød farge',
      'Jotun Drygolin Vindu og Dør i klassisk hvit',
      'Jotun Visir Oljegrunning Pigmentert',
      'Jotun Kraftvask og Sopp- og Algedreper'
    ],
    clientQuote: {
      quote: 'Huset har fått nytt liv! Glassverandaen er nydelig utført, og fargekombinasjonen skinner i nabolaget. Svært ryddig og dyktig håndverker.',
      author: 'Huseier',
      neighborhood: 'Holmenkollen, Oslo'
    }
  },
  {
    id: 'drenering-enebolig',
    slug: 'drenering-enebolig',
    href: path('/prosjekter/drenering-enebolig/'),
    title: 'Komplett drenering og fuktsikring av grunnmur',
    neighborhood: 'Nordstrand, Oslo',
    buildingType: 'Enebolig med sokkeletasje',
    mainImage: path('/images/drenering-grunnmur.jpg'),
    gallery: [
      {
        src: path('/images/drenering-grunnmur.jpg'),
        alt: 'Utgravd grunnmur med knasteplast (Platon) montert',
        caption: 'Fase 1 – Avdekking & fuktsikring: Utgraving rundt hele fundamentet, rengjøring av muren og montering av grunnmursplate (knasteplast) med klemlist.',
        phase: 'Under arbeid'
      },
      {
        src: path('/images/drenering-grus-ror.jpg'),
        alt: 'Rørgate med drensrør, pukk og fiberduk',
        caption: 'Fase 2 – Drensrør & pukkfylling: Utlegging av slissede drensrør med fall, innpakket i fiberduk og vasket pukk for optimal vannbortledning.',
        phase: 'Under arbeid'
      },
      {
        src: path('/images/drenskum-infiltrasjon.jpg'),
        alt: 'Montering av drens- og overvannskum i dypt utgravd grøft',
        caption: 'Fase 3 – Teknisk overvannskum: Installasjon av inspeksjons- og sandfangkum for trygg håndtering av store nedbørsmengder.',
        phase: 'Under arbeid'
      }
    ],
    serviceSlugs: ['vaktmester-oslo'],
    tags: ['Drenering', 'Fuktsikring', 'Grunnmur', 'Overvann', 'Platon', 'Nordstrand'],
    excerpt: 'Total fornyelse av dreneringssystem og grunnmursbeskyttelse med knasteplast, drensrør, pukkfylling og inspeksjonskum for tørr og trygg kjeller.',
    challenge: 'Eldre enebolig opplevde fuktinnsig og saltutslag på kjellerveggene etter kraftig nedbør. Eksisterende drensrør fra byggeåret var tette av jord og røtter, og grunnmuren manglet moderne fuktsikring og tilstrekkelig fall bort fra huset.',
    solution: 'Vi gravde opp rundt hele grunnmuren, renset og utbedret murflaten, monterte grunnmursplate (knasteplast) med dekklist, la nye drensrør i filterduk omkranset av pukk, og etablerte ny inspeksjonskum for overvann.',
    scopeList: [
      'Graving og avdekking av grunnmur ned til fundament',
      'Rengjøring av muren og sjekk av såleoverganger',
      'Montering av grunnmursplate (knasteplast/Platon) med topplist',
      'Isolering av grunnmur utvendig mot kuldebroer og tele',
      'Utlegging av drensrør med jevnt fall mot overvannskum',
      'Fylling med pukk og drenerende masser innpakket i fiberduk',
      'Installasjon av korrugert drens- og overvannskum',
      'Tilbakefylling og planering av terrenget med fall bort fra muren'
    ],
    materialsUsed: [
      'Grunnmursplate (knasteplast) med spikerfester og kantlister',
      'Slissede drensrør 110 mm',
      'Fiberduk klasse N2 / N3 mot gjenstopping',
      'Vasket pukk 11/16 mm for optimal vanngjennomstrømning',
      'XPS-isolasjonsplater for grunnmur'
    ],
    clientQuote: {
      quote: 'Kjelleren ble knusktørr med én gang. Grundig og ryddig utført fra utgraving til ferdig planert tomt.',
      author: 'Familien Berg',
      neighborhood: 'Nordstrand, Oslo'
    }
  },
  {
    id: 'treterrasse-strandlinje',
    slug: 'treterrasse-strandlinje',
    href: path('/prosjekter/treterrasse-strandlinje/'),
    title: 'Eksklusiv treterrasse og bryggeplatting ved sjøen',
    neighborhood: 'Bekkelaget / Bunnefjorden, Oslo',
    buildingType: 'Fritidseiendom / bolig ved sjøen',
    mainImage: path('/images/treterrasse-brygge-fjord.jpg'),
    serviceSlugs: ['montering-oslo', 'vaktmester-oslo'],
    tags: ['Treterrasse', 'Utemiljø', 'Bryggeplatting', 'Snekkerarbeid', 'Kystmiljø'],
    excerpt: 'Skreddersydd treterrasse og integrert badebrygge tilpasset krevende kystterreng på fjell og betongfundament med fantastisk fjordutsikt.',
    challenge: 'Tomten hadde krevende fjellskråning rett ned i sjøen med ujevnt steinete underlag og kraftig eksponering for saltvann, vind og bølger. Det krevde bunnsolid fundamentering i fjell samt materialer som tåler røft norsk kystklima over tid.',
    solution: 'Vi forankret solide betong- og stålfester direkte i fjellet, etablerte kraftig bærekonstruksjon i k-virke og la førsteklasses impregnerte terrassebord med millimeterpresisjon. Løsningen inkluderte trappetrinn ned mot bryggen og en elegant integrert utstikkerplatting.',
    scopeList: [
      'Oppmåling og forankring med kjemiske anker i fjellgrunn',
      'Støping av tilpassede betongpilarer og sokler mot sjøen',
      'Oppbygging av kraftig bjelkelag i impregnert konstruksjonsvirke',
      'Skjult eller presis innfesting av premium terrassebord i furu',
      'Bygging av solide overgangstrapper mellom nivåer',
      'Montering av integrert sittegruppe og utstikkerbrygge',
      'Sluttbehandling og grundig opprydding i kystsonen'
    ],
    materialsUsed: [
      'Trykkimpregnert furu klasse AB/A for kystmiljø',
      'Syrefaste A4-skruer og beslag mot korrosjon fra sjøsprøyt',
      'Armert B30 betong og kjemiske fjellankere',
      'Spesialtilpasset bjelkelag 48x198 mm for maksimal stivhet'
    ],
    clientQuote: {
      quote: 'Terrassen ble fantastisk! Waldemar løste fundamenteringen i det bratte fjellet helt perfekt, og håndverket tåler både bølger og storm.',
      author: 'Eier av eiendom',
      neighborhood: 'Bekkelaget, Oslo'
    }
  },
  {
    id: 'bad-st-hanshaugen',
    slug: 'bad-st-hanshaugen',
    href: path('/prosjekter/bad-st-hanshaugen/'),
    title: 'Totalrenovering av bad i klassisk bygård',
    neighborhood: 'St. Hanshaugen, Oslo',
    buildingType: 'Bygård fra 1898',
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
      quote: 'Oppussingen av badet gikk knirkefritt. Arbeidsplassen ble støvskjermet, fellesarealene var alltid ryddige, og fremdriftsplanen holdt til punkt og prikke.',
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
