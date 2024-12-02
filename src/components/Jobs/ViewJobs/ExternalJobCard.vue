<script setup>
import CalenderIcon from "@/components/icons/outlineCalenderIcon.vue";
import LocationIcon from "@/components/icons/joblocationIcon.vue";
import SearchIcon from "@/components/icons/circleSearchIcon.vue";
import MatchIcon from "@/components/icons/matchIcon.vue";
import VerifyIcon from "@/components/icons/verifyIcon.vue";
import RatedBadge from "@/components/icons/ratedBadge.vue";
import { useRouter } from "vue-router";
import { useJobsStore } from "@/stores/jobs";
import { useToast } from "vue-toastification";
import { onMounted } from "vue";
import { useClipboard } from "@vueuse/core";
import businessIcon from "@/components/icons/businessIcon.vue";

const toast = useToast();
let store = useJobsStore();
let source = "";

const router = useRouter();

const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .trim();
};

const redirectToJobDetails = (business_name, slug) => {
  const businessNameSlug = slugify(business_name);
  router.push({ name: "job-details", params: { business_name: businessNameSlug, slug } });
};

onMounted(() => {
  source = props?.job?.link;
});

const { copy, copied, isSupported } = useClipboard({ source });

const copyUrl = () => {
  if (isSupported) {
    if (copied) {
      copy(source);
      toast.success("Job link copied", {
        timeout: 4000,
      });
    }
  } else {
    toast.error("Your browser does not support Clipboard API", {
      timeout: 4000,
    });
  }
};

// const redirectToProfile = (business_name, slug) => {
//   const businessNameSlug = slugify(business_name);
//   router.push({ name:'business-profile', params: { name: businessNameSlug, id: slug} })
// }

const props = defineProps({
  job: Object,
});
</script>
<template>
    <!-- {{ props.job }} -->
  <div
    class="border-[#254035AB] relative border-[0.735px] bg-white rounded-[7.347px] lg:p-5 p-4 lg:px-6"
  >
    <RatedBadge
      v-if="props?.job?.is_highlighted === '1'"
      class="absolute top-0 left-0 !text-[#2F929C]"
    />
    <div class="flex lg:flex-row flex-col lg:justify-normal justify-center lg:items-start items-center gap-3 w-full">
      <div
        class="!w-[4rem] h-[4rem] bg-[#EAEAEA] !rounded-[50%] overflow-hidden flex-shrink-0 grid place-items-center"
      >
      <businessIcon class="w-[2rem] h-[2rem] text-[#c6bbbb]"/>
        <!-- <img
          class="w-full h-full object-cover"
          :src="props?.job?.company?.logo"
          :alt="props?.job?.company_name"
        /> -->
      </div>
      <div class="flex-1">
        <div class="flex lg:justify-start justify-center items-center gap-1 cursor-pointer">
          <p class="text-[13.021px] font-Satoshi500 flex text-[#2F929C]">
            {{ props?.job?.company_name }}
          </p>
          <div v-if="props?.job?.verify" class="flex mt-1 gap-1">
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
              {{ props?.job?.title }}
            </p>
            <button
              class="bg-[#EDF0B8] font-Satoshi500 lg:text-[9.708px] !text-[0.975rem] py-[0.2rem] px-4 text-[#fff] rounded-full"
            >
              {{ props?.job?.job_type }}
            </button>
          </div>
          <a
            v-if="props?.job?.match"
            class="font-Satoshi500 text-[11.74px] flex items-center gap-1 text-[#000000]"
          >
            <MatchIcon />You’re a Match
          </a>
        </div>
        <div class="flex flex-col justify-between mt-5">
          <div class="flex lg:flex-row flex-col gap-4 items-center">
            <!-- <div>
              <p class="text-[1.1rem] font-Satoshi500 text-[#244034B2]">
                {{ props?.job?.currency }} {{ store.abbr(props?.job?.salary_min) }}-
                {{ store.abbr(props?.job?.salary_max) }}/
                {{ props?.job?.salaray_type }}
              </p>
            </div> -->
            <div class="flex lg:flex-row flex-col gap-2 items-center">
              <div
                class="flex gap-1 text-[10px] lg:text-[0.83rem] text-[#DA5252] items-center font-Satoshi500"
              >
                <CalenderIcon /><span class="py-[0.25px]">{{ props?.job?.date_created }}</span>
              </div>
              <div
                class="flex gap-1 text-[10px] lg:text-[0.83rem] text-[#DA5252] items-center font-Satoshi500"
              >
                <LocationIcon /><span class="py-[0.25px]"
                  >{{ props?.job?.location }}</span
                >
              </div>
              <!-- <div
                class="flex gap-1 text-[10px] lg:text-[14.334px] text-[#DA5252] items-center font-Satoshi500"
              >
                <TimerIcon /><span class="py-[0.25px]">{{ props?.job?.date_created }}</span>
              </div> -->
            </div>
          </div>
          <div class="flex lg:flex-row flex-col gap-4 justify-between mt-2">
            <div class="flex flex-wrap gap-3 lg:justify-normal justify-center items-center">
              <div
                v-for="skill in props?.job?.skills"
                :key="skill"
                class="bg-[#F2F3EF] font-Satoshi500 text-[10px] lg:text-[0.76rem] uppercase p-[4px] lg:px-6 px-4 text-[#64665D] rounded-full"
              >
                {{ skill.name }}
              </div>
            </div>

            <div
              class="flex lg:justify-normal lg:flex-row flex-col justify-between items-center gap-4"
            >
              <div class="flex items-center gap-4">
                <button class="" @click="copyUrl">
                  <SearchIcon />
                </button>
              </div>
              <a :href="props?.job?.link" target="_blank">
                  <button
                    class="font-Satoshi500 bg-[#43D0DF] !text-[0.9rem] p-[0.5rem] px-12 !text-white rounded-full btn-hover-1"
                  >
                    <span>Apply</span>
                  </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <hr class="text-[#EAEAEA]" /> -->
  </div>
</template>
