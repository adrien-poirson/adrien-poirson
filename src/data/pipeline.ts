// The whole delivery pipeline I own, from the first spec to the alert after release. Shown on the work page;
// every tool here is also in the resume's skills.
export const pipeline = {
	eyebrow: 'End to end',
	heading: ['From the first spec to the last ', 'alert.'],
	lead: 'I do not stop at the front end. I own the whole path a feature takes: what gets built, how it ships, where it runs and how I know it still works.',
	steps: [
		{
			title: 'Spec',
			body: 'Use cases and user stories written down before any code, so the scope means the same thing to everyone, agents included.',
			tools: ['Use cases', 'User stories', 'Written scope'],
		},
		{
			title: 'Plan',
			body: 'The work cut into small pieces on a board anyone can read, with something to try every week or two.',
			tools: ['Agile', 'Kanban'],
		},
		{
			title: 'Build',
			body: 'Tests first where it counts and a review on every change, so a feature arrives with the proof that it works.',
			tools: ['TDD', 'Automated tests', 'Code review'],
		},
		{
			title: 'Release',
			body: 'Every change built, tested and deployed by the pipeline rather than by hand. Small releases, and a rollback that is one step away.',
			tools: ['CI/CD pipelines', 'GitHub Actions'],
		},
		{
			title: 'Host',
			body: 'The same containers on my laptop and in production, whether that is a managed cloud or a server I run myself.',
			tools: ['Docker', 'Docker Compose', 'Managed cloud services'],
		},
		{
			title: 'Monitor',
			body: 'Errors reported before anyone has to, health checks that message me, and what they show feeds the next spec.',
			tools: ['Error tracking', 'Logs', 'Uptime checks'],
		},
	],
};
