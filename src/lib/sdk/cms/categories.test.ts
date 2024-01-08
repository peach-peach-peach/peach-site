import { describe, test, expect } from 'vitest'
import { getCategoryByKey } from './categories'

describe('getCategoryByKey', () => {
	test.each([
		{
			id: 'e4u6m4p-2o',
			key: 'videos'
		},
		{
			id: '8dgz54e2m',
			key: 'schedule'
		},
		{
			id: 'xv_usxq1ie79',
			key: 'news'
		},
		{
			id: 'u6mgm122qvz2',
			key: 'discography'
		}
	])('should return the category with the given key: $key', ({ key: input, id: expected }) => {
		const result = getCategoryByKey(input)
		expect(result.id).toEqual(expected)
	})
})
