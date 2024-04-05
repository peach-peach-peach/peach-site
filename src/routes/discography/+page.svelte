<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/feature/CardList.svelte'
	import SeeAll from '@/components/feature/SeeAll.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { site } from '@/constants/site'

	export let data: PageData
</script>

<svelte:head>
	<title>Discography | {site.title}</title>
</svelte:head>

<h1 class="visually-hidden">ディスコグラフィ</h1>

<MarqueeHeader contentType="discography" />

<section>
	<CardList categoryId="discography" items={data.contents} squaredImage --theme-color="var(--color-key-orange)" />
</section>

<SeeAll href="/discography/N">More</SeeAll>

<Footer />

<style>
</style>
