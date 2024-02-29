<template>
  <div>
    <canvas class="webgl"></canvas>
    <div class="content">
      <div class="loading">Loading</div>
      <div class="trigger"></div>

      <div class="section">
        <h1>Airplanes.</h1>
        <h3>The beginners guide.</h3>
        <p>You've probably forgotten what these are.</p>
        <!-- 		<div class="phonetic">/ ˈɛərˌpleɪn /</div> -->
        <div class="scroll-cta">Scroll</div>
      </div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section"></div>
      <div class="section right">
        <h2>They're kinda like buses...</h2>
      </div>

      <div class="ground-container">
        <div class="parallax ground"></div>
        <div class="section right">
          <h2>..except they leave the ground.</h2>
          <p>Saaay what!?.</p>
        </div>
        <div class="section">
          <h2>They fly through the sky.</h2>
          <p>For realsies!</p>
        </div>
        <div class="section">
          <h2>They fly through the sky.</h2>
          <p>For realsies!</p>
        </div>
        <div class="section">
          <h2>They fly through the sky.</h2>
          <p>For realsies!</p>
        </div>
        <div class="section">
          <h2>They fly through the sky.</h2>
          <p>For realsies!</p>
        </div>

        <div class="section right">
          <h2>Defying all known physical laws.</h2>
          <p>It's actual magic!</p>
        </div>
        <div class="parallax clouds"></div>
      </div>

      <div class="blueprint">
        <v-container fluid>
        <v-row no-gutters>
          <v-col cols="4" class="px-0">
           <v-img src="ship.svg" contain/>
          </v-col>
          <v-col cols="auto">
          </v-col>
        </v-row>
        </v-container>
       
        <div class="section dark">
          <h2>The facts and figures.</h2>
          <p>Lets get into the nitty gritty...</p>
        </div>
        <div class="section dark length">
          <h2>Length.</h2>
          <p>Long.</p>
        </div>
        <div class="section dark wingspan">
          <h2>Wing Span.</h2>
          <p>I dunno, longer than a cat probably.</p>
        </div>
        <div class="section dark phalange">
          <h2>Left Phalange</h2>
          <p>Missing</p>
        </div>
        <div class="section dark">
          <h2>Engines</h2>
          <p>Turbine funtime</p>
        </div>
        <!-- 		<div class="section"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import * as THREE from "three";
import gsap from "gsap";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
class Scene {
  constructor(model, canvas) {
    this.views = [
      { bottom: 0, height: 1 },
      { bottom: 0, height: 0 },
    ];

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true,
    });

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.setPixelRatio(window.devicePixelRatio);

    document.body.appendChild(this.renderer.domElement);

    // scene

    this.scene = new THREE.Scene();
    const axesHelper = new THREE.AxesHelper(4);
    this.scene.add(axesHelper);
    for (var ii = 0; ii < this.views.length; ++ii) {
      var view = this.views[ii];
      var camera = new THREE.PerspectiveCamera(
        25,
        window.innerWidth / window.innerHeight,
        1,
        2000
      );
      camera.position.fromArray([-50, 0, 100]);
      camera.layers.disableAll();
      camera.layers.enable(ii);
      view.camera = camera;
      camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    this.scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xefefff, 1.5);
    dirLight.position.set(10, 10, 10);
    this.scene.add(dirLight);
    const pointLight = new THREE.PointLight(0xffffff, 5, 1);
    pointLight.position.set(2, 2, 2);
    this.scene.add(pointLight);
    // group

    this.onResize();
    window.addEventListener("resize", this.onResize, false);

    var edges = new THREE.EdgesGeometry(model.children[0].geometry);
    let line = new THREE.LineSegments(edges);
    line.material.depthTest = false;
    line.material.opacity = 0.5;
    line.material.transparent = true;
    line.position.x = 0.5;
    line.position.z = -1;
    line.position.y = 0.2;

    this.modelGroup = new THREE.Group();

    model.layers.set(0);
    line.layers.set(1);

    this.modelGroup.add(model);
    this.modelGroup.add(line);
    this.scene.add(this.modelGroup);
  }

  render = () => {
    for (var ii = 0; ii < this.views.length; ++ii) {
      var view = this.views[ii];
      var camera = view.camera;

      var bottom = Math.floor(this.h * view.bottom);
      var height = Math.floor(this.h * view.height);

      this.renderer.setViewport(0, 0, this.w, this.h);
      this.renderer.setScissor(0, bottom, this.w, height);
      this.renderer.setScissorTest(true);

      camera.aspect = this.w / this.h;
      this.renderer.render(this.scene, camera);
    }
  };

  onResize = () => {
    this.w = window.innerWidth;
    this.h = window.innerHeight;

    for (var ii = 0; ii < this.views.length; ++ii) {
      var view = this.views[ii];
      var camera = view.camera;
      camera.aspect = this.w / this.h;
      let camZ = (screen.width - this.w * 1) / 3;
      camera.position.z = camZ < 180 ? 180 : camZ;
      camera.updateProjectionMatrix();
    }

    this.renderer.setSize(this.w, this.h);
    this.render();
  };
}

