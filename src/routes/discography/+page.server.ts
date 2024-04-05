import { paginate } from '@/constants/site'
import type { PageServerLoad } from './$types'
import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import { error } from '@sveltejs/kit'

export const load: PageServerLoad = async () => {
	try {
		return await fetchArticleList({ categoryId: 'discography', limit: paginate.list.limit })
	} catch (e) {
		error(404, 'ページが見つかりませんでした')
	}
}

export const ssr = false
