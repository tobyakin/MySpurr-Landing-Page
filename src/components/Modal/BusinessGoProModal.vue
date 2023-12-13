<template>
  <CenteredLargeModal
    ><div class="grid lg:grid-cols-2 relative grid-cols-1 !rounded-[500.063px]">
      <div
        class="lg:col-span-1 w-full bg-[#ffffff] lg:static absolute top-[70%] flex rounded-l-[500.063px] items-center lg:px-8 px-8 py-12 lg:p-8"
      >
        <div class="lg:w-auto lg:pl-8">
          <h1
            class="font-EBGaramond500 text-[#000000] text-[30px] lg:text-[51.785px] leading-[35px] lg:leading-[90%] mb-4"
          >
            Go Pro to unlock this feature as a business.
          </h1>
          <p class="text-[#000000] text-[16px] font-Satoshi400 leading-[147%]">
            Achieve your business hiring goals and drive success in the ever-evolving world.
          </p>
          <div class="flex-col flex gap-[40px] mt-4">
            <div
              v-for="item in items"
              :key="item"
              class="flex flex-row gap-4 items-center font-Satoshi400"
            >
              <div class="bg-[#DDE601] rounded-full p-4"></div>
              <p class="text-[#011B1F] text-[14px] leading-[16.87px]">
                {{ item.content }}
              </p>
            </div>
          </div>
          <div class="w-full mt-10">
            <button class="btn-brand !bg-[#DDE601] border-none w-full font-Satoshi400">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
      <div class="w-auto rounded-[50.063px]">
        <img
          class="h-[100%] w-[100%] rounded-r-[50.063px] lg:block"
          src="/src/assets/img/businessGoPro.webp"
          alt=""
        />
      </div></div
  ></CenteredLargeModal>
</template>

<script setup>
import CenteredLargeModal from './CenteredLargeModal.vue'
const items = [
  {
    content: ` Tailor your talent search with customized solutions to find the perfect creative professional.`
  },
  {
    content: ` Enjoy dedicated support for your MySpurr account, ensuring a seamless experience.`
  },
  {
    content: `  Showcase your job openings to a curated pool of top talents with our premium listing feature.`
  },
  {
    content: `Access a world of creative knowledge and upskill with curated courses for your teams`
  },
  {
    content: ` Bridge the gap between talent and opportunity with our platform for graduate internships.`
  }
]
</script>

<style></style>
