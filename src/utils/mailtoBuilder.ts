import { siteConfig } from '../data/siteConfig';

interface MailtoOptions {
  subject?: string;
  serviceName?: string;
}

export function buildSmartMailto(options: MailtoOptions = {}): string {
  const subject =
    options.subject ||
    (options.serviceName
      ? `Forespørsel: ${options.serviceName} i Oslo`
      : 'Forespørsel om gratis befaring – Oslo');

  const bodyLines = [
    `Hei ${siteConfig.owner},`,
    '',
    'Jeg ønsker en uforpliktende prat / befaring angående følgende prosjekt:',
    '',
    `1. Type oppdrag: ${options.serviceName || '[F.eks. bad, kjøkken, gulv, maling eller monteringsarbeid]'}`,
    '2. Bydel / adresse i Oslo: ',
    '3. Boligtype (f.eks. bygård, blokk, rekkehus, enebolig): ',
    '4. Ønsket tidspunkt for oppstart: ',
    '5. Mitt telefonnummer: ',
    '',
    'Kort beskrivelse av oppdraget:',
    '[Skriv gjerne et par setninger her – og legg gjerne ved 2–4 bilder av dagens rom/område!]',
    '',
    'Med vennlig hilsen,',
    '[Ditt navn]',
  ];

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(bodyLines.join('\r\n'));

  return `mailto:${siteConfig.email}?subject=${encodedSubject}&body=${encodedBody}`;
}
