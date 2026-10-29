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
    id: 'fornyelse-av-soverom-parkett-dorer',
    slug: 'fornyelse-av-soverom-parkett-dorer',
    href: path('/prosjekter/fornyelse-av-soverom-parkett-dorer/'),
    title: 'Fornyelse av soverom – helsparkling, fargesetting, parkett og nye innerdører',
    neighborhood: 'Majorstuen / Frogner, Oslo',
    buildingType: 'Byleilighet',
    mainImage: path('/images/soverom-hovedrom-nude-vegg.jpg'),
    gallery: [
      {
        src: path('/images/soverom-hovedrom-nude-vegg.jpg'),
        alt: 'Hovedsoverom med helsparklede slettvegger i lun terrakottatone og nytt tregulv',
        caption: 'Hovedsoverom: Helsparklede og nymalte slettvegger i lun skandinavisk terrakottatone, nytt 1-stavs gulv og hotellgardiner montert til tak.',
        phase: 'Ferdigstilt'
      },
      {
        src: path('/images/soverom-gjesterom-innerdor.jpg'),
        alt: 'Gjesterom med profilert hvit innerdør, nytt gulv og tidsriktig fargepalett',
        caption: 'Gjesterom: Helhetlig fargesetting, ny hvit profilert innerdør med moderne dørvrider i børstet stål og terskelfri gulvlegging.',
        phase: 'Detalj'
      },
      {
        src: path('/images/soverom-inngang-dor-parkett.jpg'),
        alt: 'Inngangsparti med nymontert dørblad, gerikter, fotlister og parkettovergang',
        caption: 'Inngangsparti: Detalj av nymontert dørblad, gerikter, hvite fotlister og sømløs overgang i parketten fra gangen.',
        phase: 'Ferdigstilt'
      }
    ],
    serviceSlugs: ['malerarbeid-oslo', 'gulvlegging-oslo', 'montering-oslo', 'snekkerarbeid-oslo'],
    tags: ['Soverom', 'Helsparkling', 'Slette vegger', 'Jotun Lady', 'Parkett', 'Innerdører', 'Listverk', 'Oslo'],
    excerpt: 'Helhetlig oppgradering av soveromssonen i byleilighet med helsparkling, sofistikert skandinavisk fargesetting, legging av 1-stavs eikegulv, nye profilerte innerdører og takhengte gardiner.',
    challenge: 'Rommene hadde opprinnelig slitte tapetvegger med synlige skjøter, ujevne undergulv og eldre mørke finer-dører med slitte karmer. Kunden ønsket et lunt, helhetlig uttrykk med silkeglatte overflater, moderne dører som demper lyd, og sømløs flyt i gulvet mellom rommene.',
    solution: 'Vi fjernet gammel tapet og løse partier, helsparklet alle vegger i tre omganger og slipte støvfritt med HEPA-avtrekk. Veggene ble malt med Jotun Lady Pure Color supermatt i en harmonisk jordtone. Undergulvet ble klargjort før legging av 1-stavs eikegulv med trinnlydsdemping. Vi monterte nye formpressede 3-speils innerdører med nye hvite karmer, lyddempende pakninger og dørvridere i børstet stål, samt profilerte gerikter, nye fotlister og diskrete gardinskinner i himling.',
    scopeList: [
      'Riving av eksisterende innerdører, karmer og slitt listverk',
      'Forberedelse av vegger og helsparkling i tre lag med armeringsbånd',
      'Støvfri maskinsliping med HEPA-avsug for slette, feilfrie veggflater',
      'Maling av vegger med Jotun Lady Pure Color i lun terrakottatone',
      'Maling av himling i helhetlig ren hvit nyanse',
      'Legging av 1-stavs gulv i lys eik med trinnlydsunderlag',
      'Montering og justering av nye hvite fyllingsdører i lodd og vater',
      'Montering av nye dørkarmer med integrerte dempelister for stillere lukking',
      'Montering av dørvridere i børstet stål med magnetlås',
      'Presis gjæring og montering av profilerte gerikter og fotlister',
      'Montering av takhengte gardinskinner for hotelloppheng'
    ],
    materialsUsed: [
      'Jotun Lady Pure Color supermatt interiørmaling',
      'Jotun rullesparkel medium og papir-armeringsbånd',
      '1-stavs eikegulv med børstet og mattlakkert overflate',
      'Godkjent trinnlydsunderlag for lydisolering',
      'Klassiske 3-speils formpressede innerdører i ren hvit (NCS S 0500-N)',
      'Karmsett med integrerte tettelister',
      'Hoppe dørvridere i børstet rustfritt stål',
      'Profilerte gerikter og fotlister'
    ],
    clientQuote: {
      quote: 'Soverommene ble forvandlet til en rolig oase med hotellfølelse. Dørene lukker seg silkemykt, veggene er fullstendig slette, og fargevalget gir en utrolig lun atmosfære.',
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
  }
];
