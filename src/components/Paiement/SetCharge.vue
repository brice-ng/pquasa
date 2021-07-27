<template>
        <q-card style="width: 400px;">
          <q-card-section class="row items-center q-gutter-lg" style="background-color: grey">
            <q-toolbar>
                <q-toolbar-title class="text-subtitle1 text-white text-center">Recharger votre compte</q-toolbar-title>
                <q-btn v-close-popup size="xs" icon="close" color="red" ></q-btn>
            </q-toolbar>
          </q-card-section>
          <q-separator/>
        <div class="q-pa-md">
            <div class="q-gutter-md" style="max-width: max">
                <div class="form-group">
                        <label for="Devise">Numero ID</label>
                        <q-input :dense="dense" outlined label="" />
                </div>
                <div class="form-group">
                        <label for="Devise">Libellé de la transaction</label>
                        <q-input :dense="dense" outlined label="" />
                </div>
                <div class="form-group">
                        <label for="Devise">IBAN</label>
                        <q-input :dense="dense" filled label="" />
                </div>
            </div>
        </div>
          <q-card-section class="row items-center q-gutter-sm">
            <q-btn v-close-popup bordered label="Annuler"/>
            <q-btn label="Valider" bordered color="primary"/>
          </q-card-section>
        </q-card>
</template>




<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'SetCharge',
    data(){
      return{
        dense: true,
      }
    }
})
</script>
