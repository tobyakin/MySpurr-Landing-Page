<script setup>
import CalenderIcon from '@/components/icons/outlineCalenderIcon.vue'
import LocationIcon from '@/components/icons/locationIcon.vue'
import TimerIcon from '@/components/icons/timerIcon.vue'
</script>
<template>
  <div class="border-[#254035AB] border-[0.735px] rounded-[7.347px] p-4">
    <div class="flex items-center gap-3 mb-5">
      <img src="@/assets/image/jobIcon.svg" alt="" />
      <div class="flex justify-between items-center w-full">
        <p class="text-[13.021px] font-Satoshi500 text-[#2F929C]">MySpurr</p>
        <button
          class="bg-[#EDF0B8] font-Satoshi500 text-[9.708px] p-3 px-6 text-[#000000] rounded-full"
        >
          FREELANCE
        </button>
      </div>
    </div>
    <hr class="text-[#EAEAEA]" />
    <div class="flex flex-col justify-between mt-5">
      <div class="flex justify-between">
        <div class="flex flex-col gap-2">
          <p class="!text-[20.419px] font-Satoshi500 text-[#000000]">Snr Developer</p>
          <div class="flex gap-2">
            <div class="flex gap-1 text-[10.334px] text-[#DA5252] font-Satoshi500">
              <CalenderIcon /><span class="py-[0.25px]">30 hrs/week</span>
            </div>
            <div class="flex gap-[2px] text-[10.334px] text-[#DA5252] font-Satoshi500">
              <LocationIcon /><span class="py-[0.25px]">Work from anywhere</span>
            </div>
            <div class="flex gap-1 text-[10.334px] text-[#DA5252] font-Satoshi500">
              <TimerIcon /><span class="py-[0.25px]">Anytime</span>
            </div>
          </div>
        </div>
        <div>
          <p class="text-[8.988px] font-Satoshi500 text-[#244034B2]">$30-$50/hour</p>
        </div>
      </div>
      <div class="flex gap-4 !my-[17.512px]">
        <button
          class="bg-[#FBEEEE] font-Satoshi500 text-[9.708px] p-2 px-6 text-[#000000] rounded-full"
        >
          FREELANCE
        </button>
        <button
          class="bg-[#FBEEEE] font-Satoshi500 text-[9.708px] p-2 px-6 text-[#000000] rounded-full"
        >
          FREELANCE
        </button>
      </div>
      <div class="flex flex-col gap-2 items- text-left mt-[2px]">
        <div class="bg-[#E6F1F3] rounded-lg w-full">
          <div
            :style="`width: ${parseInt((50 / 100) * 100)}%`"
            class="h-[7px] rounded-lg bg-[#2B8C97]"
          ></div>
        </div>
        <p class="text-[10.252px] font-Satoshi500 leading-[15.6px] text-[#000000]">
          5 Applied <span class="text-[#6C8285]">of 10 Capacity</span>
        </p>
      </div>
    </div>
  </div>
</template>
