/**
 * MicroCMSの `categories` API の値
 * https://le8h4au2fy.microcms.io/apis/categories
 */
export const categoryItems = [
	{
		id: 'videos',
		name: 'ビデオ'
	},
	{
		id: 'schedule',
		name: 'スケジュール'
	},
	{
		id: 'news',
		name: 'ニュース'
	},
	{
		id: 'discography',
		name: 'ディスコグラフィー'
	}
] as const satisfies readonly CategoryItem[]

export type CategoryItem = {
	readonly id: string
	readonly name: string
}
