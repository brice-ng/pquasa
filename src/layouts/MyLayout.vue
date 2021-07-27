<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->      
      <q-item-label header bordered class="text-grey-8"> Tableau </q-item-label>
        <CompDraw
          v-for="link in compDraws"
          :key="link.title"
          v-bind="link"
        />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script>
import CompDraw from 'components/CompDraw.vue'

const linksList = [
  {
    title: 'Docs',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    link: 'https://quasar.dev'
  },
  {
    title: 'Discord Chat Channel',
    link: 'https://quasar.dev'
  },
  {
    title: 'Forum',
    link: 'https://quasar.dev'
  }
];


import { defineComponent, ref } from 'vue'

export default {
  name: 'MyLayout',
  components: {
    CompDraw
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>