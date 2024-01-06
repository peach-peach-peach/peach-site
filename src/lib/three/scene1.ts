import {
	BoxGeometry,
	DirectionalLight,
	HemisphereLight,
	Mesh,
	MeshStandardMaterial,
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
	TextureLoader,
	Color
} from 'three'

// 適当に作ったScene

let camera: PerspectiveCamera
const createCamera = () => {
	camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
	camera.position.z = 5
}

const createScene = () => {
	const scene = new Scene()
	scene.background = new Color(0xffffff)

	const geometry = new BoxGeometry()
	geometry.scale(3, 3, 3)

	const textureLoader = new TextureLoader()
	const textureLogo = textureLoader.load('textures/logo_w.png')

	const material = new MeshStandardMaterial({
		color: 0xffffff,
		metalness: 0.13,
		map: textureLogo
	})

	const cube = new Mesh(geometry, material)
	scene.add(cube)

	const directionalLight = new DirectionalLight(0x9090aa)
	directionalLight.position.set(-10, 10, -10).normalize()
	scene.add(directionalLight)

	const hemisphereLight = new HemisphereLight(0xffffff, 0x444444)
	hemisphereLight.position.set(1, 1, 1)
	scene.add(hemisphereLight)

	return {
		scene,
		object: { cube }
	}
}

let renderer: WebGLRenderer

const animate = (scene: Scene, cube: Mesh) => {
	requestAnimationFrame(() => animate(scene, cube))
	cube.rotation.x += 0.01
	cube.rotation.y += 0.01
	renderer.render(scene, camera)
}

const scale = 0.5
const resize = () => {
	renderer.setSize(window.innerWidth * scale, window.innerHeight * scale)
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()
}

export const createScene1 = (el: HTMLCanvasElement) => {
	createCamera()
	const { object, scene } = createScene()
	renderer = new WebGLRenderer({ antialias: true, canvas: el })
	resize()
	animate(scene, object.cube)
}

export const subscribeResize = () => {
	window.addEventListener('resize', resize)
}

export const unsubscribeResize = () => {
	window.removeEventListener('resize', resize)
}
