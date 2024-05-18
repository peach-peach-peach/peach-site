import type { MetaTagsProps } from 'svelte-meta-tags'
import { site } from '@/constants/site'

export const load = async ({ url }) => {
	const canonical = new URL(url.pathname, url.origin).href

	const baseMetaTags = Object.freeze({
		title: site.title,
		description: site.description,
		canonical,
		additionalMetaTags: [
			// StatusBarの色を指定
			{ name: 'theme-color', content: '#ff3998' /* color-key-pink-deep */ },
			// ホームに追加対応
			{ name: 'mobile-web-app-capable', content: 'yes' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' }
		],
		openGraph: {
			url: canonical,
			title: site.title,
			siteName: site.title,
			description: site.description,
			images: [{ url: site.ogpImage }]
		},
		twitter: {
			cardType: 'summary' as const,
			title: site.title,
			description: site.description,
			image: site.ogpImage,
			imageAlt: 'Peach Peach Peach site logo'
		}
	}) satisfies MetaTagsProps

	return {
		baseMetaTags
	}
}
