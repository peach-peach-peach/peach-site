import type { MetaTagsProps } from 'svelte-meta-tags'
import type { DeepPartial } from './DeepPartial'
import { site } from '@/constants/site'

type Props = {
	pageTitle: string
	pageDescription?: string
}

export const generateDefaultMetaTag = ({ pageTitle, pageDescription }: Props): DeepPartial<MetaTagsProps> => {
	const filledTitle = `${pageTitle} | ${site.title}`
	return Object.freeze({
		title: filledTitle,
		description: pageDescription,
		openGraph: {
			title: filledTitle,
			description: pageDescription
		},
		twitter: {
			title: filledTitle,
			description: pageDescription
		}
	})
}
