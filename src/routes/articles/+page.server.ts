import type { Article } from '../../domain/contents/Article'
import { createMicroCMSClient } from '$lib/sdk/microcms'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const client = createMicroCMSClient()
	const articlesRes = await client.getList<Article>({
		endpoint: 'articles'
	})
	return {
		articlesRes
	}
}

export const ssr = false
