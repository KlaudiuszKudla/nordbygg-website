import { path } from '../utils/paths';

export interface ServiceScopeItem {
  title: string;
  description: string;
}

export interface ServicePricingFactor {
  title: string;
  description: string;
}

export interface ServiceTimelineStep {
  phase: string;
  title: string;
  description: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  slug: string;
  href: string;
  image: string;
  shortDesc: string;
  heroIntro?: string;
  highlights: string[];
  scopeOfWork: ServiceScopeItem[];
  pricingIntro?: string;
  pricingFactors: ServicePricingFactor[];
  timelineSteps: ServiceTimelineStep[];
  faqs: ServiceFAQ[];
  bygardNote?: string;
}

export const siteConfig = {
  companyName: 'Satisfaction',
  legalName: 'Waldemar Kudla',
  owner: 'Waldemar Kudla',
  orgNr: '999 999 999 MVA',
  phoneDisplay: '+47 976 73 411',
  phoneHref: '+4797673411',
  email: 'waldemarkudla@gmail.com',
  siteUrl: 'https://klaudiuszkudla.github.io/nordbygg-website',
  location: {
    street: 'Kirkeveien 64',
    postalCode: '0364',
    city: 'Oslo',
    country: 'NO',
    serviceAreas: [
      'Oslo',
      'Bærum',
      'Asker',
      'Lillestrøm',
      'Ski',
      'Ås',
      'Frogn',
      'Oppegård',
      'Enebakk',
      'Lier',
      'Drammen',
      'Moss',
      'Askim',
    ],
  },
  workingHours: 'Man–Fre: 07:00 – 17:00',
  experienceYears: 20,
  services: [
    {
      title: 'Vaktmester og driftstjenester',
      slug: 'vaktmester-oslo',
      href: path('/tjenester/vaktmester-oslo/'),
      image: path('/images/bygard-fasade-osteklokken.jpg'),
      shortDesc: 'Profesjonell vaktmestertjeneste, vedlikehold og teknisk oppfølging for borettslag, sameier og næringseiendommer i Oslo – solid drift og pålitelig tilsyn.',
      heroIntro: 'Med over 20 års allsidig erfaring innen eiendomsdrift, teknisk oppfølging og praktisk vedlikehold sørger vi for at bygget fungerer sømløst. Fra løpende ettersyn og raske utbedringer til faste driftsavtaler for borettslag, sameier og næringsbygg.',
      highlights: ['Borettslag & næringseiendom', 'Løpende teknisk tilsyn', 'Forebyggende vedlikehold', 'Rask utbedring av feil'],
      scopeOfWork: [
        {
          title: 'Periodisk teknisk ettersyn og tilsyn',
          description: 'Regelmessig kontroll av tekniske rom, varmeanlegg, ventilasjon, pumper, belysning og brannverninstallasjoner for trygg og stabil drift.'
        },
        {
          title: 'Løpende vedlikehold og reparasjoner',
          description: 'Rask utbedring av slitasjeskader, dørpumper, låser, porttelefoner, sanitærproblemer og overflater i fellesarealer.'
        },
        {
          title: 'Tilsyn med fellesarealer og trappeoppganger',
          description: 'Inspeksjon av oppganger, kjellere, loft og rømningsveier slik at lover, forskrifter og trivsel i bygget ivaretas.'
        },
        {
          title: 'Utendørs drift og vedlikehold av uteområder',
          description: 'Feiing, avfallshåndtering, legging og reparasjon av belegningsstein og skifer, treterrasser, mindre kledningsreparasjoner og sesongmessig oppfølging.'
        },
        {
          title: 'Praktisk koordinering og teknisk oppfølging',
          description: 'Tett dialog med styret eller eiendomsforvalter. Oppfølging av eksterne fagfolk og kontroll av utførte serviceoppdrag på eiendommen.'
        },
        {
          title: 'Bistand til beboere ved behov',
          description: 'Tilgjengelig for praktiske oppgaver, vannstenging ved oppussing, nøkkelhåndtering og veiledning ved moderniseringsbehov.'
        },
        {
          title: 'Takrenner, tak og dreneringstilsyn',
          description: 'Mindre tak- og takrennereparasjoner, rens av taknedløp, sjekk av overvannskummer og forebyggende tiltak mot fuktinntrengning og frost.'
        },
        {
          title: 'Skreddersydde driftsavtaler',
          description: 'Faste avtaler tilpasset byggets størrelse og behov – enten ukentlig, månedlig eller på tilkallingsbasis med full loggføring.'
        }
      ],
      pricingIntro: 'Prisen på vaktmester- og driftstjenester tilpasses eiendommens type, areal og ønsket frekvens på tilsynet:',
      pricingFactors: [
        {
          title: 'Eiendommens størrelse og bygningsmasse',
          description: 'Et lite sameie med én oppgang krever færre timer enn en større bygård eller et næringsbygg med komplekse tekniske installasjoner.'
        },
        {
          title: 'Frekvens på tilsyn',
          description: 'Avtaler kan variere fra ukentlig helsjekk til månedlige kontroller eller behovsbasert bistand etter avtalt timepris eller fast månedspris.'
        },
        {
          title: 'Utearealer og sesongvariasjoner',
          description: 'Behov for utvendig vedlikehold, takrennesjekk eller oppfølging av grøntarealer påvirker det totale tidsforbruket.'
        },
        {
          title: 'Teknisk kompleksitet',
          description: 'Bygg med sentralfyr, ventilasjonsaggregater og automatiske adgangskontroller stiller krav til hyppigere teknisk oppfølging.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Steg 1',
          title: 'Gratis befaring & kartlegging',
          description: 'Vi går gjennom eiendommen sammen med styret eller driftsleder, kartlegger tekniske anlegg og definerer oppgavebehovet.'
        },
        {
          phase: 'Steg 2',
          title: 'Tydelig avtaleforslag & tilbud',
          description: 'Vi utarbeider en spesifisert drifts- og vedlikeholdsplan med fast pris eller faste timeintervaller.'
        },
        {
          phase: 'Steg 3',
          title: 'Oppstart & etablering av rutiner',
          description: 'Nøkkeloverlevering, merking av tekniske rom og oppstart av faste sjekklister for eiendommen.'
        },
        {
          phase: 'Steg 4',
          title: 'Løpende drift & statusrapporter',
          description: 'Fast kontaktperson, løpende logg over utført arbeid og direkte dialog med styret.'
        }
      ],
      bygardNote: 'Vi har omfattende erfaring med drift av bygårder og eldre bygningsmasser i Oslo, inkludert oppfølging av stoppekraner, fellesrør og brannkrav.',
      faqs: [
        {
          question: 'Hvilke typer eiendommer tilbyr dere vaktmestertjenester for?',
          answer: 'Vi betjener borettslag, sameier, bygårder og næringseiendommer i Oslo, Bærum og Asker – fra mindre bygårder til større boligselskaper.'
        },
        {
          question: 'Kan vi kombinere vaktmestertjeneste med fremtidige oppussingsprosjekter?',
          answer: 'Ja, nettopp dette er en av våre største styrker! Som fast vaktmester kjenner vi bygget ut og inn, og kan raskt og kostnadseffektivt bistå med oppussing av leiligheter, malerarbeid, gulvlegging og snekkerarbeid.'
        },
        {
          question: 'Tilbyr dere faste månedsavtaler eller timebasert oppdrag?',
          answer: 'Begge deler. Vi kan levere en forutsigbar fast månedspris basert på definerte ukentlige eller månedlige oppgaver, eller timebasert bistand ved behov.'
        },
        {
          question: 'Hvor raskt kan dere rykke ut ved akutte hendelser?',
          answer: 'For faste kunder med driftsavtale prioriterer vi akutte henvendelser som vannlekkasjer, låsproblemer eller defekte inngangsdører fortest mulig samme dag.'
        }
      ]
    },
    {
      title: 'Oppussing av bad',
      slug: 'oppussing-av-bad-oslo',
      href: path('/tjenester/oppussing-av-bad-oslo/'),
      image: path('/images/bad-marmor-dusjhjorne-sort.jpg'),
      shortDesc: 'Totalrenovering av bad og våtrom i Oslo – riving, oppbygging med vanntett membran, avretting med fall mot sluk og presis flislegging.',
      heroIntro: 'Fra eldre bygårdsbad til moderne og funksjonelle baderom. Waldemar Kudla utfører arbeidet med stor nøyaktighet og koordinerer fremdriften slik at resultatet blir pent, solid og holdbart.',
      highlights: ['Riving & grundig forarbeid', 'Støp med fall til sluk', 'Membran & presis flislegging', 'Tydelig tilbud & skriftlig avtale'],
      scopeOfWork: [
        {
          title: 'Skånsom riving og avfallshåndtering',
          description: 'Fjerning av eksisterende fliser, innredning og underlag. Kildesortering og bortkjøring av alt avfall til godkjent gjenvinningsstasjon i Oslo.'
        },
        {
          title: 'Oppretting og støp med fall til sluk',
          description: 'Etablering av stabilt underlag og støping av avrettingsmasse med korrekt fall mot sluk for trygg og effektiv vannavrenning.'
        },
        {
          title: 'Smøremembran og fuktsikring',
          description: 'Påføring av godkjent smøremembran med solide forsterkningsbånd i alle hjørneoverganger og tette mansjetter rundt rørgjennomføringer.'
        },
        {
          title: 'Presis flislegging og fuging',
          description: 'Flislegging av vegger og gulv med rette linjer og jevne fuger. Vi behersker alt fra klassiske fliser til 60x60 storformat og 45° gjæring (jolly-kutt) i utvendige hjørner.'
        },
        {
          title: 'Praktisk koordinering av rør og belysning',
          description: 'Tett samkjøring med erfarne samarbeidspartnere på rør og elektro, slik at rør, sluk, varmekabler og belysning monteres til riktig tid.'
        },
        {
          title: 'Montering av møbler og sanitærutstyr',
          description: 'Nøyaktig montering av servantskap, speilskap med integrert lys, glassdusjvegger, toalett og baderomstilbehør med vanntett silikonering.'
        },
        {
          title: 'Bygårdstilpasninger i Oslo',
          description: 'Håndtering av felles soilrør, støydemping i etasjeskillere, nabovarsling og koordinert vannavstenging i borettslag og sameier.'
        },
        {
          title: 'Sluttkontroll sammen med deg',
          description: 'Grundig visuell sjekk og funksjonstesting sammen med deg i rommet, slik at du er 100 % fornøyd med overflatene og finishen.'
        }
      ],
      pricingIntro: 'Prisen på totalrenovering av bad avhenger av rommets utgangspunkt, tekniske krav og dine materialønsker. Her er de viktigste faktorene:',
      pricingFactors: [
        {
          title: 'Romstørrelse og grunnforhold',
          description: 'Et lite bad på 3–4 m² krever nesten samme tekniske installasjoner som et bad på 8 m², men materialkostnad for flis og membran øker med flatestørrelsen.'
        },
        {
          title: 'Flytting av sluk og tekniske føringer',
          description: 'Om rørføringer og sluk beholdes på samme sted er inngrepet enklere enn ved omdisponering av rommet i betong- eller trebjelkelag.'
        },
        {
          title: 'Flisstørrelse og detaljnivå',
          description: 'Storformatfliser (60x60 cm eller større) og 45-graders gjæring av utvendige hjørner krever spesialverktøy og vesentlig mer arbeidstid enn standardformater.'
        },
        {
          title: 'Valg av innredning og armaturer',
          description: 'Innebygde armaturer i vegg krever ekstra forarbeid sammenlignet med tradisjonelle utenpåliggende blandebatterier.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Fase 1',
          title: 'Befaring & tilbud',
          description: 'Gratis befaring hjemme hos deg, gjennomgang av ønsker og utarbeidelse av et detaljert, uforpliktende pristilbud.'
        },
        {
          phase: 'Fase 2',
          title: 'Riving & rør/elektro',
          description: 'Tildekking av fellesarealer, skånsom riving, bortkjøring av avfall og oppstart for rørlegger og elektriker.'
        },
        {
          phase: 'Fase 3',
          title: 'Støp, fall & membran',
          description: 'Avretting av gulv med korrekt fall, montering av våtromsplater og påføring av vanntett smøremembran.'
        },
        {
          phase: 'Fase 4',
          title: 'Flislegging, montering & sluttkontroll',
          description: 'Presis flislegging, fuging, montering av baderomsmøbler, samt felles sluttbefaring av badet.'
        }
      ],
      bygardNote: 'Vi har omfattende erfaring med bad i eldre Oslo-bygårder med trebjelkelag, etasjeskillere og felles soil- og avløpsstammer.',
      faqs: [
        {
          question: 'Hvordan foregår befaring og pristilbud?',
          answer: 'Vi kommer på en gratis og uforpliktende befaring der vi ser på badet og lytter til dine ønsker. Deretter mottar du et detaljert, skriftlig tilbud med avtalt pris før oppstart.'
        },
        {
          question: 'Hvem har ansvaret for koordinering av rørlegger og elektriker?',
          answer: 'Waldemar Kudla tar det praktiske koordineringsansvaret. Du forholder deg kun til én kontaktperson, og vi sørger for at dyktige fagfolk på rør og strøm kommer inn til riktig tidspunkt.'
        },
        {
          question: 'Må jeg varsle styret og naboer i borettslaget før oppstart?',
          answer: 'Ja, i de fleste borettslag og sameier i Oslo skal styret informeres om oppussing, og naboer skal varsles om støyende arbeid og eventuell vannavstenging. Vi bistår med standard nabovarsel.'
        },
        {
          question: 'Hvordan beregnes prisen på oppussing av bad?',
          answer: 'Etter gratis befaring leverer vi et spesifisert pristilbud som klart beskriver inkluderte arbeidsoperasjoner. Dersom det avdekkes uforutsette forhold bak vegger eller under gulv, avklares alltid tiltak og pris med deg før utbedring.'
        }
      ]
    },
    {
      title: 'Kjøkkenoppussing',
      slug: 'kjokkenoppussing-oslo',
      href: path('/tjenester/kjokkenoppussing-oslo/'),
      image: path('/images/stue-kjokken-u-kjokken-detalj.jpg'),
      shortDesc: 'Demontering av gammelt kjøkken, oppretting av skjeve vegger og gulv i eldre bygårder, samt presis montering av IKEA-, HTH-, Sigdal- og Kvik-kjøkken.',
      heroIntro: 'Et nytt kjøkken krever millimeterpresisjon. Vi retter opp skjeve overflater, monterer skrog og foringer sømløst mot tak og vegg, og tilpasser benkeplater og hvitevarer for et varig resultat.',
      highlights: ['Demontering & avretting', 'IKEA-, HTH- & Kvik-spesialist', 'Skreddersøm av tak- og veggforinger', 'Samarbeid med rør og elektro'],
      scopeOfWork: [
        {
          title: 'Demontering og bortkjøring av gammelt kjøkken',
          description: 'Trygg frakobling og fjerning av eksisterende innredning, fliser og hvitevarer med miljøvennlig avfallssortering.'
        },
        {
          title: 'Oppretting av skjeve vegger og underlag',
          description: 'Eldre Oslo-leiligheter har ofte skjeve vegger og hjørner. Vi lektrer ut, retter opp og forsterker veggene før skapene monteres i vater.'
        },
        {
          title: 'Montering av skrog og overskap',
          description: 'Nøyaktig oppmåling, forankring i vegg og presis montering av benkeskap, høyskap og overskap for optimal stabilitet.'
        },
        {
          title: 'Skuffesystemer, fronter og innmat',
          description: 'Montering og finjustering av skuffeskinner, dempere, dørhengsler og smarte hjørne- og avfallsløsninger med helt jevne spalter.'
        },
        {
          title: 'Skreddersydde foringer til tak og vegger',
          description: 'Eksakt tilpasning av toppforinger mot tak og sideforinger mot vegger, slik at kjøkkenet fremstår helintegrert og plassbygd.'
        },
        {
          title: 'Benkeplater og utskjæring',
          description: 'Presis tilskjæring, sammenføying og montering av benkeplater i laminat eller heltre, inkludert utsparing til koketopp og vask.'
        },
        {
          title: 'Flislegging eller sprutplate over benk',
          description: 'Montering og fuging av fliser, komposittplater eller herdet glass over kjøkkenbenken for god fukt- og fettsikring.'
        },
        {
          title: 'Klargjøring for VVS og elektriker',
          description: 'Tett samkjøring med rørlegger for tilkobling av oppvaskmaskin, vann og avløp, samt elektriker for platetopp, stekeovn og benkebelysning.'
        }
      ],
      pricingIntro: 'Kostnaden for kjøkkenoppussing påvirkes av rommets kompleksitet, grunnarbeid og valg av innredning:',
      pricingFactors: [
        {
          title: 'Kjøkkenets layout og størrelse',
          description: 'Ett rettlinjet kjøkken er raskere å montere enn L-kjøkken, U-kjøkken eller løsninger med frittstående kjøkkenøy og barløsning.'
        },
        {
          title: 'Veggforhold og forarbeid',
          description: 'I klassiske bygårder kreves det ofte oppretting med stendere og gips for at skapene skal henge snorrett og tåle vekten av fylte skap.'
        },
        {
          title: 'Materialvalg for benkeplate',
          description: 'Heltre og kompaktlaminat krever nøyaktig oljing eller spesialkutt, mens underlimte vasker stiller høyere krav til presisjon.'
        },
        {
          title: 'Integrerte hvitevarer',
          description: 'Montering av helintegrert oppvaskmaskin, kjøleskap og ventilator med integrerte dører krever ekstra justering for perfekt spalteavstand.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Fase 1',
          title: 'Befaring & planlegging',
          description: 'Vi kontrollerer kontrollmål fra leverandør (f.eks. IKEA tegning), sjekker rør/el-punkter og gir et bindende pristilbud.'
        },
        {
          phase: 'Fase 2',
          title: 'Riving & grunnarbeid',
          description: 'Gammelt kjøkken demonteres og kjøres bort. Skjeve vegger rettes opp og rør/elektro klargjøres.'
        },
        {
          phase: 'Fase 3',
          title: 'Montering av innredning',
          description: 'Skrog, overskap, høyskap, skuffer og tilpassede foringer monteres i vater.'
        },
        {
          phase: 'Fase 4',
          title: 'Benkeplate, flis & tilkobling',
          description: 'Montering av benkeplate, sprutfliser, rør- og strømtilkobling, samt finjustering av fronter og sluttbefaring.'
        }
      ],
      bygardNote: 'Vi kjenner godt til utfordringene i Oslo-bygårder med gamle rørkasser, skjeve vegger og krav om lekkasjestopper (Waterguard).',
      faqs: [
        {
          question: 'Monterer dere kjøkken fra alle leverandører?',
          answer: 'Ja, vi har bred erfaring med montering av IKEA (Metod), HTH, Sigdal, Norema, Kvik, Epoq og Aubo.'
        },
        {
          question: 'Kan dere hjelpe med kontrollmåling før jeg bestiller kjøkkenet?',
          answer: 'Ja! På gratis befaring hjelper vi gjerne med å kontrollmåle rommet, sjekke vinkler på vegger og verifisere at tegningen passer eksakt med rommets faktiske mål.'
        },
        {
          question: 'Hva gjør dere om veggene er svært skjeve?',
          answer: 'I eldre Oslo-leiligheter er skjeve vegger regelen snarere enn unntaket. Vi forer ut eller lektrer opp veggene slik at skapene henger 100% i vater og foringene mot tak og vegger blir jevne.'
        },
        {
          question: 'Monterer dere integrert ventilator og hvitevarer?',
          answer: 'Ja, vi tilpasser skrog og foringer for alle typer integrerte hvitevarer, og koordinerer med rørlegger og elektriker for forskriftsmessig tilkobling.'
        }
      ]
    },
    {
      title: 'Snekker- og monteringsarbeid',
      slug: 'montering-oslo',
      href: path('/tjenester/montering-oslo/'),
      image: path('/images/treterrasse-brygge-fjord.jpg'),
      shortDesc: 'Allsidig snekkerarbeid og presis montering i Oslo – fra lettvegger og plassbygde garderober til dører, listverk og skreddersydde innredninger.',
      heroIntro: 'Solide snekkerløsninger og millimeterpresis montering. Enten du skal etablere et ekstra soverom med en lydisolert lettvegg, bygge inn garderobeskap til taket eller skifte innerdører og listverk i bygården.',
      highlights: ['Lydisolerte lettvegger', 'Plassbygde garderober (IKEA Pax mm.)', 'Innerdører & karmsett', 'Profilert listverk & foringer'],
      scopeOfWork: [
        {
          title: 'Oppsetting og flytting av lettvegger',
          description: 'Bygging av stenderverk i tre eller stål, isolering med mineralull for lyddemping, og to lag gips eller OSB+gips for solide vegger som tåler oppheng.'
        },
        {
          title: 'Plassbygde garderober og oppbevaring',
          description: 'Montering av modulgarderober (f.eks. IKEA Pax) som bygges inn med skreddersydde sokler og foringer helt opp til taket for et eksklusivt, plassbygd uttrykk.'
        },
        {
          title: 'Montering og utskifting av innerdører',
          description: 'Utskifting av gamle eller skjeve dører, montering av nye karmsett med eksakt lodd og vater, samt justering av låskasser og dørvridere.'
        },
        {
          title: 'Listverk og profilering',
          description: 'Gjæring og montering av fotlister, dørkarmer, vindusforinger og taklister. Vi tilpasser både moderne glatte lister og klassiske bygårdsprofiler med hulkil.'
        },
        {
          title: 'Akustikkplater og spilevegger',
          description: 'Montering av trespiler og akustikkpaneler på vegger eller i tak med usynlig innfesting for et moderne uttrykk og lun akustikk.'
        },
        {
          title: 'Kasser rundt rør og ventilasjon',
          description: 'Bygging av diskrete og pene foringskasser rundt synlige sprinkler-, soil- og ventilasjonsrør i bygårdsleiligheter.'
        },
        {
          title: 'Skreddersydde nisjer og hyllesystemer',
          description: 'Oppbygging av spesialtilpassede hyller, sittebenker og nisjeløsninger tilpasset rommets naturlige arkitektur.'
        },
        {
          title: 'Ryddig gjennomføring',
          description: 'Alltid tildekking av gulv, støvbegrensende tiltak og fullstendig rydding og fjerning av materialrester etter endt arbeidsdag.'
        }
      ],
      pricingIntro: 'Snekker- og monteringsoppdrag varierer i omfang fra enkle halvdagsoppdrag til omfattende ombygginger:',
      pricingFactors: [
        {
          title: 'Omfang og detaljeringsgrad',
          description: 'En rett lettvegg med standard døråpning går raskere enn en spesialtilpasset garderobeinnbygging med integrert LED-belysning og takforinger.'
        },
        {
          title: 'Materialer og listprofiler',
          description: 'Bruk av massiv eik, spesialbestilte klassiske bygårdsprofiler eller ferdigmalte standardlister påvirker både materialpris og arbeidstid.'
        },
        {
          title: 'Lydkrav ved romdeling',
          description: 'Bygging av skillevegg mellom soverom med lydbøyler og elastisk fuge for maksimal trinn- og luftlydisolasjon krever mer materialer og presisjon.'
        },
        {
          title: 'Kombinasjonsarbeid',
          description: 'Det er ofte mer kostnadseffektivt å kombinere dørbytte og snekkerarbeid med påfølgende maling og listing i samme oppdrag.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Fase 1',
          title: 'Befaring & oppmåling',
          description: 'Vi måler opp, ser på rommets bæring og vinkler, og gir råd om optimale løsninger og materialvalg.'
        },
        {
          phase: 'Fase 2',
          title: 'Klargjøring & materialleveranse',
          description: 'Tildekking av gulv og fellesarealer, samt innkjøring og bæring av materialer og verktøy.'
        },
        {
          phase: 'Fase 3',
          title: 'Snekring & montering',
          description: 'Oppsetting av stendere, isolasjon, plating, dørkarmmontering og innbygging av møbler/garderober.'
        },
        {
          phase: 'Fase 4',
          title: 'Listverk, foringer & finish',
          description: 'Presis tilskjæring og gjæring av lister, akrylforsegling og rydding før felles befaring.'
        }
      ],
      bygardNote: 'Vi har spesialisert oss på å tilpasse snekkerarbeid til eldre Oslo-bygårder hvor ingen vinkler er 90 grader og takhøyden krever ekstra høye foringer.',
      faqs: [
        {
          question: 'Tar dere på dere mindre snekkeroppdrag i Oslo?',
          answer: 'Ja, absolutt! Vi hjelper gjerne med å skifte tre innerdører, sette opp fotlister i en leilighet eller bygge inn en garderobe. Ingen jobb er for liten for godt håndverk.'
        },
        {
          question: 'Hvordan kan dere få en IKEA Pax-garderobe til å se plassbygd ut?',
          answer: 'Vi bygger en tilpasset sokkel, fester skrogene bunnsolid til veggen og lager skreddersydde foringer mot sidevegger og tak. Med matchende lister ser skapet ut som en integrert del av rommet.'
        },
        {
          question: 'Må jeg søke kommunen for å sette opp en ny lettvegg?',
          answer: 'Å sette opp en ikke-bærende lettvegg innenfor egen bruksenhet er normalt unntatt søknadsplikt. Men dersom du skal endre bruken av rommet til varig opphold (f.eks. nytt soverom), må krav til rømningsvei og dagslys være oppfylt.'
        },
        {
          question: 'Kjøper jeg materialer selv, eller ordner dere alt?',
          answer: 'Du bestemmer selv. Vi kan stå for innkjøp, rabatterte håndverkerpriser og transport av trelast, gips og festemidler, eller jobbe med materialer du allerede har kjøpt.'
        }
      ]
    },
    {
      title: 'Gulvlegging og avretting',
      slug: 'gulvlegging-oslo',
      href: path('/tjenester/gulvlegging-oslo/'),
      image: path('/images/stue-kjokken-spisesone-slettvegg.jpg'),
      shortDesc: 'Avretting av undergulv med flytsparkel, godkjente trinnlydsplater for borettslag, og presis legging av parkett, fiskeben og laminat i Oslo.',
      heroIntro: 'Et vakkert gulv starter under overflaten. Vi retter opp ujevne undergulv med fiberarmert flytsparkel, monterer godkjent trinnlydsisolasjon tilpasset borettslagets krav, og legger 1-stavs eikeparkett eller fiskebensmønster med perfekt finish.',
      highlights: ['Avretting med flytsparkel', '1-stavs & fiskebensparkett', 'Godkjent trinnlydsdemping', 'Underskjæring av karmer & nye fotlister'],
      scopeOfWork: [
        {
          title: 'Kontroll og klargjøring av undergulv',
          description: 'Fjerning av gammelt gulvbelegg, tepper eller slitt parkett. Kontroll av underliggende trebjelkelag eller betongsåle for svikt og knirk.'
        },
        {
          title: 'Avretting og flytsparkling',
          description: 'Priming av underlaget og påføring av hurtigtørkende, fiberarmert avrettingsmasse for å oppnå et 100% plant underlag uten svanker eller fall.'
        },
        {
          title: 'Trinnlydsisolering (krav i borettslag)',
          description: 'Legging av trykkfaste trinnlydsplater (f.eks. Hunton Silencio) som tilfredsstiller strenge krav til trinnlydsreduksjon mot underliggende leilighet.'
        },
        {
          title: 'Legging av 1-stavs parkett og herdet tre',
          description: 'Flytende legging av kvalitetsgulv med korrekt ekspansjonsavstand mot vegger og gjennomføringer, slik at gulvet kan bevege seg naturlig.'
        },
        {
          title: 'Hel-limt legging av fiskebensparkett',
          description: 'Presis oppmåling av referanselinjer og hel-liming av fiskebensstaver for maksimal stabilitet, lun klang og en eksklusiv klassisk stil.'
        },
        {
          title: 'Underskjæring av dørkarmer',
          description: 'Presis underskjæring av alle karmsett med multimaskin, slik at gulvet skyves sømløst inn under karmen uten skjemmende akrylfuger eller klumper.'
        },
        {
          title: 'Fotlister og terskler',
          description: 'Montering av nye eike- eller hvitmalte fotlister tilpasset gulvet, samt diskrete overgangsprofiler i messing eller børstet stål mellom rom.'
        },
        {
          title: 'Etterkontroll og rengjøring',
          description: 'Sluttbefaring for å sjekke planhet, fjerning av støv og emballasje, og rådgivning om optimalt vedlikehold av tregulvet.'
        }
      ],
      pricingIntro: 'Hva gulvlegging koster per kvadratmeter avhenger av underlagets beskaffenhet og valg av gulvtype:',
      pricingFactors: [
        {
          title: 'Underlagets planhet og behov for sparkel',
          description: 'Dersom undergulvet har store høydeforskjeller i en eldre bygård, kreves det mer avrettingsmasse og arbeid for å oppnå kravene til planhet (± 2–3 mm per 2 meter).'
        },
        {
          title: 'Gulvtype og leggemetode',
          description: 'Tradisjonell klikkparkett legges vesentlig raskere enn hel-limt fiskebensparkett, som krever millimeteroppmåling for hver eneste stav.'
        },
        {
          title: 'Rommets geometri og hindringer',
          description: 'Mange vinkler, søyler, radiatorrør og døråpninger krever mer skreddersydd tilskjæring enn et åpent, rektangulært rom.'
        },
        {
          title: 'Trinnlydsplater og dokumentasjon',
          description: 'I bygårder kreves det ofte dokumenterte trinnlydsplater (f.eks. 6 mm eller 12 mm Silencio) for å dempe lydoverføring.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Fase 1',
          title: 'Befaring & planhetsmåling',
          description: 'Vi måler rommets planhet med rettholt, sjekker fukt i undergulvet og anbefaler riktig oppbygging.'
        },
        {
          phase: 'Fase 2',
          title: 'Riving & flytsparkling',
          description: 'Gammelt gulv fjernes, underlaget primes og fiberarmert avrettingsmasse legges ut for en perfekt plan flate.'
        },
        {
          phase: 'Fase 3',
          title: 'Underlag & gulvlegging',
          description: 'Trinnlydsduk/plater legges ut, og parketten eller fiskebensmønsteret legges med millimeterpresisjon.'
        },
        {
          phase: 'Fase 4',
          title: 'Underskjæring, listing & terskler',
          description: 'Karmer underskjæres, fotlister og terskler monteres, og rommet støvsuges og overleveres klart til innflytting.'
        }
      ],
      bygardNote: 'Vi har spesialisert oss på å rette opp ujevne trebjelkelag i Oslo-bygårder og levere godkjent trinnlydsdokumentasjon til styret i borettslaget.',
      faqs: [
        {
          question: 'Hvorfor er avretting med flytsparkel så viktig før parkett legges?',
          answer: 'Moderne klikkparkett krever et plant underlag med maks 2–3 mm avvik over 2 meter. Uten avretting vil gulvet svikte, skape knirkelyder og i verste fall knekke klikkskjøtene over tid.'
        },
        {
          question: 'Krever borettslaget dokumentasjon på trinnlydsisolering?',
          answer: 'Ja, de aller fleste borettslag og sameier i Oslo krever minimum 53 dB trinnlydisolering ved bytte til harde gulv. Vi bruker godkjente trinnlydsplater og gir deg nødvendig produktdokumentasjon til styret.'
        },
        {
          question: 'Kan dere legge fiskebensparkett?',
          answer: 'Ja, vi har solid erfaring med hel-liming av fiskebensparkett. Det gir et fantastisk resultat med massiv treklang, maksimal formstabilitet og ingen knirk.'
        },
        {
          question: 'Må fotlistene tas av før gulvet legges?',
          answer: 'Ja, for et profesjonelt og varig resultat må gamle lister fjernes så gulvet kan ekspandere under nye lister. Vi monterer nye lister som passer gulvet og stilen i rommet.'
        }
      ]
    },
    {
      title: 'Innvendig malerarbeid',
      slug: 'malerarbeid-oslo',
      href: path('/tjenester/malerarbeid-oslo/'),
      image: path('/images/soverom-hovedrom-nude-vegg.jpg'),
      shortDesc: 'Grundig forarbeid med helsparkling, støvfri sliping og maling av slette vegger, himlinger, klassisk stukkatur, dører og listverk i Oslo.',
      heroIntro: '80 % av et godt maleresultat ligger i forarbeidet. Vi utfører helsparkling med armeringsbånd, benytter maskinsliping med HEPA-støvsuger for minimalt med støv, og maler med Jotun Lady for feilfrie overflater og rette linjer.',
      highlights: ['Helsparkling & armeringsbånd', 'Støvfri maskinsliping med HEPA', 'Jotun Lady kvalitetsmaling', 'Maling av listverk, karmer & dører'],
      scopeOfWork: [
        {
          title: 'Grundig tildekking og maskering',
          description: 'Vi dekker til gulv med tykk filt/papp, maskerer stikkontakter, radiatorer og vinduskarmer, og setter opp støvsluse i dører for å skjerme resten av boligen.'
        },
        {
          title: 'Fjerning av strietapet og forarbeid',
          description: 'Riving eller fjerning av løs tapet, skraping av løs maling og påføring av sperregrunn på sugende underlag eller nikotin/vannflekker.'
        },
        {
          title: 'Helsparkling i 2–3 lag',
          description: 'Påføring av rullesparkel eller håndsparkel for å forvandle ujevne mur- eller strieverk til helt slette flater. Skjøter forsterkes med papirbånd mot oppsprekking.'
        },
        {
          title: 'Støvfri maskinsliping',
          description: 'Sliping med giraffsliper koblet direkte til industriell HEPA-støvsuger, som fjerner 99 % av slipestøvet og gir en silkemyk, plan overflate.'
        },
        {
          title: 'Grunning av vegger og himling',
          description: 'Påføring av grunning for å mette sparkelen og sikre at toppstrøket fester optimalt med jevn glans og uten skjolder.'
        },
        {
          title: 'To strøk med Jotun Lady',
          description: 'Toppstrøk med markedets beste interiørmaling (f.eks. Jotun Lady Pure Color eller Wonderwall) påført med ruller som sikrer minimal struktur og jevn dekning.'
        },
        {
          title: 'Maling av listverk, vinduer og innerdører',
          description: 'Pussing, flekksparkling og to strøk med spesialmaling for treverk (Jotun Supreme Finish) i ønsket glansgrad for slitesterke detaljer.'
        },
        {
          title: 'Akrylfuging og feilfrie overganger',
          description: 'Presis akrylfuging i alle hjørner, overganger mot tak og langs lister før siste malestrøk for snorrette og sprekkfrie overganger.'
        }
      ],
      pricingIntro: 'Prisen på malerarbeid beregnes basert på underlagets tilstand og detaljnivået i rommet:',
      pricingFactors: [
        {
          title: 'Veggenes utgangspunkt og forarbeid',
          description: 'En slett gipsvegg krever kun skjøtesparkling, mens eldre murvegger eller strietapet i bygårder krever 2–3 omganger med helsparkling og armering.'
        },
        {
          title: 'Takhøyde og stukkatur',
          description: 'Klassiske bygårdsleiligheter i Oslo med over 3 meter takhøyde og profilerte stukkaturer krever stillas og tidkrevende penselarbeid.'
        },
        {
          title: 'Treverk og dører',
          description: 'Maling av profilerte bygårdsdører, speilkarmer og høye fotlister krever grundig sliping og penselarbeid sammenlignet med slette flater.'
        },
        {
          title: 'Fargevalg og antall nyanser',
          description: 'Maling i én helhetlig farge er rimeligere enn kombinasjoner med flere fargeskift i samme rom som krever ekstra nøyaktig maskering.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Fase 1',
          title: 'Befaring & fargerådgivning',
          description: 'Vi vurderer veggenes tilstand, lysforhold og takhøyde, og gir råd om farger og nødvendig forarbeid.'
        },
        {
          phase: 'Fase 2',
          title: 'Tildekking & helsparkling',
          description: 'Komplett maskering av rommet, sparkling av første og andre lag, og tørketid.'
        },
        {
          phase: 'Fase 3',
          title: 'Støvfri sliping & grunning',
          description: 'Plansliping med HEPA-avtrekk, støvtørking og påføring av grunning samt akrylforsegling i hjørner.'
        },
        {
          phase: 'Fase 4',
          title: 'Maling av tak, vegg & treverk',
          description: 'To toppstrøk med Lady-maling, maling av karmer og lister, fjerning av maskering og grundig opprydding.'
        }
      ],
      bygardNote: 'Vi har spesialisert oss på maling av eldre bygårdsleiligheter på Frogner, St. Hanshaugen og Grünerløkka med høyt under taket, stukkatur og murvegger.',
      faqs: [
        {
          question: 'Blir hele leiligheten full av støv når dere helsparkler og sliper?',
          answer: 'Nei! Vi benytter profesjonelle planslipere koblet direkte til industrielle HEPA-støvsugere. I tillegg tetter vi døråpninger med støvsluser og dekker ventilasjon så slipestøv holdes under streng kontroll.'
        },
        {
          question: 'Hvilken malingstype anbefaler dere?',
          answer: 'Vi benytter primært Jotun Lady Pure Color for en supermatt, elegant overflate på stue og soverom, Lady Wonderwall på kjøkken og gang for ekstra vaskbarhet, og Lady Supreme Finish på listverk og dører.'
        },
        {
          question: 'Kan dere helsparkle over gammel glassfiberstrie?',
          answer: 'Ja, det er en svært vanlig løsning. Vi fjerner eventuelle løse partier, grunner ved behov, og helsparkler 2–3 strøk med armeringsbånd slik at du får helt slette og moderne vegger.'
        },
        {
          question: 'Må rommet tømmes helt for møbler før dere starter?',
          answer: 'Det beste og mest effektive er om rommet er tømt. Har du større møbler som er vanskelige å flytte ut, kan de samles midt i rommet slik at vi kan pakke dem forsvarlig inn i plast.'
        }
      ]
    },
    {
      title: 'Utvendig malerarbeid',
      slug: 'utvendig-maling-oslo',
      href: path('/tjenester/utvendig-maling-oslo/'),
      image: path('/images/rodt-trehus-fasademaling-stillas.jpg'),
      shortDesc: 'Profesjonell husmaling og fasadebehandling i Oslo og omegn – grundig fasadevask, sopp- og algedreper, skraping, grunning og to fyldige strøk på trehus og eneboliger.',
      heroIntro: 'Norske trehus krever kompromissløs beskyttelse mot skiftende vær, fukt, sol og kulde. Vi utfører grundig forarbeid med fasadevask, soppdreper, skraping av løs maling, kledningssjekk og nøyaktig maling av fasader, vinduer og staffasje med markedets beste utendørsmaling (f.eks. Jotun Drygolin Nordic Extreme).',
      highlights: ['Fasadevask & sopp-/algebehandling', 'Maling av fasader & vinduer', 'Jotun Drygolin & Optimal', 'Eneboliger, tomannsboliger & rekkehus'],
      scopeOfWork: [
        {
          title: 'Grundig husvask og sopp-/algedreper',
          description: 'Skånsom og effektiv vask av trekledningen med spesialtilpasset kraftvask og sopp- og algedreper som fjerner skitt, svertesopp og grønske uten å flise opp treverket.'
        },
        {
          title: 'Mekanisk skraping og børsting',
          description: 'Fjerning av all løs og flakende maling med skarpe skraper og stålbørster ned til fast, bærekraftig tre for å forhindre fremtidig avflassing og fuktfeller.'
        },
        {
          title: 'Kledningssjekk og enkle utskiftinger',
          description: 'Gjennomgang av kledningsbord, vindskier og vannbrett. Vi utfører snekkerutskifting av eventuelt råteskadet treverk før maling påbegynnes.'
        },
        {
          title: 'Grunning av bart treverk og endeved',
          description: 'Påføring av impregnerende visirgrunning på alle snittflater, endeved og avskrapte felter for optimal heft og dyp råtebeskyttelse.'
        },
        {
          title: 'Presis maskering og tildekking',
          description: 'Nøye tildekking av vindusglass, grunnmur, takrenner, terrassegulv og nærliggende vegetasjon for å unngå malingssøl og sprut.'
        },
        {
          title: 'To strøk med kvalitetsmaling',
          description: 'Påføring av to fulle strøk med premium utendørsmaling (f.eks. Jotun Drygolin Nordic Extreme eller Optimal) for maksimal farge- og glansholdbarhet og lang levetid.'
        },
        {
          title: 'Maling av vinduer, dører og staffasje',
          description: 'Nøyaktig presisjonsmaling av vinduskarmer, dørrammer, vindskier, hjørnekasser og gesimser med spesialmaling for utendørs høvlet treverk.'
        },
        {
          title: 'Opprydding og felles sluttbefaring',
          description: 'Fjerning av all maskering, grundig opprydding av malingsflak og emballasje på tomten, samt felles gjennomgang av hele fasaden.'
        }
      ],
      pricingIntro: 'Hva det koster å male et trehus utvendig avhenger av boligens høyde, kledningens tilstand og behovet for stillas:',
      pricingFactors: [
        {
          title: 'Boligens størrelse og etasjehøyde',
          description: 'En enetasjes enebolig med enkel adkomst krever mindre rigging enn en 2- eller 3-etasjers tomannsbolig med bratt terreng rundt.'
        },
        {
          title: 'Behov for stillas eller lift',
          description: 'Sikker og forskriftsmessig adkomst i høyden krever godkjent fasadestillas eller lift, som spesifiseres tydelig i tilbudet.'
        },
        {
          title: 'Kledningens tilstand og forarbeid',
          description: 'Et hus hvor malingen har flasset mye eller som ikke er vasket på over ti år krever betydelig mer skrapearbeid, pussing og flekkgrunning.'
        },
        {
          title: 'Detaljrikdom og staffasje',
          description: 'Store slette kledningsflater males raskere enn hus med mange sprosser, utskjæringer, vindusomramminger og ulike farger på kledning og detaljer.'
        }
      ],
      timelineSteps: [
        {
          phase: 'Fase 1',
          title: 'Befaring & fuktmåling',
          description: 'Vi kontrollerer fuktnivået i kledningen (må være under 16–18 %), vurderer kledningsbord og gir et bindende tilbud.'
        },
        {
          phase: 'Fase 2',
          title: 'Fasadevask & soppbehandling',
          description: 'Rengjøring med kraftvask, påføring av sopp- og algedreper og nødvendig tørketid før videre arbeid.'
        },
        {
          phase: 'Fase 3',
          title: 'Stillas, skraping & grunning',
          description: 'Montering av godkjent stillas, grundig skraping av flakende maling, sliping og grunning av bart treverk og endeved.'
        },
        {
          phase: 'Fase 4',
          title: 'Toppstrøk & sluttkontroll',
          description: 'To strøk med kledningsmaling, maling av vinduer og staffasje, demontering av stillas og felles sluttbefaring.'
        }
      ],
      bygardNote: 'Vi maler kun når treverket er tørt nok (digital fuktmåling) og under optimale værforhold, slik at du er sikret et holdbart resultat som tåler norsk vær og vind i mange år.',
      faqs: [
        {
          question: 'Hvor ofte bør et trehus males i Oslo og omegn?',
          answer: 'Normalt anbefales det å male trehuset hvert 8. til 12. år, avhengig av malingstype, soleksponering og værforhold. Fasader mot sør og vest er ofte mer utsatt for solbleking og slagregn enn nordveggen.'
        },
        {
          question: 'Hvilken maling anbefaler dere til norske trehus?',
          answer: 'Vi benytter primært Jotun Drygolin Nordic Extreme og Jotun Optimal. Disse produktene er spesialutviklet for det krevende nordiske klimaet og gir ekstrem beskyttelse mot overflatesopp, fukt og UV-stråler.'
        },
        {
          question: 'Hva gjør dere hvis det regner eller treverket er fuktig?',
          answer: 'Vi maler aldri på fuktig treverk. Før oppstart måler vi alltid fuktnivået med en profesjonell fuktmåler. Fuktinnholdet i kledningen må ligge under 16–18 % for å hindre at fukt sperres inne og skaper blæring eller råteskader.'
        },
        {
          question: 'Sørger dere for stillas og sikkerhet på plassen?',
          answer: 'Ja, vi ordner med godkjent og forskriftsmessig fasadestillas eller lift tilpasset eiendommen, og sørger for trygg sikring av arbeidsplassen under hele maleoppdraget.'
        }
      ]
    }
  ],
} as const;