export default {
  mounted() {
    this.loadModel();
  },
  methods: {
    loadModel() {
      gsap.registerPlugin(ScrollTrigger);
      const gltfLoader = new GLTFLoader();
      gltfLoader.load("model.gltf", (gltf) => {
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            // const wireframeGeometry = new THREE.WireframeGeometry(child.geometry)
            // const wireframeMaterial = new THREE.LineBasicMaterial({ color: '#43a0ad' })
            // const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial)
            // child.add(wireframe)
            // child.material.visible = false // Hide the original material
            gltf.scene.traverse((child) => {
              if (child.isMesh) {
                const material = new THREE.MeshStandardMaterial({
                  color: child.material.color,
                });
                child.material = material;
              }
            });
          }
        });
        gltf.scene.scale.set(12, 12, 12);
        this.setupAnimation(gltf.scene);
      });
    },
    setupAnimation(model) {
      const canvas = document.querySelector("canvas.webgl");
      let scene = new Scene(model, canvas);
      let plane = scene.modelGroup;

      gsap.fromTo(
        "canvas",
        { x: "50%", autoAlpha: 0 },
        { duration: 1, x: "0%", autoAlpha: 1 }
      );
      gsap.to(".loading", { autoAlpha: 0 });
      gsap.to(".scroll-cta", { opacity: 1 });
      // gsap.set('svg', {autoAlpha: 1})

      let tau = Math.PI * 2;

      gsap.set(plane.rotation, { y: tau * 0.18 });
      gsap.set(plane.position, { x: 80, y: -32, z: -60 });

      scene.render();

      var sectionDuration = 0.05;
    gsap.fromTo(scene.views[1], 
		{ 	height: 1, bottom: 0 }, 
		{
			height: 0, bottom: 1,
			ease: 'none',
			scrollTrigger: {
			  trigger: ".blueprint",
			  scrub: true,
			  start: "bottom bottom",
			  end: "bottom top"
			}
		})
	
	gsap.fromTo(scene.views[1], 
		{ 	height: 0, bottom: 0 }, 
		{
			height: 1, bottom: 0,
			ease: 'none',
			scrollTrigger: {
			  trigger: ".blueprint",
			  scrub: true,
			  start: "top bottom",
			  end: "top top"
			}
		})
	

      let tl = new gsap.timeline({
        onUpdate: scene.render,
        scrollTrigger: {
          trigger: ".content",
          scrub: true,
          start: "top top",
          end: "bottom bottom",
        },
        defaults: { duration: sectionDuration, ease: "power2.inOut" },
      });

      let delay = 0;

      tl.to(".scroll-cta", { duration: 0.25, opacity: 0 }, delay);
      tl.to(plane.position, { x: 20, ease: "power1.in" }, delay);
      delay += sectionDuration;
      tl.to(plane.rotation, { y: tau * -0.05, ease: "power1.inOut" }, delay);
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");
svg {
  z-index: 100;
}
:root {
  --padding: 10vmin;
  --color-background: #d0cbc7;

  --font-size-large: 8vw;
  --font-size-medium: 4vw;
  --font-size-normal: 2vw;

  @media only screen and (min-width: 800px) {
    --font-size-large: 64px;
    --font-size-medium: 32px;
    --font-size-normal: 16px;
  }

  @media only screen and (max-width: 500px) {
    --font-size-large: 40px;
    --font-size-medium: 20px;
    --font-size-normal: 14px;
  }
}

a {
  color: white;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin-top: 10px;
}

html,
body {
  margin: 0;
  min-height: 100%;
  min-width: 100%;
  font-family: "Libre Baskerville", serif;
  background-color: var(--color-background);
  font-weight: 400;
  font-size: var(--font-size-normal);
  overflow-x: hidden;
}

canvas {
  //background:red;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;

  visibility: hidden;
  opacity: 0;
}

.solid {
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.wireframe {
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
}

.content {
  position: relative;
  z-index: 1;

  .trigger {
    position: absolute;
    top: 0;
    height: 100%;
  }

  .section {
    position: relative;
    padding: var(--padding);
    --pad2: calc(var(--padding) * 2);
    width: calc(100vw - var(--pad2));
    height: calc(100vh - var(--pad2));
    margin: 0 auto;
    z-index: 2;

    &.dark {
      color: white;
      background-color: black;
    }

    &.right {
      text-align: right;
    }
  }

  .blueprint {
    position: relative;
    background-color: #F5F5F5;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.1) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
    background-size: 100px 100px, 100px 100px, 20px 20px, 20px 20px;
    background-position: -2px -2px, -2px -2px, -1px -1px, -1px -1px;
    background-attachment: fixed;

    svg {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      stroke: white;
      pointer-events: none;
      visibility: hidden;
    }

    .dark {
      background-color: transparent;
    }
  }

  .ground-container {
    position: relative;
    overflow: hidden;

    .parallax {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: -100px;
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      transform-origin: top center;
    }

    .ground {
      z-index: -1;
      background-image: url("https://assets.codepen.io/557388/background-reduced.jpg");
    }

    .clouds {
      z-index: 2;
      background-image: url("https://assets.codepen.io/557388/clouds.png");
    }
  }

  .scroll-cta,
  .credits {
    position: absolute;
    bottom: var(--padding);
  }

  .scroll-cta {
    font-size: var(--font-size-medium);
    opacity: 0;
  }

  .sunset {
    background: url("https://assets.codepen.io/557388/sunset-reduced.jpg")
      no-repeat top center;
    background-size: cover;
    transform-origin: top center;
  }

  h1,
  h2 {
    font-size: var(--font-size-large);
    margin: 0vmin 0 2vmin 0;
    font-weight: 700;
    display: inline;
  }

  h3 {
    font-size: var(--font-size-medium);
    font-weight: 400;
    margin: 0;
  }

  .end h2 {
    margin-bottom: 50vh;
  }

  .loading {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-medium);
  }
}
</style>
