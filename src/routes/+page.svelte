<script lang="ts">
	import logoSvg from '$lib/images/logo.svg?raw'

	import { onMount } from 'svelte'
	import { createScene1, subscribeResize, unsubscribeResize } from '$lib/three/scene1'

	let el: HTMLCanvasElement

	onMount(() => {
		subscribeResize()
		createScene1(el)

		return () => {
			unsubscribeResize()
		}
	})
</script>

<svelte:head>
	<title>Peach Peach Peach</title>
	<meta name="description" content="Peach Peach Peach website" />
</svelte:head>

<section>
	<h1>
		<span class="visually-hidden">Peach Peach Peach</span>
		{@html logoSvg}
	</h1>
</section>

<div class="three">
	<canvas bind:this={el} />
</div>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
		text-indent: 9999;
	}

	:global(#peach-logo) {
		fill: var(--color-theme-1);
	}

	.three {
		margin-top: 5rem;
		display: flex;
		justify-content: center;
	}
</style>
