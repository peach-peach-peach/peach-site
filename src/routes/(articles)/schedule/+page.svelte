<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/feature/CardList.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { paginate, site } from '@/constants/site'
	import { fetchMoreThruApi } from '@/lib/sdk/cms/fetchMoreThruApi'
	import GoBack from '@/components/feature/GoBack.svelte'

	export let data: PageData
	$: contents = data.contents
	$: hasMore = contents.length < data.totalCount
	$: fetchMoreLoading = false

	const handleClick = async () => {
		if (hasMore) {
			fetchMoreLoading = true

			const nextPageRes = await fetchMoreThruApi({
				categoryId: 'schedule',
				limit: paginate.list.limit,
				offset: contents.length
			})
			contents = [...contents, ...nextPageRes.contents]

			fetchMoreLoading = false
		}
	}
</script>

<svelte:head>
	<title>Schedule | {site.title}</title>
</svelte:head>

<h1 class="visually-hidden">スケジュール</h1>

<MarqueeHeader contentType="schedule" sticky />

<CardList categoryId="schedule" items={contents} --theme-color="var(--color-key-emerald)" />

<GoBack href={'/'} />

<Footer />
