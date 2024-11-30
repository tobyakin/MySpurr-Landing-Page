<template>
  <section class="container !my-16 lg:!my-16">
    <h4
      class="lg:text-[4.5rem] text-[2.5rem] font-EBGaramond500 leading-[2.5rem] lg:leading-[4.22rem] !mb-10"
    >
      It’s easy to get started
    </h4>
    <div class="grid container !px-0 lg:grid-cols-3 lg:gap-[4.4rem] gap-[1.88rem] grid-cols-1">
      <div
        v-for="item in boxLists"
        :key="item"
        class="w-full bg-[#FBFBEE] flex flex-col text-center rounded-[4.71px] items-center lg:px-8 px-4 py-12 lg:p-8"
      >
        <h4 class="text-[#007582] font-Satoshi500 text-[1.44rem] leading-[1.51rem] !mb-3">
          {{ item.heading }}
        </h4>
        <p class="text-[#011B1F] text-[0.875rem] font-Satoshi400 lg:leading-[1.05rem]">
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
    text: `Create your MySpurr profile as an  Intern to get started.`,
  },
  {
    heading: "Discover Internships",
    text: `Explore internship listings from top companies.`,
  },
  {
    heading: "Apply",
    text: `Submit your applications to opportunities that align with your goals.`,
  },
  {
    heading: "Interview",
    text: `You may be called upon for an interview to discuss expectations.`,
  },
  {
    heading: "Intern",
    text: `Start your internship journey, learn, and grow your career journey with MySpurr.`,
  },
  {
    heading: "Succeed",
    text: `Use this experience as a stepping stone for future growth all within MySpurr.`,
  },
]);
</script>
