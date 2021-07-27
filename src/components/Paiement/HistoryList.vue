<template>

    <div style="width: 1000px;">
    <q-card flat bordered class="my-card">
      <q-card-section style=" background-color: grey;">
        <div class="text-subtitle2 text-white text-center">Mes dernières recharges</div>
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

</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
        data(){
            return{
                users: null
            }
        }
})
</script>
