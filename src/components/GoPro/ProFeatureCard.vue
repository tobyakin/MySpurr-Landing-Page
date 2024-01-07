<template>
  <div
    v-for="item in boxLists"
    :key="item"
    class="w-full flex flex-col gap-4 text-center rounded-[4.71px] items-center px-2 py-12"
  >
    <img loading="lazy" :src="item.icon" alt="" />
    <h4 class="text-[#007582] font-Satoshi500 text-[23px] leading-[24.15px]">
      {{ item.heading }}
    </h4>
    <p class="text-[#011B1F] text-[14px] flex flex-wrap font-Satoshi400 lg:leading-[16.87px]">
      {{ item.text }}
    </p>
  </div>
</template>
<script setup>
defineProps({
  boxLists: Object
})
</script>
