<template>
        <q-card>
          <q-card-section class="row items-center q-gutter-lg">
            <div class="text-subtitle">Votre nouveau compte</div>
            <q-btn v-close-popup size="xs" icon="close" color="red"></q-btn>
          </q-card-section>
          <q-separator/>
        <div class="q-pa-md">
            <div class="q-gutter-md" style="max-width: 300px">
                <div class="form-group">
                        <label for="Devise">Devise</label>
                        <q-input :dense="dense" outlined label="" />
                </div>
                <div class="form-group">
                        <label for="Devise">ID Compte</label>
                        <q-input :dense="dense" outlined label="" />
                </div>
                <div class="form-group">
                        <label for="Devise">IBAN</label>
                        <q-input :dense="dense" filled label="" />
                </div>
            </div>
        </div>
          <q-card-section class="row items-center q-gutter-sm">
            <q-btn v-close-popup label="Annuler"/>
            <q-btn label="Ajouter" color="primary"/>
          </q-card-section>
        </q-card>
</template>




<script>
import { defineComponent } from 'vue'


export default defineComponent({
    name: 'AddAccount',
    data(){
      return{
        dense: true,
      }
    }
})
</script>

<style scoped>
    .q-gutter-lg{
        background-color: lavender;
    }
</style>
