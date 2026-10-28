// The whole delivery pipeline I own, from the first spec to the alert after release. Shown on the work page;
// every tool here is also in the resume's skills. Icons are 24x24 line paths, with the accent part drawn in rust.
export const pipeline = {
	eyebrow: 'End to end',
	heading: ['From the first spec to the last ', 'alert.'],
	lead: 'I do not stop at the front end. I own the whole path a feature takes: what gets built, how it ships, where it runs and how I know it still works.',
	steps: [
		{
			title: 'Spec',
			icon: 'M6 3h9l3 3v15H6zM9 9h6M9 12.5h6',
			accent: 'M9 16.5l1.5 1.5 3.5-3.5',
			body: 'Use cases and user stories written down before any code, so the scope means the same thing to everyone, agents included.',
			tools: ['Use cases', 'User stories', 'Written scope'],
		},
		{
			title: 'Plan',
			icon: 'M3 4h18v16H3zM9 4v16M15 4v16M5 8h2M11 8h2M11 11.5h2',
			accent: 'M17 8h2M17 11.5h2',
			body: 'The work cut into small pieces on a board anyone can read, with something to try every week or two.',
			tools: ['Agile', 'Kanban'],
		},
		{
			title: 'Build',
			icon: 'M8 7l-5 5 5 5M16 7l5 5-5 5',
			accent: 'M9.5 12.5l2 2 3.5-4',
			body: 'Tests first where it counts and a review on every change, so a feature arrives with the proof that it works.',
			tools: ['TDD', 'Automated tests', 'Code review'],
		},
		{
			title: 'Release',
			icon: 'M3 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M10 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 12h3',
			accent: 'M14 12h7M18 9l3 3-3 3',
			body: 'Every change built, tested and deployed by the pipeline rather than by hand. Small releases, and a rollback that is one step away.',
			tools: ['CI/CD pipelines', 'GitHub Actions'],
		},
		{
			title: 'Host',
			icon: 'M4 4h16v6H4zM4 14h16v6H4zM11 7h6M11 17h6',
			accent: 'M7 7h.01M7 17h.01',
			body: 'The same containers on my laptop and in production, whether that is a managed cloud or a server I run myself.',
			tools: ['Docker', 'Docker Compose', 'Managed cloud services'],
		},
		{
			title: 'Monitor',
			icon: 'M3.5 18a8.5 8.5 0 1 1 17 0M12 9.5v1.5M7 12l1 1M17 12l-1 1',
			accent: 'M12 18l3.5-4.5',
			body: 'Errors reported before anyone has to, health checks that message me, and what they show feeds the next spec.',
			tools: ['Error tracking', 'Logs', 'Uptime checks'],
		},
	],
};
