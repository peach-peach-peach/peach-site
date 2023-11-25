<script lang="ts">
import type { PageData } from "./$types"

export let data: PageData
</script>

<svelte:head>
	<title>Articles</title>
</svelte:head>

<section>
	{#each data.articlesRes.contents as article}
		<a class="card" href="/articles/{article.id}">
			<div>
				<h2>{article.title}</h2>
				<p>more</p>
			</div>
		</a>
	{/each}
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	.card {
		width: 100%;
		display: flex;
		flex-direction: column;
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 1rem;
		margin: 1rem 0;
	}

	h2 {
		width: 100%;
	}
</style>
