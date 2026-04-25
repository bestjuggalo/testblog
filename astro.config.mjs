// @ts-check

import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://protokletos.org', // Update this to your actual domain
	output: 'static', // Use 'static' for static site generation (best for blogs)
	adapter: cloudflare(),
	integrations: [mdx(), sitemap()],
});
