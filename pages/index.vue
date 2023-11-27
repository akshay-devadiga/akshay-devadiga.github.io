<template>
  <v-container
    fluid
    class="pa-0 about"
    style="max-height: 80vh; overflow: auto"
  >
  <v-row justify="center">
  <v-col cols="11"> 
    <v-row justify="center">
      <v-col cols="3" class="about__menu">
        <v-card class="mx-auto about__menu__card py-10">
          <!-- TODO: Support gradient in v2 :style="{ background: gradientBackground }" -->
          <v-row justify="center">
            <v-col cols="auto">
              <v-avatar size="160">
                <v-img src="images/about/menu-illustration.svg" contain />
              </v-avatar>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="10">
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
              />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="9" class="about__content">
        <v-card class="pa-0" flat color="transparent">
          <v-container>
            <v-row align="center" justify="center">
              <v-col cols="10">
                <app-scrollama
                  :debug="false"
                  @step-enter="({ element }) => setCurrStep(element)"
                  @step-progress="({ element }) => handleStepProgress(element)"
                >
                  <v-col cols="auto" class="py-0">
                    <v-avatar
                      size="70"
                      rounded="0"
                      style="position: relative; z-index: 2 !important"
                    >
                      <v-img
                        src="images/about/shakle.svg"
                        contain
                        style="
                          position: absolute;
                          bottom: -9px;
                          z-index: 12 !important;
                        "
                      />
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="12"
                    class="about__content__deck"
                    style="position: relative; z-index: 2"
                  >
                    <v-card class="pa-0 text-center" flat>
                      <h1>Quality is not an act it is a habit - Aristotle</h1>
                    </v-card>
                  </v-col>
                  <v-col cols="auto" class="py-0">
                    <v-avatar size="70">
                      <v-img src="images/about/chain.svg" contain />
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="12"
                    data-step-no="1"
                    class="about__content__under-deck"
                  >
                    <v-card class="pa-10" flat>
                      <p>Hey! I am Akshay</p>
                      <br />

                      <p>Frontend engineer based in Bengaluru, India.</p>
                      <p>
                        I specialize in developing user-centric, accessible and
                        performant interfaces. My primary focus is on writing
                        clean, maintainable code with a balance of considering
                        time constraints for efficient delivery.I am passionate
                        about collaborating with talented individuals to build
                        products that make a meaningful impact. It brings me joy
                        to learn and grow through the process.
                      </p>
                      <br />
                      <p>
                        Although I have extensive frontend experience spanned
                        across years, I also adeptly pivot to backend tasks when
                        necessary. Additionally, I engage in creating informal
                        mockups as needed.
                      </p>
                      <p>I write here once in a while.</p>
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
                  >
                    <v-card class="px-10 pb-10 pt-4" flat>
                      <v-chip
                        class="mb-2 about__content__under-deck__chip"
                        size="large"
                      >
                        Tech Stack
                      </v-chip>
                      <v-card-text>
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
                  >
                    <v-card class="px-10 pb-10 pt-4" flat>
                      <v-chip
                        class="mb-2 about__content__under-deck__chip"
                        size="large"
                      >
                        Work
                      </v-chip>
                      <v-card-text>
                        <v-row justify="start" align="center" class="my-0">
                          <v-col cols="auto">
                            <p>Currently working at:</p>
                            <v-row justify="start" align="center" class="my-0">
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
                          <v-divider vertical class="mx-4" v-if="!smAndDown" />
                          <v-col cols="5">
                            <p>Previously worked At:</p>
                            <v-row justify="start" align="center" class="my-0">
                              <v-col
                                cols="6"
                                class="py-0"
                                v-for="(pWAItem, i) in previouslyWorkedAt"
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
                  >
                    <v-card class="px-10 pb-10 pt-4" flat>
                      <v-chip
                        class="mb-2 about__content__under-deck__chip"
                        size="large"
                      >
                        Accomplishments
                      </v-chip>
                      <v-container fluid>
                        <v-row dense>
                          <v-col
                            v-for="card in certifications"
                            :key="card.title"
                            :cols="card.flex"
                          >
                            <app-certificate-card :url="card.url" :title="card.title"/>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-col>
                  <v-col cols="auto" class="py-0">
                    <v-avatar size="70">
                      <v-img src="images/about/chain.svg" contain />
                    </v-avatar>
                  </v-col>
                  <v-col
                    cols="12"
                    data-step-no="5"
                    class="about__content__under-deck"
                  >
                    <v-card class="px-10 pb-10 pt-4" flat>
                      <v-chip
                        class="mb-2 about__content__under-deck__chip"
                        size="large"
                      >
                        Other caps
                      </v-chip>
                      <v-card-text>
                        <v-row>
                          <v-col cols="8" class="px-0">
                            <p><b>Design / UX </b></p>
                          </v-col>
                        </v-row>

                        <v-row justify="start" align="center">
                          <v-col cols="12">
                            <p>
                              Although I lack formal training as a designer, I
                              create wireframes, small and informal mockups
                              using Figma and Paint. Additionally, I craft small
                              landing pages and have contributed to the design
                              of this website. You can view my design work on my
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
                              Though it's been a while since I've engaged in
                              video editing, it remains a hobby of mine. I've
                              previously worked as a video editor for various
                              intercollegiate fests and small plays,
                              predominantly utilizing Vegas Pro and Photoshop.
                              Here are a few examples of my video editing work.
                            </p>
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
                    data-step-no="6"
                    class="about__content__under-deck"
                  >
                    <v-card class="px-10 pb-10 pt-4" flat>
                      <v-chip
                        class="mb-2 about__content__under-deck__chip"
                        size="large"
                      >
                        And here are some of my recent learnings
                      </v-chip>
                         <v-container fluid>
                        <v-row justify="center">
                          <v-col
                            v-for="card in recents"
                            :key="card.title"
                            :cols="card.flex"
                            class="px-0"
                          >
                            <app-article-card :url="card.url" :title="card.title" :type="card.type"/>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card>
                  </v-col>
                  <v-col cols="auto" class="py-0">
                    <v-avatar size="260">
                      <v-img src="images/about/anchor-with-chain.svg" contain />
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
        <app-footer />
      </v-col>
     </v-row>
  </v-container>
