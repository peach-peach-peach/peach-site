<script lang="ts">
	import Marquee from '@/components/Marquee.svelte'

	export let textJa: string
	export let textEn: string
</script>

<div>
	<Marquee autoFill><span class="label en">{textEn}</span><span class="label ja">{textJa}</span></Marquee>
</div>

<style>
	div {
		background-color: var(--theme-color);
		border-bottom: 1px solid var(--color-bg-dark);
		margin: 0;
		padding: 0.6rem 0;

		text-transform: uppercase;
		font-family: 'Montserrat', sans-serif;
		font-weight: 500;
	}

	.label {
		margin-right: 0.5rem;
		text-transform: uppercase;
		vertical-align: middle;
	}

	.en {
		font-size: 0.8rem;
	}

	.ja {
		font-size: 0.8rem;
	}
</style>
