/**
 * MicroCMSの `categories` API の値 (基本変更しないため固定値として管理)
 * https://le8h4au2fy.microcms.io/apis/categories
 */
export const categories = [
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
] as const satisfies readonly CategoryItem[]

type CategoryItem = {
	readonly id: string
	readonly name: string
}

type CategoryName = (typeof categories)[number]['name']

export const getCategoryByName = (name: CategoryName): CategoryItem | undefined =>
	categories.find(category => category.name === name)
