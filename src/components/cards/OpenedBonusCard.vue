<template>
  <div>
    <VBtn
      class="w-100 mb-2"
      variant="tonal"
      color="light-blue"
      @click="emit( 'getBack' )" >
      Назад
    </VBtn>
  </div>
  <VCard v-if="card" class="text-left pb-4">
    <VSnackbar
      v-model="snackbar"
      timeout="5000"
      timer >
      Вы получили новый бонус от {{ card.partnerName }}! С подробной информацией можно ознакомиться в письме на электронной почте :)
    </VSnackbar>      
    <VImg
      :src="card.bonusImage"
      cover />
    <VCardTitle>
      {{ card.bonusName }}
    </VCardTitle>

    <VCardText >
      <p v-html="card.bonusDescription" />
    </VCardText>

    <VCardSubtitle>
      до {{ card.dateValidity ? card.dateValidity.toLocaleDateString( 'ru' ) : 'Дедлайн недоступен'  }}
    </VCardSubtitle>
    
    <VCardActions class="d-flex flex-column" >
      <VBtn
        class="w-100"
        variant="tonal"
        color="light-blue"
        @click="snackbar = true" >
        Забрать бонус
      </VBtn>
      <VBtn
        class="w-100 mt-4"
        variant="text" >
        Поделиться отзывом

        <VDialog
          v-model="dialog"
          activator="parent"
          width="auto" >
          <VCard>
            <VCardTitle>Поделитесь отзывом о бонусе</VCardTitle>
            <VCardText>
              Это поможет нам подбирать лучшие предложения для вас
            </VCardText>
            <div class="text-center">
              <VRating v-model="form.rating" />
            </div>       
            <VTextarea
              v-model="form.comment"
              class="mx-4"
              label="Будем рады Вашему отзыву :)"
              variant="solo" />
            <VCardActions class="d-flex flex-column">
              <VBtn
                class="w-100"
                variant="tonal"
                color="light-blue"
                @click="sendReview" >
                Отправить
              </VBtn>
              <VBtn
                class="mt-4 w-100"
                variant="text"
                @click="dialog = false">
                Назад
              </VBtn>
            </VCardActions>
          </VCard>
        </VDialog>

      </VBtn>
    </VCardActions>
  </VCard>
</template>

<script setup >
import { ref, reactive, defineEmits } from 'vue'

const emit = defineEmits( [ 'getBack' ] )

const props = defineProps({
  card: {
    type: Object,
    default: () => ({}),
  }
})

const snackbar = ref( false )
const dialog = ref( false )

const form = reactive({
  comment: '',
  rating: 0,
})

const sendReview = () => {
  // отправить запрос на отправку отзыва
  // POST api/bonuses/{card.id}/feedback/ => form

  console.log( 'form: ', form )
  dialog.value = false
}
</script>
