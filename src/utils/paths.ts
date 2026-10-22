export function path(p: string = ''): string {
  const base = import.meta.env.BASE_URL; // Always has trailing slash in Astro (e.g. "/nordbygg-website/" or "/")
  if (!p || p === '/') {
    return base;
  }
  const cleanPath = p.replace(/^\//, '');
  return `${base}${cleanPath}`;
}
