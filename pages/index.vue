<template>
  <v-container
    fluid
    :class="{ 'px-0': $vuetify.display.mdAndDown }"
    class="home"
  >
    <canvas class="webgl" v-if="$vuetify.display.mdAndUp"></canvas>
    <div class="content">
      <div class="loading" v-if="$vuetify.display.mdAndUp">Loading</div>
      <div class="scroll-cta" v-if="$vuetify.display.mdAndUp"></div>
      <div class="section" v-if="$vuetify.display.mdAndUp"></div>
      <v-row justify="center" v-if="$vuetify.display.mdAndUp">
        <v-col cols="auto" class="pb-12">
          <v-avatar size="80" @click="onScrollToHandler">
            <v-img class="mouse-move" src="mouse.png" />
          </v-avatar>
        </v-col>
      </v-row>
      <v-container fluid :class="{ 'px-0': $vuetify.display.mdAndDown }">
        <v-row
          justify="center"
          class="about pt-10"
          id="about"
          ref="scrollDiv"
          @scroll="onScroll"
          :class="{ 'px-0': $vuetify.display.mdAndDown }"
        >
          <v-col
            :cols="$vuetify.display.mdAndUp ? 11 : 12"
            :class="{ 'px-0': $vuetify.display.mdAndDown }"
          >
            <v-row
              justify="start"
              :class="{ 'px-0': $vuetify.display.mdAndDown }"
            >
              <v-col
                cols="3"
                class="about__menu"
                v-if="$vuetify.display.mdAndUp"
              >
                <v-card class="mx-auto about__menu__card" flat>
                  <!-- TODO: Support gradient in v2 :style="{ background: gradientBackground }" -->
                  <v-row justify="center">
                    <v-col cols="auto" class="pt-6 px-6">
                      <v-avatar size="160">
                        <v-img
                          src="images/about/menu-illustration.svg"
                          contain
                        />
                      </v-avatar>
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="10" class="pt-0">
                      <app-sticky-progress-bar
                        :progressValue="progressValue"
                        class="mx-auto"
                      />
                    </v-col>
                  </v-row>
                  <v-row justify="center">
                    <v-col cols="auto">
                      <app-about-menu
                        :list="menuItems"
                        :activeItemIndex="Number(currStep)"
                        @onItemClick="onItemClickHandler"
                      />
                    </v-col>
                  </v-row>
                </v-card>
              </v-col>
              <v-col
                :cols="$vuetify.display.mdAndUp ? 9 : 12"
                class="about__content"
                :class="{ 'px-0': $vuetify.display.mdAndDown }"
              >
                <v-card class="pa-0" flat color="transparent">
                  <v-container
                    fluid
                    :class="{ 'px-0': $vuetify.display.mdAndDown }"
                  >
                    <v-row align="center" justify="center">
                      <v-col cols="10">
                        <app-scrollama
                          :debug="false"
                          @step-enter="({ element }) => setCurrStep(element)"
                          @step-progress="
                            ({ element }) => handleStepProgress(element)
                          "
                        >
                          <v-col
                            cols="auto"
                            class="py-0 pl-0 pr-5 mr-10"
                            :class="{
                              'py-0 pl-0 pr-0 mr-0': $vuetify.display.mdAndDown,
                            }"
                          >
                            <v-avatar
                              size="120"
                              rounded="0"
                              style="height: 80px"
                            >
                              <v-img src="images/about/shakleset.svg" contain />
                            </v-avatar>
                          </v-col>
                          <v-col
                            cols="12"
                            class="about__content__deck"
                            style="position: relative; z-index: 2"
                            v-if="$vuetify.display.mdAndUp"
                          >
                            <v-row justify="center">
                              <v-col cols="6" class="pa-0">
                                <div
                                  class="about__content__deck__shape-1-wrapper"
                                >
                                  <div
                                    class="about__content__deck__shape-1-wrapper__shape-1"
                                  ></div>
                                </div>
                                <div
                                  class="about__content__deck__shape-2-wrapper"
                                >
                                  <div
                                    class="about__content__deck__shape-2-wrapper__shape-2"
                                  ></div>
                                </div>
                                <div
                                  class="about__content__deck__shape-3-wrapper"
                                >
                                  <div
                                    class="about__content__deck__shape-3-wrapper__shape-3 skewed-left-v2"
                                  ></div>
                                  <div
                                    class="about__content__deck__shape-3-wrapper__shape-3 skewed-right-v2"
                                  ></div>
                                </div>
                                <div
                                  class="about__content__deck__shape-4-wrapper"
                                >
                                  <div
                                    class="about__content__deck__shape-4-wrapper__shape-4 skewed-left"
                                  ></div>
                                  <div
                                    class="about__content__deck__shape-4-wrapper__shape-4 skewed-right"
                                  ></div>
                                </div>
                                <div
                                  class="about__content__deck__shape-5-wrapper"
                                >
                                  <div
                                    class="about__content__deck__shape-5-wrapper__shape-5 skewed-left-v3"
                                  ></div>
                                  <div
                                    class="about__content__deck__shape-5-wrapper__shape-5 skewed-right-v3"
                                  ></div>
                                </div>
                              </v-col>
                            </v-row>

                            <!--  <v-card class="pa-0 text-center" color="transparent" flat>
                              <span
                                :class="{
                                  'text-body': $vuetify.display.smAndDown,
                                  'text-h6': $vuetify.display.mdAndUp,
                                }"
                              >
                                Quality is not an act it is a habit - Aristotle
                              </span>
                            </v-card> -->
                          </v-col>
                          <v-col cols="auto" class="py-0" v-if="$vuetify.display.mdAndUp">
                            <v-avatar size="70">
                              <v-img src="images/about/chain.svg" contain />
                            </v-avatar>
                          </v-col>
                          <v-col
                            cols="12"
                            data-step-no="1"
                            class="about__content__under-deck"
                            id="whoami"
                          >
                            <v-card
                              class="pa-10"
                              flat
                              :class="{
                                'text-caption': $vuetify.display.smAndDown,
                                'text-body': $vuetify.display.mdAndUp,
                              }"
                            >
                            Hello!<br/>
