<script lang="ts">
	import type { PageData } from './$types'
	import CardList from '@/components/CardList.svelte'
	import SeeAll from '@/components/SeeAll.svelte'
	import Footer from '@/components/Footer.svelte'
	import MarqueeHeader from '@/components/MarqueeHeader.svelte'

	export let data: PageData
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<h1 class="visually-hidden">スケジュール</h1>

<MarqueeHeader contentType="schedule" />

<section>
	<CardList categoryId="schedule" items={data.contents} --theme-color="var(--color-key-blue)" />
</section>

<SeeAll href="/schedule/N">More</SeeAll>

<Footer />

<style>
</style>
