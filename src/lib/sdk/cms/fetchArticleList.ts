import type { Article } from '@/domain/contents/Article'
import { createCMSClient } from '$lib/sdk/cms/microcms'
import type { CategoryId } from '@/domain/CategoryId'

export const fetchArticleList = async ({
	categoryId,
	offset,
	limit
}: {
	categoryId: CategoryId
	limit?: number
	offset?: number
}) => {
	const client = createCMSClient()

	const articleRes = await client.getList<Article>({
		endpoint: 'articles',
		queries: {
			filters: `category[equals]${categoryId}`,
			limit,
			offset
		}
	})

	return articleRes
}
