<template>
<q-page>
    <NavForPage v-bind:description="description"></NavForPage>
    <div class="bg-grey-1">
    <div class="compte text-subtitle2 text-grey q-py-lg q-pl-lg">Retirer de l'argent</div>
    <div style="max-width: max" class=" q-gutter-lg row q-pa-lg">
    <div>
        <WithDraw></WithDraw>
        <q-btn :dense="dense" class="text-grey-8 q-mt-md" label="Filtrer" icon="filter"/>
    </div>
        <CardInfo></CardInfo>
        <HistoryWithDraw></HistoryWithDraw>

    </div>
    </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import NavForPage from '../components/NavForPage.vue'
import HistoryWithDraw from '../components/Paiement/HistoryWithDraw.vue'
import WithDraw from '../components/Paiement/WithDraw.vue'
import CardInfo from '../components/Paiement/CardInfo.vue'

export default defineComponent({
    name: "Retrait",
    components : {
        NavForPage, HistoryWithDraw, WithDraw, CardInfo
    },
    data(){
        return{
            description: 'Effectuer une action a partir du compte',
            dense: true,
            users: null
            
        }
    }
})
</script>