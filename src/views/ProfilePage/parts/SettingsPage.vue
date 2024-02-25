<template>
  <ProfileForm
    :user="authStore.user"
    @update="updateInfo" />
</template>

<script setup >
import ProfileForm from '@/components/forms/ProfileForm.vue';
import { useAuthStore } from '@/store/useAuthStore';

const authStore = useAuthStore()

const updateInfo = ( info ) => {
  console.log( 'info: ', info )
  authStore.updateInfo( info )
}

</script>
