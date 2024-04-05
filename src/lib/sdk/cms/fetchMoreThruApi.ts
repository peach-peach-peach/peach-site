import type { CategoryId } from '@/domain/Category/CategoryId'
import type { APIFetchMoreResponse } from '@/routes/api/fetch-more/+server'

type FetchMoreThruApiParams = {
	categoryId: CategoryId
	limit: number
	offset: number
}

export const fetchMoreThruApi = async (params: FetchMoreThruApiParams) => {
	const search = new URLSearchParams({
		categoryId: params.categoryId,
		limit: `${params.limit}`,
		offset: `${params.offset}`
	})

	const nextPageRes: APIFetchMoreResponse = await fetch(`/api/fetch-more?${search.toString()}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	}).then(res => res.json())

	return nextPageRes
}
