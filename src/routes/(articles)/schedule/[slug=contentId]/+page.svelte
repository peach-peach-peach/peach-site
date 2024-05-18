<script lang="ts">
	import type { PageData } from './$types'
	import ArticlePage from '@/components/feature/ArticlePage.svelte'

	export let data: PageData
</script>

<ArticlePage category="schedule" {data} />
