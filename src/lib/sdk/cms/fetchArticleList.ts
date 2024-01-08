import type { Article } from '@/domain/contents/Article'
import { createCMSClient } from '$lib/sdk/cms/microcms'
import { getCategoryByKey, type CategoryKey } from './categories'

export const fetchArticleList = async ({
	categoryKey,
	offset,
	limit
}: {
	categoryKey: CategoryKey
	limit?: number
	offset?: number
}) => {
	const client = createCMSClient()

	const articleRes = await client.getList<Article>({
		endpoint: 'articles',
		queries: {
			filters: `category[equals]${getCategoryByKey(categoryKey).id}`,
			limit,
			offset
		}
	})

	return articleRes
}
