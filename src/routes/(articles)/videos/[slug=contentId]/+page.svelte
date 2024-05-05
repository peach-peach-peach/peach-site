<script lang="ts">
	import ArticlePage from '@/components/feature/ArticlePage.svelte'
	import type { PageData } from './$types'
	import { site } from '@/constants/site'

	export let data: PageData
</script>

<svelte:head>
	<title>Video: {data.item.title} | {site.title}</title>
</svelte:head>

<ArticlePage category="videos" {data} hideCatch />
