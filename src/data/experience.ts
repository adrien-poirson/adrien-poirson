import type { ImageMetadata } from 'astro';
import disco from '../images/disco-1.jpg';
import calabrio from '../images/calabrio.png';
import cumul8 from '../images/cumul8.png';
import journal from '../images/my-personal-journal.webp';
import oceanops from '../images/oceanops.webp';

export interface Role {
	company: string;
	url?: string;
	location: string;
	role: string;
	period: string;
	/** The one line that sums the job up, used on the home page. */
	summary: string;
	/** The story, one paragraph per entry. */
	story: string[];
	highlights?: string[];
	link?: { href: string; label: string };
	image?: ImageMetadata;
	imageAlt?: string;
	/** Shown on the home page under Selected work. */
	featured?: boolean;
}

// Newest first.
export const roles: Role[] = [
	{
		company: 'PolicyReporter',
		url: 'https://www.policyreporter.com/',
		location: 'Vancouver, BC (remote)',
		role: 'Full-stack engineer',
		period: 'Present',
		summary:
			'Front-end direction on a healthcare policy platform: a component library I built from scratch for 30 engineers, and PHP pages rebuilt in modern React.',
		story: [
			'Where I work now. PolicyReporter tracks healthcare coverage policy: a great deal of structured data, and people who need the right part of it fast. I co-lead the front end’s technical direction: we set the code standards and decide the stack, which libraries we adopt, keep or retire.',
		],
		highlights: [
			'Created from scratch, and maintain, the component library 30 engineers build with. No bug reported against it, and feedback addressed as it comes in.',
			'Re-implementing legacy PHP pages in modern React.',
			'Dashboards with Amazon Quick Suite, through custom integration code because its SDK was too recent for our PHP version, with automatic user provisioning.',
		],
	},
	{
		company: 'CS Disco',
		url: 'https://csdisco.com/',
		location: 'Austin, Texas (remote)',
		role: 'Software architect, reporting',
		period: 'Jan 2022 – Aug 2024',
		summary:
			'Organization Metrics, a reporting product that shows legal teams how their whole organisation uses the platform, built from the ground up with React and GraphQL.',
		story: [
			'DISCO uses AI, cloud computing and data analytics to change how law is practised. A friend already worked there, and the mission made the decision easy. I joined to build Organization Metrics, a reporting product that shows customers how their whole organisation uses the platform, and I built it from the ground up: the architecture, the library choices and most of the code, with one back-end engineer alongside.',
			'Starting from scratch meant I could use what I thought was right: TypeScript, React with hooks, GraphQL for data, and virtualization so the tables stay quick however much data comes back. The hard part was never the features. It was keeping a page that can show a year of activity across a large firm feel instant.',
		],
		highlights: [
			'Two views, data usage and events, with interactive tables, advanced filtering and sorting, search with highlighted results, and export to CSV and DOC.',
			'A new video player on the HTML5 video element, driven by a small imperative API so it could evolve without breaking changes.',
			'Contributions to the in-house UI library built on react-aria, and older pages moved from class components to hooks, with slow screens made fast through virtualization and better data fetching.',
		],
		link: {
			href: 'https://support.csdisco.com/hc/en-us/articles/43618862278925-Organization-Metrics',
			label: 'Organization Metrics in the DISCO help centre',
		},
		image: disco,
		imageAlt: 'Organization Metrics in DISCO: a dashboard of usage over time with a filterable table below it.',
		featured: true,
	},
	{
		company: 'Global Relay',
		url: 'https://www.globalrelay.com/',
		location: 'Vancouver, BC (remote)',
		role: 'Front-end engineer, UI library',
		period: 'Sep 2021 – Dec 2021',
		summary: 'A short contract on the UI component library of a compliance and archiving platform.',
		story: [
			'A short contract between two longer roles, on the component library of a large compliance and archiving platform. I extended the library and moved legacy screens onto it, so that the product looked and behaved the same everywhere and the team had one set of components to maintain.',
		],
	},
	{
		company: 'Calabrio',
		url: 'https://www.calabrio.com/',
		location: 'Vancouver, BC (remote)',
		role: 'Principal front-end developer, Data Explorer',
		period: 'Oct 2017 – Sep 2021',
		summary:
			'Led the front end of Data Explorer, a rebuild of a Java and GWT analytics tool in React, and built its pivot table from scratch to handle millions of data points.',
		story: [
			'Calabrio makes workforce-optimisation software for contact centres, and joining them fulfilled a long-held ambition to work for an American company. I was hired as the principal front-end developer to modernise Data Explorer, their BI tool: replace the Java and GWT codebase with a React front end and reach feature parity. I designed the architecture and chose the libraries, and as more developers joined I led the team for several months, setting coding standards, reviewing code and mentoring.',
			'The hardest problem was the pivot table. Nothing off the shelf could be customised far enough, so I built it from scratch on react-virtualized. It ingests a tree of data and renders cells and their children on the fly while keeping the hierarchy intact, with search, filtering, drill-down and inline interactions on top, and it stays responsive with millions of data points. It pushed everything I knew about front-end performance.',
		],
		highlights: [
			'Customisable dashboards with many chart types, tables and reporting, built with React 16, Victory, react-virtualized, styled-components and ImmutableJS.',
			'A custom component library on Material UI and styled-components, used across the product.',
			'Code standards, library choices, code reviews and mentoring as the team grew.',
		],
		image: calabrio,
		imageAlt: 'Data Explorer in Calabrio: a configurable analytics dashboard with charts and a pivot table.',
		featured: true,
	},
	{
		company: 'Cumul8',
		location: 'Vancouver, BC',
		role: 'Front-end engineer',
		period: 'Jan 2016 – Nov 2017',
		summary: 'A data analytics and IoT platform: real-time dashboards, interactive charts, a shared component library and a React Native app.',
		story: [
			'Cumul8 was a data analytics and IoT platform that helped companies monitor, analyse and act on their data. This is where front-end development clicked for me. I worked alongside people who shared what they knew freely, grew faster than anywhere before or since, and built my first real-time dashboards and interactive charts.',
		],
		highlights: [
			'The platform front end in React 15, Victory, ImmutableJS and react-virtualized.',
			'A library of reusable React components that kept the product consistent and the team quick.',
			'A React Native app that brought key features and an alert system to mobile.',
		],
		image: cumul8,
		imageAlt: 'Cumul8: an analytics dashboard with live charts and gauges.',
		featured: true,
	},
	{
		company: 'Thinkingbox',
		url: 'https://thinkingbox.com/',
		location: 'Vancouver, BC',
		role: 'Front-end developer',
		period: 'Jul 2015 – Nov 2015',
		summary: 'Mobile-first marketing sites in React for film releases.',
		story: [
			'My first job in Canada: mobile-first marketing sites in React for film releases, among them The Gift and Secret in Their Eyes. Short deadlines, a lot of motion, and an education in making things work on every phone.',
		],
	},
	{
		company: 'JCOMMOPS',
		url: 'https://www.ocean-ops.org/',
		location: 'France',
		role: 'Software developer',
		period: 'Apr 2014 – Sep 2014',
		summary: 'A data management application for international ocean-observation programmes.',
		story: [
			'Where it started, at the end of my master’s: a data management application for the international ocean-observation programmes coordinated by JCOMMOPS, now OceanOPS. A desktop-like interface with custom widgets, dashboards and charts, and a map widget for exploring and downloading geospatial data. My first dashboards, and the first time I saw how much a clear interface changes what people can do with their data.',
		],
		image: oceanops,
		imageAlt: 'OceanOPS today: the map of ocean-observation platforms.',
	},
];

