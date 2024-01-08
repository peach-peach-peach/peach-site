<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>News</title>
</svelte:head>

<h1>News</h1>

<section>
	<ul>
		{#each data.items.contents as article}
			<li>
				<a class="card" href="/news/{article.id}">
					<div>
						<h2>{article.title}</h2>
						<p>→ read more</p>
					</div>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	h1 {
		margin-top: 3rem;
		text-transform: uppercase;
	}

	ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	li {
		display: block;
	}

	.card {
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
		margin: 0;
	}

	p {
		margin: 0;
	}
</style>
