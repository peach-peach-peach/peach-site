<script lang="ts">
	import { onMount } from 'svelte'
	import { createScene1, subscribeResize, subscribeScroll } from '$lib/three/scene1'
	import type { PageData } from './$types'
	import InformationSection from '@/components/feature/Top/InformationSection.svelte'
	import VideoSection from '@/components/feature/Top/VideoSection.svelte'
	import NewArrivalsSection from '@/components/feature/Top/NewArrivalsSection.svelte'
	import DiscographySection from '@/components/feature/Top/DiscographySection.svelte'
	import Footer from '@/components/feature/Footer.svelte'
	import { site } from '@/constants/site'

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
</script>

<svelte:head>
	<title>{site.title}</title>
	<meta name="description" content={site.description} />
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
