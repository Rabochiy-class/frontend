<template>
  <ProfileForm
    :user="authStore.user"
    @update="$emit( 'updateTabToForm' )" />
</template>

<script setup >
import ProfileForm from '@/components/forms/ProfileForm.vue';
import { useAuthStore } from '@/store/useAuthStore';

const authStore = useAuthStore()
</script>
