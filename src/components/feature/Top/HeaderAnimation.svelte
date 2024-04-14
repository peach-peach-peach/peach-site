<script lang="ts">
	import { onMount } from 'svelte'
	import { createScene1, subscribeResize, subscribeScroll } from '$lib/three/scene1'

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

<div class="catch">
	<canvas bind:this={el} />
</div>

<style>
	.catch {
		width: 100%;
		height: 100vh;
	}
</style>
