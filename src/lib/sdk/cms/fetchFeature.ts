import { createCMSClient } from '$lib/sdk/cms/microcms'
import type { FeatureObject } from '@/domain/contents/FeatureObject'

export const fetchFeature = async ({ draftKey }: { draftKey?: string | null }) => {
	const client = createCMSClient()

	if (draftKey == null) {
		const result = await client.getObject<FeatureObject>({
			endpoint: 'feature'
		})

		return { result, isPreview: false }
	}

	// プレビューモード
	const result = await client.getObject<FeatureObject>({
		endpoint: 'feature',
		queries: { draftKey }
	})

	return { result, isPreview: true }
}
