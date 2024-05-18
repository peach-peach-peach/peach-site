<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/feature/CardList.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { site } from '@/constants/site'
	import GoBack from '@/components/feature/GoBack.svelte'
	import Main from '@/components/feature/Main.svelte'
	import FetchMore from '@/components/feature/FetchMore.svelte'

	export let data: PageData
	$: contents = data.contents
</script>

<MarqueeHeader contentType="schedule" fixed />

<Main blur>
	<h1 class="visually-hidden">スケジュール</h1>

	<CardList categoryId="schedule" items={contents} --theme-color="var(--color-key-emerald)" />

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
