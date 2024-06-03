import { dev } from '$app/environment'
import { staticCacheHeaders } from '@/lib/utils/cacheHeaders.js'
import { generateDefaultMetaTag } from '@/lib/utils/generateDefaultMetaTag'

export const ssr = true

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true

export const load = ({ setHeaders }) => {
	setHeaders(staticCacheHeaders)

	return {
		pageMetaTags: generateDefaultMetaTag({ pageTitle: `Profile` })
	}
}
