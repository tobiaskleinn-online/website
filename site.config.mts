import type { AstroInstance } from 'astro';
import { Github, Instagram } from 'lucide-astro';

export interface SocialLink {
	name: string;
	url: string;
	icon: AstroInstance;
}

export default {
	title: 'TK',
	favicon: 'favicon.ico',
	owner: 'Tobias Klein',
	profileImage: 'profile.jpg',
	socialLinks: [
		{
			name: 'GitHub',
			url: 'https://tobiaskleinn-online.github.io/website/',
			icon: Github,
		} as SocialLink,
		{
			name: 'Instagram',
			url: 'https://www.instagram.com',
			icon: Instagram,
		} as SocialLink,
	],
};
