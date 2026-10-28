// Years since my first job, in April 2014, worked out at build time so the number moves on with each rebuild.
const careerStart = Date.UTC(2014, 3, 1);
const years = Math.floor((Date.now() - careerStart) / (365.25 * 24 * 60 * 60 * 1000));
const numberWords = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
export const experience = { years, words: numberWords[years - 10] ?? String(years) };

// The few facts every page shares.
export const site = {
	name: 'Adrien Poirson',
	role: 'Software engineer',
	tagline: 'Software engineer in Vancouver.',
	email: 'adrien.poirson@gmail.com',
	url: 'https://adrien-poirson.dev',
	resume: '/resume/',
	resumePdf: '/ResumeAdrienPoirson.pdf',
	github: 'https://github.com/adrien-poirson',
	linkedin: 'https://www.linkedin.com/in/adrienpoirson',
	employer: 'PolicyReporter',
	description:
		`Adrien Poirson is a software engineer in Vancouver with over ${experience.words} years on the front end of data products: analytics dashboards, reporting tools and data explorers, built in React and TypeScript.`,
};

export const nav = [
	{ href: '/work/', label: 'Work' },
	{ href: '/about/', label: 'About' },
	{ href: '/blog/', label: 'Blog' },
	{ href: '/resume/', label: 'Resume' },
	{ href: '/contact/', label: 'Contact' },
];
