/* eslint-disable @typescript-eslint/no-explicit-any */

import { http, HttpResponse } from 'msw'
import { MICROCMS_SERVICE_ID } from '$env/static/private'
import type { MicroCMSListResponse } from 'microcms-js-sdk'

const MICROCMS_ROOT = `https://${MICROCMS_SERVICE_ID}.microcms.io/api/v1`
export const apiEndpoint = (path: string) => new URL(MICROCMS_ROOT + path).toString()

export const handlers = [
	// mock: Schedule
	http.get(apiEndpoint(`/articles`), ({ request }) => {
		// const searchParams = new URL(request.url).searchParams
		// const filters = searchParams.get('filters')

		return HttpResponse.json(
			buildListResp([
				{
					id: 'h2mny4qw3l9',
					createdAt: '2023-11-01T07:17:57.450Z',
					updatedAt: '2023-11-26T06:30:26.166Z',
					publishedAt: '2023-11-01T07:17:57.450Z',
					revisedAt: '2023-11-26T06:30:26.166Z',
					title: 'ライブ１',
					content: '<p>テキストサンプルです。</p>',
					category: {
						id: 'schedule',
						createdAt: '2023-11-26T06:25:34.896Z',
						updatedAt: '2024-01-13T12:04:37.471Z',
						publishedAt: '2023-11-26T06:25:34.896Z',
						revisedAt: '2023-11-26T06:25:34.896Z',
						name: 'スケジュール'
					},
					eyecatch: {
						url: 'https://images.microcms-assets.io/assets/2534f8b109544100a7134b7178e9cdb4/7e94da9d3ef84a598f5e7c8cf8abc508/blog-template.png',
						height: 630,
						width: 1200
					}
				}
			])
		)
		// // 空レスポンス
		// return HttpResponse.json(buildListResp([], { totalCount: 0 }))
	})
]

const buildListResp = (
	contents: Record<string, any>[],
	override: Partial<MicroCMSListResponse<any>> = {}
): MicroCMSListResponse<any> => ({
	contents,
	totalCount: 1,
	offset: 0,
	limit: 10,
	...override
})
