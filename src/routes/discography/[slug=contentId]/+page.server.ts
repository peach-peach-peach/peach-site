import type { PageServerLoad } from './$types'
import type { Article } from '../../../domain/contents/Article'
import { createMicroCMSClient } from '$lib/sdk/microcms'

export const load: PageServerLoad = async ({ params }) => {
	const client = createMicroCMSClient()
	const articleRes = await client.get<Article>({
		endpoint: 'articles',
		contentId: params.slug
	})

	return {
		item: articleRes
	}
}

export const ssr = false
