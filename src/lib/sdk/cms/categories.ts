/**
 * MicroCMSの `categories` API の値 (基本変更しないため固定値として管理)
 * https://le8h4au2fy.microcms.io/apis/categories
 */
export const categories = [
	{
		id: 'e4u6m4p-2o',
		name: 'ビデオ',
		key: 'videos'
	},
	{
		id: '8dgz54e2m',
		name: 'スケジュール',
		key: 'schedule'
	},
	{
		id: 'xv_usxq1ie79',
		name: 'ニュース',
		key: 'news'
	},
	{
		id: 'u6mgm122qvz2',
		name: 'ディスコグラフィー',
		key: 'discography'
	}
] as const satisfies readonly CategoryItem[]

type CategoryItem = {
	readonly id: string
	readonly name: string
	readonly key: string
}

export type CategoryKey = (typeof categories)[number]['key']

export const getCategoryByKey = (key: string): CategoryItem => {
	const cat = categories.find(category => category.key === key)
	if (cat == null) throw new Error('Category not found')

	return cat
}
