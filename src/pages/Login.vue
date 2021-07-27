<template >
<div class="contain q-pt-xl" style=" height: 657px;">
    <div class="carte" align="center">
        <q-card class="q-pa-md" flat bordered style="max-width: 480px"  >
                    <q-card-section >
                        <div class="text-subtitle2 q-pb-md text-grey-9"  align="center" color="grey">Gajelabs Pay</div>
                        <div class=" q-mt-md q-gutter-md row items-start text-subtitle1 ">
                              <q-text-label class="text-weight-medium q-pt-xs text-grey-8" />
                              <q-input style=" width: 150px;" filled type="name" />
                        </div>
                    </q-card-section>
                        <q-btn> </q-btn>
                    <q-card-actions class="q-pb-lg q-pl-lg">
                    </q-card-actions>
        </q-card>
    </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'

export default defineComponent({
     name: 'Login',
    setup() {
        
    },
})
</script>

<style scoped>
    .contain{
        background-color: rgb(229, 233, 233);
        line-height: 15;
    }

    .text-subtitle2{
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    .carte{
        margin-top: 100px
    }
</style>

