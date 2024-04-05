import { createCMSClient } from '$lib/sdk/cms/microcms'
import { error, redirect } from '@sveltejs/kit'
import type { Article } from '@/domain/contents/Article.js'
import { getCategoryItemByName } from '@/domain/Category/getCategoryItem.js'

/** @type {import('./$types').RequestHandler} */
export async function GET({ url }) {
	const contentId = url.searchParams.get('contentId')
	const draftKey = url.searchParams.get('draftKey')
	const contentType = url.searchParams.get('contentType')

	if (contentId == null || draftKey == null || contentType == null || !isContentType(contentType)) {
		error(400, 'required params are missing')
	}

	const article = await createCMSClient().get<Article | null>({
		endpoint: contentType,
		contentId,
		queries: { draftKey }
	})

	if (article == null) {
		error(400, 'article not found')
	}

	redirect(307, `/${getCategoryItemByName(article.category.name).id}/${contentId}?draftKey=${draftKey}`)
}

const isContentType = (contentType: string | null) => contentType === 'articles'
