import * as t from 'three'

// 適当に作ったScene

let camera: t.PerspectiveCamera
const createCamera = () => {
	camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	camera.position.z = 5
}

let logoMesh: t.Mesh

const createScene = () => {
	const scene = new t.Scene()

	const geometry = new t.PlaneGeometry(4, 2, 2)

	const textureLoader = new t.TextureLoader()
	const textureLogo = textureLoader.load('textures/logo_w.png')

	const material = new t.MeshStandardMaterial({
		color: 0xffffff,
		map: textureLogo,
		side: t.DoubleSide
	})

	logoMesh = new t.Mesh(geometry, material)
	scene.add(logoMesh)

	const directionalLight = new t.DirectionalLight(0x9090aa)
	directionalLight.position.set(-10, 10, -10).normalize()
	scene.add(directionalLight)

	const hemisphereLight = new t.HemisphereLight(0xffffff, 0x444444)
	hemisphereLight.position.set(1, 1, 1)
	scene.add(hemisphereLight)

	return {
		scene
	}
}

let renderer: t.WebGLRenderer

const animate = (scene: t.Scene, mesh1: t.Mesh) => {
	requestAnimationFrame(() => animate(scene, mesh1))
	// mesh1.rotation.x += 0.01
	mesh1.rotation.y += 0.01
	renderer.render(scene, camera)
}

const resize = () => {
	const container = renderer.domElement.parentElement!
	renderer.setSize(container.clientWidth, container.clientHeight)
	camera.aspect = container.clientWidth / container.clientHeight
	camera.updateProjectionMatrix()
}

const updateScrollPosition = (scrollY: number) => {
	logoMesh.rotation.x = scrollY * 0.01
}

let lastKnownScrollPosition = 0
let ticking = false
const scroll = () => {
	lastKnownScrollPosition = window.scrollY

	if (!ticking) {
		window.requestAnimationFrame(() => {
			updateScrollPosition(lastKnownScrollPosition)
			ticking = false
		})

		ticking = true
	}
}

export const createScene1 = (el: HTMLCanvasElement) => {
	createCamera()
	const { scene } = createScene()
	renderer = new t.WebGLRenderer({ antialias: true, canvas: el, alpha: true })
	resize()
	animate(scene, logoMesh)
}

export const subscribeResize = () => {
	window.addEventListener('resize', resize)

	return () => window.removeEventListener('resize', resize)
}

export const subscribeScroll = () => {
	window.addEventListener('scroll', scroll)

	return () => window.removeEventListener('scroll', scroll)
}
