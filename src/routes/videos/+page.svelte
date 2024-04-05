<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/CardList.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import Footer from '@/components/Footer.svelte'
	import MarqueeHeader from '@/components/MarqueeHeader.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>Video</title>
</svelte:head>

<h1 class="visually-hidden">ビデオ</h1>

<MarqueeHeader contentType="videos" />

<section>
	<CardList categoryId="videos" items={data.contents} --theme-color="var(--color-key-yellow)" />
</section>

<SeeAll href="/videos/N">More</SeeAll>

<Footer />

<style>
	h1 {
		background-color: var(--color-key-yellow);
		border-bottom: 1px solid var(--color-bg-dark);
		margin: 0;
		padding: 0.6rem 0;

		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
	}
</style>
