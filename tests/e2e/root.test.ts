import { expect, test } from '@playwright/test'

test('topページにロゴが表示されている', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('heading', { name: 'Peach Peach Peach', exact: true })).toBeVisible()
})

test('ナビゲーションが表示されている', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('link', { name: 'News', exact: true  })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Schedule', exact: true  })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Videos', exact: true  })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Discography', exact: true })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Profile', exact: true  })).toBeVisible()
})
