export type HTMLString = string
export type DateString = string

export type PrimaryKeyProps = {
	id: string
}

export type ImageObject = {
	url: string
	width?: number
	height?: number
}

export type TimestampProps = {
	createdAt: DateString
	updatedAt: DateString
	publishedAt?: DateString
	revisedAt?: DateString
}
