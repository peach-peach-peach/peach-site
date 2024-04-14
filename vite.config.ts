import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'
import type { PluginOption } from 'vite'
import { resolve } from 'node:path'
import { rm } from 'node:fs'

function excludeMsw(): PluginOption {
	return {
		name: 'exclude-msw',
		resolveId(source) {
			return source === 'virtual-module' ? source : null
		},
		renderStart(outputOptions) {
			const outDir = outputOptions.dir
			if (outDir == null) return
			const msWorker = resolve(outDir, 'mockServiceWorker.js')
			rm(msWorker, () => console.log(`Deleted ${msWorker}`))
		}
	}
}

export default defineConfig({
	plugins: [sveltekit(), excludeMsw()],
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
