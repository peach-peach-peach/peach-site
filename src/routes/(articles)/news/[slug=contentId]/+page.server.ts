import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticle } from '@/lib/sdk/cms/fetchArticle'
import { generateDefaultMetaTag } from '@/lib/utils/generateDefaultMetaTag'

export const load: PageServerLoad = async ({ params, url }) => {
	const draftKey = url.searchParams.get('draftKey')

	try {
		const res = await fetchArticle({ slug: params.slug, draftKey })
		return {
			pageMetaTags: generateDefaultMetaTag({ pageTitle: `News: ${res.item.title}` }),
			...res
		}
	} catch (e) {
		console.log(e)
		error(404, 'ページが見つかりませんでした')
	}
}

export const ssr = false
