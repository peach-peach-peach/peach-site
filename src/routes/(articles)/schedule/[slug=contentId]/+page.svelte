<script lang="ts">
	import { site } from '@/constants/site'
	import type { PageData } from './$types'
	import ArticlePage from '@/components/feature/ArticlePage.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>Schedule: {data.item.title} | {site.title}</title>
</svelte:head>

<ArticlePage category="schedule" {data} />
