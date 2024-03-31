<script lang="ts">
	import type { PageData } from './$types'
	import ArticlePage from '@/components/ArticlePage.svelte'

	export let data: PageData

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>News: {data.item.title}</title>
</svelte:head>

<ArticlePage category="news" {data} />

<style lang="scss">
</style>
