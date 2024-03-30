<!-- Svelte ver of https://github.com/justin-chu/react-fast-marquee/blob/806ec15324f5178c8770912a898331ce58e3e4ee/src/components/Marquee.tsx -->

<script lang="ts">
	import { onMount, afterUpdate } from 'svelte'
	import { writable, derived } from 'svelte/store'

	/**
	 * Inline style for the container div
	 */
	export let style: string = ''
	/**
	 * Class name to style the container div
	 */
	export let className: string = ''
	/**
	 * Whether to automatically fill blank space in the marquee with copies of the children or not
	 */
	export let autoFill: boolean = false
	/**
	 * Whether to play or pause the marquee
	 */
	export let play: boolean = true
	/**
	 * Whether to pause the marquee when hovered
	 */
	export let pauseOnHover: boolean = false
	/**
	 * Whether to pause the marquee when clicked
	 */
	export let pauseOnClick: boolean = false
	/**
	 * The direction the marquee is sliding
	 */
	export let direction: 'left' | 'right' | 'up' | 'down' = 'right'
	/**
	 * Speed calculated as pixels/second
	 */
	export let speed: number = 50

	/**
	 * The gap between each copy of the children, in pixels
	 */
	export let gap: string = '0px'
	/**
	 * Duration to delay the animation after render, in seconds
	 */
	export let delay: number = 0
	/**
	 * The number of times the marquee should loop, 0 is equivalent to infinite
	 */
	export let loop: number = 0
	/**
	 * Whether to show the gradient or not
	 */
	export let gradient: boolean = false
	/**
	 * The color of the gradient
	 */
	export let gradientColor: string = 'white'
	/**
	 * The width of the gradient on either side
	 */
	export let gradientWidth: number | string = 200
	/**
	 * A callback for when the marquee finishes scrolling and stops. Only calls if loop is non-zero.
	 */
	export let onFinish: () => void = () => {}
	/**
	 * A callback for when the marquee finishes a loop. Does not call if maximum loops are reached (use onFinish instead).
	 */
	export let onCycleComplete: () => void = () => {}
	/**
	 * @description: A callback function that is invoked once the marquee has finished mounting. It can be utilized to recalculate the page size, if necessary.
	 */
	export let onMountCallback: () => void = () => {}

	let containerWidth = writable(0)
	let marqueeWidth = writable(0)
	let multiplier = writable(1)

	let containerRef: HTMLElement
	let marqueeRef: HTMLElement

	const calculateWidth = () => {
		if (!containerRef || !marqueeRef) return

		let containerRect = containerRef.getBoundingClientRect()
		let marqueeRect = marqueeRef.getBoundingClientRect()
		let newContainerWidth = containerRect.width
		let newMarqueeWidth = marqueeRect.width

		if (direction === 'up' || direction === 'down') {
			newContainerWidth = containerRect.height
			newMarqueeWidth = marqueeRect.height
		}

		if (autoFill && newContainerWidth && newMarqueeWidth) {
			multiplier.set(newMarqueeWidth < newContainerWidth ? Math.ceil(newContainerWidth / newMarqueeWidth) : 1)
		} else {
			multiplier.set(1)
		}

		containerWidth.set(newContainerWidth)
		marqueeWidth.set(newMarqueeWidth)
	}

	onMount(() => {
		onMountCallback()
		calculateWidth()

		const observer = new ResizeObserver(calculateWidth)
		observer.observe(containerRef)
		observer.observe(marqueeRef)

		return () => observer.disconnect()
	})

	afterUpdate(calculateWidth)

	const duration = derived(
		[containerWidth, marqueeWidth, multiplier],
		([$containerWidth, $marqueeWidth, $multiplier]) => {
			if (autoFill) {
				return ($marqueeWidth * $multiplier) / speed
			}
			return $marqueeWidth < $containerWidth ? $containerWidth / speed : $marqueeWidth / speed
		}
	)

	const objectToStyleString = (obj: Record<string, string | number>) =>
		Object.entries(obj).reduce((acc, [key, value]) => `${acc} ${key}: ${value};`, '')

	const containerStyle = objectToStyleString({
		['--pause-on-hover' as string]: !play || pauseOnHover ? 'paused' : 'running',
		['--pause-on-click' as string]: !play || (pauseOnHover && !pauseOnClick) || pauseOnClick ? 'paused' : 'running',
		['--width' as string]: direction === 'up' || direction === 'down' ? `100vh` : '100%',
		['--transform' as string]: direction === 'up' ? 'rotate(-90deg)' : direction === 'down' ? 'rotate(90deg)' : 'none'
	})

	const gradientStyle = objectToStyleString({
		['--gradient-color' as string]: gradientColor,
		['--gradient-width' as string]: typeof gradientWidth === 'number' ? `${gradientWidth}px` : gradientWidth
	})

	const marqueeStyle = derived(duration, $duration =>
		objectToStyleString({
			['--play' as string]: play ? 'running' : 'paused',
			['--direction' as string]: direction === 'left' ? 'normal' : 'reverse',
			['--duration' as string]: `${$duration}s`,
			['--delay' as string]: `${delay}s`,
			['--iteration-count' as string]: !!loop ? `${loop}` : 'infinite',
			['--min-width' as string]: autoFill ? `auto` : '100%'
		})
	)

	const childStyle = objectToStyleString({
		['--transform' as string]: direction === 'up' ? 'rotate(90deg)' : direction === 'down' ? 'rotate(-90deg)' : 'none',
		['--gap' as string]: gap
	})

	function handleKeyPress(event: KeyboardEvent) {
		// Enter or Space triggers click event
		if (event.key === 'Enter' || event.key === ' ') {
			play = !play
		}
	}
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	bind:this={containerRef}
	style="{style} {containerStyle}"
	class="rfm-marquee-container {className}"
	on:mouseenter={pauseOnHover ? () => (play = false) : null}
	on:mouseleave={pauseOnHover ? () => (play = true) : null}
	on:click={pauseOnClick ? () => (play = !play) : null}
	on:keydown={pauseOnClick ? handleKeyPress : null}
