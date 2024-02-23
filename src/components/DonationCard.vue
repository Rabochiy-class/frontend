<template>
    <VCard class="mt-5 text-left card" >
      <div class="d-flex justify-between pr-4 align-center" >
        <VCardText >
          {{ card.date.toLocaleString( 'ru' ) }}
        </VCardText>

        <v-menu>
          <template v-slot:activator="{ props }">
            <VIcon
              v-bind="props"
              @click="tooltipOpened = true">mdi-dots-horizontal</VIcon>
          </template>
          <VList>
            <div
              class="d-flex pa-2"
              @click="editDonation" >
              <VIcon @click="tooltipOpened = true">mdi-pencil</VIcon>
              <p class="ml-2">Редактировать</p>
            </div>
            <div
              class="d-flex pa-2"
              @click="deleteDonation" >
              <VIcon @click="tooltipOpened = true">mdi-delete</VIcon>
              <p class="ml-2">Удалить</p>
            </div>         
          </VList>
        </v-menu>
      </div>

      <VCardItem >
        <VCardTitle>{{ card.name }}</VCardTitle>

        <VCardSubtitle>{{ card.address }}</VCardSubtitle>
      </VCardItem>

      <VDivider />

      <VCardText>
        {{ card.bloodType }}
      </VCardText>

      <VDivider />

      <VCardText>
        {{ card.payType }}
      </VCardText>
    </VCard>
  <VDivider />
</template>

<script setup >
import { ref } from 'vue'


const props = defineProps({
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
</style>