import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/svelte'
import ProfilePage from './+page.svelte'

describe('/profile', () => {
	test('ページが表示される', () => {
		const { getAllByText } = render(ProfilePage, { props: {} })
		expect(getAllByText(/Profile/))
	})
})
