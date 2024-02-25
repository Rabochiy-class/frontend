<template>
    <VCard class="mt-5 text-left card" >
      <div class="d-flex justify-between pr-4 align-center" >
        <VCardText >
          {{ card.planDate.toLocaleString( 'ru' ) }}
        </VCardText>

        <v-menu>
          <template v-slot:activator="{ props }">
            <VIcon
              v-bind="props"
              @click="tooltipOpened = true">mdi-dots-horizontal</VIcon>
          </template>
          <VList>
            <VListItem @click="editDonation" >
              <template v-slot:prepend>
                <VIcon class="mr-2" >mdi-pencil</VIcon>
              </template>
              <VListItemTitle>Редактировать</VListItemTitle>
            </VListItem>
            <VListItem @click="deleteDonation" >
              <template v-slot:prepend>
                <VIcon class="mr-2" >mdi-delete</VIcon>
              </template>
              <VListItemTitle>Удалить</VListItemTitle>
            </VListItem>            
          </VList>
        </v-menu>
      </div>

      <VCardItem >
        <VCardTitle>{{ card.title }}</VCardTitle>

        <VCardSubtitle>{{ card.bloodStation.address }}</VCardSubtitle>
      </VCardItem>

      <VDivider />

      <VCardText>
        {{ card.bloodClass }}
      </VCardText>

      <VDivider />

      <VCardText>
        {{ card.paymentType === 'free' ? 'Безвозмездно' : 'Платно' }}
      </VCardText>
    </VCard>
  <VDivider />
</template>

<script setup >
import { ref, defineEmits } from 'vue'
import { useRouter } from 'vue-router'

const emit = defineEmits( [ 'delete' ] )

const props = defineProps({
  card: {
    type: Object,
    default: () => ({})
  }
})

const tooltipOpened = ref( false )

const router = useRouter()
const editDonation = () => {
  console.log( 'editDonation' )
  router.push( { name: 'OrderFormWithId', params: { body: JSON.stringify( props.card ) } } )
}
const deleteDonation = () => {
  emit( 'delete' )
}
</script>

<style lang="sass">
.card
  border-radius: 16px

.v-list-item__spacer
  width: 0px !important
</style>