export interface Project {
	name: string;
	url?: string;
	period: string;
	story: string[];
	stack: string[];
	image?: ImageMetadata;
	imageAlt?: string;
}

export const projects: Project[] = [
	{
		name: 'ScrollUp',
		period: 'Ongoing',
		story: [
			'The problem: I wanted to close a specific skill gap, the fundamentals of machine learning on top of my software engineering, in a quarter of an hour a day, and no course or feed fit. So I built the dashboard I open every morning: two tabs, Learn and Practice, with streaks, XP and levels so that coming back is satisfying.',
			'It has no fixed subjects. What it teaches comes from the sources I give it: book chapters through Marker, newsletters through Crawl4AI, videos through yt-dlp and Whisper, into a Markdown vault that is also my notes. An agent turns those raw sources into lessons and exercises, every item cites its page or URL, and the app indexes and serves the vault.',
		],
		stack: ['React', 'Vite', 'TypeScript', 'Fastify', 'PostgreSQL', 'Drizzle', 'Markdown vault', 'Claude Code agent', 'Marker', 'Crawl4AI', 'yt-dlp + Whisper'],
	},
	{
		name: 'My Personal Journal',
		url: 'https://www.my-personal-journal.com',
		period: '2024 – ongoing',
		story: [
			'A private online journal. Every entry is encrypted on your device before it is saved, so nobody else can read it, not even the server. Rich text, photos encrypted the same way, tags, links between entries, search, and a book you bind in the cover and font you like.',
			'It started in the summer of 2024 out of a long habit of writing things down, and it has been built the same way since the first commit: specs in Markdown, tests first, every change through a pipeline.',
		],
		stack: ['TypeScript', 'React', 'styled-components', 'Firebase', 'Cloud Functions', 'Playwright', 'GitHub Actions'],
		image: journal,
		imageAlt: 'My Personal Journal: an entry open in the book, beside the index of past entries.',
	},
	{
		name: 'local-llm-lab',
		period: 'Ongoing',
		story: [
			'A standalone lab for serving open-weight models myself: Qwen 32B through Ollama on rented GPUs, with the prompting, quantization and batching trade-offs measured against the Claude API on quality, latency and cost. Kept apart from ScrollUp on purpose, so the messy exploration never blocks shipping. If it pans out, it becomes ScrollUp’s local provider.',
		],
		stack: ['Ollama', 'Qwen 32B', 'RunPod and Vast.ai', 'Python', 'Benchmarks'],
	},
	{
		name: 'Trade Seeds',
		period: '2019 – 2021',
		story: [
			'During two years of day trading I needed discipline more than data. Each morning I picked a handful of stocks and planned the trades; each evening I compared the plan to what I had done. The name comes from the idea that a planned trade is a seed: it only grows if you leave it alone. It kept me honest, and it taught me more about my own decisions than any chart.',
		],
		stack: ['React', 'Python (Flask)', 'MongoDB', 'REST API', 'Self-hosted'],
	},
];
