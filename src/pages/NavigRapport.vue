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
          <q-tab-panel name="solde" style="max-width: 1000px" class="bg-grey-1">
            <div class="text-subtitle2">Récapitule les modifications apportées à votre solde Gajelabs pay pour la période sélectionnée (8 juil.–21 juil.), en fonction de la 
            date de la modification du solde. Cela vous permet de visualiser les variations de votre solde Gajelabs pay.
            </div>
            <q-btn color="primary" class="q-mt-lg" icon="print" :dense="dense" no-caps>Imprimer</q-btn>

              <q-card flat bordered class="q-mt-lg" style="max-width: max" >
                  <q-card-section >
                    <div class="text-subtitle2 q-pb-md text-grey" color="grey">Résumé du solde</div>
                    <q-toolbar class="q-gutter-md">
                        <div class="text-subtitle2" style="width: 700px;">Affiche le solde initial et final de votre compte Stripe. Le solde initial est la somme de votre solde disponible et de votre
                          solde en attente. Les modifications apportées à votre solde sont le résultat de votre activité (paiements, remboursements,
                          transferts, etc.) et des virements vers votre compte bancaire (agrégés ici et détaillés dans les rapports ci-dessous).
                        </div>
                      <q-btn :dense="dense" color="primary" label="Telecharger" icon="download" no-caps/>
                    </q-toolbar>
                  </q-card-section>

                  <q-separator/>

                  <q-markup-table>
                    <tbody>
                      <tr>
                        <td class="text-left">Solde initial</td>
                        <td class="text-right">0,00$</td>
                      </tr>
                      <tr>
                        <td class="text-left">Modification du solde net selon l'activité</td>
                        <td class="text-right">0,00$</td>
                      </tr>
                      <tr>
                        <td class="text-left">Total des virements</td>
                        <td class="text-right">0,00$</td>
                      </tr>
                      <tr>
                        <td class="text-left">Solde final</td>
                        <td class="text-right">0,00$</td>
                      </tr>
                    </tbody>
                  </q-markup-table>
              </q-card>

                <q-card flat bordered class="q-mt-lg" style="max-width: max" >
                  <q-card-section >
                    <div class="text-subtitle2 q-pb-md text-grey" color="grey">Modification du solde selon l'activité</div>
                    <q-toolbar class="q-gutter-md">
                        <div class="text-subtitle2" style="width: 700px;">Fournit des informations détaillées sur
                           la ligne Modification du solde selon l'activité du rapport Récapitulatif du solde ci-dessus. Cela inclut les 
                           modifications apportées à votre solde Stripe suite à votre activité (paiements, remboursements, transferts, etc.)
                            à l'exception des virements, ainsi que les téléchargements par catégories.
                        </div>
                      <q-btn :dense="dense" color="primary" label="Telecharger" icon="download" no-caps/>
                    </q-toolbar>
                  </q-card-section>

                  <q-separator/>

                  <q-markup-table>
                    <tbody>
                      <tr>
                        <td class="text-right">Paiement</td>
                        <td class="text-left">Total</td>
                        <td class="text-right">0</td>
                        <td class="text-right"></td>
                      </tr>
                      <tr>
                        <td class="text-right">Paiement</td>
                        <td class="text-left">Montrant brut</td>
                        <td class="text-right"></td>
                        <td class="text-right">0,00$</td>
                      </tr>
                      <tr>
                        <td class="text-right">Remboursement</td>
                        <td class="text-left"> Total</td>
                        <td class="text-right"></td>
                        <td class="text-right">0,00$</td>
                      </tr>
                      <tr>
                        <td class="text-right">.</td>
                        <td class="text-left">Montrant brut</td>

                        <td class="text-right">0,00$</td>
                      </tr>
                      <tr>
                        <td class="text-left">Modification du solde selon l'activité</td>
                        <td class="text-right">0</td>
                        <td class="text-right">0,00$</td>
                      </tr>
                    </tbody>
                  </q-markup-table>
              </q-card>
          </q-tab-panel>

          <q-tab-panel name="virements" >
            
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
    name: "NavigRapport",
    components : {
        NavForPage
    },
    data(){
        return{
            description: 'Informations sur vos différentes transactions',
            tab: ref('solde'),
            dense: true
            
        }
    },
    methods: {
      changementname : function(nvname){
        this.tab = vnname;

      }
    }
})
</script>