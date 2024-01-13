import * as t from 'three'

// 適当に作ったScene

let camera: t.PerspectiveCamera
const createCamera = () => {
	camera = new t.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	camera.position.z = 5
}

const createScene = () => {
	const scene = new t.Scene()
	scene.background = new t.Color(0xffffff)

	const geometry = new t.PlaneGeometry(4, 2, 2)

	const textureLoader = new t.TextureLoader()
	const textureLogo = textureLoader.load('textures/logo_w.png')

	const material = new t.MeshStandardMaterial({
		color: 0xffffff,
		map: textureLogo
	})

	const logo = new t.Mesh(geometry, material)
	scene.add(logo)

	const directionalLight = new t.DirectionalLight(0x9090aa)
	directionalLight.position.set(-10, 10, -10).normalize()
	scene.add(directionalLight)

	const hemisphereLight = new t.HemisphereLight(0xffffff, 0x444444)
	hemisphereLight.position.set(1, 1, 1)
	scene.add(hemisphereLight)

	return {
		scene,
		object: { logo }
	}
}

let renderer: t.WebGLRenderer

const animate = (scene: t.Scene, mesh1: t.Mesh) => {
	requestAnimationFrame(() => animate(scene, mesh1))
	mesh1.rotation.x += 0.01
	mesh1.rotation.y += 0.01
	renderer.render(scene, camera)
}

const resize = () => {
	const container = renderer.domElement.parentElement!
	renderer.setSize(container.clientWidth, container.clientHeight)
	camera.aspect = container.clientWidth / container.clientHeight
	camera.updateProjectionMatrix()
}

export const createScene1 = (el: HTMLCanvasElement) => {
	createCamera()
	const { object, scene } = createScene()
	renderer = new t.WebGLRenderer({ antialias: true, canvas: el })
	resize()
	animate(scene, object.logo)
}

export const subscribeResize = () => {
	window.addEventListener('resize', resize)
}

export const unsubscribeResize = () => {
	window.removeEventListener('resize', resize)
}
