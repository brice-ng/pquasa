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
        <q-tab name="profil" label="Profil"/>
        <q-tab name="compte" label="Gerer les sous portes monnaies" />
        <q-tab name="preferences" label="Preferences" />
      </q-tabs>
        <q-tab-panels v-model="tab" style="max-width: 1000px">
          <q-tab-panel name="profil" style="max-width: 1000px" align="center" class="bg-grey-1">
              <q-card  elevated style="max-width: 620px" >
                  <q-card-section >
                      <div class="text-subtitle2 q-pb-md text-grey"  align="center" color="grey">Votre profil</div>
                      <q-separator/>
                        <div class="q-pa-md">
                            <div class="q-gutter-md row items-start text-subtitle1">
                              <q-text-label class="text-weight-medium q-pt-xs text-grey-8">Full Name </q-text-label>
                              <q-input class="bg-white" v-model="nom" filled type="name" :dense="dense" />
                              <q-input v-model="prenom" filled type="name" :dense="dense" />
                            </div>
                            <div class="q-gutter-md row items-start q-mt-sm q-ml-md text-subtitle1">
                              <q-text-label class="text-weight-medium q-pt-xs text-grey-8">Email  </q-text-label>
                              <q-input v-model="email" filled type="email" suffix="@gmail.com" :dense="dense" />
                            </div>
                            <div class="row items-start q-mt-xs q-ml-lg q-mt-lg text-subtitle1">
                              <q-text-label class="text-weight-medium q-pt-xs text-grey-8">Phone </q-text-label>
                              <q-select class="bg-grey-2 q-ml-md"
                              :dense="dense"
                              v-model="id"
                              :options="options" 
                              outlined
                              >
                              </q-select>
                              <q-input v-model="phone" type="phone" :dense="dense" outlined />
                            </div>
                            <div class="q-gutter-md row items-start q-mt-sm text-subtitle1">
                              <q-text-label class="text-weight-medium q-pt-xs text-grey-8">Password </q-text-label>
                              <q-input v-model="password" filled type="password" :dense="dense" />
                            </div>
                        </div>
                  </q-card-section>

                <q-card-actions class="q-pb-lg q-pl-lg">
                  <q-btn unelevated color="secondary" no-caps label="Enregistrer les modifications" icon="save"/>
                </q-card-actions>
              </q-card>
          </q-tab-panel>

          <q-tab-panel name="compte" style="max-width: 1000px" class="bg-grey-1">
            <div class="compte text-subtitle2 text-grey q-pb-lg" style="max-width: 1000px">Mes sous portes monnaies</div>
                <div class="q-pa-md row items-start q-gutter-md" style="max-width: 1000px">
                  
                  <q-card class="my-card" style="width: 300px">
                    <q-card-section class="bg-primary text-white max">
                      <div class="text-h6">Compte x</div>
                      <div class="text-subtitle2">350€</div>
                    </q-card-section>
                    <q-btn flat class="text-grey-8" style="width: 300px"
                    :loading="loading[0]" color="secondary" @click="simulateProgress(0)"
                    >
                    Gerer
                    </q-btn>
                  </q-card>

                  <q-card class="my-card" style="width: 300px">
                    <q-card-section class="bg-purple text-white">
                      <div class="text-h6">Compte y</div>
                      <div class="text-subtitle2">17,800 Fcfa</div>
                    </q-card-section>
                    <q-btn flat class="text-grey-8" style="width: 300px"
                    :loading="loading[1]" color="secondary" @click="simulateProgress(1)"
                    >
                    Gerer
                    </q-btn>
                  </q-card>

                  <q-card class="my-card" style="width: 300px">
                    <q-card-section class="bg-teal text-white">
                      <div class="text-h6">Compte z</div>
                      <div class="text-subtitle2">$180</div>
                    </q-card-section>
                    <q-btn flat class="text-grey-8" style="width: 300px"
                     :loading="loading[2]" color="secondary" @click="simulateProgress(2)"
                     >
                     Gerer
                     </q-btn>
                  </q-card>
                </div>
                <q-btn no-caps :dense="dense" color="primary" label="Ajouter un sous porte monnaie" icon="add" class="q-py-sm q-my-lg" @click="dialog = true"/>
                <q-dialog v-model="dialog"><AddAccount/></q-dialog>
          </q-tab-panel>

          <q-tab-panel name="preferences" class="bg-grey-1">
            <q-toolbar>
              <q-toolbar-title>
                <div class="text-subtitle2 text-grey">Mes préferences</div>
              </q-toolbar-title>
            <q-card-section>
                <q-btn no-caps unelevated color="secondary" label="Enregistrer les modifications" icon="save"/>
            </q-card-section>
            </q-toolbar>
            
              <Preferences/>

          </q-tab-panel>
        </q-tab-panels>

    </div>
  </div>
  
</template>

<script>
import { defineComponent } from 'vue'
import NavForPage from '../components/NavForPage.vue'
import { ref } from 'vue'
import AddAccount from '../components/AddAccount.vue'
import Preferences from '../components/Parametres/Preferences.vue'

export default defineComponent({
    name: "Parametres",
    components : {
        NavForPage, AddAccount, Preferences
    },
  setup () {

    const inputRef = ref(null)
    const loading = ref([
      false,
      false,
      false,
    ])
    const progress = ref(false)

    function simulateProgress (number) {
      // we set loading state
      loading.value[ number ] = true

      // simulate a delay
      setTimeout(() => {
        // we're done, we reset loading state
        loading.value[ number ]= false
      }, 3000)
    }

        return{
            left: ref(true),
            loading,
            progress,
            simulateProgress,
            dense: true,
            dialog: ref(false),
            options: [{
            label: '+33'
            },
            {
            label:'+226'
            
            },
            {
            label:'+237'
            
            }],
            optdevise: [{
            label: 'Euro'
            },
            {
            label:'Dollars'
            
            },
            {
            label:'XAF'
            }],

            check: [{
            label: 'Par carte'
            },
            {
            label:'Virements'
            },
            {
            label:'Bank'   
            }],

            devise: ref('Euro'),
            id: ref('+237'),
            email: ref('yvansofati11'),
            nom: ref('SAKE'),
            prenom: ref('yvans'),
            password: ref('password'),
            phone: ref('656390961'),
            description: 'Paramètres du compte',
            tab: ref('profil'),
            model: ref(''),
            inputRef,
            reset () {
        inputRef.value.resetValidation()
            }
        }

    }
})

</script>
