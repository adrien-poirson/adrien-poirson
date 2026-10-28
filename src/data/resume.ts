// The resume, as data. /resume/ renders it, and `yarn resume` prints that page to public/ResumeAdrienPoirson.pdf.
import { site } from './site';

export const resume = {
	name: site.name,
	title: 'Software Engineer',
	contact: [
		{ label: 'Vancouver, BC, Canada' },
		{ label: '604-347-5631', href: 'tel:+16043475631' },
		{ label: site.email, href: `mailto:${site.email}` },
		{ label: 'linkedin.com/in/adrienpoirson', href: site.linkedin },
		{ label: 'adrien-poirson.dev', href: site.url },
	],
	summary:
		'Software engineer with over ten years on the front end of data products: analytics dashboards, reporting tools and data explorers for legal, contact-centre, healthcare and research platforms. Most at home in React and TypeScript, and comfortable with Node, Python and databases when a project needs the whole thing. Remote since 2018. I take ownership of what I ship, write plainly, and build every day with AI agents while answering for every line.',
	skills: [
		{ title: 'Languages', items: 'TypeScript, JavaScript, HTML, CSS, Python, PHP' },
		{ title: 'Front end', items: 'React, React Native, Next.js, Astro, Redux, GraphQL, styled-components, Tailwind CSS, Storybook' },
		{ title: 'Data and visualization', items: 'Victory, react-virtualized, react-window, custom charts and pivot tables, real-time dashboards' },
		{ title: 'Testing', items: 'React Testing Library, Playwright, Cypress, Jest' },
		{ title: 'Back end and data', items: 'Node.js, Python (Flask), REST APIs, PostgreSQL, MongoDB, Firebase' },
		{ title: 'Tooling and delivery', items: 'Git, GitHub Actions, Docker, Webpack, Vite, Netlify, Tailscale, Linux servers' },
		{ title: 'AI', items: 'Claude Code, Hermes agent, agent skills and prompting, OpenRouter and open-weight models, Ollama, Whisper, Markdown vaults' },
		{ title: 'Soft skills', items: 'Communication, adaptability, collaboration, ownership, problem-solving' },
	],
	experience: [
		{
			company: 'PolicyReporter',
			url: 'policyreporter.com',
			location: 'Vancouver',
			role: 'Software Engineer',
			period: 'Nov 2024 – Present',
			bullets: [
				'Front-end engineering on a healthcare coverage-policy platform: large volumes of structured data, presented so that people find the right part of it quickly.',
			],
		},
		{
			company: 'CS Disco',
			url: 'csdisco.com',
			location: 'Austin, TX (remote)',
			role: 'Software Engineer, Reporting',
			period: 'Jan 2022 – Aug 2024',
			bullets: [
				'Built Organization Metrics from the ground up: a reporting micro front end that shows customers how their whole organisation uses the platform. Two views (data usage and events), interactive tables with advanced filtering, sorting, search with highlighted results and export. TypeScript, React 17 with hooks, GraphQL, react-window for virtualization.',
				'Developed a new video player on the HTML5 video element, driven by a small imperative API (useImperativeHandle) so it could evolve without breaking changes.',
				'Contributed to the in-house UI library built on react-aria, moved older screens from class components to hooks, and made slow pages fast with virtualization and better data fetching.',
			],
		},
		{
			company: 'Global Relay',
			url: 'globalrelay.com',
			location: 'Vancouver',
			role: 'Front-end Engineer (contract)',
			period: 'Sep 2021 – Dec 2021',
			bullets: [
				'Extended the UI component library of a compliance and archiving platform and refactored legacy screens onto it, for consistency and easier maintenance.',
			],
		},
		{
			company: 'Calabrio',
			url: 'calabrio.com',
			location: 'Minneapolis, MN (remote)',
			role: 'Principal Front-end Developer',
			period: 'Oct 2017 – Sep 2021',
			bullets: [
				'Led the front end of Data Explorer, a rebuild of a Java and GWT analytics tool in React 16: architecture, library choices, coding standards, code reviews and mentoring as the team grew.',
				'Shipped customisable dashboards with many chart types, tables and reporting, with Victory, react-virtualized, styled-components and ImmutableJS.',
				'Engineered a pivot table from scratch on react-virtualized that handles millions of data points: dynamic rendering of hierarchical data with search, filtering and drill-down.',
				'Created a custom component library on Material UI and styled-components, used across the product.',
			],
		},
		{
			company: 'Cumul8',
			location: 'Vancouver',
			role: 'Front-end Engineer',
			period: 'Jan 2016 – Nov 2017',
			bullets: [
				'Engineered the front end of a data intelligence and IoT platform in React 15, Victory, ImmutableJS and react-virtualized: real-time dashboards and interactive data visualizations.',
				'Maintained a library of reusable React components, and built a React Native app that brought key features and an alert system to mobile.',
			],
		},
		{
			company: 'Thinkingbox',
			url: 'thinkingbox.com',
			location: 'Vancouver',
			role: 'Front-end Developer',
			period: 'Jul 2015 – Nov 2015',
			bullets: ['Mobile-first marketing sites in React for film releases, among them The Gift and Secret in Their Eyes.'],
		},
		{
			company: 'JCOMMOPS (now OceanOPS)',
			url: 'ocean-ops.org',
			location: 'France',
			role: 'Software Developer',
			period: 'Apr 2014 – Sep 2014',
			bullets: [
				'A data management application for international ocean-observation programmes: a desktop-like interface with custom widgets, dashboards and charts, and a map widget for exploring and downloading geospatial data.',
			],
		},
	],
	projects: [
		{
			name: 'ScrollUp',
			period: 'Ongoing',
			body: 'A daily learning and practice dashboard with streaks, XP and levels, built to close a specific skill gap in fifteen minutes a day. Content is generated by an agent into an Obsidian-compatible Markdown vault from books, newsletters and videos (Marker, Crawl4AI, yt-dlp and Whisper), every item citing its source. React, Vite, TypeScript, Fastify, PostgreSQL, Drizzle; Claude Code as the implementation agent, with me as tech lead and product owner.',
		},
		{
			name: 'My Personal Journal',
			url: 'my-personal-journal.com',
			period: '2024 – ongoing',
			body: 'An end-to-end encrypted online journal: AES-256 on the device before anything is saved, encrypted photos, tags, links between entries, search and a bookbound reading view. TypeScript, React, Firebase, Cloud Functions, Playwright, GitHub Actions. Built with an AI agent as pair programmer from the first commit: specs in Markdown, tests first, every change through a pipeline.',
		},
		{
			name: 'local-llm-lab',
			period: 'Ongoing',
			body: 'Serving open-weight models myself, Qwen 32B through Ollama on rented GPUs (RunPod, Vast.ai), and benchmarking prompting, quantization and batching trade-offs against the Claude API on quality, latency and cost.',
		},
		{
			name: 'Home server and agents',
			period: 'Ongoing',
			body: 'A self-hosted Linux server running Docker stacks (photos, media, a dashboard, CouchDB sync for the notes vault) behind Tailscale, with nightly restic backups to Backblaze B2 and health checks that alert on Telegram. Operated by Hermes, an open-source agent, which shares one Git repository of skills with Claude Code so a procedure is written once and either agent can run it.',
		},
		{
			name: 'Trade Seeds',
			period: '2019 – 2021',
			body: 'A trade-planning and review tool built during two years of day trading: React, Python (Flask) and MongoDB, self-hosted.',
		},
	],
	education: [{ degree: 'Master in Information Systems and Software Development', school: 'UT1 Capitole, Toulouse, France', period: '2012 – 2014' }],
	languages: 'French (native), English (fluent)',
	interests: 'Kiteboarding, mountain biking, skiing',
};
