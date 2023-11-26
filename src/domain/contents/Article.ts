import type { Category } from '../../lib/sdk/microcms'
import type { HTMLString, ImageObject, PrimaryKeyProps, TimestampProps } from './common'

export type Article = {
	title: string
	content: HTMLString
	eyecatch?: ImageObject
	category: Category & TimestampProps
} & PrimaryKeyProps &
	TimestampProps
