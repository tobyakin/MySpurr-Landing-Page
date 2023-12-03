<template>
  <div
    class="min-h-[630px] flex items-center background py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="flex container gap-8 py-8 lg:flex-row flex-col justify-between">
      <div class="lg:py-12 py-4">
        <h1
          class="md:text-[79.379px] text-[40px] font-normal mb-6 text-white md:leading-[71.441px] leading-[45px] font-EBGaramond500"
        >
          Super charge your <br class="md:block hidden" />
          creative career
        </h1>
        <p class="text-[22px] text-white font-Satoshi400 my-8 md:my-6">
          Find creative job opportunities, build your portfolio
          <br class="md:block hidden" />
          and enhance your skills with MySpurr
        </p>
        <div class="flex gap-[26px]">
          <a
            :href="dashboardUrl + 'signup'"
            role="button"
            class="btn-brand lg:!px-[10px] !px-0 items-center flex lg:w-[40%] lg:!text-base justify-center !text-[12px] w-full !font-Satoshi400"
          >
            Sign up for free
          </a>
          <a
            role="button"
            class="btn-light-border !rounded-full lg:!px-[10px] !px-0 justify-center lg:!text-base !text-[10px] flex lg:w-[40%] w-full font-Satoshi400"
          >
            Watch demo
          </a>
        </div>
      </div>
      <!-- <div class="flex lg:justify-center items-center gap-4">
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
import mainbg from "@/assets/img/sectionOnebg.webp";
// import PlayButton from "@/components/icons/playButton.vue";
const image = mainbg;
const dashboardUrl = import.meta.env.VITE_DASHBOARD;
</script>

<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
  background-color: rgba(15, 14, 14, 0.504);
  /* background: linear-gradient(
      from 270deg at 50% 50%,
      rgba(15, 14, 14, 0.526) 184.15632963180542deg,
      rgba(13, 11, 11, 0.33) 270.5531358718872deg,
      rgba(13, 11, 11, 0.626) 353.79907608032227deg
    ),
    lightgray 50%;*/
}
</style>
