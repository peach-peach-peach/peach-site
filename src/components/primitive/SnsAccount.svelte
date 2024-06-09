<script lang="ts">
	import xIcon from '$lib/images/icons/x-logo.svg?raw'
	import instagramIcon from '$lib/images/icons/instagram-logo.svg?raw'

	export let snsType: 'x' | 'instagram'
	export let accountId: string

	/* eslint-disable svelte/no-at-html-tags */
</script>

{#if snsType === 'x'}
	<div class="sns-account">
		<a href={'https://x.com/' + accountId} target="_blank" rel="noopener noreferrer">
			<div class="sns-icon x">{@html xIcon}</div>
		</a>
	</div>
{/if}

{#if snsType === 'instagram'}
	<div class="sns-account">
		<a href={'https://www.instagram.com/' + accountId} target="_blank" rel="noopener noreferrer">
			<div class="sns-icon instagram">{@html instagramIcon}</div>
		</a>
	</div>
{/if}

<style lang="scss">
	.sns-account {
		display: flex;
		align-items: center;
		column-gap: 4px;

		.sns-icon {
			width: 20px;
			height: 20px;
			display: flex;
			align-items: center;
			justify-content: center;

			&.x {
				background-color: #000;
				color: #fff;
				border-radius: 50%;
			}

			&.instagram {
				background-color: #000;
				color: #fff;
				border-radius: 50%;
			}
		}
	}

	:global(.sns-icon svg) {
		width: 60%;
		height: 63%;
	}
</style>
