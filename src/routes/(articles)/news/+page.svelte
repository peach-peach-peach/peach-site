<script lang="ts">
	import type { PageData } from './$types'
	import Footer from '@/components/feature/Footer.svelte'
	import CardList from '@/components/feature/CardList.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { site } from '@/constants/site'
	import GoBack from '@/components/feature/GoBack.svelte'
	import Main from '@/components/feature/Main.svelte'
	import FetchMore from '@/components/feature/FetchMore.svelte'

	export let data: PageData
	$: contents = data.contents
</script>

<svelte:head>
	<title>News | {site.title}</title>
</svelte:head>

<MarqueeHeader contentType="news" sticky />

<Main blur>
	<h1 class="visually-hidden">ニュース</h1>

	<section>
		<CardList categoryId="news" items={contents} --theme-color="var(--color-key-green)" />
	</section>

	<FetchMore
		categoryId="news"
		{contents}
		totalCount={data.totalCount}
		onChange={updated => {
			contents = updated
		}}
	/>

	<GoBack href={'/'} />

	<Footer />
</Main>
