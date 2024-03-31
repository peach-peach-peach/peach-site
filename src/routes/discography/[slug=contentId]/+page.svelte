<script lang="ts">
	import ArticlePage from '@/components/ArticlePage.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Discography: {data.item.title}</title>
</svelte:head>

<ArticlePage category="discography" {data} />

<style lang="scss">
</style>
