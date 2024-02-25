<template>
  <div >
    <VChipGroup v-model="chip" >
      <VChip value="future" >
        Предстоящие
      </VChip>

      <VChip value="past" >
        Прошедшие
      </VChip>
    </VChipGroup>
    <DonationCard 
      v-for="card in cards"
      :key="card.id"
      :card="card"
      @delete="deleteCard( card.id )" />
    <p v-if="!cards.length" >Донации по выбранным фильтрам отсутствуют. Можете создать их на странице «Запись»</p>
  </div>
</template>

<script setup >
import { ref, onMounted, computed } from 'vue'
import DonationCard from '@/components/cards/DonationCard.vue'
import { useDonationsStore } from '@/store/useDonationsStore'

const chip = ref( 'future' )

const donationsStore = useDonationsStore()

onMounted( async () => {
  await donationsStore.getDonations()
  await donationsStore.getPlannedDonations()
})

const cards = computed( () => {
  return chip.value === 'future' ? donationsStore.futureDonations : donationsStore.pastDonations
} )

const cards2 = [
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

const deleteCard = async ( id ) => {
  await donationsStore.deleteDonation( id )
}

</script>
