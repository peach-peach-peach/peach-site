import type { Article } from '@/domain/contents/Article'
import { createCMSClient } from '$lib/sdk/cms/microcms'

export const fetchArticle = async ({ slug, draftKey }: { draftKey: string | null; slug: string }) => {
	const client = createCMSClient()

	if (draftKey == null || draftKey === '') {
		const articleRes = await client.get<Article>({
			endpoint: 'articles',
			contentId: slug
		})

		return { item: articleRes, isPreview: false }
	}

	// プレビューモード
	const articleRes = await client.get<Article>({
		endpoint: 'articles',
		contentId: slug,
		queries: { draftKey }
	})

	return { item: articleRes, isPreview: true }
}
