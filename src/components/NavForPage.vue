<template>
    <q-toolbar>
        <q-toolbar-title class="text-blue"> {{ description }} </q-toolbar-title>
        
    </q-toolbar>
    <q-separator/>


</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
        data(){
            return{
                
            }
        },
        props: ['description']
})
</script>
