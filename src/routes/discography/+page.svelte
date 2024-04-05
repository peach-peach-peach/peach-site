<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/feature/CardList.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { paginate, site } from '@/constants/site'
	import SeeMore from '@/components/feature/SeeMore.svelte'
	import { fetchMoreThruApi } from '@/lib/sdk/cms/fetchMoreThruApi'

	export let data: PageData
	$: contents = data.contents
	$: hasMore = contents.length < data.totalCount
	$: fetchMoreLoading = false

	const handleClick = async () => {
		if (hasMore) {
			fetchMoreLoading = true

			const nextPageRes = await fetchMoreThruApi({
				categoryId: 'discography',
				limit: paginate.list.limit,
				offset: contents.length
			})
			contents = [...contents, ...nextPageRes.contents]

			fetchMoreLoading = false
		}
	}
</script>

<svelte:head>
	<title>Discography | {site.title}</title>
</svelte:head>

<h1 class="visually-hidden">ディスコグラフィ</h1>

<MarqueeHeader contentType="discography" />

<section>
	<CardList categoryId="discography" items={data.contents} squaredImage --theme-color="var(--color-key-orange)" />
</section>

{#if hasMore}
	<SeeMore {fetchMoreLoading} {handleClick} />
{/if}

<Footer />

<style>
</style>
