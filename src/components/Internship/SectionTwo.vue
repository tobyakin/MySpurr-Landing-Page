<template>
  <section class="container lg:pt-[9.06rem] !lg:px-0 h-screen relative lg:mb-16">
    <div class="grid lg:grid-cols-2 relative grid-cols-1">
      <div
        class="lg:col-span-1 w-full bg-[#FBFBEE] lg:static absolute top-[70%] flex rounded-l-[6px] items-center lg:px-8 px-4 py-12 lg:p-8"
      >
        <div class="lg:w-auto lg:pl-8">
          <h1
            class="font-Satoshi700 text-[#007582] text-[1.88rem] lg:text-[2.4rem] leading-[2.19rem] lg:leading-[2.85rem] !mb-4"
          >
            Why Choose MySpurr Internships?
          </h1>
          <div class="flex-col flex gap-3">
            <div
              v-for="item in lists"
              :key="item"
              class="text-[#007582] lg:pl-10 text-[1.13rem] font-Satoshi400"
            >
              <h4 class="font-Satoshi500 text-[1.17rem] leading-[1.34rem]">
                {{ item.heading }}
              </h4>
              <p class="text-[#011B1F] text-[0.94rem] leading-[1.31rem]">
                {{ item.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="w-auto">
        <img
          loading="lazy"
          class="h-full w-[100%] rounded-r-[6px] hidden lg:block"
          src="@/assets/img/woman_with_books.webp"
          alt=""
        />
      </div>
      <!-- <div class="lg:hidden block">
        <img loading="lazy"   class="rounded-t-[18px]" src="@/assets/img/intern.webp" alt="" />
      </div> -->
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
