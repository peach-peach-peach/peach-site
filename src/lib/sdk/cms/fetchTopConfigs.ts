import { createCMSClient } from '$lib/sdk/cms/microcms'
import type { TopConfigsObject } from '@/domain/contents/TopConfigsObject'

export const fetchTopConfigs = async ({ draftKey }: { draftKey?: string | null }) => {
	const client = createCMSClient()

	if (draftKey == null) {
		const result = await client.getObject<TopConfigsObject>({
			endpoint: 'top-configs'
		})

		return { result, isPreview: false }
	}

	// プレビューモード
	const result = await client.getObject<TopConfigsObject>({
		endpoint: 'top-configs',
		queries: { draftKey }
	})

	return { result, isPreview: true }
}
