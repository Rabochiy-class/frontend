<template >
  <VForm ref="form" class="w-100 text-left" >
    <p class="text-h6">Выберите тип донации</p>
    <p class="text-subtitle-2">После выбора типа донации автоматически отобразится ближайшая 
      доступная дата с учётом интервалов между донациями</p>
    <VChipGroup v-model="info.bloodClass" >
      <VChip value="blood" >Цельная кровь</VChip>

      <VChip value="plasma" >Плазма</VChip>

      <VChip value="platelets" >Тромбоциты</VChip>

      <VChip value="erythrocytes" >Эритроциты</VChip>

      <VChip value="leukocytes" >Гранулоциты</VChip>
    </VChipGroup>
    
    <p class="text-h6">Планируемая дата</p>
    <VDatePicker />
    
    <p class="text-h6">Тип донации</p>

    <p class="text-h6">Место сдачи</p>

    <p class="text-h6">Город</p>

    <p class="text-h6">Центр крови</p>
    <p class="text-subtitle-2">Важно: если ваш центр крови принимает по записи, то нужно отдельно записаться 
      на сайте центра крови или через Госуслуги. Планирование дотации через бота DonorSearch позволит нам за 
      3 дня до указанной даты напомнить о вашем намерении совершить донацию и подготовиться к ней.</p>
    <VCardActions >
      <VBtn
        block
        @click="createUser" >
        Записаться на донацию
      </VBtn>
    </VCardActions>
  </VForm>
</template>

<script setup >
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'vue-router'

const denied = ref( false )

const mode = ref( 1 )

const form = ref()
const info = reactive({
  bloodClass: 'any',
  donateAt: null,
  bloodStationId: null,
})

const useAuth = useAuthStore()
const createUser = async () => {
  console.log( info )

  // const { valid } = await form.value.validate()

  // if ( valid ) {
  //   try {
  //     await useAuth.createUser(  user)
  //     mode.value = 2
  //   } catch ( error ) {
  //     console.warn( error )
  //     denied.value = true
  //   }
  // }

}

</script>

<style lang="sass" scoped >
.error
  color: red
</style>
