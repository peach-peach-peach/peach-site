import type { PageLoad } from '../$types'
import type { Article } from '../../domain/contents/Article'
import { createMicroCMSClient } from '../../sdk/microcms'

export const load: PageLoad = async () => {
	const client = createMicroCMSClient()
	const articlesRes = await client.getList<Article>({
		endpoint: 'articles'
	})
	return {
		articlesRes
	}
}

export const ssr = true
