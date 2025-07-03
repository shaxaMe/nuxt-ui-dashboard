<script setup>
const route = useRoute()
const slug = route.params.slug
</script>

<template>
  <div>
    <h1>Post: {{ slug }}</h1>
  </div>
</template>
