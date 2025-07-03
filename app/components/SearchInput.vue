<template>
  <UInput v-model="value" class="w-full custom-input dark:!text-amber-50 dark:fill-amber-50" icon="i-lucide-search" placeholder="Search..." />
</template>

<script setup lang="ts">
const value = ref("");
</script>

<style scoped></style>
