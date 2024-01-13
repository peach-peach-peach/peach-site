import type { PageServerLoad } from './$types'
import { error } from '@sveltejs/kit'
import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import { fetchFeature } from '@/lib/sdk/cms/fetchFeature'

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

		const featureRes = await fetchFeature({
			draftKey: null
		})

		return {
			news: newsRes.contents,
			schedule: scheduelRes.contents,
			videos: videoRes.contents,
			discography: discoRes.contents,
			feature: featureRes.result
		}
	} catch (e) {
		error(500, 'サーバーエラー')
	}
}

export const ssr = true
