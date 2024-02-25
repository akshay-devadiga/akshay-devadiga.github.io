// clearing the console (just a CodePen thing)
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { gsap } from "gsap";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
console.clear();

// there are 3 parts to this
//
// Scene:           Setups and manages threejs rendering
// loadModel:       Loads the 3d obj file
// setupAnimation:  Creates all the GSAP
//                  animtions and scroll triggers
//
// first we call loadModel, once complete we call
// setupAnimation which creates a new Scene
const canvas = document.querySelector("canvas.webgl");
class Scene {
  constructor(model) {
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

function loadModel() {
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
    setupAnimation(gltf.scene);
  });
}

function setupAnimation(model) {
  let scene = new Scene(model);
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
  gsap.fromTo(
    scene.views[1],
    { height: 1, bottom: 0 },
    {
      height: 0,
      bottom: 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".blueprint",
        scrub: true,
        start: "bottom bottom",
        end: "bottom top",
      },
    }
  );

  gsap.fromTo(
    scene.views[1],
    { height: 0, bottom: 0 },
    {
      height: 1,
      bottom: 0,
      ease: "none",
      scrollTrigger: {
        trigger: ".blueprint",
        scrub: true,
        start: "top bottom",
        end: "top top",
      },
    }
  );

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
}

loadModel();
