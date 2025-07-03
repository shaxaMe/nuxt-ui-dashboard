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

<template>
  <div>
    <!-- <HomeDateRangePicker v-model="range" class="-ms-1" />
    <HomePeriodSelect v-model="period" :range="range" /> -->
    <HomeStats :period="period" :range="range" />
    <HomeChart :period="period" :range="range" />
    <HomeSales :period="period" :range="range" />
  </div>
</template>
