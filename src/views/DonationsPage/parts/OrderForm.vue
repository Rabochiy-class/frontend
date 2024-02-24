<template>
  <DonationPlanForm @update="$emit( 'updateTabToForm' )" />
</template>

<script setup >
import DonationPlanForm from '@/components/forms/DonationPlanForm.vue';

</script>
