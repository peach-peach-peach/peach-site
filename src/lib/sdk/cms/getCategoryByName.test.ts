import { describe, test, expect } from 'vitest'
import { getCategoryByName } from './getCategoryByName'

describe('getCategoryByName', () => {
	test.each([
		{
			name: 'ビデオ',
			id: 'videos'
		},
		{
			name: 'スケジュール',
			id: 'schedule'
		},
		{
			name: 'ニュース',
			id: 'news'
		},
		{
			name: 'ディスコグラフィー',
			id: 'discography'
		}
	])('should return the category with the given key: $key', ({ name: input, id: expected }) => {
		const result = getCategoryByName(input)
		expect(result.id).toEqual(expected)
	})
})
