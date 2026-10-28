export interface SkillGroup {
	title: string;
	skills: string[];
}

// Every tool I use, in the resume's groups. The resume shows it, and the page metadata and llms.txt read it too.
export const skills: SkillGroup[] = [
	{ title: 'Languages', skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'PHP'] },
	{
		title: 'Front end',
		skills: [
			'React',
			'React Native',
			'Next.js',
			'Astro',
			'Redux',
			'TanStack',
			'GraphQL',
			'styled-components',
			'Tailwind CSS',
			'Storybook',
		],
	},
	{
		title: 'Data and visualization',
		skills: [
			'Victory',
			'react-virtualized',
			'react-window',
			'Amazon Quick Suite',
			'Custom charts and pivot tables',
			'Real-time dashboards',
		],
	},
	{ title: 'Testing', skills: ['React Testing Library', 'Playwright', 'Cypress', 'Jest'] },
	{ title: 'Back end and data', skills: ['Node.js', 'Python (Flask)', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Firebase'] },
	{
		title: 'DevOps and tooling',
		skills: [
			'Git',
			'GitHub Actions',
			'Docker',
			'Webpack',
			'Vite',
			'Netlify',
			'Vercel',
			'Firebase Hosting and Storage',
			'DigitalOcean',
			'AWS console',
			'Ubuntu server administration over SSH (installs, updates, maintenance)',
			'Tailscale',
			'DNS and email domain setup',
		],
	},
	{
		title: 'Process and delivery',
		skills: [
			'Use cases',
			'User stories',
			'Written scope',
			'Agile',
			'Kanban',
			'TDD',
			'Automated tests',
			'Code review',
			'CI/CD pipelines',
			'Docker Compose',
			'Managed cloud services',
			'Error tracking',
			'Logs',
			'Uptime checks',
		],
	},
	{ title: 'Design', skills: ['Figma', 'Design systems'] },
	{
		title: 'AI',
		skills: [
			'Claude Code',
			'Hermes agent',
			'Agent skills and prompting',
			'OpenRouter and open-weight models',
			'Ollama',
			'Whisper',
			'Markdown vaults',
		],
	},
];

export interface Offer {
	title: string;
	body: string;
	/** A 24x24 SVG path, drawn as a large faint line icon behind the item. */
	icon: string;
	/** The part of the icon drawn in rust: the detail that matches the paragraph. */
	accent: string;
	featured?: boolean;
}

// What I get asked to build most.
export const offers: Offer[] = [
	{
		title: 'Dashboards and data visualization',
		// Axes and bars, with a trend line on top ending on a rust point.
		icon: 'M3 3v18h18M7 17v-3M11 17v-6M15 17v-4M19 17v-8',
		accent: 'M7 10l4-4 4 3 4-5M19 4h.01',
		body: 'Analytics dashboards, reporting tools and data explorers for legal, contact-centre and research platforms. Tables with millions of rows that still feel instant, charts that answer a question, and a pivot table built from scratch when no library would do.',
		featured: true,
	},
	{
		title: 'Web applications',
		// A browser window with an app laid out inside it.
		icon: 'M3 5h18v14H3zM3 9h18M6 7h.01M9 7h.01M6.5 12.5h5M6.5 15.5h3',
		accent: 'M14.5 12.5h3v3.5h-3z',
		body: 'Customer-facing products and internal tools in React and TypeScript, from the first component to the deploy pipeline, with the back end and the database when the project needs them.',
	},
	{
		title: 'Design systems and component libraries',
		// Building blocks, one of them a different shape: a set of components.
		icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4z',
		accent: 'M16.5 13a3.5 3.5 0 1 1 0 7a3.5 3.5 0 1 1 0-7z',
		body: 'Shared UI libraries that keep a product consistent and a team fast. I have built or maintained one at nearly every company I have worked for.',
	},
	{
		title: 'Performance and modernisation',
		// A speed gauge, the needle near the top of the dial.
		icon: 'M5.6 18.4a9 9 0 1 1 12.8 0M12 5v1.5M5.9 8.6l1.3.8M18.1 8.6l-1.3.8M4.5 13.5H6M18 13.5h1.5',
		accent: 'M12 14.5l4.5-5M12 14.5h.01',
		body: 'Legacy code brought up to date and slow pages made quick: virtualization, smarter data fetching, class components turned into hooks, Java and GWT replaced with React.',
	},
];
