<template>
  <div>
    <canvas class="webgl"></canvas>
    <div class="content">
      <div class="loading">Loading</div>
      <div class="scroll-cta">Scroll</div>

      <div class="blueprint">
       <div class="section"></div>
        <div class="section">
          <h2>The facts and figures.</h2>
          <p>Lets get into the nitty gritty...</p>
        </div>
        <div class="section">
          <h2>Length.</h2>
          <p>Long.</p>
        </div>
        <div class="section">
          <h2>Wing Span.</h2>
          <p>I dunno, longer than a cat probably.</p>
        </div>
        <div class="section">
          <h2>Left Phalange</h2>
          <p>Missing</p>
        </div>
        <div class="section">
          <h2>Engines</h2>
          <p>Turbine funtime</p>
        </div>
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
            gltf.scene.traverse((child) => {
              if (child.isMesh) {
                const material = new THREE.MeshStandardMaterial({
                  color: child.material.color,
                  // wireframe:true
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
      let ship = scene.modelGroup;
      gsap.fromTo(
        "canvas",
        { x: "40%", autoAlpha: 0 },
        { duration: 1, x: "0%", autoAlpha: 1 }
      );
      gsap.to(".loading", { autoAlpha: 0 });
      let tau = Math.PI * 2;
      gsap.set(ship.rotation, { y: tau * 0.18 });
      gsap.set(ship.position, { x: 80, y: -32, z: -60 });
      scene.render();
      var sectionDuration = 0.011;
      let tl = new gsap.timeline({
        onUpdate: scene.render,
        scrollTrigger: {
          trigger: ".content",
          scrub: true,
          start: "top top",
          end: "bottom bottom",
          markers: true,
        },
        defaults: { duration: sectionDuration, ease: "power2.inOut" },
      });
      let delay = 0;
      tl.to(".scroll-cta", { duration: 0.25, opacity: 0 }, delay);
      delay += sectionDuration;
      tl.to(ship.position, { x: 20, ease: "power1.in" }, delay);
      delay += sectionDuration;
      tl.to(ship.rotation, { y: tau * -0.05, ease: "power1.inOut" }, delay);
      tl.to(ship.position, { z: -100, ease: "power1.inOut" }, delay);
      delay += sectionDuration;
      tl.to(ship.rotation, { y: tau * -0.25, ease: "power1.inOut" }, delay);
      tl.to(ship.position, { z: 400, y: 200, ease: "power1.inOut" }, delay);
    },
  },
};
</script>
<style lang="scss">
canvas {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  z-index: 2;
  pointer-events: none;
  visibility: hidden;
  opacity: 0;
}

.content {
  position: relative;
  z-index: 1;
  .section {
    position: relative;
    padding: var(--padding);
    --pad2: calc(var(--padding) * 2);
    width: calc(100vw - var(--pad2));
    height: 280vh;
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
  }

  .scroll-cta {
    font-size: var(--font-size-medium);
    opacity: 1;
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
