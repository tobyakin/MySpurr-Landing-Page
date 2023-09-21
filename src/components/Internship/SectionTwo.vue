<template>
  <section class="container lg:py-[145px] !lg:px-0 md:h-auto h-[700px] lg:mb-16">
    <div class="grid lg:grid-cols-2 grid-cols-1 relative">
      <div
        class="col-span-1 w-full bg-[#FBFBEE] lg:static absolute top-[70%] flex rounded-l-[6px] items-center lg:px-8 px-4 py-12 lg:p-8"
      >
        <div class="lg:w-auto pl-8">
          <h1
            class="font-Satoshi700 text-[#007582] text-[30px] lg:text-[40px] leading-[35px] lg:leading-[45.6px] mb-8"
          >
            Why Choose MySpurr Internships?
          </h1>
          <div class="flex-col flex gap-8">
            <div
              v-for="item in lists"
              :key="item"
              class="text-[#007582] pl-10 text-[18px] font-Satoshi400"
            >
              <h4 class="font-Satoshi500 text-[18.718px] leading-[21.489px]">
                {{ item.heading }}
              </h4>
              <p class="text-[#011B1F] text-[15px] leading-[21.489px]">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          class="h-[100%] w-[100%] rounded-r-[6px] hidden lg:block"
          src="@/assets/img/intern.png"
          alt=""
        />
      </div>
      <div class="lg:hidden block">
        <img class="rounded-t-[18px]" src="@/assets/img/intern.png" alt="" />
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref } from "vue";
const lists = ref([
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
]);
</script>
