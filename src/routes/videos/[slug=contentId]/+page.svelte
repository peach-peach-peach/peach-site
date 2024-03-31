<script lang="ts">
	import ArticlePage from '@/components/ArticlePage.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Video: {data.item.title}</title>
</svelte:head>

<ArticlePage category="videos" {data} hideCatch />

<style lang="scss">
</style>
