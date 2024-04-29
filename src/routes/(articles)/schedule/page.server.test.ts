/* eslint-disable @typescript-eslint/no-explicit-any */

import { afterEach, beforeEach, describe, expect, test, vi, type MockInstance } from 'vitest'
import { load } from './+page.server'
import type { PageData } from './$types'

describe('schedule index page load', () => {
	let mockedFetch: MockInstance

	beforeEach(async () => {
		mockedFetch = vi.spyOn(globalThis, 'fetch').mockImplementation(
			async () =>
				new Response(
					JSON.stringify({
						contents: { title: 'title' },
						totalCount: 1,
						offset: 0,
						limit: 0
					}),
					{ status: 200 }
				)
		)
	})

	afterEach(() => {
		vi.restoreAllMocks()
	})

	test('返却値のテスト', async () => {
		const result = await load({} as any)

		expect(mockedFetch).toBeCalledWith(
			'https://MICROCMS_SERVICE_ID_TEST.microcms.io/api/v1/articles?filters=category%5Bequals%5Dschedule',
			{ method: 'GET', headers: { map: { 'x-microcms-api-key': 'MICROCMS_API_KEY_TEST' } } }
		)

		expect(result as PageData).toMatchObject({
			contents: { title: 'title' },
			totalCount: 1,
			offset: 0,
			limit: 0
		})
	})
})
