import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}'],
		globals: true,
		environment: 'jsdom',
		setupFiles: ['./vitest.setup.ts'],
		env: {
			MICROCMS_SERVICE_ID: 'MICROCMS_SERVICE_ID_TEST',
			MICROCMS_API_KEY: 'MICROCMS_API_KEY_TEST'
		}
	}
})
