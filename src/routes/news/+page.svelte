<script lang="ts">
	import type { PageData } from './$types'
	import Footer from '@/components/feature/Footer.svelte'
	import SeeAll from '@/components/feature/SeeAll.svelte'
	import CardList from '@/components/feature/CardList.svelte'
	import MarqueeHeader from '@/components/feature/MarqueeHeader.svelte'
	import { site } from '@/constants/site'

	export let data: PageData
</script>

<svelte:head>
	<title>News | {site.title}</title>
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
