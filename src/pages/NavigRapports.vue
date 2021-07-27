<template>
    <NavForPage v-bind:description="description"></NavForPage>
<div class="bg-grey-1" >
    <div class="q-gutter-y-md bg-grey-1" style="max-width: max">
      <q-tabs
        v-model="tab"
        inline-label
        :breakpoint="0"
        align="justify"
        class="bg-white text-blue"
      >
        <q-tab name="solde" label="Solde"/>
        <q-tab name="virements" label="Virements" />
      </q-tabs>
        <q-tab-panels v-model="tab" style="max-width: 1000px">
          <q-tab-panel name="solde" style="max-width: 1000px" align="center" class="bg-grey-1">
              <q-card  elevated style="max-width: 620px" >
                  <q-card-section >
                      <div class="text-subtitle2 q-pb-md text-grey"  align="center" color="grey">Votre profil</div>
                      <q-separator/>
                        <div class="q-pa-md">
                            
                        </div>
                  </q-card-section>

                <q-card-actions class="q-pb-lg q-pl-lg">
                  <q-btn unelevated color="secondary" label="Enregistrer les modifications" icon="save"/>
                </q-card-actions>
              </q-card>
          </q-tab-panel>

          <q-tab-panel name="virements" v-on:changename="changementname($event)" style="max-width: 1000px" class="bg-grey-1">
            <div class="compte text-subtitle2 text-grey q-pb-lg" style="max-width: 1000px">Mes sous portes monnaies</div>
                <div class="q-pa-md row items-start q-gutter-md" style="max-width: 1000px">
                  
                </div>
          </q-tab-panel>
        </q-tab-panels>

    </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import NavForPage from '../components/NavForPage.vue'
import { ref } from 'vue'

export default defineComponent({
    name: "NavigRapports",
    components : {
        NavForPage
    },
    data(){
        return{
            description: 'Informations sur vos différentes transactions',
            tab: ref('virements'),
            
        }
    },
    methods: {
      changementname : function(nvname){
        this.tab = vnname;

      }
    }
})
</script>