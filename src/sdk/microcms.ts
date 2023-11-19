import type { MicroCMSImage, MicroCMSObjectContent } from 'microcms-js-sdk'
import { createClient } from 'microcms-js-sdk'
import { MICROCMS_SERVICE_ID, MICROCMS_API_KEY } from '$env/static/private'

export const createMicroCMSClient = () =>
	createClient({
		serviceDomain: MICROCMS_SERVICE_ID!,
		apiKey: MICROCMS_API_KEY!
	})

type HTMLString = string

//

export type Article = {
	name: string
	content: HTMLString
	eyecatch?: MicroCMSImage
	category: Category & MicroCMSObjectContent
}

export type Category = {
	name: string
}
