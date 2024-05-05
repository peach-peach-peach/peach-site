<script lang="ts">
	import { browser } from '$app/environment'

	function goBack() {
		if (browser) window.history.back()
	}

	export let href: string
</script>

<nav class="back">
	<a {href} on:click={goBack}>← Back</a>
</nav>

<style lang="scss">
	.back {
		margin: 0;
		background-color: var(--color-bg-dark);

		&:hover {
			background-color: var(--color-bg-dark-hover);
		}

		a {
			display: block;
			padding: 0.5rem;
			text-align: center;
			color: var(--color-text-highlight);
			text-decoration: none;
		}

		a:hover {
			background-color: transparent;
			text-decoration: underline;
		}
	}
</style>
