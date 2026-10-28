export interface SkillGroup {
	title: string;
	skills: string[];
}

// What I reach for, roughly in order of how often.
export const skills: SkillGroup[] = [
	{ title: 'Languages', skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Python', 'PHP'] },
	{ title: 'Front end', skills: ['React', 'React Native', 'Next.js', 'Astro', 'Redux', 'GraphQL', 'styled-components', 'Tailwind CSS', 'Storybook'] },
	{ title: 'Data and visualization', skills: ['Victory', 'react-virtualized', 'react-window', 'Custom charts and pivot tables', 'Real-time dashboards'] },
	{ title: 'Testing', skills: ['React Testing Library', 'Playwright', 'Cypress', 'Jest'] },
	{ title: 'Back end and data', skills: ['Node.js', 'Python (Flask)', 'REST APIs', 'PostgreSQL', 'MongoDB', 'Firebase'] },
	{ title: 'Tooling and delivery', skills: ['Git', 'GitHub Actions', 'Docker', 'Webpack', 'Vite', 'Netlify'] },
	{ title: 'Design', skills: ['Figma', 'InVision', 'Zeplin', 'Design systems'] },
	{
		title: 'AI',
		skills: ['Claude Code', 'Hermes agent', 'Agent skills and prompting', 'OpenRouter and open-weight models', 'Ollama', 'Whisper', 'Markdown vaults'],
	},
];

export interface Offer {
	title: string;
	body: string;
	/** A 24x24 SVG path drawn as a line icon beside the title. */
	icon: string;
	featured?: boolean;
}

// What I get asked to build most.
export const offers: Offer[] = [
	{
		title: 'Dashboards and data visualization',
		icon: 'M3 20h18M6 17V9M11 17V4M16 17v-6M21 17v-3',
		body: 'Analytics dashboards, reporting tools and data explorers for legal, contact-centre and research platforms. Tables with millions of rows that still feel instant, charts that answer a question, and a pivot table built from scratch when no library would do.',
		featured: true,
	},
	{
		title: 'Web applications',
		icon: 'M3 5h18v14H3zM3 9h18M6 7h.01M9 7h.01',
		body: 'Customer-facing products and internal tools in React and TypeScript, from the first component to the deploy pipeline, with the back end and the database when the project needs them.',
	},
	{
		title: 'Design systems and component libraries',
		icon: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
		body: 'Shared UI libraries that keep a product consistent and a team fast. I have built or maintained one at nearly every company I have worked for.',
	},
	{
		title: 'Performance and modernisation',
		icon: 'M12 4a8 8 0 0 0-8 8c0 2.2.9 4.2 2.3 5.7M12 4a8 8 0 0 1 8 8c0 2.2-.9 4.2-2.3 5.7M12 12l4-3M12 12a1 1 0 1 0 0 .01',
		body: 'Legacy code brought up to date and slow pages made quick: virtualization, smarter data fetching, class components turned into hooks, Java and GWT replaced with React.',
	},
];
