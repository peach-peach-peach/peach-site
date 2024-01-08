<script lang="ts">
	import logoSvg from '$lib/images/logo.svg?raw'
	import Spacer from './Spacer.svelte'
	import SpacerFlex from './SpacerFlex.svelte'

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
			href: '#',
			keyColor: 'linear-gradient(to left, #405DE6 10%, #C13584 90%)'
		},
		{
			label: 'Spotify',
			href: '#',
			keyColor: '#1DB954'
		},
		{
			label: 'Apple Music',
			href: '#',
			keyColor: '#fc3c44'
		}
	]
</script>

<nav>
	<a href="/" class="logo">
		<span class="visually-hidden">Top</span>
		{@html logoSvg}
	</a>

	<Spacer size="60px" />

	<ul class="contents">
		{#each contentItems as item}
			<li style="--key-color: {item.keyColor}">
				<a href={item.href} style="--key-color: {item.keyColor}">{item.label}</a>
			</li>
		{/each}
	</ul>

	<ul class="social">
		{#each socialItems as item}
			<li style="--key-color: {item.keyColor}">
				<a href={item.href} style="--key-color: {item.keyColor}">{item.label}</a>
			</li>
		{/each}
	</ul>
</nav>

<style lang="scss">
	nav {
		position: sticky;
		top: 0;

		height: 96vh;
		padding: 24px;
		display: flex;
		flex-direction: column;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	li {
		list-style: none;
		line-height: 1.9rem;

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

	.social {
		position: absolute;
		bottom: 24px;
	}

	.logo {
		display: block;
		width: 160px;
	}
</style>
