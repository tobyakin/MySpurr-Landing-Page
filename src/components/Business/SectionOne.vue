<template>
  <div
    class="min-h-[630px] flex items-center background py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="flex container gap-8 py-8 lg:flex-row flex-col-reverse justify-between">
      <div class="lg:py-12 py-4">
        <h1
          class="md:text-[79.379px] text-[40px] font-normal !mb-6 text-white md:leading-[71.441px] leading-[45px] font-EBGaramond500"
        >
          Connect with the world's <br class="md:block hidden" />
          top creative talent
        </h1>
        <p class="text-[22px] text-white font-Satoshi400 !my-8 md:!my-6">
          Find creative talents, manage jobs, and complete your
          <br class="md:block hidden" />
          projects with MySpurr
        </p>
        <div class="flex gap-[26px]">
          <a
            target="_blank"
            :href="dashboardUrl + 'signup'"
            role="button"
            class="btn-brand lg:!px-[10px] !px-0 items-center flex lg:w-[30%] lg:!text-base justify-center !text-[12px] w-full !font-Satoshi400"
          >
            Sign up for free
          </a>
          <a
            role="button"
            class="btn-light-border !rounded-full lg:!px-[10px] !px-0 justify-center lg:!text-base !text-[10px] flex lg:w-[30%] w-full font-Satoshi400"
            href="https://zcal.co/myspurr/30min"
            target="_blank"
          >
            Book a demo
          </a>
        </div>
      </div>
      <!-- <div class="flex justify-center items-center gap-4">
        <p class="font-Satoshi700 text-[20px] text-white">How to use MySpurr</p>
        <button
          class="bg-[#EDF0B8] rounded-full p-4 h-[76.477px] w-[76.477px] items-center justify-center flex"
        >
          <PlayButton />
        </button>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import { images } from "../../imgAsset";
// import PlayButton from "@/components/icons/playButton.vue";
const image = images.business;
const dashboardUrl = import.meta.env.VITE_DASHBOARD_HOST;
</script>

<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
  background: linear-gradient(
      from 270deg at 50% 50%,
      rgba(15, 14, 14, 0.28) 184.15632963180542deg,
      rgba(13, 11, 11, 0.33) 270.5531358718872deg,
      rgba(18, 16, 16, 0.32) 353.79907608032227deg
    ),
    lightgray 50%;
}
</style>
