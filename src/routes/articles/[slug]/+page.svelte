<script lang="ts">
import type { PageData } from "./$types"

export let data: PageData
</script>

<svelte:head>
	<title>Articles: {data.article.title}</title>
</svelte:head>

<section>
	<h1>{data.article.title}</h1>
	<div class="content">{@html data.article.content}</div>
</section>

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
		background-color: white;
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
