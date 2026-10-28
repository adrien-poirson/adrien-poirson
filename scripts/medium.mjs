// Pulls the Medium RSS feed into src/data/articles.json, which /blog/ renders.
// The feed only holds the latest ten stories, so new ones are merged into what is already saved instead of replacing it.
// Runs daily from .github/workflows/medium.yml; run it by hand with `yarn medium`.
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const feedUrl = 'https://medium.com/feed/@adrien.poirson';
const out = resolve('src/data/articles.json');

const res = await fetch(feedUrl, { headers: { 'User-Agent': 'adrien-poirson.dev article sync' } });
if (!res.ok) throw new Error(`Medium feed returned ${res.status}`);
const xml = await res.text();

const cdata = (s) => s?.replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1').trim();
const tag = (item, name) => cdata(item.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`))?.[1]);
const text = (html) =>
	html
		.replace(/<[^>]+>/g, ' ')
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/&quot;/g, '"')
		.replace(/&#39;/g, "'")
		.replace(/\s+/g, ' ')
		.trim();

const fresh = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item]) => {
	const content = tag(item, 'content:encoded') ?? '';
	// Medium puts the subtitle first, as an italic paragraph; fall back to the opening paragraph.
	const subtitle = content.match(/^\s*<p>\s*<em>([\s\S]*?)<\/em>\s*<\/p>/)?.[1];
	const firstParagraph = content.match(/<p>([\s\S]*?)<\/p>/)?.[1] ?? '';
	const excerpt = text(subtitle ?? firstParagraph);
	return {
		id: tag(item, 'guid').split('/').pop(),
		title: text(tag(item, 'title')),
		url: tag(item, 'link').split('?')[0],
		excerpt: excerpt.length > 240 ? `${excerpt.slice(0, 237).replace(/\s+\S*$/, '')}…` : excerpt,
		image: content.match(/<img[^>]+src="([^"]+)"/)?.[1] ?? null,
		tags: [...item.matchAll(/<category>([\s\S]*?)<\/category>/g)].map(([, c]) => cdata(c)),
		published: new Date(tag(item, 'pubDate')).toISOString(),
		updated: tag(item, 'atom:updated') ?? null,
		// About 230 words a minute, the way Medium counts.
		minutes: Math.max(1, Math.round(text(content).split(' ').length / 230)),
	};
});

let saved = [];
try {
	saved = JSON.parse(await readFile(out, 'utf8'));
} catch {}

// The feed wins for stories it still holds, so edits on Medium come through.
const byId = new Map(saved.map((a) => [a.id, a]));
for (const a of fresh) byId.set(a.id, a);
const articles = [...byId.values()].sort((a, b) => b.published.localeCompare(a.published));

const json = `${JSON.stringify(articles, null, '\t')}\n`;
const before = saved.length ? `${JSON.stringify(saved, null, '\t')}\n` : '';
if (json === before) {
	console.log(`No change: ${articles.length} articles.`);
} else {
	await writeFile(out, json);
	console.log(`Wrote ${articles.length} articles to src/data/articles.json.`);
}
