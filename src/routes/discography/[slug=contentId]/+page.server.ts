import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticle } from '@/lib/sdk/cms/fetchArticle'

export const load: PageServerLoad = async ({ params, url }) => {
	const draftKey = url.searchParams.get('draftKey')

	try {
		return await fetchArticle({ slug: params.slug, draftKey })
	} catch (e) {
		console.log(e)
		error(404, 'ページが見つかりませんでした')
	}
}

export const ssr = false
