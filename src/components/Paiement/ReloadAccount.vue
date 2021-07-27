<template>
    
<q-card elevated class="my-card" style="max-width: 510px" color="grey">
     <q-card-section >
        <div class="text-subtitle2 text-grey-6" align="center" color="grey" >
            Effectuer une recharge
        </div>
        <div class="q-my-md" >
        <div class="q-gutter-lg row items-start">
            <div class="row">
              <q-select
              outlined
              :dense="dense"
              >
              </q-select>
              <q-input filled type="url" :dense="dense" hint="Selectionner un porte monnaie"/>
            </div>
            <q-input filled type="url" :dense="dense" hint="Montant de la recharge"/>
        </div>


        
      </div>
      </q-card-section>
    <q-separator/>

      <q-card-actions>
        <q-btn :dense="dense" color="primary" unelevated icon="circle"  label="Recharcher via carte" @click="dialog = true"/>
        <q-btn :dense="dense" color="secondary" unelevated icon="house"  label="Recharcher via ma banque" @click="dialog = true"/>
        <q-dialog v-model="dialog"><SetCharge/></q-dialog>
      </q-card-actions>  
    </q-card>

</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'
import SetCharge from './SetCharge.vue'

export default defineComponent({
    name: 'ReloadAccount',
    components: {
    SetCharge
  },
        data(){
            return{
                users: null,
                dense: true,
                dialog: ref(false),
                group2: [''],
            }
        }
})
</script>
