import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticle } from '@/lib/sdk/cms/fetchArticle'
import { generateDefaultMetaTag } from '@/lib/utils/generateDefaultMetaTag'
import { dynamicCacheHeaders } from '@/lib/utils/cacheHeaders'

export const load: PageServerLoad = async ({ params, url, setHeaders }) => {
	const draftKey = url.searchParams.get('draftKey')

	try {
		const res = await fetchArticle({ slug: params.slug, draftKey })
		if (draftKey == null) setHeaders(dynamicCacheHeaders)
		return {
			pageMetaTags: generateDefaultMetaTag({ pageTitle: `Schedule: ${res.item.title}` }),
			...res
		}
	} catch (e) {
		console.log(e)
		error(404, 'ページが見つかりませんでした')
	}
}

export const ssr = true
