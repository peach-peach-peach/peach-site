<script lang="ts">
	import type { PageData } from './$types'
	import Footer from '@/components/feature/Footer.svelte'
	import CardList from '@/components/feature/CardList.svelte'
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
				categoryId: 'news',
				limit: paginate.list.limit,
				offset: contents.length
			})
			contents = [...contents, ...nextPageRes.contents]

			fetchMoreLoading = false
		}
	}
</script>

<svelte:head>
	<title>News | {site.title}</title>
</svelte:head>

<h1 class="visually-hidden">ニュース</h1>

<MarqueeHeader contentType="news" />

<section>
	<CardList categoryId="news" items={data.contents} --theme-color="var(--color-key-green)" />
</section>

<GoBack href={'/'} />

<Footer />
