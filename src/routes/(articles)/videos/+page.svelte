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
				categoryId: 'videos',
				limit: paginate.list.limit,
				offset: contents.length
			})
			contents = [...contents, ...nextPageRes.contents]

			fetchMoreLoading = false
		}
	}
</script>

<svelte:head>
	<title>Video | {site.title}</title>
</svelte:head>

<h1 class="visually-hidden">ビデオ</h1>

<MarqueeHeader contentType="videos" sticky />

<section>
	<CardList categoryId="videos" items={data.contents} --theme-color="var(--color-key-yellow)" />
</section>

<GoBack href={'/'} />

<Footer />

<style>
</style>
