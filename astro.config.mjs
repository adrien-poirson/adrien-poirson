// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// A static site: every page is HTML in dist/, images are resized at build time by astro:assets.
// The contact form is handled by Netlify Forms, so nothing runs on a server.
export default defineConfig({
	site: 'https://adrien-poirson.dev',
	// Every URL ends in a slash, so canonicals, the sitemap and the links all agree.
	trailingSlash: 'always',
	// /resume/print/ only exists in `yarn resume` builds, to print the PDF, and never belongs in the sitemap.
	integrations: [sitemap({ filter: (page) => !page.endsWith('/resume/print/') })],
	build: { inlineStylesheets: 'always' },
	// Cover images for /blog/ come from Medium's CDN and are resized at build time like the local ones.
	image: { domains: ['cdn-images-1.medium.com', 'miro.medium.com'] },
	vite: {
		plugins: [tailwindcss()],
	},
});