I’m <b>Akshay Devadiga</b>,
<br/>
<p>I have over 4 years of experience in Frontend development and I have worked with in-house teams and remotely as well. Currently, I work as a senior software/product engineer at <a target="_blank" class="bg-red text-decoration-none rounded px-1" href="https://www.njorda.se">Njorda</a>. My experience spans various technologies and domains with a strong focus on performance, code quality, User Experience, responsive user interfaces, the infinity and everything in between. I also have over 6 months of recent full-stack experience. </p>
     <br /><p>At present, I specialize in building web applications with Vue and I was among the first 100 <a target="_blank" class="bg-green text-decoration-none rounded px-1" href="https://certificates.dev/c/9a807e17-3072-4672-8778-472bb2ae0823">certified</a> vue js developers by Vue School / Evan You.</p>
     <br /><p>Apart from development, I do have a strong passion for design, which I try to combine with innovation from inception to release in all of my works.</p>

                             
                            </v-card>
                          </v-col>
                          <v-col cols="auto" class="py-0">
                            <v-avatar size="70">
                              <v-img src="images/about/chain.svg" contain />
                            </v-avatar>
                          </v-col>
                          <v-col
                            cols="12"
                            data-step-no="2"
                            class="about__content__under-deck"
                            id="techstack"
                            :class="{ 'px-0': $vuetify.display.mdAndDown }"
                          >
                            <v-card class="px-10 pb-10 pt-4" flat>
                              <v-chip
                                class="mb-2 about__content__under-deck__chip text-uppercase"
                                size="large"
                                :class="{
                                  'text-body-1': $vuetify.display.smAndDown,
                                  'text-h6': $vuetify.display.mdAndUp,
                                }"
                              >
                                Tech Stack
                              </v-chip>
                              <v-card-text
                                :class="{
                                  'text-caption': $vuetify.display.smAndDown,
                                  'text-body': $vuetify.display.mdAndUp,
                                }"
                              >
                                <v-row>
                                  <v-col cols="8" class="px-0">
                                    <p>Actively engrossed in working with:</p>
                                  </v-col>
                                </v-row>

                                <v-row justify="start" align="center">
                                  <v-col
                                    cols="auto"
                                    v-for="(aUItem, i) in activelyUsing"
                                    :key="i"
                                  >
                                    <v-avatar
                                      color="transparent"
                                      rounded="0"
                                      :size="aUItem.size"
                                    >
                                      <v-img
                                        :src="aUItem.url"
                                        contain
                                        :alt="aUItem.imageAltText"
                                      ></v-img>
                                    </v-avatar>
                                  </v-col>
                                </v-row>

                                <v-row>
                                  <v-col cols="8" class="px-0">
                                    <p>Previously worked with:</p>
                                  </v-col>
                                </v-row>

                                <v-row justify="start" align="center">
                                  <v-col
                                    cols="auto"
                                    v-for="(pWItem, i) in previouslyWorkedWith"
                                    :key="i"
                                  >
                                    <v-avatar
                                      color="transparent"
                                      rounded="0"
                                      :size="pWItem.size"
                                    >
                                      <v-img
                                        :src="pWItem.url"
                                        contain
                                        :alt="pWItem.imageAltText"
                                      ></v-img>
                                    </v-avatar>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="auto" class="py-0">
                            <v-avatar size="70">
                              <v-img src="images/about/chain.svg" contain />
                            </v-avatar>
                          </v-col>
                          <v-col
                            cols="12"
                            data-step-no="3"
                            class="about__content__under-deck"
                            id="work"
                            :class="{ 'px-0': $vuetify.display.mdAndDown }"
                          >
                            <v-card class="px-10 pb-10 pt-4" flat>
                              <v-chip
                                class="mb-2 about__content__under-deck__chip text-uppercase"
                                size="large"
                                :class="{
                                  'text-body-1': $vuetify.display.smAndDown,
                                  'text-h6': $vuetify.display.mdAndUp,
                                }"
                              >
                                Work
                              </v-chip>
                              <v-card-text
                                :class="{
                                  'px-0': $vuetify.display.mdAndDown,
                                  'text-caption': $vuetify.display.smAndDown,
                                  'text-body': $vuetify.display.mdAndUp,
                                }"
                              >
                                <v-row
                                  justify="start"
                                  align="center"
                                  class="my-0"
                                >
                                  <v-col cols="auto">
                                    <p>Currently working at:</p>
                                    <v-row
                                      justify="start"
                                      align="center"
                                      class="my-0"
                                    >
                                      <v-col cols="auto" class="py-0">
                                        <v-img
                                          :src="currentlyWorkingAt.url"
                                          contain
                                          :alt="currentlyWorkingAt.imageAltText"
                                          :width="currentlyWorkingAt.size"
                                          :height="80"
                                        ></v-img>
                                      </v-col>
                                    </v-row>
                                  </v-col>
                                  <v-divider
                                    vertical
                                    class="mx-4"
                                    v-if="!smAndDown"
                                  />
                                  <v-col cols="7">
                                    <p>Previously worked At:</p>
                                    <v-row
                                      justify="start"
                                      align="center"
                                      class="my-0"
                                    >
                                      <v-col
                                        :cols="
                                          $vuetify.display.mdAndDown ? 12 : 6
                                        "
                                        class="py-0"
                                        v-for="(
                                          pWAItem, i
                                        ) in previouslyWorkedAt"
                                        :key="i"
                                      >
                                        <v-img
                                          :src="pWAItem.url"
                                          :width="pWAItem.size"
                                          :height="80"
                                          contain
                                          :alt="pWAItem.imageAltText"
                                        ></v-img>
                                      </v-col>
                                    </v-row>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                            </v-card>
                          </v-col>
                          <v-col cols="auto" class="py-0">
                            <v-avatar size="70">
                              <v-img src="images/about/chain.svg" contain />
                            </v-avatar>
                          </v-col>
                          <v-col
                            cols="12"
                            data-step-no="4"
                            class="about__content__under-deck"
                            id="honors"
                            :class="{ 'px-0': $vuetify.display.mdAndDown }"
                          >
                            <v-card
                              class="px-10 pb-10 pt-4"
                              flat
                              :class="{ 'px-0': $vuetify.display.mdAndDown }"
                            >
                              <v-chip
                                class="mb-2 about__content__under-deck__chip text-uppercase"
                                size="large"
                                :class="{
                                  'text-body-1': $vuetify.display.smAndDown,
                                  'text-h6': $vuetify.display.mdAndUp,
                                }"
                              >
                                Accomplishments
                              </v-chip>
                              <v-container
                                fluid
                                :class="{ 'px-0': $vuetify.display.mdAndDown }"
                              >
                                <v-row dense justify="center">
                                  <v-col
                                    v-for="card in certifications"
                                    :key="card.title"
                                    :cols="$vuetify.display.mdAndUp ? 10 : 12"
                                  >
                                    <app-certificate-card
                                      :url="card.url"
                                      :title="card.title"
                                      :class="{
                                        'px-0': $vuetify.display.mdAndDown,
                                        'text-caption':
                                          $vuetify.display.smAndDown,
                                        'text-body': $vuetify.display.mdAndUp,
                                      }"
                                    />
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-card>
                          </v-col>
                          <!-- <v-col cols="auto" class="py-0">
                            <v-avatar size="70">
                              <v-img src="images/about/chain.svg" contain />
                            </v-avatar>
                          </v-col> -->
                          <!-- <v-col
                            cols="12"
                            data-step-no="5"
                            class="about__content__under-deck"
                            id="othercaps"
                            :class="{ 'px-0': $vuetify.display.mdAndDown }"
                          >
                            <v-card class="px-10 pb-10 pt-4" flat>
                              <v-chip
                                class="mb-2 about__content__under-deck__chip text-uppercase"
                                size="large"
                                :class="{
                                  'text-body-1': $vuetify.display.smAndDown,
                                  'text-h6': $vuetify.display.mdAndUp,
                                }"
                              >
                                Other caps
                              </v-chip>
                              <v-card-text
                                :class="{
                                  'text-caption': $vuetify.display.smAndDown,
                                  'text-body': $vuetify.display.mdAndUp,
                                }"
                              >
                                <v-row>
                                  <v-col cols="8" class="px-0">
                                    <p><b>Design / UX </b></p>
                                  </v-col>
                                </v-row>

                                <v-row justify="start" align="center">
                                  <v-col cols="12">
                                    <p>
                                      Although I lack formal training as a
                                      designer, I create wireframes, small and
                                      informal mockups using Figma and Paint.
                                      Additionally, I craft small landing pages
                                      and have contributed to the design of this
                                      website. You can view my design work on my
                                      Figma profile.
                                    </p>
                                  </v-col>
                                </v-row>

                                <v-row>
                                  <v-col cols="8" class="px-0">
                                    <p><b>Video Editing</b></p>
                                  </v-col>
                                </v-row>

                                <v-row justify="start" align="center">
                                  <v-col cols="12">
                                    <p>
                                      Though it's been a while since I've
                                      engaged in video editing, it remains a
                                      hobby of mine. I've previously worked as a
                                      video editor for various intercollegiate
                                      fests and small plays, predominantly
                                      utilizing Vegas Pro and Photoshop. Here
                                      are a few examples of my video editing
                                      work.
                                    </p>
                                  </v-col>
                                </v-row>
                              </v-card-text>
                            </v-card>
                          </v-col> <v-col cols="auto" class="py-0">
                            <v-avatar size="70">
                              <v-img src="images/about/chain.svg" contain />
                            </v-avatar>
                          </v-col> -->
                          <!-- <v-col
                            cols="12"
                            data-step-no="6"
                            class="about__content__under-deck"
                            id="recents"
                            :class="{ 'px-0': $vuetify.display.mdAndDown }"
                          >
                            <v-card class="px-10 pb-10 pt-4" flat>
                              <v-chip
                                class="mb-2 about__content__under-deck__chip text-uppercase"
                                size="large"
                                :class="{
                                  'text-body-1': $vuetify.display.smAndDown,
                                  'text-h6': $vuetify.display.mdAndUp,
                                }"
                              >
                                Recent learnings
                              </v-chip>
                              <v-container fluid>
                                <v-row justify="center">
                                  <v-col
                                    v-for="card in recents"
                                    :key="card.title"
                                    :cols="$vuetify.display.smAndDown ? 12 : 8"
                                    class="px-0"
                                  >
                                    <app-article-card
                                      :url="card.url"
                                      :title="card.title"
                                      :type="card.type"
                                      :class="{
                                        'text-caption':
                                          $vuetify.display.smAndDown,
                                        'text-body': $vuetify.display.mdAndUp,
                                      }"
                                    />
                                  </v-col>
                                </v-row>
                              </v-container>
                            </v-card>
                          </v-col> -->
                          <v-col cols="auto" class="py-0">
                            <v-avatar size="260">
                              <v-img
                                src="images/about/anchor-with-chain.svg"
                                contain
                              />
                            </v-avatar>
                          </v-col>
                        </app-scrollama>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12" align-self="center">
            <v-avatar size="340">
              <v-img src="images/about/submarine.svg" contain />
            </v-avatar>
          </v-col>
          <v-col cols="12">
            <app-footer hide-back-btn />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-container>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const currStep = ref(0);
