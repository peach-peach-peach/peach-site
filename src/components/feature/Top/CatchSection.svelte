<aside>
	<video src="/videos/easy-muted.mp4" poster="/videos/easy-muted-thumb.jpg" autoplay muted loop playsinline>
		<track kind="captions" />
	</video>
</aside>

<style>
	aside {
		margin-top: -43px;
		display: flex;
		justify-content: center;
		height: calc(100vh - 43px);
	}

	video {
		display: block;
		width: auto;
	}

	/* PC */
	@media screen and (min-width: 768px) {
		aside {
			height: calc(100vh);
		}
	}
</style>
