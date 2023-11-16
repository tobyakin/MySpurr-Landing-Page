<template>
  <div
    class="min-h-[630px] flex items-center background py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="flex container gap-8 py-8 lg:flex-row flex-col-reverse justify-between">
      <div class="lg:py-12 py-4">
        <h1
          class="md:text-[79.379px] text-[40px] font-normal mb-6 text-white md:leading-[71.441px] leading-[45px] font-EBGaramond500"
        >
          Connect your aspirations <br class="md:block hidden" />
          with opportunities.
        </h1>
        <p class="text-[22px] text-white font-Satoshi400 my-8 md:my-6">
          We empower graduates and undergraduates with diverse,
          <br class="md:block hidden" />skill-enhancing internships while enabling businesses to tap
          into fresh talent.
        </p>
        <div class="flex">
          <a :href="dashboardUrl + 'signup'" role="button" class="btn-brand font-Satoshi400">
            Sign up for free </a
          ><!---->
        </div>
      </div>
      <div class="flex justify-center hidden items-center gap-4">
        <p class="font-Satoshi700 text-[20px] text-white">How to use MySpurr</p>
        <button
          class="bg-[#EDF0B8] rounded-full p-4 h-[76.477px] w-[76.477px] items-center justify-center flex"
        >
          <PlayButton />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import mainbg from '@/assets/img/internBg.png'
import PlayButton from '@/components/icons/playButton.vue'
const image = mainbg
const dashboardUrl = import.meta.env.VITE_DASHBOARD
</script>

<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
  background:
    linear-gradient(
      from 270deg at 50% 50%,
      rgba(15, 14, 14, 0.28) 184.15632963180542deg,
      rgba(13, 11, 11, 0.33) 270.5531358718872deg,
      rgba(18, 16, 16, 0.32) 353.79907608032227deg
    ),
    lightgray 50%;
}
</style>
