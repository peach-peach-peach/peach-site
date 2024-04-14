import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import { fetchTopConfigs } from '@/lib/sdk/cms/fetchTopConfigs'

export const load: PageServerLoad = async () => {
	try {
		const newsRes = await fetchArticleList({
			categoryId: 'news',
			limit: 4
		})
		const scheduelRes = await fetchArticleList({
			categoryId: 'schedule',
			limit: 4
		})
		const videoRes = await fetchArticleList({
			categoryId: 'videos',
			limit: 3
		})
		const discoRes = await fetchArticleList({
			categoryId: 'discography',
			limit: 3
		})

		const topConfigsRes = await fetchTopConfigs({
			draftKey: null
		})

		return {
			news: newsRes.contents,
			schedule: scheduelRes.contents,
			videos: videoRes.contents,
			discography: discoRes.contents,
			topConfigs: topConfigsRes.result
		}
	} catch (e) {
		error(500, 'サーバーエラーが発生しました。')
	}
}

export const ssr = true
