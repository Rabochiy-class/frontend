<template >
  <VForm ref="form" class="w-100" >
    <div v-if="mode === 1">
      <VTextField
        v-model="user.email"
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
      <VTextField
        v-model="user.firstName"
        :rules="[ v => !!v || 'Это поле обязательное']"
        label="Имя*"
        name="name"
        variant="underlined"
        @update:focused="denied = false" />      
      <VDivider />
      <p class="d-flex justify-center mb-2 text-caption" >
        Продолжая, я соглашаюсь с политикой конфиденциальности
      </p>   
      <VCardActions >
        <VBtn
          block
          @click="createUser" >
          Зарегистрироваться
        </VBtn>
      </VCardActions>   
    </div>
    <div v-else >
      <VOtpInput 
        v-model="code"
        length="5" >
      </VOtpInput>
      <VCardActions >
        <VBtn
          block
          :disabled="code.length !== 5"
          @click="sendCode" >
          Отправить код
        </VBtn>
      </VCardActions>
    </div>
  </VForm>
</template>

<script setup >
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/store/useAuthStore'
import { useRouter } from 'vue-router'

const denied = ref( false )

const mode = ref( 1 )

const form = ref()
const user = reactive({
  email: null,
  password: null,
  firstName: null,
})

const useAuth = useAuthStore()
const createUser = async () => {
  const { valid } = await form.value.validate()

  if ( valid ) {
    try {
      await useAuth.requestRegistrationCode(  user)
      mode.value = 2
    } catch ( error ) {
      console.warn( error )
      denied.value = true
    }
  }

}

const code = ref( '' )
const router = useRouter()
const sendCode = async () => {
  const authorized = await useAuth.confirmEmail( { code: code.value, email: user.email } )

  const name = authorized ? 'DonationItems' : 'UnauthorizedPage'
  router.push( { name } )
}
</script>

<style lang="sass" scoped >
.error
  color: red
</style>
