<div class="dot-typing"></div>

<style lang="scss">
	$dot-width: 10px;
	$dot-height: 10px;
	$dot-radius: $dot-width * 0.5;

	$dot-color: var(--color);
	$dot-bg-color: $dot-color;
	$dot-before-color: $dot-color;
	$dot-after-color: $dot-color;

	$dot-spacing: $dot-width + $dot-width * 0.5;

	$left-pos: -9999px;
	$x1: -$left-pos - $dot-spacing;
	$x2: -$left-pos;
	$x3: -$left-pos + $dot-spacing;

	.dot-typing {
		position: relative;
		left: $left-pos;

		width: $dot-width;
		height: $dot-height;
		border-radius: $dot-radius;
		background-color: $dot-bg-color;
		color: $dot-color;

		box-shadow:
			$x1 0 0 0 $dot-before-color,
			$x2 0 0 0 $dot-color,
			$x3 0 0 0 $dot-after-color;
		animation: dot-typing 1.5s infinite linear;
	}

	@keyframes dot-typing {
		0% {
			box-shadow:
				$x1 0 0 0 $dot-before-color,
				$x2 0 0 0 $dot-color,
				$x3 0 0 0 $dot-after-color;
		}

		16.667% {
			box-shadow:
				$x1 -10px 0 0 $dot-before-color,
				$x2 0 0 0 $dot-color,
				$x3 0 0 0 $dot-after-color;
		}

		33.333% {
			box-shadow:
				$x1 0 0 0 $dot-before-color,
				$x2 0 0 0 $dot-color,
				$x3 0 0 0 $dot-after-color;
		}

		50% {
			box-shadow:
				$x1 0 0 0 $dot-before-color,
				$x2 -10px 0 0 $dot-color,
				$x3 0 0 0 $dot-after-color;
		}

		66.667% {
			box-shadow:
				$x1 0 0 0 $dot-before-color,
				$x2 0 0 0 $dot-color,
				$x3 0 0 0 $dot-after-color;
		}

		83.333% {
			box-shadow:
				$x1 0 0 0 $dot-before-color,
				$x2 0 0 0 $dot-color,
				$x3 -10px 0 0 $dot-after-color;
		}

		100% {
			box-shadow:
				$x1 0 0 0 $dot-before-color,
				$x2 0 0 0 $dot-color,
				$x3 0 0 0 $dot-after-color;
		}
	}
</style>
