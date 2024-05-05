<script lang="ts">
	import { page } from '$app/stores'

	export let open: boolean = false
	export const toggle = () => (open = !open)
	export const close = () => (open = false)
</script>

<header>
	<button class="menu-btn" class:is-active={open} on:click={toggle}><span></span></button>

	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" on:click={close}>Top</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" on:click={close}>About</a>
			</li>
			<li aria-current={$page.url.pathname === '/news' ? 'page' : undefined}>
				<a href="/news" on:click={close}>News</a>
			</li>
			<li aria-current={$page.url.pathname === '/schedule' ? 'page' : undefined}>
				<a href="/schedule" on:click={close}>Schedule</a>
			</li>
			<li aria-current={$page.url.pathname === '/discography' ? 'page' : undefined}>
				<a href="/discography" on:click={close}>Discography</a>
			</li>
			<li aria-current={$page.url.pathname === '/videos' ? 'page' : undefined}>
				<a href="/videos" on:click={close}>Videos</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href="/contact" on:click={close}>Contact</a>
			</li>
		</ul>
	</nav>
</header>

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
			background-color: var(--color-theme-1);
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
		height: 100vh;
		position: fixed;
		top: 0;
		left: 100%;
		z-index: 80;
		background-color: #fff;
		transition: all 0.5s; /*アニメーション設定*/

		ul {
			padding: 70px 10px 0;
		}

		li {
			list-style: none;

			a {
				display: block;
				width: 100%;
				box-sizing: border-box;
				color: #000;
				text-decoration: none;
				padding: 9px 15px 10px 0;
				position: relative;
			}

			a::before {
				content: '';
				width: 7px;
				height: 7px;
				border-top: solid 2px #681e1e;
				border-right: solid 2px #681e1e;
				transform: rotate(45deg);
				position: absolute;
				right: 11px;
				top: 16px;
			}
		}
	}

	/* PC */
	@media screen and (min-width: 768px) {
		header {
			display: flex;
			justify-content: center;
			background-color: #fff;
		}

		.menu-btn {
			display: none;
		}

		nav {
			position: relative;
			top: auto;
			left: auto;
			display: flex;
			justify-content: center;
			height: auto;
			--background: rgba(255, 255, 255, 0.7);

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
				border: none;

				a {
					display: inline;
					padding: 0 0.5rem;
					line-height: 3rem;
				}

				a::before {
					display: none;
				}
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

				view-transition-name: active-page;
			}

			a {
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
		}
	}
</style>
