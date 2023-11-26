<script lang="ts">
	import { page } from '$app/stores'
	const isCurrentPage = (pagePath: string) => ($page.url.pathname === pagePath ? 'page' : undefined)
</script>

<header>
	<nav>
		<ul>
			<li aria-current={isCurrentPage('/')}>
				<a href="/">Top</a>
			</li>
			<li aria-current={isCurrentPage('/about')}>
				<a href="/about">About</a>
			</li>
			<li aria-current={isCurrentPage('/news')}>
				<a href="/news">News</a>
			</li>
			<li aria-current={isCurrentPage('/schedule')}>
				<a href="/schedule">Schedule</a>
			</li>
			<li aria-current={isCurrentPage('/discography')}>
				<a href="/discography">Discography</a>
			</li>
			<li aria-current={isCurrentPage('/videos')}>
				<a href="/videos">Videos</a>
			</li>
			<li aria-current={isCurrentPage('/contact')}>
				<a href="/contact">Contact</a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: center;
		background-color: #fff;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
