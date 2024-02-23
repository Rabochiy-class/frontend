<template >
  <VForm ref="form" class="w-100" >
    <VTextField
      v-model="user.username"
      :rules="[v => !!v || 'Это поле обязательное']"
      label="Ваш email*"
      name="username"
      variant="underlined"
      @update:focused="denied = false" />
    <VTextField
      v-model="user.password"
      :rules="[v => !!v || 'Это поле обязательное']"
      label="Ваш пароль*"
      name="password"
      type="password"
      variant="underlined"
      @update:focused="denied = false" />
    <VDivider />
    <VCardActions >
      <VBtn
        block
        @click="getAuth" >
        Войти
      </VBtn>
    </VCardActions>
    <p
      v-if="denied"
      class="d-flex justify-center mb-2 text-caption error" >
      Вы ввели неверный логин или пароль
    </p>        
  </VForm>
</template>

<script setup >
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'vue-router'

const denied = ref( false )
const form = ref()
const user = reactive({
  username: null,
  password: null
})

const useAuth = useAuthStore()
const router = useRouter()
const getAuth = async () => {
  const { valid } = await form.value.validate()

  if ( valid ) {
    try {
      const authorized = await useAuth.auth(  user)
      const name = authorized ? 'MainPage' : 'UnauthorizedPage'
      router.push( { name } )
    } catch ( error ) {
      console.warn( error )
      denied.value = true
    }
  }
}
</script>

<style lang="sass" scoped >
.error
  color: red
</style>
