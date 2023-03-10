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
      elements: [
        {
          id: 'e1-2',
          source: '5',
          target: '1'
        },

        {
          id: 'e2-3',
          source: '5',
          target: '2'
        },
        {
          id: 'e2-4',
          source: '5',
          target: '3'
        },
        {
          id: '1',
          type: 'custom',
          targetPosition: Position.Right,
          label: 'KS Hegde Medical Academy',
          data: {
            category: 'Healthcare',
            backgroundColor: '#7a22b5',
            image: '/images/kshema.webp',
            year: '2017 - 2019'
          },
          parentNode: '5',
          position: { x: 0, y: 180 },
          sourcePosition: Position.Top,
          style: { borderColor: '#7a22b5' }
        },

        {
          id: '2',
          label: 'DeltaX',
          type: 'custom',
          data: {
            category: 'Digital Martketing Platform & Services',
            backgroundColor: '#51b848',
            image: '/images/deltax.png',
            year: 'Aug 2019 - May 2022'
          },
          parentNode: '5',
          position: { x: 250, y: 200 },
          style: { borderColor: '#51b848' }
        },
        {
          id: '3',
          label: 'Njorda',
          data: {
            category: 'Portfolio and Asset Management Company',
            backgroundColor: '#fc4832',
            image: '/images/njorda.svg',
            year: 'May 2022 - Present'
          },
          parentNode: '5',
          type: 'custom',
          position: { x: 40, y: 360 },
          style: { borderColor: '#fc4832' }
        },
        //      {
        //   id: '4',
        //   label: 'Associate Product Engineer',
        //   type: 'custom',
        //   data: {
        //     backgroundColor: '#51b848',
        //   },
        //   position: { x: 30, y: 400 },
        //     style: { backgroundColor: '#51b848' }
        // },
        {
          id: '5',
          label: 'Experience',
          type: 'input',
          
          data: {
            backgroundColor: '#51b848'
          },
          position: { x: 150, y: 100 },
          style: defaultNodeStyle
        },
        {
          id: 'e2-5',
          source: '5',
          target: '1'
        }
      ]
    }
  }
}
</script>
<template>
    <VueFlow
      v-model="elements"
      :default-zoom="0.2"
      :default-edge-options="{ type: 'smoothstep' }"
      :default-viewport="{ zoom: 0.5 }"
      :elevate-edges-on-select="true"
      :fit-view-on-init="true"
      style="height:100vh !important"
    >
      <template #node-custom="props">
        <Handle
          type="source"
          :position="Position.Right"
          :style="{ backgroundColor: '#00000', center: '10px' }"
        />

        <v-card max-width="250" class="pa-0" :style="{'border':`1px solid ${props.data.backgroundColor}`}">
          <v-container fluid>
            <v-row align="center" justify="space-between">
              <v-col cols="8" class="pa-0">
                <v-list class="pa-0">
                  <v-list-item class="pa-0">
                    <span class=" font-weight-bold" style="word-break:break-word; font-size:7px"> {{ props.label }}</span>
                    <br />
                    <span class="font-weight-light;" style="word-break:break-all; font-size:5px;">
                      {{ props.data.category }}</span
                    >
                  </v-list-item>
                </v-list>
              </v-col>
              <v-col cols="4" class="pa-0 ">
                <v-list class="pa-0">
                  <v-list-item class="pa-0 mr-4">
                    <template v-slot:append>
                      <v-avatar size="40" rounded="0">
                        <v-img contain :src="props.data.image"></v-img>
                      </v-avatar>
                    </template>
                  </v-list-item> </v-list
              ></v-col>
            </v-row>
          </v-container>
        </v-card>
      </template>

      <Controls />
      <Background pattern-color="'#0000'" gap="25" />
    </VueFlow>
</template>
<style>
/* these are necessary styles for vue flow */
@import '@vue-flow/core/dist/style.css';

/* this contains the default theme, these are optional styles */
@import '@vue-flow/core/dist/theme-default.css';
</style>
