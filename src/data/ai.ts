// How I work with AI, for the home page section. Four practices and the projects built this way.
export const aiPractice = {
	eyebrow: '03 — Working with AI',
	heading: ['Fully on board, eyes ', 'open.'],
	lead: 'I do not use AI as autocomplete. Agents do real work for me every day, on my laptop and on a server under my desk, and I keep everything that matters in plain files I can read.',
	items: [
		{
			title: 'Two agents, one set of skills',
			body: 'Claude Code on the laptop, for the code. Hermes, an open-source agent, on my home server for the chores: health checks, daily and weekly reports, backups, a watch on what the models cost. Both read the same skills from one Git repository, so I write a procedure once and either agent can run it.',
		},
		{
			title: 'Frontier models and open ones',
			body: 'Claude for anything that touches code. The agent that runs all day uses pay-per-token models through OpenRouter, with a monthly cap on the key and a daily report of what it spent, usually around twenty cents. Those cloud models can still read my notes, so next is an RTX 3090 in the server, for a local model that keeps them in the house.',
		},
		{
			title: 'A second brain in Markdown',
			body: 'What I know lives in one vault of plain Markdown notes with wikilinks, open in Obsidian. It syncs end-to-end encrypted to the server, gets a Git commit every fifteen minutes, and only leaves the house encrypted. Agents read and write it several times a day under house rules: nothing deleted, moved or rewritten unless I ask, and the history is off limits. The vault is the source of truth; any database on top is a rebuildable index.',
		},
		{
			title: 'Pipelines that feed it',
			body: 'Videos through yt-dlp and Whisper into transcripts, PDFs into Markdown, newsletters into notes, all landing in the vault’s inbox, where an agent turns them into lessons and exercises for the next morning. Nothing gets summarised by a model without the source kept next to it.',
		},
	],
	builtTitle: 'Built this way',
	built: [
		{ name: 'ScrollUp', blurb: 'A daily learning dashboard whose content an agent writes into the vault.', href: '/work/#scrollup' },
		{
			name: 'My Personal Journal',
			blurb: 'An end-to-end encrypted journal: specs in Markdown and tests first, from the first commit.',
			href: '/work/#my-personal-journal',
		},
	],
};
