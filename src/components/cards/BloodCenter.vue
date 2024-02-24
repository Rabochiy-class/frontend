<template>
  <VCard class="mt-5 text-left card" >

    <VCardItem >
      <VCardTitle>{{ card.title }}</VCardTitle>

      <VCardSubtitle>{{ card.address }}</VCardSubtitle>
    </VCardItem>

    <div class="blood-center__groups" >
      <div 
        v-for="group in card.bloodGroup"
        :key="group"
        class="blood-center__item" >
        {{ realGroups[group] }}
      </div>
    </div>

    <VCardActions >
      <VBtn
        block
        @click="createDonation" >
        Записаться на донацию
      </VBtn>
    </VCardActions>

    <VCardText>
      {{ card.worktime }}
    </VCardText>
  </VCard>
</template>

<script setup >
import { ref } from 'vue'
import router from '@/router';

const props = defineProps({
  card: {
    type: Object,
    default: () => ({})
  }
})


const createDonation = () => {
  router.push( { name: 'OrderFormWithId', params: { body: JSON.stringify( props.card ) } } )
}

const realGroups = {
  o_plus: '0+',
  o_minus: '0-',
  a_plus: 'A+',
  a_minus: 'A-',
  b_plus: 'B+',
  b_minus: 'B-',
  ab_plus: 'AB+',
  ab_minus: 'AB-',
}
</script>

<style lang="sass">
.card
  border-radius: 16px

.v-list-item__spacer
  width: 0px !important

.blood-center
  &__groups
    display: grid
    grid-template-columns: 1fr 1fr 1fr
    gap: 10px
    padding: 0px 20px

  &__item
    background-color: #D9D9D9
    width: 100%
    height: 45px
    display: flex
    justify-content: center
    align-items: center
    justify-self: center
</style>