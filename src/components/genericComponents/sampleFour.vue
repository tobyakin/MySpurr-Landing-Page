<template>
  <div
    :class="{
      'bg-[#2B3C87] text-[#ffffff]': blue,
      'bg-[#F787A5] text-[#ffffff]': pink,
      'bg-[#EFC73A] text-black': yellow,
      'bg-[#4DDD76] text-[#ffffff]': green,
      'bg-[#C59D10] h-[640px] text-white': orange,
      'bg-[#F50C40] text-[#ffffff]': red,
      'bg-[#6769C2] text-[#ffffff]': lightBlue,
    }"
    class="mb-20 font-Satoshi400 flex items-center py-12 border-2 md:mt-16"
  >
    <div class="flex container flex-col gap-8 text-center items-center py-20">
      <p
        class="font-Satoshi700 lg:text-[165.71px] text-[130px] leading-3 lg:leading-[18.6px]"
      >
        “
      </p>
      <p class="md:w-4/5 font-Satoshi700 lg:text-[24px] lg:leading-[30px]">
        "{{ text }}"
      </p>
      <p class="font-Satoshi500 lg:text-[20px] leading-[32.4px]">{{ user }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: String,
  user: String,
  green: Boolean,
  yellow: Boolean,
  lightBlue: Boolean,
  blue: Boolean,
  pink: Boolean,
  red: Boolean,
  orange: Boolean,
});

console.log(props.sectionInfo);
</script>

<style scoped></style>
