import { paginate } from '@/constants/site'
import type { PageServerLoad } from './$types'
import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import { error } from '@sveltejs/kit'
import { generateDefaultMetaTag } from '@/lib/utils/generateDefaultMetaTag'

export const load: PageServerLoad = async () => {
	try {
		const res = await fetchArticleList({ categoryId: 'schedule', limit: paginate.list.limit })
		return {
			pageMetaTags: generateDefaultMetaTag({ pageTitle: 'Schedule' }),
			...res
		}
	} catch (e) {
		console.log(e)
		error(404, 'ページが見つかりませんでした')
	}
}

export const ssr = false
