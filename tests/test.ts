import { expect, test } from '@playwright/test'

test('topページにロゴが表示されている', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('heading')).toBeVisible()
})

test('ナビゲーションが表示されている', async ({ page }) => {
	await page.goto('/')
	await expect(page.getByRole('link', { name: 'News' })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Schedule' })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Profile' })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Videos' })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Discography' })).toBeVisible()
	await expect(page.getByRole('link', { name: 'Store' })).toBeVisible()
})