const emit = defineEmits(["updateProgressbar"]);
const steps = ref(6);
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

    const light = new THREE.HemisphereLight("#423C58", "#423C58", 2);
    this.scene.add(light);

    const frontLight = new THREE.DirectionalLight("#423C58", 1);
    frontLight.position.set(3000, 300, 3000).normalize(); // just a direction. you can normalize
    this.scene.add(frontLight);

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
function setupAnimation(model) {
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
  var sectionDuration = 0.058;
  let tl = new gsap.timeline({
    onUpdate: scene.render,
    scrollTrigger: {
      trigger: ".content",
      scrub: true,
      start: () => `top bottom-=20`,
      end: "bottom bottom",
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
}

function loadModel() {
  gsap.registerPlugin(ScrollTrigger);
  const gltfLoader = new GLTFLoader();
  gltfLoader.load("model.gltf", (gltf) => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // eslint-disable-next-line
        console.log(child.name);
        let material = new THREE.MeshStandardMaterial();
        // material.color = child.material.color;
        if (child.name.startsWith("sail")) {
          material.color.set("#F2EFE1");
          //material.color.set(child.material.color);
        } else if (
          child.name.startsWith("ship_light_8angles_6") ||
          child.name.startsWith("ship_light_8angles_5")
        ) {
          material.color.set("#F2EFE1");
        } else if (
          child.name.startsWith("cannon") ||
          child.name.startsWith("steer")
        ) {
          // material.color.set('#F2EFE1');
          material.color.set("black");
          // material.wireframe = true;
        } else {
          material.color.set("#463F3A");
          //material.color.set(child.material.color)
        }

        //material.wireframe = true;
        child.material = material;
      }
    });
    gltf.scene.scale.set(12, 12, 12);
    setupAnimation(gltf.scene);
  });
}
const scrollDiv = ref(null);
function onScroll(e) {
  if (scrollDiv.value) {
    scrollDiv.value.$el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

onMounted(() => {
  loadModel();
});

onUnmounted(() => {
  console.log("unmounted");
  const canvases = document.querySelectorAll("canvas.webgl");
  // console.log("unmounted",canvas,canvas.parentNode)
  if (canvases.length > 0) {
    canvases.forEach((canvas) => {
      if (canvas && canvas.parentNode) {
        canvas.parentNode.removeChild(canvas);
      }
    });
  }
});

const onItemClickHandler = (targetId) => {
  const element = document.getElementById(targetId);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};
function onScrollToHandler() {
  onItemClickHandler("about");
}

const recents = ref([
  {
    title:
      "I typically steer clear of certification exams, but my perspective shifted slightly when Evan you  and  the Vue School offered one, This prompted me to reconsider, ultimately leading me to decide to take the exam.",
    url: "images/about/hackathon.svg",
    flex: 8,
    type: "blog",
  },
  {
    title:
      "DeltaX Hackday 2022: Teamed up with Ravi Nath Yadav, Asim Nath, Nikhil Chohan to develop a training app for DeltaX, winning the participants choice award.",
    url: "images/about/vuejs-developer-certificate.svg",
    flex: 8,
    type: "article",
  },
]);
const certifications = ref([
  {
    title:
      "I typically steer clear of certification exams, but my perspective shifted slightly when Evan you  and  the Vue School offered one, This prompted me to reconsider, ultimately leading me to decide to take the exam.",
    url: "images/about/vuejs-developer-certificate.svg",
    flex: 6,
  },
  {
    title:
      "DeltaX Hackday 2022: Teamed up with Ravi Nath Yadav, Asim Nath, Nikhil Chohan to develop a training app for DeltaX, winning the participants choice award.",
    url: "images/about/hackathon.svg",
    flex: 6,
  },
]);
const activelyUsing = ref([
  {
    url: "images/about/techstack/nuxt.svg",
    imageAltText: "Nuxt",
    id: "nuxt",
    size: 40,
  },
  {
    url: "images/about/techstack/vue.svg",
    imageAltText: "Vue.js",
    id: "vue",
    size: 40,
  },
  {
    url: "images/about/techstack/javascript.svg",
    imageAltText: "JavaScript",
    id: "javascript",
    size: 40,
  },
  {
    url: "images/about/techstack/css3.svg",
    imageAltText: "CSS3",
    id: "css3",
    size: 40,
  },
  {
    url: "images/about/techstack/sass.svg",
    imageAltText: "Sass",
    id: "sass",
    size: 40,
  },
  {
    url: "images/about/techstack/gulp.svg",
    imageAltText: "Gulp",
    id: "gulp",
    size: 40,
  },
  {
    url: "images/about/techstack/vuetify.svg",
    imageAltText: "Vuetify",
    id: "vuetify",
    size: 40,
  },
  {
    url: "images/about/techstack/tailwind.svg",
    imageAltText: "Tailwind CSS",
    id: "tailwind",
    size: 40,
  },
  {
    url: "images/about/techstack/python.svg",
    imageAltText: "Python",
    id: "python",
    size: 40,
  },
  {
    url: "images/about/techstack/flask.svg",
    imageAltText: "Flask",
    id: "flask",
    size: 40,
  },
  {
    url: "images/about/techstack/atlassian.svg",
    imageAltText: "Atlassian",
    id: "atlassian",
    size: 40,
  },
  {
    url: "images/about/techstack/vscode.svg",
    imageAltText: "Visual Studio Code",
    id: "vscode",
    size: 40,
  },
  {
    url: "images/about/techstack/django.svg",
    imageAltText: "Django",
    id: "django",
    size: 40,
  },
  {
    url: "images/about/techstack/postgres.svg",
    imageAltText: "PostgreSQL",
    id: "postgres",
    size: 40,
  },
  {
    url: "images/about/techstack/postman.svg",
    imageAltText: "Postman",
    id: "postman",
    size: 40,
  },
  {
    url: "images/about/techstack/insomnia.svg",
    imageAltText: "Insomnia",
    id: "insomnia",
    size: 40,
  },
  {
    url: "images/about/techstack/github.svg",
    imageAltText: "GitHub",
    id: "github",
    size: 40,
  },
  {
    url: "images/about/techstack/sublime.svg",
    imageAltText: "Sublime Text",
    id: "sublime",
    size: 40,
  },
  {
    url: "images/about/techstack/googleanalytics.svg",
    imageAltText: "Google Analytics",
    id: "google-analytics",
    size: 40,
  },
  {
    url: "images/about/techstack/bitbucket.svg",
    imageAltText: "Bitbucket",
    id: "bitbucket",
    size: 40,
  },
  {
    url: "images/about/techstack/docker.svg",
    imageAltText: "Docker",
    id: "docker",
    size: 40,
  },
  {
    url: "images/about/techstack/heruku.svg",
    imageAltText: "Heroku",
    id: "heroku",
    size: 40,
  },
  {
    url: "images/about/techstack/npm.svg",
    imageAltText: "npm",
    id: "npm",
    size: 40,
  },
]);

const previouslyWorkedWith = ref([
  {
    url: "images/about/techstack/fabricjs.svg",
    imageAltText: "Fabric.js",
    id: "fabricjs",
    size: 80,
  },
  {
    url: "images/about/techstack/android.svg",
    imageAltText: "Android",
    id: "android",
    size: 40,
  },
  {
    url: "images/about/techstack/php.svg",
    imageAltText: "PHP",
    id: "php",
    size: 40,
  },
  {
    url: "images/about/techstack/java.svg",
    imageAltText: "Java",
    id: "java",
    size: 40,
  },
  {
    url: "images/about/techstack/react.svg",
    imageAltText: "React",
    id: "react",
    size: 40,
  },
  {
    url: "images/about/techstack/node.svg",
    imageAltText: "Node.js",
    id: "node",
    size: 40,
  },
  {
    url: "images/about/techstack/html5.svg",
    imageAltText: "HTML5",
    id: "html5",
    size: 40,
  },
  {
    url: "images/about/techstack/ps.svg",
    imageAltText: "Photoshop",
    id: "photoshop",
    size: 40,
  },
  {
    url: "images/about/techstack/mongodb.svg",
    imageAltText: "MongoDB",
    id: "mongodb",
    size: 40,
  },
  {
    url: "images/about/techstack/dotnetcore.svg",
    imageAltText: ".NET Core",
    id: "dotnetcore",
    size: 40,
  },
]);

const currentlyWorkingAt = ref({
  url: "images/about/experience/njorda.svg",
  imageAltText: "Njorda",
  id: "njorda",
  size: 140,
});

const previouslyWorkedAt = ref([
  {
    url: "images/about/experience/deltax.svg",
    imageAltText: "Deltax",
    id: "deltax",
    size: 160,
  },
  {
    url: "images/about/experience/nitte-kshema.svg",
    imageAltText: "Nitte Kshema",
    id: "kshema",
    size: 280,
  },
]);

const menuItems = ref([
  {
    id: 1,
    url: "images/about/whoami.svg",
    imageAltText: "Who am i",
    buttonText: "Who am i",
    targetId: "whoami",
  },
  {
    id: 2,
    url: "images/about/tech-stack.svg",
    imageAltText: "Tech Stack",
    buttonText: "Tech Stack",
    targetId: "techstack",
  },
  {
    id: 3,
    url: "images/about/work.svg",
    imageAltText: "Work",
    buttonText: "Work",
    targetId: "work",
  },
  {
    id: 4,
    url: "images/about/honors.svg",
    imageAltText: "Honors",
    buttonText: "Honors",
    targetId: "honors",
  },
  {
    id: 5,
    url: "images/about/other-caps.svg",
    imageAltText: "Other Caps",
    buttonText: "Other Caps",
    targetId: "othercaps",
  },
  {
    id: 6,
    url: "images/about/recents.svg",
    imageAltText: "Recents",
    buttonText: "Recents",
    targetId: "recents",
  },
]);
function setCurrStep(element) {
  currStep.value = element.dataset.stepNo;
}
const progressValue = computed(() =>
  Math.round((Number(currStep.value) / steps.value) * 100)
);

const startColor = ref("#FFFFFF");
const endColor = ref("#423C58");
if (progressValue.value <= 10) {
  startColor.value = "#FFFFFF";
  endColor.value = "#FFFFFF";
} else if (progressValue.value == 100) {
  startColor.value = "#423C58";
  endColor.value = "#423C58";
}

const gradientBackground = computed(() => {
  const startColor = "#FFFFFF";
  const endColor = "#423C58";

  const interpolateColor = (start, end, progress) => {
    const r = Math.round((end.r - start.r) * (progress / 100)) + start.r;
    const g = Math.round((end.g - start.g) * (progress / 100)) + start.g;
    const b = Math.round((end.b - start.b) * (progress / 100)) + start.b;
    return `rgb(${r}, ${g}, ${b})`;
  };

  return progressValue.value <= 10 || progressValue.value == 100
    ? progressValue.value <= 10
      ? `linear-gradient(to bottom, ${startColor}, ${startColor})`
      : `linear-gradient(to bottom, ${endColor}, ${endColor})`
    : `linear-gradient(to bottom, ${startColor}, ${interpolateColor(
        hexToRgb(startColor),
        hexToRgb(endColor),
        progressValue.value
      )}, ${endColor})`;
});

const hexToRgb = (hex) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
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
.home {
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
  background-color: transparent;
  background-image: linear-gradient(
      0deg,
      transparent 9%,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(255, 255, 255, 0.2) 12%,
      transparent 13%,
      transparent 29%
    ),
    linear-gradient(
      90deg,
      transparent 9%,
      rgba(255, 255, 255, 0.2) 10%,
      rgba(255, 255, 255, 0.2) 12%,
      transparent 13%,
      transparent 29%
    );
  background-size: 50px 50px;
}

.content {
  position: relative;
  z-index: 1;
  .section {
    position: relative;
    width: calc(100vw - var(--pad2));
    height: 260vh;
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
  .about {
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll;
  }

  .about::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  .about {
    position: relative;
    max-height: 100vh;
    overflow: auto;
    z-index: 2;
    @media only screen and (max-width: 960px) {
       overflow-y: scroll !important;
       overflow-x: hidden;
       max-height: 100%;
    }
    &__menu {
      &__card {
        border-radius: 25px;
        position: sticky;
        top: 2rem;
      }
    }

    &__content {
      &__deck {
        border-radius: 4px 4px 50px 50px;
        width: 100%;
        &__shape-1-wrapper {
          display: flex;
          justify-content: space-between;
          &__shape-1 {
            flex: 1;
            height: 100px;
            background-color: #292627;
          }
        }
        &__shape-2-wrapper {
          display: flex;
          justify-content: space-between;
          &__shape-2 {
            flex: 1;
            margin-left: 1.3rem;
            margin-right: 1.3rem;
            height: 100px;
            background-color: #1d1a1b;
          }
        }
        &__shape-3-wrapper {
          display: flex;
          justify-content: space-between;
          &__shape-3 {
            flex: 1;
            height: 100px;
            background-color: #292627;
          }
        }
        &__shape-4-wrapper {
          display: flex;
          justify-content: space-between;
          margin-left: 0.6rem;
          margin-right: 0.6rem;
          &__shape-4 {
            flex: 1;
            height: 100px;
            background-color: #1d1a1b;
          }
        }
        &__shape-5-wrapper {
          display: flex;
          justify-content: space-between;
          margin-left: 4.4rem;
          margin-right: 4.4rem;
          &__shape-5 {
            flex: 1;
            height: 100px;
            background-color: #292627;
          }
        }
      }
      &__under-deck {
        border-radius: 50px;
        border: 6px solid #423c58;
        background: #fff;
        overflow: hidden;
        &__chip {
          border-radius: 12px;
          border: 3px solid #423c58;
          background: #000;
          color: #ffff;
          font-family: Inter;
          font-style: normal;
          font-weight: 700;
          line-height: 19px;
          text-transform: uppercase;
        }
      }
    }
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

.scrollable-elements {
  overflow-y: auto;
}

.mouse-move {
  position: absolute;
  max-width: 70px;
  cursor: pointer;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  animation: mouse-move 1.5s linear infinite;
}

@keyframes mouse-move {
  0%,
  50%,
  100% {
    transform: translateY(0);
  }

  12.5%,
  37.5% {
    transform: translateY(3px);
  }

  25% {
    transform: translateY(8px);
  }
}
.skewed-left {
  transform: skewX(20deg);
  margin-right: -30px;
}

.skewed-right {
  transform: skewX(-20deg);
  margin-left: -30px;
}
.skewed-left-v2 {
  transform: skewX(-10deg);
  margin-right: -20px;
}

.skewed-right-v2 {
  transform: skewX(10deg);
  margin-left: -20px;
}
.skewed-left-v3 {
  transform: skewX(40deg);
  margin-right: -43px;
}

.skewed-right-v3 {
  transform: skewX(-40deg);
  margin-left: -43px;
}
</style>
