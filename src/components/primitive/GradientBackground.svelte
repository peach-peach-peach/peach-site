<script lang="ts">
	import { onMount } from 'svelte'
	import { Gradient } from '@/lib/Gradient/Gradient'

	onMount(() => {
		const gradient = new Gradient()
		gradient.initGradient('#gradient')

		return () => {
			gradient.destroy()
		}
	})
</script>

<canvas id="gradient"></canvas>

<style lang="scss">
	#gradient {
		--gradient-color-1: #ff8585;
		--gradient-color-2: #ffb8d1;
		--gradient-color-3: #ffffff;
		--gradient-color-4: #ffffff;

		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
