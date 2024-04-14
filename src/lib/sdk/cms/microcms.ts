import { createClient } from 'microcms-js-sdk'
import { MICROCMS_SERVICE_ID, MICROCMS_API_KEY } from '$env/static/private'

let _client: ReturnType<typeof createClient>

export const createCMSClient = () => {
	if (_client == null) {
		_client = createClient({
			serviceDomain: MICROCMS_SERVICE_ID,
			apiKey: MICROCMS_API_KEY
		})
	}

	return _client
}
