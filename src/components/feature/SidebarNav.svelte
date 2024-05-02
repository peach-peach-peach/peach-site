<script lang="ts">
	import { page } from '$app/stores'
	import logoSvg from '$lib/images/logo.svg?raw'
	import { site } from '@/constants/site'
	import Spacer from '@/components/primitive/Spacer.svelte'

	type ListItem = { href: string; label: string }

	const contentItems: ListItem[] = [
		{
			label: 'Top',
			href: '/'
		},
		{
			label: 'News',
			href: '/news'
		},
		{
			label: 'Schedule',
			href: '/schedule'
		},
		{
			label: 'Videos',
			href: '/videos'
		},
		{
			label: 'Discography',
			href: '/discography'
		},
		{
			label: 'Profile',
			href: '/profile'
		}
		// {
		// 	label: 'Store',
		// 	href: '#',
		// 	keyColor: '#ff9c8f'
		// }
	]

	const socialItems: ListItem[] = [
		{
			label: 'Instagram',
			href: site.social.instagram
		},
		{
			label: 'YouTube',
			href: site.social.youtube
		},
		{
			label: 'Spotify',
			href: site.social.spotify
		},
		{
			label: 'Apple Music',
			href: site.social.appleMusic
		}
	]

	export let open: boolean = false
	export const toggle = () => (open = !open)
	export const close = () => (open = false)
	export const isCurrentPage = (currentPath: string, href: string) => {
		if (href === '/') return false
		return currentPath.startsWith(href)
	}

	/* eslint-disable svelte/no-at-html-tags */
</script>

<!-- Header for SP -->
<header>
	<a href="/" class="logo">
		<span class="visually-hidden">Peach Peach Peach</span>
		{@html logoSvg}
	</a>
</header>

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
					aria-current={isCurrentPage($page.url.pathname, item.href) ? 'page' : undefined}
					>{item.label}
				</a>
			</li>
		{/each}
	</ul>

	<Spacer size="0" sizeSP="24px" />

	<ul class="social">
		{#each socialItems as item}
			<li>
				<a href={item.href} target="_blank" rel="noopener noreferrer">{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	/* SP */
	header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 80;
		padding: 10px 0;
		background-color: var(--color-key-pink-deep);
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 1px solid var(--color-bg-dark);

		:global(#peach-logo) {
			height: 48px;
			display: block;
			background-color: unset;
			fill: #fff;
		}
	}

	.menu-btn {
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		display: flex;
		height: 69px;
		width: 50px;
		justify-content: center;
		align-items: center;
		z-index: 90;
		border: none;
		background-color: transparent;

		span,
		span:before,
		span:after {
			content: '';
			display: block;
			height: 3px;
			width: 25px;
			border-radius: 3px;
			background-color: var(--color-bg-0);
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
	}

	.is-active ~ nav {
		left: 0;
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
		background-color: var(--color-key-pink-deep);

		/* PCむけロゴ */
		.logo {
			display: none;
		}
	}

	.logo {
		background-color: unset;
		fill: #fff;
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
			margin: 0;
			transition:
				color 0.1s ease-in-out,
				background-color 0.1s ease-in-out;
			color: #fff;
			font-family: 'Montserrat', sans-serif;
			font-weight: 500;
			text-decoration: none;
		}

		a:hover {
			color: var(--color-text-highlight);
			background: var(--color-key-green);
		}
	}

	a[aria-current='page'] {
		color: var(--color-text-highlight);
		background: var(--color-key-green);
	}

	/* PC */
	@media screen and (min-width: 768px) {
		header {
			display: none;
		}

		.menu-btn {
			display: none;
		}

		nav {
			display: flex;
			flex-direction: column;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 80;
			padding: 23px;
			height: 96vh;
			width: auto;

			.logo {
				display: block;
				width: 104px;
			}
		}

		.social {
			position: absolute;
			bottom: 24px;
		}
	}
</style>
