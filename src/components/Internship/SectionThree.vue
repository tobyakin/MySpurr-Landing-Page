<template>
  <section class="container my-16 lg:my-16">
    <h4
      class="lg:text-[72px] text-[40px] font-EBGaramond500 leading-[40px] lg:leading-[67.5px] mb-10"
    >
      It’s easy to get started
    </h4>
    <div class="grid container !px-0 lg:grid-cols-3 lg:gap-[70px] gap-[30px] grid-cols-1">
      <div
        v-for="item in boxLists"
        :key="item"
        class="w-full bg-[#FBFBEE] flex flex-col text-center rounded-[4.71px] items-center lg:px-8 px-4 py-12 lg:p-8"
      >
        <h4 class="text-[#007582] font-Satoshi500 text-[23px] leading-[24.15px] mb-3">
          {{ item.heading }}
        </h4>
        <p class="text-[#011B1F] text-[14px] font-Satoshi400 lg:leading-[16.87px]">
          {{ item.text }}
        </p>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const boxLists = ref([
  {
    heading: " Signup",
    text: `Create your MySpurr Internships profile to get started.`,
  },
  {
    heading: "Discover Internships",
    text: `Explore internship listings from top companies.`,
  },
  {
    heading: "Apply",
    text: `Submit your applications to the internships that align with your goals.`,
  },
  {
    heading: "Interview",
    text: `Submit your applications to the internships that align with your goals.`,
  },
  {
    heading: "Intern",
    text: `Start your internship journey, learn, and grow.`,
  },
  {
    heading: "Succeed",
    text: `Use this experience as a stepping stone for your future career.`,
  },
]);
</script>
