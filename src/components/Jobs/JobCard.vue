<script setup>
import CalenderIcon from "@/components/icons/outlineCalenderIcon.vue";
import LocationIcon from "@/components/icons/locationIcon.vue";
import TimerIcon from "@/components/icons/timerIcon.vue";
import VerifyIcon from "@/components/icons/verifyIcon.vue";
import CircleBookMarkIcon from "@/components/icons/circleBookMarkIcon.vue";
import SearchIcon from "@/components/icons/circleSearchIcon.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const redirectToJobDetails = (id) => {
  router.push({ name: "view-jobs", params: { id } });
};
defineProps({
  job: Object,
});
</script>
<template>
  <div class="border-[#254035AB] bg-white border-[0.735px] rounded-[7.347px] p-4">
    <div class="flex gap-3 mb-5">
      <img src="@/assets/image/jobIcon.svg" alt="" />
      <div>
        <p class="text-[13.021px] font-Satoshi500 text-[#2F929C]">MySpurr</p>
        <p class="text-[13.021px] font-Satoshi500 text-[#000000]">
          Developer in java c++
        </p>
        <div class="flex flex-wrap items-center mt-2 gap-2">
          <div
            class="flex gap-1 items-center text-[10.334px] text-[#DA5252] font-Satoshi500"
          >
            <CalenderIcon /><span class="">30 hrs/week</span>
          </div>
          <div
            class="flex gap-[2px] items-center text-[10.334px] text-[#DA5252] font-Satoshi500"
          >
            <LocationIcon /><span class="">Work from anywhere</span>
          </div>
          <div
            class="flex gap-1 items-center text-[10.334px] text-[#DA5252] font-Satoshi500"
          >
            <TimerIcon /><span class="">Anytime</span>
          </div>
        </div>
      </div>
    </div>
    <hr class="text-[#EAEAEA]" />
    <div class="flex flex-col justify-between mt-5">
      <div class="flex justify-between">
        <div>
          <p class="text-[17.633px] font-Satoshi500 text-[#244034B2]">$30-$50/hour</p>
          <div class="flex mt-1 gap-1">
            <VerifyIcon class="" />
            <p class="text-[11.633px] font-Satoshi700 text-[#000000B2]">
              Verified Client.
            </p>
          </div>
        </div>
        <button
          class="bg-[#EDF0B8] font-Satoshi500 text-[9.708px] p-3 px-6 text-[#000000] rounded-full"
        >
          FULL-TIME
        </button>
      </div>
      <div class="flex justify-between mt-7">
        <button
          @click="redirectToJobDetails(1)"
          class="bg-[#43D0DF] font-Satoshi500 text-[9.708px] p-3 px-6 text-[#000000] rounded-full"
        >
          Appy
        </button>

        <div class="flex gap-2 flex-row">
          <button class="">
            <CircleBookMarkIcon />
          </button>
          <button class="">
            <SearchIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
