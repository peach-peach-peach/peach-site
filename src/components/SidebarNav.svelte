<script lang="ts">
	import { page } from '$app/stores'
	import logoSvg from '$lib/images/logo.svg?raw'
	import { site } from '@/constants/site'
	import Spacer from './Spacer.svelte'

	type ListItem = { href: string; label: string; keyColor: string }

	const contentItems: ListItem[] = [
		{
			label: 'News',
			href: '/news',
			keyColor: '#99FFAF'
		},
		{
			label: 'Schedule',
			href: '/schedule',
			keyColor: '#7eddfc'
		},
		{
			label: 'Profile',
			href: '/profile',
			keyColor: '#ffb3b3'
		},
		{
			label: 'Videos',
			href: '/videos',
			keyColor: '#ffeb33'
		},
		{
			label: 'Discography',
			href: '/discography',
			keyColor: '#BAC1FF'
		},
		{
			label: 'Store',
			href: '#',
			keyColor: '#ff9c8f'
		}
	]

	const socialItems: ListItem[] = [
		{
			label: 'Instagram',
			href: site.social.instagram,
			keyColor: 'linear-gradient(to left, #405DE6 10%, #C13584 90%)'
		},
		{
			label: 'YouTube',
			href: site.social.youtube,
			keyColor: '#FF0000'
		},
		{
			label: 'Spotify',
			href: site.social.spotify,
			keyColor: '#1DB954'
		},
		{
			label: 'Apple Music',
			href: site.social.appleMusic,
			keyColor: '#fc3c44'
		}
	]

	export let open: boolean = false
	export const toggle = () => (open = !open)
	export const close = () => (open = false)
</script>

<button class="menu-btn" class:is-active={open} on:click={toggle}><span></span></button>

<nav>
	<a href="/" class="logo" on:click={close}>
		<span class="visually-hidden">Top</span>
		{@html logoSvg}
	</a>

	<Spacer size="60px" sizeSP="36px" />

	<ul class="contents">
		{#each contentItems as item}
			<li>
				<a
					href={item.href}
					on:click={close}
					aria-current={$page.url.pathname.startsWith(item.href) ? 'page' : undefined}
					style="--key-color: {item.keyColor}"
					>{item.label}
				</a>
			</li>
		{/each}
	</ul>

	<Spacer size="0" sizeSP="24px" />

	<ul class="social">
		{#each socialItems as item}
			<li>
				<a href={item.href} style="--key-color: {item.keyColor}" target="_blank" rel="noopener noreferrer"
					>{item.label}</a
				>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	/* SP */
	.menu-btn {
		position: fixed;
		top: 10px;
		right: 10px;
		display: flex;
		height: 50px;
		width: 50px;
		justify-content: center;
		align-items: center;
		z-index: 90;
		background-color: #fff;
		border: none;
		border-radius: 8px;

		span,
		span:before,
		span:after {
			content: '';
			display: block;
			height: 3px;
			width: 25px;
			border-radius: 3px;
			background-color: #555;
			position: absolute;
		}

		span:before {
			bottom: 8px;
		}

		span:after {
			top: 8px;
		}
	}

	.menu-btn.is-active {
		span {
			background-color: rgba(255, 255, 255, 0); /*メニューオープン時は真ん中の線を透明にする*/
		}

		span::before {
			bottom: 0;
			transform: rotate(45deg);
		}

		span::after {
			top: 0;
			transform: rotate(-45deg);
		}

		& ~ nav {
			left: 0;
		}
	}

	nav {
		width: 100%;
		height: 100%;
		padding: 24px;
		display: flex;
		flex-direction: column;
		position: fixed;
		top: 0;
		left: 100%;
		z-index: 80;

		transition: all 0.5s; /*アニメーション設定*/

		background-color: #fff;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
		line-height: 2.2rem;

		a {
			display: block;
			padding: 0 0.4rem;
			margin: 0 -0.4rem;
			transition:
				color 0.1s ease-in-out,
				background-color 0.1s ease-in-out;
		}

		a:hover {
			color: var(--color-text-highlight);
			background: var(--key-color);
		}
	}

	a[aria-current='page'] {
		color: var(--color-text-highlight);
		background: var(--key-color);
	}

	.logo {
		display: block;
		width: 160px;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		.menu-btn {
			display: none;
		}

		nav {
			position: sticky;
			top: 0;

			height: 96vh;
		}

		.social {
			position: absolute;
			bottom: 24px;
		}

		.logo {
			display: block;
			width: 160px;
		}
	}
</style>
