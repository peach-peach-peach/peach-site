import { formatDate } from './formatDate'
import { describe, test, expect } from 'vitest'

describe('formatDate()', () => {
	test('undefinedは空文字を返す', () => {
		expect(formatDate(undefined)).toBe('')
	})

	test.each([
		['2022-01-01T00:00:00+09:00', '2022/01/01'],
		['2022-10-01T00:00:00+09:00', '2022/10/01'],
		['2022-10-10T00:00:00+09:00', '2022/10/10'],
		// JST
		['2022-01-01T23:00:00+09:00', '2022/01/01'],
		// GMT
		['2022-01-01T23:00:00Z', '2022/01/02']
	])('時刻を示す文字列だと YYYY/M/D を返す: %s', (dateStr, formatted) => {
		const formattedDate = formatDate(dateStr)
		expect(formattedDate).toBe(formatted)
	})
})
