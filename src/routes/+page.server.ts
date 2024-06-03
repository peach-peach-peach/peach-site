import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import { fetchTopConfigs } from '@/lib/sdk/cms/fetchTopConfigs'
import { dynamicCacheHeaders } from '@/lib/utils/cacheHeaders'

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		const [newsRes, scheduelRes, videoRes, discoRes, topConfigsRes] = await Promise.all([
			fetchArticleList({ categoryId: 'news', limit: 4 }),
			fetchArticleList({ categoryId: 'schedule', limit: 4 }),
			fetchArticleList({ categoryId: 'videos', limit: 3 }),
			fetchArticleList({ categoryId: 'discography', limit: 3 }),
			fetchTopConfigs({ draftKey: null })
		])
		setHeaders(dynamicCacheHeaders)

		return {
			news: newsRes.contents,
			schedule: scheduelRes.contents,
			videos: videoRes.contents,
			discography: discoRes.contents,
			topConfigs: topConfigsRes.result
		}
	} catch (e) {
		console.warn(e)
		error(500, 'サーバーエラーが発生しました。')
	}
}

export const ssr = true
