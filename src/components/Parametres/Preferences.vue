<template>
<div class="q-pa-md row items-start q-gutter-md " style="max-width: 1000px">
                

<q-card elevated style="max-width: 450px" class="q-pa-md q-mr-md" >
    <div class="text-subtitle2 q-pb-md text-grey"  align="center" color="grey">Paiement</div>
    <q-separator/>
    <div class="q-pa-md">
        <div class="q-gutter-md row items-start q-ml-lg text-subtitle1">
            <q-text-label class="text-weight-medium q-pt-xs text-grey-8 q-mr-lg">Devise par defaut </q-text-label>
            <q-select class="bg-grey-2 q-ml-lg" 
            outlined
            :dense="dense" 
            v-model="dev"
            >
            </q-select>
        </div>

        <div class="q-gutter-md row items-start q-mt-sm q-ml-md text-subtitle1">
            <q-text-label class="text-weight-medium q-pt-xs q-ml-md text-grey-8">Accept payments via</q-text-label>
                <q-option-group
                class=" text-grey-10 q-ml-lg"
                :options="options"
                type="checkbox"
                v-model="group"
                :dense="dense"
                />
        </div>

        <div class="q-gutter-md row items-start q-mt-sm q-ml-md text-subtitle1">
            <q-text-label class="text-weight-medium q-pt-xs q-ml-md text-grey-8">Transactions receips</q-text-label>
                <q-option-group
                class=" text-grey-10 q-ml-lg"
                :options="opt"
                type="checkbox"
                v-model="group1"
                :dense="dense"
                />
        </div>

        

    </div>

</q-card>

<q-card elevated style="max-width: 450px" class="q-pa-md q-ml-lg">
    <div class="text-subtitle2 q-pb-md text-grey"  align="center" color="grey">Transferts</div>
    <q-separator/>
    <div class="q-pa-md">
        <div class="q-gutter-md row items-start q-mt-sm q-ml-md text-subtitle1">
            <q-text-label class="text-weight-medium q-pt-xs q-ml-md text-grey-8">Transfer receipts </q-text-label>
                <q-option-group
                class=" text-grey-10 q-ml-lg"
                :options="opt2"
                type="checkbox"
                v-model="group2"
                :dense="dense"
                />
        </div>

        <div class="q-gutter-md row items-start q-mt-sm q-ml-md text-subtitle1">
            <q-text-label class="text-weight-medium q-pt-xs q-ml-md text-grey-8">Transfer confirmation</q-text-label>
                <q-option-group
                class=" text-grey-10 q-ml-lg"
                :options="opt3"
                type="checkbox"
                v-model="group3"
                :dense="dense"
                />
        </div>

        

    </div>
   


</q-card>
</div>

</template>

<script>
import { defineComponent } from 'vue'
import { ref } from 'vue'


export default defineComponent({
    name: 'preferences',
    data(){
        return {
            dense: true,
            dev: ref('XAF'),
            group: ref(['bat']),
            options: [
                { label: 'Card', value: 'bat' },
                { label: 'Bank', value: 'friend' },
                { label: 'USSD', value: 'upload' },
                { label: 'Bank transfer', value: 'load'}
            ],
            group1: ref(['bat']),

            opt: [
                { label: 'Send to me', value: 'bat' },
                { label: 'Send to customers', value: 'friend' }
            ],
            group2: ref(['bat']),

            opt2: [
                { label: 'Send to me', value: 'bat' },
                { label: 'Send to recipients', value: 'friend' }
            ]
            ,
            group3: ref(['friend']),
            opt3: [
                { label: 'Confirm transfers before sending ', value: 'bat' },
                { label: ' Send OTP via email', value: 'friend' }
            ]


        }
    }
})
</script>
