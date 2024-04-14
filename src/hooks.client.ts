import { dev } from '$app/environment'
import { PUBLIC_MSW_ENABLED } from '$env/static/public'

if (dev && PUBLIC_MSW_ENABLED === 'true') {
	const { worker } = await import('./mocks/browser')

	await worker.start({
		onUnhandledRequest(request, print) {
			// Do not warn on unhandled internal Svelte requests.
			// Those are not meant to be mocked.
			if (request.url.includes('svelte') || request.url.includes('localhost')) {
				return
			}

			print.warning()
		}
	})
}
