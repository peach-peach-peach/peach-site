import { dev } from '$app/environment'
import { PUBLIC_MSW_ENABLED } from '$env/static/public'

if (dev && PUBLIC_MSW_ENABLED === 'true') {
	const { server } = await import('./mocks/node')

	server.listen()
}
