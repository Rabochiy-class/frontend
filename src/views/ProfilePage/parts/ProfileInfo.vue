<template>
  <div>
    <div class="d-flex align-center">
      <VAvatar color="info" size="x-large" class="profile-info__avatar" >
        <VImg src="https://cdn.vuetifyjs.com/images/john.jpg" />
      </VAvatar>
      <div>
        <VCardTitle>{{ `${user.firstName} ${user.lastName}` }}</VCardTitle>
        <VCardSubtitle >{{ user.city.title }}</VCardSubtitle>
        <VCardActions >
          <VBtn block >
            Потенциальный донор
          </VBtn>
        </VCardActions>
      </div>
    </div>

    <VDivider />

    <p class="text-subtitle-2 mt-3 mb-2">Здесь будут отображаться ваши донации</p>
    <div class="d-flex justify-space-evenly mb-3" >
      <div
        v-for="agg in donationAggs"
        :key="agg" >
        <VImg
          :src="getSrc( agg )"
          class="profile-info__agg" />
        <p>{{ user.donation_agg[ agg ] }}</p>
      </div>
    </div>

    <VDivider />

    <div>
      <p class="text-subtitle-1 mt-3 mb-2">Осталось до почетного донора</p>
      <div class="d-flex align-center">
        <div>
          <p>Учитываются</p>
          <div class="d-flex" >
            <div class="d-flex align-center mr-2" >
              <VImg
                :src="getSrc( 'plasma' )"
                class="profile-info__agg--mini mr-1" />
              <p>{{ user.donation_agg[ 'plasma' ] }}</p>
            </div>

            <div class="d-flex align-center" >
              <VImg
                :src="getSrc( 'blood' )"
                class="profile-info__agg--mini mr-1" />
              <p>{{ user.donation_agg[ 'blood' ] }}</p>
            </div>
          </div>
        </div>

        <div class="ml-8 text-left">
          <p class="text-subtitle-1 mt-3 mb-2">Осталось 40 из 40 донаций</p>
          <p class="text-caption mt-3 mb-2">Из них минимум 25 донаций цельной крови/клеточных компонентов</p>
        </div>
      </div>

      <p class="text-h6 text-left">ИЛИ</p>

      <div class="d-flex align-center">
        <div>
          <p>Учитываются</p>
          <div class="d-flex" >
            <div class="d-flex align-center mr-2" >
              <VImg
                :src="getSrc( 'plasma' )"
                class="profile-info__agg--mini mr-1" />
              <p>{{ user.donation_agg[ 'plasma' ] }}</p>
            </div>

            <div class="d-flex align-center" >
              <VImg
                :src="getSrc( 'blood' )"
                class="profile-info__agg--mini mr-1" />
              <p>{{ user.donation_agg[ 'blood' ] }}</p>
            </div>
          </div>
        </div>

        <div class="ml-8 text-left">
          <p class="text-subtitle-1 mt-3 mb-2">Осталось 60 из 60 донаций</p>
          <p class="text-caption mt-3 mb-2">Если донаций цельной крови/клеточных компонентов меньше 25</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup >
import { reactive } from 'vue'

const user = reactive({
  photo: {
    image: 'test',
  },
  firstName: 'firstName',
  lastName: 'lastName',
  city: {
    title: 'Москва',
  },
  donation_agg: {
    count: 0,
    lastDonationAt: "2024-02-24",
    blood: 0,
    plasma: 0,
    platelets: 0,
    erythrocytes: 0,
    leukocytes: 0,
    unconfirmedDonations: 0
  },
})
const donationAggs = [ 'blood', 'plasma', 'platelets', 'erythrocytes', 'leukocytes' ]

const getSrc = ( key ) => `/src/assets/${key}.svg`

</script>

<style lang="sass" >
.profile-info
  &__avatar
    height: 86px !important
    width: 86px !important
  &__agg
    width: 28px
    &--mini
      height: 20px
      width: 20px
</style>