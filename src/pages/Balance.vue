<template>
  <q-page>

    <q-toolbar>
      <q-toolbar-title class="text-blue q-ml-lg" >
      Aperçu financier
      </q-toolbar-title>
      <q-btn no-caps  unelevated color="primary" label="Ajouter un compte" icon="add" class="q-mr-sm" @click="dialog = true"/>
        <q-dialog v-model="dialog"><AddAccount/></q-dialog>
      <q-btn no-caps unelevated color="secondary" label="Effectuer un paiement" icon="money" />

    </q-toolbar>

    <q-separator/>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <q-card-section class="bg-primary text-white">
        <div class="text-h6">Solde total</div>
        <div class="text-subtitle2">$350</div>
      </q-card-section>
      <q-btn
      flat class="text-grey-8" 
      style="width: 300px"
      color="secondary"
      >
      Consulter l'etat du solde
      </q-btn>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-purple text-white">
        <div class="text-h6">Credit disponible</div>
        <div class="text-subtitle2">$17,800</div>
      </q-card-section>
      <q-btn
          flat class="text-grey-8" 
          style="width: 300px"
          color="secondary"
          >
          Demande d'augmentation
      </q-btn>
    </q-card>

    <q-card class="my-card">
      <q-card-section class="bg-teal text-white">
        <div class="text-h6">Exigible aujourd'hui</div>
        <div class="text-subtitle2">$180</div>
      </q-card-section>
      <q-btn
          flat class="text-grey-8" 
          style="width: 300px"
          color="secondary"
      >
          Payer maintenant
      </q-btn>
    </q-card>

  <q-card flat bordered class="my-card bg-white">
     <q-card-section>
      <div class="text-subtitle2 text-grey-6" align="center">Virements d'un de mes comptes a l'autre</div>
      <div class="q-pa-md">
              <q-separator />
        <div class="q-pt-md row items-start">
            <div class="q-mt-xs row items-start">
                  <div class="row q-gutter-md">
                    <div class="row">
                    <q-select
                    outlined
                    :dense="dense"
                    >
                    </q-select>
                    <q-input filled type="url" :dense="dense" hint="Porte monnaie expediteur"/>
                    </div>
                    <div class="row">
                    <q-select
                    outlined
                    :dense="dense"
                    >
                    </q-select>
                    <q-input filled type="url" :dense="dense" hint="Porte monnaie destination"/>
                    </div>
                  </div>
            </div>
        </div>
      </div>
      </q-card-section>
          <q-separator />
      <q-card-actions align="center">
        <q-btn no-caps unelevated color="primary" label="Ajouter un compte" icon="add" class="q-mr-md" @click="dialog = true"/>
        <q-dialog v-model="dialog"><AddAccount/></q-dialog>
        <q-btn no-caps unelevated color="secondary" label="Continuer" icon="done"/>
      </q-card-actions>
    </q-card>
  </div>

    <div class="q-pa-md">
    <q-card flat bordered class="my-card">
      <q-card-section style=" background-color: grey;">
        <div class="text-subtitle2 text-center text-white text-center">Transactions récentes</div>
        <div class="text-subtitle2"></div>
      </q-card-section>

      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">Libellé de transaction</th>
            <th class="text-right">Devise</th>
            <th class="text-right">Expediteur</th>
            <th class="text-right">Beneficiaire</th>
            <th class="text-right">Date</th>
            <th class="text-right">Montant</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(user, index) in users">
            <td class="text-left">Virements</td>
            <td class="text-right">Dollars</td>
            <td class="text-right"> {{user.name}} </td>
            <td class="text-right"> {{user.username}} </td>
            <td class="text-right">4</td>
            <td class="text-right">87</td>
          </tr>
        </tbody>
      </q-markup-table>
    </q-card>
  </div>

  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { ref } from 'vue'
import AddAccount from '../components/AddAccount.vue'
import axios from 'axios'

export default defineComponent({
  name: 'Balance',
  components: {
    AddAccount
  },
  data(){
    return{
      users: null,
      dense: true
    }
  },

  mounted(){
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      this.users= response.data;
      console.log(this.users)
    })
  },

  setup() {
        return {
      dialog: ref(false),
        }    
 }
})
</script>

<style scoped>
.state{
  font-size: 18px;
  color: cadetblue;
  margin-right: 400px;
}
</style>