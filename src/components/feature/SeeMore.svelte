<script lang="ts">
	import Spinner from '@/components/primitive/Spinner.svelte'

	export let fetchMoreLoading: boolean
	export let handleClick: () => void
</script>

<div class="see-all">
	<a on:click={handleClick} href="#top">
		{#if fetchMoreLoading}
			<Spinner backgroundColor="var(--color-bg-dark)" size="2rem" />
		{:else}
			See More
		{/if}
	</a>
</div>

<style lang="scss">
	.see-all {
		margin: 0;
		padding: 0.5rem;

		text-align: center;
		background-color: var(--color-bg-dark);

		a {
			color: var(--color-text-highlight);
			text-decoration: none;
		}

		a:hover {
			background-color: transparent;
			text-decoration: underline;
		}
	}
</style>
