// Screenshots scripts/og/*.html with headless Chrome into public/og.png (the social card) and public/apple-touch-icon.png.
// Set CHROME to use another Chrome or Chromium binary.
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!existsSync(chrome)) {
	console.error(`Chrome not found at ${chrome}. Set CHROME to its path.`);
	process.exit(1);
}

const shots = [
	{ page: 'scripts/og/card.html', out: 'public/og.png', size: '1200,630' },
	{ page: 'scripts/og/icon.html', out: 'public/apple-touch-icon.png', size: '180,180' },
];
for (const { page, out, size } of shots) {
	execFileSync(
		chrome,
		[
			'--headless=new',
			'--disable-gpu',
			'--hide-scrollbars',
			'--virtual-time-budget=8000',
			`--window-size=${size}`,
			`--screenshot=${resolve(out)}`,
			pathToFileURL(resolve(page)).href,
		],
		{ stdio: 'ignore' },
	);
	console.log(`Wrote ${out}`);
}
