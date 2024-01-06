import type { PageServerLoad } from './$types'
import type { Article } from '../../../domain/contents/Article'
import { createMicroCMSClient } from '$lib/sdk/microcms'

export const load: PageServerLoad = async ({ params, url }) => {
	const draftKey = url.searchParams.get('draftKey')
	const client = createMicroCMSClient()

	if (draftKey == null) {
		const articleRes = await client.get<Article>({
			endpoint: 'articles',
			contentId: params.slug
		})

		return { item: articleRes, isPreview: false }
	}

	// プレビューモード
	const articleRes = await client.get<Article>({
		endpoint: 'articles',
		contentId: params.slug,
		queries: { draftKey }
	})

	return { item: articleRes, isPreview: true }
}
