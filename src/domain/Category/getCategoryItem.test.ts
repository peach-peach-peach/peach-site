import { getCategoryItemByName } from '@/domain/Category/getCategoryItem'
import { describe, test, expect } from 'vitest'

describe('getCategoryItemByName', () => {
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
		const result = getCategoryItemByName(input)
		expect(result.id).toEqual(expected)
	})

	test('should throw an error if the category does not exist', () => {
		expect(() => getCategoryItemByName('invalid')).toThrow('categoryItem not found: invalid')
	})
})
