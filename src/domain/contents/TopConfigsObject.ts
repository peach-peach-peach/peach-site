import type { ImageObject, PrimaryKeyProps, TimestampProps } from './common'

export type TopConfigsObject = {
	new_arrivals: TopConfigsNewArrivals
} & PrimaryKeyProps &
	TimestampProps

export type TopConfigsNewArrivals = {
	fieldId: string
	title: string
	description: string
	link_label: string
	link_url: string
	catch_image: ImageObject
}
