<template>
  <CenteredLargeModal
    ><div class="grid lg:grid-cols-2 relative grid-cols-1">
      <div
        class="lg:col-span-1 w-full bg-[#ffffff] lg:static absolute top-[70%] flex rounded-l-[50.063px] items-center lg:px-8 px-8 py-12 lg:p-8"
      >
        <div class="lg:w-auto lg:pl-8">
          <h1
            class="font-EBGaramond500 text-[#000000] text-[30px] lg:text-[51.785px] leading-[35px] lg:leading-[90%] mb-4"
          >
            Go Pro to unlock this features as a talent.
          </h1>
          <p class="text-[#000000] text-[16px] font-Satoshi400 leading-[147%]">
            Achieve your creative goals and drive success in the ever-evolving creative industry.
          </p>
          <div class="flex-col flex gap-[40px] mt-4">
            <div
              v-for="item in items"
              :key="item"
              class="flex flex-row gap-4 items-center font-Satoshi400"
            >
              <div class="bg-[#EF3F40] rounded-full p-4"></div>
              <p class="text-[#011B1F] text-[14px] leading-[16.87px]">
                {{ item.content }}
              </p>
            </div>
          </div>
          <div class="w-full mt-10">
            <button class="btn-brand !bg-[#EF3F40] border-none w-full font-Satoshi400">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </div>
      <div class="w-auto">
        <img
          loading="lazy"
          class="h-[100%] w-[100%] rounded-r-[50.063px] lg:block"
          src="/src/assets/img/talentGoPro.webp"
          alt=""
        />
      </div></div
  ></CenteredLargeModal>
</template>

<script setup>
import CenteredLargeModal from './CenteredLargeModal.vue'
const items = [
  {
    content: ` Get noticed faster by top employers with priority placement for your creative talent profile.`
  },
  {
    content: `                Send professional, tailored invoices to clients and receive direct
                payments on your wallet
`
  },
  {
    content: `                Connect instantly with businesses and other talents through direct
                communication.
`
  },
  {
    content: `                Access a world of creative knowledge and upskill with curated courses.
`
  },
  {
    content: `                Streamline project showcases for your agency with a team account for
                seamless project management.
`
  }
]
</script>

<style></style>
