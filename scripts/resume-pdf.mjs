// Prints /resume/print/ from the built site to public/ResumeAdrienPoirson.pdf with headless Chrome.
// Needs a build with RESUME_PDF=1 first, which the `resume` script does (and rebuilds without it after). Set CHROME to use another Chrome or Chromium binary.
import { spawn, execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

const port = 4331;
const out = resolve('public/ResumeAdrienPoirson.pdf');
const chrome = process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!existsSync(chrome)) {
	console.error(`Chrome not found at ${chrome}. Set CHROME to its path.`);
	process.exit(1);
}

const preview = spawn('npx', ['astro', 'preview', '--port', String(port)], { stdio: 'ignore' });
const url = `http://localhost:${port}/resume/print/`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
try {
	let up = false;
	for (let i = 0; i < 50 && !up; i++) {
		try {
			up = (await fetch(url)).ok;
		} catch {
			await sleep(200);
		}
	}
	if (!up) throw new Error('Preview server did not start.');
	execFileSync(chrome, ['--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000', `--print-to-pdf=${out}`, url], {
		stdio: 'inherit',
	});
	console.log(`Wrote ${out}`);
} finally {
	preview.kill();
}
