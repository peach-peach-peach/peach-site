import type { Article } from '../../domain/contents/Article'
import { createCMSClient } from '$lib/sdk/cms/microcms'
import { getCategoryByName } from '$lib/sdk/cms/categories'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
	const client = createCMSClient()
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
