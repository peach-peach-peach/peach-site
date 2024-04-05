<script lang="ts">
	import type { PageData } from './$types'
	import Footer from '@/components/Footer.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import CardList from '@/components/CardList.svelte'
	import MarqueeHeader from '@/components/MarqueeHeader.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<h1 class="visually-hidden">ニュース</h1>

<MarqueeHeader contentType="news" />

<section>
	<CardList categoryId="news" items={data.contents} --theme-color="var(--color-key-green)" />
</section>

<SeeAll href="/news/N">More</SeeAll>

<Footer />

<style>
</style>
