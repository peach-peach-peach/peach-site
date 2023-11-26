<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>Schedule</title>
</svelte:head>

<h1>Schedule</h1>

<section>
	{#each data.items.contents as article}
		<a class="card" href="/schedule/{article.id}">
			<div>
				<h2>{article.title}</h2>
				<p>→ read more</p>
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
	}

	.card {
		width: 100%;
		display: flex;
		flex-direction: column;
		border: 1px solid #ccc;
		border-radius: 10px;
		padding: 1rem;
		margin: 1rem 0;
		background-color: white;
	}

	h2 {
		width: 100%;
		color: #333;
		font-weight: bold;
	}

	p {
		margin: 0;
	}
</style>
