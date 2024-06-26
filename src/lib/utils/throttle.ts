/* eslint-disable @typescript-eslint/no-explicit-any */
export function throttle(fn: (...args: any[]) => void, wait: number) {
	let timerId: number | null = null

	return (...args: any[]) => {
		if (timerId !== null) {
			return
		}
		timerId = window.setTimeout(() => {
			timerId = null
			return fn(...args)
		}, wait)
	}
}
