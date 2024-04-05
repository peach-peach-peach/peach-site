import { fetchArticleList } from '@/lib/sdk/cms/fetchArticleList'
import type { RequestHandler } from './$types'
import { error, json } from '@sveltejs/kit'
import type { CategoryId } from '@/domain/Category/CategoryId'

export const GET: RequestHandler = async ({ url }) => {
	const categoryId = url.searchParams.get('categoryId')
	if (categoryId == null) error(400, 'categoryId is required')

	const limit = Number(url.searchParams.get('limit') ?? '')
	const offset = Number(url.searchParams.get('offset') ?? '')

	const res = await fetchArticleList({ categoryId: categoryId as CategoryId, limit, offset })

	return json(res)
}

export type APIFetchMoreResponse = Awaited<ReturnType<typeof fetchArticleList>>
