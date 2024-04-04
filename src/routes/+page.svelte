<script lang="ts">
	import { onMount } from 'svelte'
	import { createScene1, subscribeResize, subscribeScroll } from '$lib/three/scene1'
	import type { PageData } from './$types'
	import InformationSection from '@/components/Top/InformationSection.svelte'
	import VideoSection from '@/components/Top/VideoSection.svelte'
	import NewArrivalsSection from '@/components/Top/NewArrivalsSection.svelte'
	import DiscographySection from '@/components/Top/DiscographySection.svelte'
	import Footer from '@/components/Footer.svelte'

	export let data: PageData

	let el: HTMLCanvasElement

	onMount(() => {
		const unsubscribeResize = subscribeResize()
		const unsubscribeScroll = subscribeScroll()
		createScene1(el)

		return () => {
			unsubscribeResize()
			unsubscribeScroll()
		}
	})

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Peach Peach Peach</title>
	<meta name="description" content="Peach Peach Peach website" />
</svelte:head>

<section>
	<h1 class="visually-hidden">Peach Peach Peach</h1>

	<div class="catch">
		<canvas bind:this={el} />
	</div>

	<InformationSection {data} />

	<VideoSection {data} />

	<NewArrivalsSection {data} />

	<DiscographySection {data} />

	<Footer />

	<!-- Store -->
</section>

<style>
	.catch {
		width: 100%;
		height: 100vh;
	}
</style>
