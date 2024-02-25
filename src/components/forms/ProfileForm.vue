<template >
  <VSheet class="w-100 mx-auto text-left">
    <VForm
      fast-fail
      @submit.prevent>
      
      <p>Фамилия</p>
      <VTextField
        v-model="user.lastName"
        label="Введите фамилию"
        variant="underlined" />

      <p>Имя</p>
      <VTextField
        v-model="user.firstName"
        label="Введите фамилию"
        variant="underlined" />

      <p>Отчество</p>
      <VTextField
        v-model="user.middleName"
        label="Введите отчество"
        variant="underlined" />

      <p>Username</p>
      <VTextField
        v-model="user.username"
        label="Введите username"
        variant="underlined" />
        
      <p>Дата рождения</p>
      <VTextField
        v-model="user.birthDate"
        label="Ваша дата рождения"
        disabled
        variant="underlined" />

      <p>Город</p>
      <VSelect
        v-model="user.cityId"
        label="Выберите город"
        variant="underlined"
        item-title="title"
        item-value="id"
        :items="cities" />
      <p class="text-subtitle-2">Если не нашли свой город, напишите нам на
        <a href="mailto:support@donorsearch.org">support@donorsearch.org</a></p>      

      <p>Пол</p>
      <VRadioGroup
        v-model="user.gender"
        inline >
        <VRadio label="Мужской" value="male"></VRadio>
        <VRadio label="Женский" value="female"></VRadio>
      </VRadioGroup>

      <p>О себе</p>
      <VTextarea
        v-model="user.about"
        class="mx-4"
        label="Поделитесь чем-нибудь о себе :)"
        variant="solo" />

      <VBtn
        type="submit"
        block
        class="mt-2"
        @click="saveUserInfo" >
        Сохранить
      </VBtn>
    </VForm>
  </VSheet>
</template>

<script setup >
import { reactive, onMounted, defineEmits } from 'vue'

const emit = defineEmits( 'update' )

onMounted( () => {
  Object.keys( props.user ).forEach( ( key ) => {
    if ( key in user ) {
      user[ key ] = props.user[ key ]
    }
  })
})

const props = defineProps({
  user: {
    type: Object,
    default: () => ({}),
  }
})

const user = reactive({
  firstName: '',
  lastName: '',
  middleName: '',
  username: '',
  birthDate: '',
  cityId: '',
  gender: '',
  about: '',
})

let cities = reactive([
  {
    id: 1,
    title: 'Москва',
  },
  {
    id: 2,
    title: 'Санкт-Петербург',
  }
])

const saveUserInfo = () => {
  emit( 'update', user )
}

</script>

<style lang="sass" scoped >
.error
  color: red
</style>
