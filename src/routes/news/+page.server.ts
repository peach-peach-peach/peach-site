import type { Article } from '../../domain/contents/Article'
import { createMicroCMSClient } from '$lib/sdk/microcms'
import { getCategoryByName } from '$lib/sdk/categories'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const client = createMicroCMSClient()
	const articleRes = await client.getList<Article>({
		endpoint: 'articles',
		queries: {
			filters: `category[equals]${getCategoryByName('ニュース').id}`
		}
	})

	return {
		items: articleRes
	}
}

export const ssr = false
