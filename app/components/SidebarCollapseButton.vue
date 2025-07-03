<script setup lang="ts">
import { ref, watch } from 'vue'
import { Icon } from '#components'
import { ChevronLeft, ChevronRight,Menu } from 'lucide-vue-next'
const collapsed = useState('sidebar-collapsed', () => false)

watch(collapsed, (val) => {
  if (process.client) {
    localStorage.setItem('sidebar-collapsed', val.toString())
  }
})

onMounted(() => {
  if (process.client) {
    collapsed.value = localStorage.getItem('sidebar-collapsed') === 'true'
  }
})
</script>

<template>
  <UButton
    size="sm"
    square
    class="cursor-pointer"
    variant="ghost"
    @click="collapsed = !collapsed"
    aria-label="Toggle sidebar"
  >
    <Menu class="w-5 h-5" />
  </UButton>
</template>
