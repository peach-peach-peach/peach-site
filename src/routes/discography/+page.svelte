<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/CardList.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import Footer from '@/components/Footer.svelte'
	import MarqueeHeader from '@/components/MarqueeHeader.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>Discography</title>
</svelte:head>

<h1 class="visually-hidden">ディスコグラフィ</h1>

<MarqueeHeader textEn="Discography" textJa="ディスコグラフィー" --theme-color="var(--color-key-orange)" />

<section>
	<CardList categoryId="discography" items={data.contents} --theme-color="var(--color-key-orange)" />
</section>

<SeeAll href="/discography/N">More</SeeAll>

<Footer />

<style>
</style>
