<template>
    <q-item clickable v-ripple     tag="a"
    target="_blank"
    :href="link">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            R
          </q-avatar>
        </q-item-section>

        <q-item-section>{{ title }}</q-item-section>
      </q-item>
      <q-separator />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'CompDraw',
    props:{
        title: {
        type: String,
        required: true
        },
        link: {
        type: String,
        default: '#'
        }
    }
})
</script>
