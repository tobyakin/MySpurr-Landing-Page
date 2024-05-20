<script setup>
import CalenderIcon from "@/components/icons/outlineCalenderIcon.vue";
import LocationIcon from "@/components/icons/joblocationIcon.vue";
import TimerIcon from "@/components/icons/timerIcon.vue";
import CircleBookMarkIcon from "@/components/icons/circleBookMarkIcon.vue";
import SearchIcon from "@/components/icons/circleSearchIcon.vue";
import MatchIcon from "@/components/icons/matchIcon.vue";
import VerifyIcon from "@/components/icons/verifyIcon.vue";
import RatedBadge from "@/components/icons/ratedBadge.vue";
import { useRouter } from "vue-router";
import { useJobsStore } from "@/stores/jobs";
let store = useJobsStore();

const router = useRouter();

const redirectToJobDetails = (slug) => {
  router.push({ name: "job-details", params: { slug } });
};
defineProps({
  job: Object,
});
</script>
<template>
  <div
    class="border-[#254035AB] relative border-[0.735px] bg-white rounded-[7.347px] lg:p-5 p-4 lg:px-6"
  >
    <RatedBadge
      v-if="job.is_highlighted === '1'"
      class="absolute top-0 left-0 !text-red-600"
    />

    <div class="flex lg:flex-row flex-col lg:justify-normal justify-center lg:items-start items-center gap-3 w-full">
      <div
        class="w-[71.011px] h-[61.011px] bg-[#EAEAEA] rounded-full flex justify-center items-center object-contain"
      >
        <img
          class="h-[61.011px] w-[61.011px] object-cover rounded-full"
          :src="job?.company.logo"
          :alt="job?.company.business_name"
        />
      </div>
      <div class="w-full">
        <div class="flex lg:justify-start justify-center items-center gap-1">
          <p class="text-[13.021px] font-Satoshi500 flex text-[#2F929C]">
            {{ job?.company.business_name }}
          </p>
          <div v-if="job?.verify" class="flex mt-1 gap-1">
            <VerifyIcon class="w-4" />
            <p class="text-[11.633px] font-Satoshi700 text-[#000000B2]">
              Verified Client.
            </p>
          </div>
        </div>
        <div class="flex flex-col lg:flex-row items-center lg:justify-between justify-center w-full gap-3">
          <div
            class="flex items-center w-full lg:w-auto lg:justify-normal justify-center gap-2 lg:gap-14"
          >
            <p class="text-[13.021px] font-Satoshi500 text-[#000000]">
              {{ job?.job_title }}
            </p>
            <button
              class="bg-[#EDF0B8] font-Satoshi500 lg:text-[9.708px] text-[6px] p-2 lg:px-6 text-[#000000] rounded-full"
            >
              {{ job?.job_type }}
            </button>
          </div>
          <a
            v-if="job?.match"
            class="font-Satoshi500 text-[11.74px] flex items-center gap-1 text-[#000000]"
          >
            <MatchIcon />You’re a Match
          </a>
        </div>
        <div class="flex flex-col justify-between mt-5">
          <div class="flex lg:flex-row flex-col gap-4 items-center">
            <div>
              <p class="text-[17.633px] font-Satoshi500 text-[#244034B2]">
                {{ job?.currency }} {{ store.abbr(job?.salary_min) }}-
                {{ store.abbr(job?.salary_max) }}/
                {{ job?.salaray_type }}
              </p>
            </div>
            <div class="flex lg:flex-row flex-col gap-2 items-center">
              <div
                class="flex gap-1 text-[10px] lg:text-[14.334px] text-[#DA5252] items-center font-Satoshi500"
              >
                <CalenderIcon /><span class="py-[0.25px]">{{ job?.date_created }}</span>
              </div>
              <div
                class="flex gap-1 text-[10px] lg:text-[14.334px] text-[#DA5252] items-center font-Satoshi500"
              >
                <LocationIcon /><span class="py-[0.25px]"
                  >{{ job?.state }}, {{ job?.country }}</span
                >
              </div>
              <!-- <div
                class="flex gap-1 text-[10px] lg:text-[14.334px] text-[#DA5252] items-center font-Satoshi500"
              >
                <TimerIcon /><span class="py-[0.25px]">{{ job?.date_created }}</span>
              </div> -->
            </div>
          </div>
          <div class="flex lg:flex-row flex-col gap-4 justify-between mt-2">
            <div class="flex flex-wrap gap-3 lg:justify-normal justify-center items-center">
              <div
                v-for="skill in job?.skills"
                :key="skill"
                class="bg-[#F2F3EF] font-Satoshi500 text-[10px] lg:text-[12.135px] uppercase p-[4px] lg:px-6 px-4 text-[#64665D] rounded-full"
              >
                {{ skill.name }}
              </div>
            </div>

            <div
              class="flex lg:justify-normal lg:flex-row flex-col justify-between items-center gap-4"
            >
              <div class="flex items-center gap-4">
                <button class="">
                  <SearchIcon />
                </button>
              </div>
              <button
                @click="redirectToJobDetails(job?.slug)"
                class="font-Satoshi500 bg-[#43D0DF] uppercase text-[9.708px] p-3 px-12 text-white rounded-full btn-hover-1"
              >
                <span>APPLY</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <hr class="text-[#EAEAEA]" /> -->
  </div>
</template>
