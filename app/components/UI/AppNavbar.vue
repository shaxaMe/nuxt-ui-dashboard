<template #header>
  <UDashboardNavbar :ui="{ right: 'gap-3' }">
    <template #leading>
      <SidebarCollapseButton />
      <SearchInput />
    </template>

    <template #right>
      <UTooltip text="Notifications" :shortcuts="['N']">
        <UButton
          color="neutral"
          variant="ghost"
          square
          @click="isNotificationsSlideoverOpen = true"
        >
          <UChip color="error" inset>
            <UIcon name="i-lucide-bell" class="size-5 shrink-0" />
          </UChip>
        </UButton>
      </UTooltip>

      <UDropdownMenu :items="items">
        <UButton icon="i-lucide-plus" size="md" class="rounded-full" />
      </UDropdownMenu>
    </template>
  </UDashboardNavbar>
</template>

<script setup lang="ts">
import { sub } from "date-fns";
import type { DropdownMenuItem } from "@nuxt/ui";
import type { Period, Range } from "~/types";

const { isNotificationsSlideoverOpen } = useDashboard();

const items = [
  [
    {
      label: "New mail",
      icon: "i-lucide-send",
      to: "/inbox",
    },
    {
      label: "New customer",
      icon: "i-lucide-user-plus",
      to: "/customers",
    },
  ],
] satisfies DropdownMenuItem[][];

const range = shallowRef<Range>({
  start: sub(new Date(), { days: 14 }),
  end: new Date(),
});
const period = ref<Period>("daily");
</script>

<style scoped></style>
