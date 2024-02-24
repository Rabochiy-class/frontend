<template>
  <div >
    <VChipGroup v-model="chip" >
      <VChip value="future" >Предстоящие</VChip>

      <VChip value="past" >Прошедшие</VChip>
    </VChipGroup>
    <DonationCard 
      v-for="card in cards"
      :key="card.id"
      :card="card" />
  </div>
</template>

<script setup >
import { ref } from 'vue'
import DonationCard from '@/components/cards/DonationCard.vue'

const chip = ref( 'future' )

const cards = [
  {
    id: 0,
    planDate: new Date(),
    title: 'Name 1',
    bloodStationId: '',
    bloodStation: {
      address: 'Новый Зыковский пр-д, д. 4а'
    },
    isOut: true,
    paymentType: 'free',
    bloodClass: 'erythrocytes',
  },
  {
    id: 1,
    planDate: new Date(),
    title: 'Name 2',
    bloodStation: {
      address: 'Новый Зыковский пр-д, д. 4а'
    },
    isOut: true,
    paymentType: 'free',
    bloodClass: 'plasma',
  },
  {
    id: 2,
    planDate: new Date(),
    name: 'Name 3',
    bloodStation: {
      address: 'Новый Зыковский пр-д, д. 4а'
    },
    isOut: true,
    paymentType: 'free',
    bloodClass: 'blood',
  },
]
</script>
