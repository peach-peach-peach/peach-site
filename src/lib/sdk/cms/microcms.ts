import { createClient } from 'microcms-js-sdk'
import { MICROCMS_SERVICE_ID, MICROCMS_API_KEY } from '$env/static/private'

export const createCMSClient = () =>
	createClient({
		serviceDomain: MICROCMS_SERVICE_ID,
		apiKey: MICROCMS_API_KEY
	})
