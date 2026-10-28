// The site as Markdown-flavoured plain text for language models and agents, following https://llmstxt.org.
// Built from the same data as the pages, so it never drifts from them. Served at /llms.txt and /llms-full.txt.
import { site } from '../data/site';
import { roles, projects } from '../data/experience';
import { skills, offers } from '../data/skills';
import { aiPractice } from '../data/ai';

const url = (path: string) => new URL(path, site.url).href;

const header = [
	`# ${site.name}`,
	'',
	`> ${site.description}`,
	'',
	`${site.name} is a ${site.role.toLowerCase()} at ${site.employer}, based in Vancouver, Canada. Works in English and French, remote since 2018, with a Master in Information Systems and Software Development from UT1 Capitole, France.`,
	'',
	`Contact: ${site.email} · LinkedIn: ${site.linkedin} · GitHub: ${site.github}`,
];

const pages = [
	`- [Home](${url('/')}): introduction, what Adrien builds, selected work and working with AI.`,
	`- [Work](${url('/work/')}): every role, newest first, and personal projects.`,
	`- [About](${url('/about/')}): background, toolbox and principles.`,
	`- [Contact](${url('/contact/')}): how to get in touch.`,
	`- [Resume (PDF)](${url(site.resume)}): the one-page resume.`,
];

export function llmsTxt() {
	return [
		...header,
		'',
		'## Pages',
		'',
		...pages,
		'',
		'## Optional',
		'',
		`- [Full text](${url('/llms-full.txt')}): the whole site in one plain-text file.`,
		`- [Sitemap](${url('/sitemap-index.xml')})`,
		'',
	].join('\n');
}

export function llmsFullTxt() {
	const out = [...header, '', '## Pages', '', ...pages, ''];

	out.push('## What Adrien builds', '');
	for (const { title, body } of offers) out.push(`### ${title}`, '', body, '');

	out.push('## Experience', '', 'Newest first.', '');
	for (const r of roles) {
		out.push(`### ${r.company} — ${r.role}`, '', `${r.period} · ${r.location}${r.url ? ` · ${r.url}` : ''}`, '');
		for (const p of r.story) out.push(p, '');
		if (r.highlights) out.push(...r.highlights.map((h) => `- ${h}`), '');
		if (r.link) out.push(`More: [${r.link.label}](${r.link.href})`, '');
	}

	out.push('## Personal projects', '');
	for (const p of projects) {
		out.push(`### ${p.name}`, '', `${p.period}${p.url ? ` · ${p.url}` : ''}`, '');
		for (const s of p.story) out.push(s, '');
		out.push(`Stack: ${p.stack.join(', ')}`, '');
	}

	out.push('## Working with AI', '', aiPractice.lead, '');
	for (const { title, body } of aiPractice.items) out.push(`### ${title}`, '', body, '');

	out.push('## Toolbox', '');
	for (const { title, skills: items } of skills) out.push(`- ${title}: ${items.join(', ')}`);
	out.push('');

	return out.join('\n');
}
