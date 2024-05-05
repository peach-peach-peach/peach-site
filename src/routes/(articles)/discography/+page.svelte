<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/feature/CardList.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { paginate, site } from '@/constants/site'
	import { fetchMoreThruApi } from '@/lib/sdk/cms/fetchMoreThruApi'
	import GoBack from '@/components/feature/GoBack.svelte'
	import Main from '@/components/feature/Main.svelte'

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

<MarqueeHeader contentType="discography" sticky />

<Main blur>
	<h1 class="visually-hidden">ディスコグラフィ</h1>

	<section>
		<CardList categoryId="discography" items={contents} squaredImage --theme-color="var(--color-key-orange)" />
	</section>

	<GoBack href={'/'} />

	<Footer />
</Main>
