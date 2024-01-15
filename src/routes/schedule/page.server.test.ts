/* eslint-disable @typescript-eslint/no-explicit-any */

import { describe, expect, test } from 'vitest'
import { load } from './+page.server'
import type { PageData } from './$types'

describe('schedule index page load', () => {
	test('返却値のテスト', async () => {
		const result = await load({} as any)

		expect(result as PageData).toMatchObject({
			contents: {
				title: '',
				content: '',
				eyecatch: {
					url: ''
				},
				category: {
					id: '',
					name: ''
				}
			},
			totalCount: 0,
			offset: 0,
			limit: 0
		})
	})
})
