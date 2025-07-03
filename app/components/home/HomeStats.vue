<script setup lang="ts">
import type { Period, Range, IStas } from "~/types";
const props = defineProps<{
  period: Period;
  range: Range;
}>();

const statisticsItems: IStas[] = [
  {
    id: 1,
    label: "Foydalanuvchilar",
    amount: 1000,
    icon: "icon-people",
    color: "bg-purple/20",
    percent: 5,
  },
  {
    id: 2,
    label: "Buyurtmalar",
    amount: 10293,
    icon: "icon-cub",
    color: "bg-yellow/20",
    percent: 1.3,
  },
  {
    id: 3,
    label: "Sotuvlar",
    amount: 89000,
    icon: "icon-line",
    color: "bg-green/20",
    percent: 1.3,
  },
  {
    id: 4,
    label: "Extimolliklar",
    amount: 89000,
    icon: "icon-clock",
    color: "bg-orange/20",
    percent: 1.3,
  },
];
</script>

<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
    <div
      class="shadow-md bg-default px-4 py-3.5 flex flex-col rounded-2xl dark:bg-elevated"
      v-for="item in statisticsItems"
    >
      <div class="flex items-center justify-between gap-2">
        <div class="flex flex-col gap-2.5">
          <p>{{ item.label }}</p>
          <UTooltip
            :delay-duration="0"
            :text="`${usePrice(item.amount)} so'm`"
          >
            <p
              class="font-semibold text-3xl text-highlighted overflow-hidden line-clamp-1"
            >
              {{ usePrice(item.amount) }}
            </p>
          </UTooltip>
        </div>
        <div
          class="w-14 h-14 p-3 flex items-center justify-center rounded-full"
          :class="item.color"
        >
          <Icon class="!w-6 !h-6" :name="`${item.icon}`" />
        </div>
      </div>
      <div class="flex items-center gap-2 mt-7">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
              fill="#00B69B"
            />
          </svg>
        </div>
        <p class="text-sm text-muted">
          <span class="font-semibold text-highlighted"
            >{{ item.percent }}%</span
          >
          {{ props.period }}
        </p>
      </div>
    </div>
  </div>
</template>
