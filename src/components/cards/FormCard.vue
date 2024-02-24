<template>
  <VCard class="mt-2 text-left card" >
    <VCardItem >
      <div class="d-flex justify-space-between">
        <VCardTitle>{{ card.name }}</VCardTitle>
        <VRadio
          :checked="modelValue === card.id"
          :value="card.id"
          @input="$emit( 'update', card.id)" />
      </div>
    </VCardItem>

    <VCardText>
      {{ card.text }}
    </VCardText>

    <VCardItem v-if="card.address" >
      <VCardSubtitle>{{ card.address }}</VCardSubtitle>
    </VCardItem>
  </VCard>
<VDivider />
</template>

<script setup >
import { ref, defineEmits } from 'vue'

const emit = defineEmits([ 'update' ])

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  card: {
    type: Object,
    default: () => ({})
  }
})

const tooltipOpened = ref( false )

const editDonation = () => {
console.log( 'editDonation' )
}
const deleteDonation = () => {
console.log( 'deleteDonation' )
}

</script>

<style lang="sass">
.card
  border-radius: 16px

.v-list-item__spacer
  width: 0px !important

.v-selection-control
  flex: 0 0
</style>
