<template>
<div>
  <canvas ref="canvasRef" class="webgl"></canvas>
  <div class="scroll"></div>
</div>
</template>

<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { ref, onMounted, onUnmounted } from 'vue'

let canvas
let scene
let gltfLoader
let camera
let controls
let renderer
let sizes
let clock
let thresholds
let cameraPositions
let gltfScene;
const wireframeThreshold = 500
const canvasRef = ref(null);
onMounted(() => {
  init()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
//   window.removeEventListener('wheel', onScroll)
})

function init() {
      gsap.registerPlugin(ScrollTrigger)
  canvas = canvasRef.value
  scene = new THREE.Scene()
  const axesHelper = new THREE.AxesHelper(14);
  scene.add(axesHelper);
  gltfLoader = new GLTFLoader()

  addLights()
  loadModel()

  sizes = {
    width: window.innerWidth,
    height: window.innerHeight
  }

  window.addEventListener('resize', onResize)
  window.addEventListener('wheel', onScroll)

  setupCamera()
  setupControls()
  setupRenderer()

  animate()
}

function addLights() {
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambientLight)
  const dirLight = new THREE.DirectionalLight(0xefefff, 1.5)
  dirLight.position.set(10, 10, 10)
  scene.add(dirLight)
  const pointLight = new THREE.PointLight(0xffffff, 5, 1)
  pointLight.position.set(2, 2, 2)
  scene.add(pointLight)
}

function loadModel() {
  gltfLoader.load('model.gltf', (gltf) => {
    gltf.scene.traverse(child => {
      if (child.isMesh) {
        const material = new THREE.MeshStandardMaterial({ color: child.material.color })
        child.material = material
      }
    })
  
    gltfScene = gltf.scene;
         gltfScene.position.z = -10
           gltfScene.position.y = -1
         gltfScene.position.x = -10
    scene.add(gltf.scene)
  })
}

function onResize() {
  sizes.width = window.innerWidth
  sizes.height = window.innerHeight
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

function onScroll() {
        console.log(camera.position)
    const scrollY = window.scrollY;
    gltfScene.position.x = scrollY * 100
    camera.position.z =25;
camera.position.x =0;
camera.position.y =2;
camera.rotation.z=10;
camera.position.z =10;
camera.position.x =0;
camera.position.y =0;
    renderer.render(scene, camera)
//  const scrollY = window.scrollY
  let targetPosition

  if (scrollY < thresholds[0]) {
    targetPosition = cameraPositions[0]
  } else if (scrollY < thresholds[1]) {
    targetPosition = cameraPositions[1]
  } else if (scrollY < thresholds[2]) {
    targetPosition = cameraPositions[2]
  } else {
    targetPosition = camera.position
  }
 let timeline = gsap.timeline({
    defaults: {
      ease: 'power1.out',
    },
    scrollTrigger: {
      trigger: '.scroll',
      start: "top",
      scrub: 1,
    }
  })
  
  timeline.to(gltfScene.rotation, { x: Math.PI })
  timeline.to(gltfScene.rotation, { y: Math.PI * 2 })
  timeline.to(gltfScene.scale, { x: 3, y: 3, z: 3 })
  timeline.to(gltfScene.rotation, { y: Math.PI }, '<')

  gsap.to(camera.position, {
    duration: 3,
    x: 0,
    y: 0,
    z: 10
  })
  

   if (scrollY > wireframeThreshold) {
     scene.traverse(child => {
       if (child.isMesh) {
         child.material = new THREE.MeshBasicMaterial({ wireframe: true })
       }
     })
   }
}

function setupCamera() {
 camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
 //  camera = new THREE.OrthographicCamera( -sizes.width, sizes.width, -sizes.height, sizes.height , 1, 1000 );
//   camera.position.set(10, 4, 0)
//   const helper = new THREE.CameraHelper( camera ); 
//   scene.add( helper );
camera.position.z =0;
// camera.position.x =10;
// camera.position.y =2;
  thresholds = [500, 1000, 1500]
  cameraPositions = [
    { x: 0, y: 0, z: 5 },
    { x: 0, y: 0, z: 2 },
    { x: 0, y: 0, z: -5 }
  ]
  //camera.position.set(cameraPositions[0].x, cameraPositions[0].y, cameraPositions[0].z)
  scene.add(camera)
}

function setupControls() {
  controls = new OrbitControls(camera, canvas)
  controls.enableDamping = true
}

function setupRenderer() {
  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true
  })
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.setClearColor("white")
}

function animate() {
  clock = new THREE.Clock()
  const tick = () => {
    controls.update()
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
  }
  tick()
}
</script>

<style scoped>
  canvas.webgl {
    margin-top: 5rem;
    width: 100%;
    height: 100%;
    display: block;
  }
  .scroll {
  width: 100vw;
  height: 400vh;
  background: rgb(0, 0, 0, 0.5);
  top: 0;
  left: 0;
}
</style>
