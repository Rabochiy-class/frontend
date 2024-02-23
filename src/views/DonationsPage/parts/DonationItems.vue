<template>
  <div class="px-6" >
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
import DonationCard from '@/components/DonationCard.vue'

const chip = ref( 'future' )

const cards = [
  {
    id: 0,
    date: new Date(),
    name: 'Name 1',
    address: 'Новый Зыковский пр-д, д. 4а',
    bloodType: 'Цельная кровь',
    payType: 'Безвозмездно',
  },
  {
    id: 1,
    date: new Date(),
    name: 'Name 2',
    address: 'Новый Зыковский пр-д, д. 4а',
    bloodType: 'Цельная кровь',
    payType: 'Безвозмездно',    
  },
  {
    id: 2,
    date: new Date(),
    name: 'Name 3',
    address: 'Новый Зыковский пр-д, д. 4а',
    bloodType: 'Цельная кровь',
    payType: 'Безвозмездно',    
  },
]
</script>
