<template >
  <VSheet class="auth-page mx-auto w-100 d-flex" >
    <VCard class="mx-auto w-100 auth-page__container align-center justify-center" >
      <VTabs
        v-model="page"
        align-tabs="center" >
        <router-link to="/auth">        
          <VTab value="LoginPage">Вход</VTab>
        </router-link>
        <router-link to="/auth/registration">
          <VTab value="RegisterPage">Регистрация</VTab>
        </router-link>
      </VTabs>
      <RouterView />
    </VCard>
  </VSheet>
</template>

<script setup >
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

onMounted( () => {
  if ( localStorage.getItem( 'token' ) ) {
    router.push( { name: 'DonationItems' } )
  }
  page.value = route.name
})

const page = ref( 'LoginPage' )
</script>

<style lang="sass" scoped >
.auth-page
  background-color: white
  display: flex
  flex-direction: column
  height: 100vh
  width: 100%
  text-align: center
  &__container
    padding: 20px
    display: flex
    flex-direction: column
    justify-content: space-between
    height: 100%
    width: 100%
</style>
