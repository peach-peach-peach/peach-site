<script lang="ts">
	export let href: string
</script>

<p class="see-all"><a {href}><slot /></a></p>

<style lang="scss">
	.see-all {
		margin: 0;
		padding: 0.5rem;

		text-align: center;
		background-color: var(--color-bg-dark);

		&:hover {
			background-color: var(--color-bg-dark-hover);
		}

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
