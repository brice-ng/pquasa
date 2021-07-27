<template>
    <NavForPage v-bind:description="description"></NavForPage>
    <div class="bg-grey-1">
        <div class="text-subtitle2 text-grey q-py-lg q-pl-lg">Rapports financiers</div>
        <div class="q-pa-md row items-start q-gutter-md">

            <q-btn to="/rapports/navigrapport" flat bordered class="q-pa-md bg-white text-grey-9" style="max-width: 350px; border: solid 1px rgb(218, 211, 211);" align="left" no-caps>
                    <div class="text-h6 text-weight-bold" align="left">Solde</div>
                    <div class="text-subtitle2 q-my-lg" align="left" style="max-width: max;" label="" >Rapprochez vous de votre compte Gajelabs-Pay et 
                    telecharger votre historique de transaction par catégories.</div>
            </q-btn>

            <q-btn to="/rapports/navigrapports" flat bordered class="q-pa-md bg-white text-grey-9" style="max-width: 350px; border: solid 1px rgb(218, 211, 211); " align="left" no-caps>
                    <div class="text-h6 text-weight-bold" align="left">Rapprochement de virements</div>
                    <div class="text-subtitle2 q-my-lg" align="left" style="max-width: max;" label="" >Transactions virées sur votre compte banquaire
                    avec les détails pour chaque catégories.</div>
            </q-btn>

        </div>
              <q-toolbar row class="text-subtitle2 q-gutter-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                </svg>
                <div>Ces rapports regroupent les transactions de différentes manières afin de faciliter différents types de rapprochements.</div>
              </q-toolbar>
        </div>


    
</template>

<script>
import { defineComponent } from 'vue'
import NavForPage from '../components/NavForPage.vue'


export default defineComponent({
    name: "Rapports",
    components : {
        NavForPage
    },
    data(){
        return{
            description: 'Informations sur vos différentes transactions',  
        }
    },
    methods: {
        changename : function(){
            this.$emit('changename', 'virements')
        }
    }
})
</script>