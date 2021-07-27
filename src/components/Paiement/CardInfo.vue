<template>
    <q-card flat bordered class="my-card" style="width: 400px">
     <q-card-section >
        <div class="text-subtitle2 text-white" align="center" style=" background-color: grey;">Informations sur le compte en action</div>
        <div class="q-my-lg text-subtitle2" > 
            <ul class="text-grey-8 q-gutter-md q-my-lg">
                <li>Id du compte:</li>
                <li>Nom:</li>
                <li>Solde:</li>
                <li>Derniere recharge:</li>
            </ul>
        <div class="q-gutter-lg row items-start">

        </div>
        
      </div>
      </q-card-section>
    </q-card>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
    name: 'CardInfo',
        data(){
            return{
            
            }
        }
})
</script>