>
	{#if gradient}
		<div
			class="rfm-overlay"
			style="background: linear-gradient(to right, {gradientColor}, transparent {gradientWidth}); {gradientStyle}"
		></div>
	{/if}

	<div class="rfm-marquee" style={$marqueeStyle} on:animationiteration={onCycleComplete} on:animationend={onFinish}>
		<div class="rfm-initial-child-container" bind:this={marqueeRef}>
			<div style={childStyle} class="rfm-child">
				<slot />
			</div>
		</div>
		{#if $multiplier > 1}
			{#each Array($multiplier - 1) as _}
				<div style={childStyle} class="rfm-child">
					<slot />
				</div>
			{/each}
		{/if}
	</div>
	<div class="rfm-marquee" style={$marqueeStyle}>
		{#each Array($multiplier) as _}
			<div style={childStyle} class="rfm-child">
				<slot />
			</div>
		{/each}
	</div>
</div>

<style lang="scss">
	.rfm-marquee-container {
		overflow-x: hidden;
		display: flex;
		flex-direction: row;
		position: relative;
		width: var(--width);
		transform: var(--transform);

		&:hover div {
			animation-play-state: var(--pause-on-hover);
		}

		&:active div {
			animation-play-state: var(--pause-on-click);
		}
	}

	.rfm-overlay {
		position: absolute;
		width: 100%;
		height: 100%;

		@mixin gradient {
			background: linear-gradient(to right, var(--gradient-color), rgb(255, 255, 255, 0));
		}

		&::before,
		&::after {
			@include gradient;
			content: '';
			height: 100%;
			position: absolute;
			width: var(--gradient-width);
			z-index: 2;
			pointer-events: none;
			touch-action: none;
		}

		&::after {
			right: 0;
			top: 0;
			transform: rotateZ(180deg);
		}

		&::before {
			left: 0;
			top: 0;
		}
	}

	.rfm-marquee {
		flex: 0 0 auto;
		min-width: var(--min-width);
		z-index: 1;
		display: flex;
		flex-direction: row;
		align-items: center;
		animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
		animation-play-state: var(--play);
		animation-delay: var(--delay);
		animation-direction: var(--direction);

		@keyframes scroll {
			0% {
				transform: translateX(0%);
			}
			100% {
				transform: translateX(-100%);
			}
		}
	}

	.rfm-initial-child-container {
		flex: 0 0 auto;
		display: flex;
		min-width: auto;
		flex-direction: row;
		align-items: center;
	}

	.rfm-child {
		transform: var(--transform);
		margin-right: var(--gap);
	}
</style>
