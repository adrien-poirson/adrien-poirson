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
	// The resume page is noindex (the PDF is the one to share), so it stays out of the sitemap too.
	integrations: [sitemap({ filter: (page) => !page.endsWith('/resume/') })],
	build: { inlineStylesheets: 'always' },
	vite: {
		plugins: [tailwindcss()],
	},
});
