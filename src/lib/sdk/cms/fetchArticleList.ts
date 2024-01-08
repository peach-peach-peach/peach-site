import type { Article } from '@/domain/contents/Article'
import { createCMSClient } from '$lib/sdk/cms/microcms'
import { getCategoryByName, type CategoryName } from './categories'

export const fetchArticleList = async ({ categoryName }: { categoryName: CategoryName }) => {
	const client = createCMSClient()

	const articleRes = await client.getList<Article>({
		endpoint: 'articles',
		queries: {
			filters: `category[equals]${getCategoryByName(categoryName).id}`
		}
	})

	return {
		items: articleRes
	}
}