</template>
<script setup>
import { ref, computed } from "vue";
import { useDisplay } from "vuetify";
const { smAndDown } = useDisplay();
const currStep = ref(0);
const emit = defineEmits(["updateProgressbar"]);
const steps = ref(6);

const recents = ref([
  {
    title:
      "I typically steer clear of certification exams, but my perspective shifted slightly when Evan you  and  the Vue School offered one, This prompted me to reconsider, ultimately leading me to decide to take the exam.",
    url: "images/about/vuejs-developer-certificate.svg",
    flex: 8,
    type:'blog'
  },
  {
    title:
      "DeltaX Hackday 2022: Teamed up with Ravi Nath Yadav, Asim Nath, Nikhil Chohan to develop a training app for DeltaX, winning the participants choice award.",
    url: "images/about/vuejs-developer-certificate.svg",
    flex: 8,
    type:'article'
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
    url: "images/about/vuejs-developer-certificate.svg",
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
    size: 200,
  },
]);

const menuItems = ref([
  {
    id: 1,
    url: "images/about/whoami.svg",
    imageAltText: "Who am i",
    buttonText: "Who am i",
  },
  {
    id: 2,
    url: "images/about/tech-stack.svg",
    imageAltText: "Tech Stack",
    buttonText: "Tech Stack",
  },
  {
    id: 3,
    url: "images/about/work.svg",
    imageAltText: "Work",
    buttonText: "Work",
  },
  {
    id: 4,
    url: "images/about/honors.svg",
    imageAltText: "Honors",
    buttonText: "Honors",
  },
  {
    id: 5,
    url: "images/about/other-caps.svg",
    imageAltText: "Other Caps",
    buttonText: "Other Caps",
  },
  {
    id: 6,
    url: "images/about/recents.svg",
    imageAltText: "Recents",
    buttonText: "Recents",
  },
]);
function setCurrStep(element) {
  currStep.value = element.dataset.stepNo;
}
const progressValue = computed(() =>
  Math.round((Number(currStep.value) / steps.value) * 100)
);

const startColor = ref("#FFFFFF");
const endColor = ref("#91D5FF");
if (progressValue.value <= 10) {
  startColor.value = "#FFFFFF";
  endColor.value = "#FFFFFF";
} else if (progressValue.value == 100) {
  startColor.value = "#91D5FF";
  endColor.value = "#91D5FF";
}

const gradientBackground = computed(() => {
  const startColor = "#FFFFFF";
  const endColor = "#91D5FF";

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
.about {
  &__menu {
    &__card {
      position: sticky;
      top: 2rem;
    }
  }

  &__content {
    &__deck {
      border-radius: 4px 4px 50px 50px;
      border: 6px solid #91d5ff;
      background: #fff;
    }
    &__under-deck {
      border-radius: 50px;
      border: 6px solid #91d5ff;
      background: #fff;
      &__chip {
        border-radius: 12px;
        border: 3px solid #91d5ff;
        background: #000;
        color: #ffff;
        font-family: Inter;
        font-size: 17px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        text-transform: uppercase;
      }
    }
  }
}
.scrollable-elements {
  overflow-y: auto;
}
</style>
