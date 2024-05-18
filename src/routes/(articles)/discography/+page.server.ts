import { paginate } from '@/constants/site'
import type { PageServerLoad } from './$types'
import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import { error } from '@sveltejs/kit'
import { generateDefaultMetaTag } from '@/lib/utils/generateDefaultMetaTag'

export const load: PageServerLoad = async () => {
	try {
		const res = await fetchArticleList({ categoryId: 'discography', limit: paginate.list.limit })
		return {
			pageMetaTags: generateDefaultMetaTag({ pageTitle: 'Discography' }),
			...res
		}
	} catch (e) {
		error(404, 'ページが見つかりませんでした')
	}
}

export const ssr = false
