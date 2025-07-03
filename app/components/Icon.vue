<script setup>
const props = defineProps({
  name: {
    type: String,
    required:true
  }
})
</script>
<template>
    <component v-if="name" :is="`${name}`" :filled="true"  />
</template>