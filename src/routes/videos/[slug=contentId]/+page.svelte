<script lang="ts">
	import PreviewNotice from '../../../components/PreviewNotice.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	/* eslint-disable svelte/no-at-html-tags */
</script>

<svelte:head>
	<title>Video: {data.item.title}</title>
</svelte:head>

<section>
	{#if data.isPreview}
		<PreviewNotice />
	{/if}
	<h1>{data.item.title}</h1>
	<div class="content">
		{@html data.item.content}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	h1 {
		width: 100%;
	}

	.content {
		width: 100%;
		background-color: white;
		padding: 1rem;
	}

	.content :global(img) {
		max-width: 100%;
		height: auto;
	}
</style>
