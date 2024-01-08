import { describe, test, expect } from 'vitest'
import { getCategoryByName } from './categories'

describe('getCategoryByName', () => {
	test.each([
		{
			id: 'e4u6m4p-2o',
			name: 'ビデオ'
		},
		{
			id: '8dgz54e2m',
			name: 'スケジュール'
		},
		{
			id: 'xv_usxq1ie79',
			name: 'ニュース'
		},
		{
			id: 'u6mgm122qvz2',
			name: 'ディスコグラフィー'
		}
	])('should return the category with the given name: $name', ({ name: input, id: expected }) => {
		const result = getCategoryByName(input)
		expect(result.id).toEqual(expected)
	})
})
