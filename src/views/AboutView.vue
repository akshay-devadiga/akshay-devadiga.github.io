<script>
import { VueFlow, Handle, Position } from '@vue-flow/core'
import { Background } from '@vue-flow/background'
import { Controls } from '@vue-flow/controls'
import { MiniMap } from '@vue-flow/minimap'

let defaultNodeStyle = {
  border: '1px solid #10b981',
  // background: '#ef467e',
  // color: 'white',
  borderRadius: '5px'
}

export default {
  components: { VueFlow, Background, Controls, MiniMap, Handle },
  data() {
    return {
      Position,
      show: false,
      test: [
        {
          id: '1',
          type: 'input',
          label: 'Experience',
          type: 'input',
          data: {
            backgroundColor: '#51b848'
          },
          position: { x: 250, y: 1400 },
          style: defaultNodeStyle
        },

        {
          id: '2',
          type: 'custom',
          label: 'KS Hegde Medical Academy',
          data: {
            category: 'Healthcare',
            backgroundColor: '#7a22b5',
            image: '/images/kshema.webp',
            year: '2017 - 2019',
            parentPosition: 'top'
          },
          parentNode: '5',
          position: { x: 100, y: 100 },
          style: { borderColor: '#7a22b5' }
        },
        { id: '3', label: 'Node 3', position: { x: 400, y: 100 } },
        { id: '4', label: 'Node 4', position: { x: 400, y: 200 } },
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e1-3', source: '1', target: '3' }
      ],
      elements: [
        {
          id: 'e1-2',
          source: '5',
          target: '1',
          animated: true
        },

        {
          id: 'e2-3',
          source: '5',
          target: '2',
          animated: true
        },
        {
          id: 'e2-4',
          source: '5',
          target: '3',
          animated: true
        },
        {
          id: '1',
          type: 'custom',
          label: 'KS Hegde Medical Academy',
          data: {
            category: 'Healthcare',
            backgroundColor: '#7a22b5',
            borderColor: '#7a22b5',
            image: '/images/kshema.webp',
            year: '2017 - 2019',
            skills: ['Reactjs', 'React-Native', 'Android', 'Php']
          },
          parentNode: '5',
          position: { x: -650, y: 100 },
          style: { borderColor: '#7a22b5' }
        },

        {
          id: '2',
          label: 'DeltaX',
          type: 'custom',
          data: {
            category: 'Digital Martketing Platform & Services',
            backgroundColor: '#51b848',
            borderColor: '#51b848',
            image: '/images/deltax.png',
            year: 'Aug 2019 - May 2022',
            skills: ['Fabricjs', 'Vuejs', 'Javascript', 'Vuetify', 'Dotnet'],
            experiences: [
              'Developed features for an interactive web-based photoshop like ad builder that allowed users to design and generate templates with for multiple ad creative formats. The editor is been used by designers to create thousands of ad templates, which were later hosted on adservers.',
              'Hello2'
            ]
          },
          parentNode: '5',
          position: { x: -200, y: 100 },
          style: { borderColor: '#51b848' }
        },
        {
          id: '3',
          label: 'Njorda',
          data: {
            category: 'Portfolio and Asset Management Company',
            backgroundColor: '#fc4832',
            borderColor: '#fc4832',
            image: '/images/njorda.svg',
            year: 'May 2022 - Present',
            skills: ['Nuxtjs', 'Vuejs', 'Javascript', 'Vuetify', 'Flask', 'Django']
          },
          parentNode: '5',
          type: 'custom',
          position: { x: 300, y: 100 },
          style: { borderColor: '#fc4832' }
        },
        {
          id: '5',
          label: 'Experience',
          type: 'input',

          data: {
            backgroundColor: '#51b848'
          },
          position: { x: 650, y: 50 },
          style: defaultNodeStyle
        }

        // {
        //   id: '6',
        //   label: 'Case Studies',
        //   type: 'input',
        //   data: {
        //     backgroundColor: '#51b848',
        //     type: 'side'
        //   },
        //   position: { x: 50, y: 50 },
        //   style: defaultNodeStyle
        // }
      ]
    }
  }
}
</script>
<template>
  <v-container class="pa-0 ma-0" fluid style="height: 100vh; width: 80vw"
    ><VueFlow
      v-model="elements"
      class="basicflow"
      :default-viewport="{ zoom: 0.8 }"
      :min-zoom="0.2"
      :max-zoom="4"
      :elevate-edges-on-select="true"
    >
      <template #node-custom="props">
        <Handle
          type="source"
          :position="Position.Top"
          :style="{ backgroundColor: '#00000', center: '10px' }"
        />

        <v-card class="pa-2" :style="{ border: `1px solid ${props.data.backgroundColor}` }">
          <v-container fluid>
            <v-row align="center" justify="space-between">
              <v-col cols="8" class="pa-0">
                <v-list class="pa-0">
                  <v-list-item class="pa-0">
                    <p class="font-weight-bold">
                      {{ props.label }}
                    </p>
                    <p class="font-weight-light;">
                      {{ props.data.category }}
                    </p>
                    <p>
                      {{ props.data.year }}
                    </p>
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="4" class="pa-0">
                <v-list class="pa-0">
                  <v-list-item class="pa-0 mr-4">
                    <template v-slot:append>
                      <v-avatar size="80" rounded="0">
                        <v-img contain :src="props.data.image"></v-img>
                      </v-avatar>
                    </template>
                  </v-list-item> </v-list
              ></v-col>
            </v-row>
            <v-row align="center" justify="space-between">
              <v-col cols="auto" class="pl-0"> Stack: </v-col>
              <v-col cols="auto" class="px-0">
                <v-chip
                  small
                  class="mx-1"
                  :class="{ 'mr-1 ml-0': i === 0 }"
                  :color="props.data.borderColor"
                  v-for="(skill, i) in props.data.skills"
                  :key="skill"
                >
                  {{ skill }}
                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>

      <Controls />
      <Background pattern-color="'#62ADF4'" />
    </VueFlow>
  </v-container>
</template>
<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';

/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';
</style>
