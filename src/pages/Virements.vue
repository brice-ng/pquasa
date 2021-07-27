<template>
    <NavForPage v-bind:description="description"></NavForPage>
</template>

<script>
import { defineComponent } from 'vue'
import NavForPage from '../components/NavForPage.vue'

export default defineComponent({
    name: "Virements",
    components : {
        NavForPage
    },
    data(){
        return{
            description: 'Effectuer une action a partir du compte'
        }
    }
})
</script>