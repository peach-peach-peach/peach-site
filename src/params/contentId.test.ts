import { match } from './contentId'
import { describe, test, expect } from 'vitest'

describe('match', () => {
	test.each(['abc123', 'content-id', 'content_id'])('should return true for valid content IDs: %s', validId => {
		expect(match(validId)).toBe(true)
	})

	test.each(['アイディー', 'content id', 'content.id', '!!!'])(
		'should return false for invalid content IDs: %s',
		invalidId => {
			expect(match(invalidId)).toBe(false)
		}
	)
})
