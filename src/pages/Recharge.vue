<template>
<q-page>
    <NavForPage v-bind:description="description"></NavForPage>
    <div class="bg-grey-1">
    <div class="compte text-subtitle2 text-grey q-py-lg q-pl-lg">Recharger votre compte</div>
    <div style="max-width: max" class=" q-gutter-lg row q-pa-lg">
    <div>
        <ReloadAccount ></ReloadAccount>
        <q-btn :dense="dense" class="text-grey-8 q-mt-md" label="Filtrer" icon="filter"/>
    </div>

    <CardInfo></CardInfo>
    <HistoryList></HistoryList>

    </div>

    </div>
    </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import NavForPage from '../components/NavForPage.vue'
import HistoryList from '../components/Paiement/HistoryList.vue'
import ReloadAccount from '../components/Paiement/ReloadAccount.vue'
import CardInfo from '../components/Paiement/CardInfo.vue'

export default defineComponent({
    name: "Recharge",
    components : {
        NavForPage, HistoryList, ReloadAccount, CardInfo
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