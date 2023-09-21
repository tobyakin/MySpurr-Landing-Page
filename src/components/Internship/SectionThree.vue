<template>
  <section class="container md:h-auto my-16 lg:my-16">
    <h4 class="text-[72px] font-EBGaramond500 leading-[67.5px] mb-10">
      It’s easy to get started
    </h4>
    <div class="grid container lg:grid-cols-3 gap-[82px] grid-cols-1">
      <div
        v-for="item in boxLists"
        :key="item"
        class="w-full bg-[#FBFBEE] lg:static flex rounded-[4.71px] items-center lg:px-8 px-4 py-12 lg:p-8"
      ></div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const boxLists = ref([
  {
    heading: " Diverse Opportunities",
    text: `Explore a wide range of internship opportunities across various industries and fields.`,
  },
  {
    heading: "Quality Partnerships",
    text: `We partner with reputable businesses committed to nurturing and empowering emerging talent.`,
  },
  {
    heading: "Skill Enhancement",
    text: `Gain hands-on experience, develop new skills, and build your professional network.`,
  },
  {
    heading: "Career Growth",
    text: "Kickstart your career journey and open doors to future job opportunities.",
  },
  {
    heading: "Skill Enhancement",
    text: `Gain hands-on experience, develop new skills, and build your professional network.`,
  },
  {
    heading: "Career Growth",
    text: "Kickstart your career journey and open doors to future job opportunities.",
  },
]);
</script>
