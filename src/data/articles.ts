// Articles from Medium. `yarn medium` (and a daily GitHub Action) refreshes articles.json from the RSS feed.
import data from './articles.json';

export interface Article {
	id: string;
	title: string;
	/** The story on Medium, without tracking parameters. */
	url: string;
	/** Medium's subtitle, or the opening paragraph. */
	excerpt: string;
	/** The first image in the story, on Medium's CDN. */
	image: string | null;
	tags: string[];
	/** ISO dates. */
	published: string;
	updated: string | null;
	minutes: number;
}

export const medium = 'https://medium.com/@adrien.poirson';
export const articles: Article[] = data;

// Dates as Medium shows them to a reader in Vancouver: Oct 27, 2026.
export const formatDate = (iso: string) =>
	new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'America/Vancouver' });
