/**
 * MicroCMSの `categories` API の値
 * https://le8h4au2fy.microcms.io/apis/categories
 */
export const categoryItems = [
	{
		id: 'videos',
		name: 'ビデオ',
		themeColor: 'var(--color-key-yellow)'
	},
	{
		id: 'schedule',
		name: 'スケジュール',
		themeColor: 'var(--color-key-blue)'
	},
	{
		id: 'news',
		name: 'ニュース',
		themeColor: 'var(--color-key-green)'
	},
	{
		id: 'discography',
		name: 'ディスコグラフィー',
		themeColor: 'var(--color-key-orange)'
	}
] as const satisfies readonly CategoryItem[]

export type CategoryItem = {
	readonly id: string
	readonly name: string
	readonly themeColor: string
}
