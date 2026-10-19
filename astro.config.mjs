import { defineConfig } from 'astro/config';

// Deploy anywhere: set SITE_URL for absolute og/canonical URLs, and BASE_PATH
// only if hosting under a sub-path (e.g. GitHub Pages project sites).
export default defineConfig({
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'ignore',
});
