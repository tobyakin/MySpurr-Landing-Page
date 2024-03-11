<template>
  <div class="py-20 container">
    <div class="flex lg:flex-row flex-col justify-between">
      <h2
        class="text-dimBrand text-[43px] lg:text-[50px] !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 !mb-8"
      >
        New job listing
      </h2>
      <div class="flex items-center">
        <button
          @click="redirectToJobPage"
          class="text-[13.279px] font-Satoshi500 text-dimBrand"
        >
          Explore all jobs
        </button>
      </div>
    </div>
    <div
      v-if="!loading"
      class="grid grid-rows-1 hide-scrollbar !my-8 border-[0.83px] rounded-[8.3px] border-[#DBE8E5]"
    >
      <div
        v-for="(item, index) in Job?.data"
        :key="item.id"
        :class="item < index ? 'border-b-[0.83px] border-[#DBE8E5]' : ''"
        class="text-[#030303] p-9 flex lg:flex-row flex-col items-center gap-4 justify-between"
      >
        <div class="flex lg:flex-row flex-col lg:w-[70%] gap-[2.25rem]">
          <div class="h-[41.498px] w-[39.176px] lg:block hidden bg-[#00000033]">
            <img
              :src="item.company.logo"
              class="object-cover h-[41.498px] w-[39.176px]"
              alt=""
            />
          </div>
          <div class="flex lg:flex-row flex-col gap-[8%] w-full items-center">
            <p
              class="text-[#000000] font-Satoshi500 lg:text-left text-center text-[16.599px] leading-[26.558px]"
            >
              {{ item.job_title }}
            </p>
            <p class="text-[#43D0DF] font-Satoshi500 text-[12.449px]">
              {{ item.job_type }}
            </p>
            <p
              class="flex gap-1 items-center text-[#00000080] font-Satoshi400 text-[13.279px]"
            >
              {{ item.date_created }}
              <span class="font-Satoshi500 text-black">{{
                item.company.business_name
              }}</span>
            </p>
          </div>
        </div>
        <div
          class="flex lg:flex-row flex-col lg:w-[60%] text-center lg:text-left gap-4 lg:items-end lg:justify-end"
        >
          <div class="w-full">
            <p class="text-[#20202099] font-Satoshi400 text-[12.449px]">
              {{ item.state }} , {{ item.country }}
            </p>
            <p
              class="text-[#000000] flex flex-wrap gap-2 items-center font-Satoshi500 text-[13.279px]"
            >
              <span v-for="i in item.skills" :key="i">{{ i.name }},</span>
            </p>
          </div>
          <div class="flex items-center gap-3">
            <!-- <button class="rounded-full border-[#97A6A8] border-[0.496px] p-3">
              <BookMarkIcon />
            </button> -->
            <button class="rounded-full border-[#97A6A8] border-[0.496px] p-2">
              <ShareIcon /></button
            ><button class="btn-brand !text-[9.959px] !py-2 !px-6">APPLY</button>
          </div>
        </div>
      </div>
    </div>
    <Loader v-if="loading" />
    <div class="flex lg:justify-center pt-8">
      <div class="bg-[#EFF6F3] border-[#D6ECE0] border-[0.83px] rounded-full p-2 px-3">
        <p class="text-[13.279px] text-center font-Satoshi500 leading-[16.599px]">
          Do you want to post a job for your company?
          <span class="text-dimBrand">We can help.</span
          ><a
            :href="dashboardUrl + 'signup'"
            target="_blank"
            class="text-dimBrand font-Satoshi400 underline"
            >Click here</a
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import BookMarkIcon from "@/components/icons/bookMarkIcon.vue";
import ShareIcon from "@/components/icons/shareOutline.vue";
const router = useRouter();
import { storeToRefs } from "pinia";
import { useJobsStore } from "@/stores/jobs";
import Loader from "@/components/UI/Loader/Loader.vue";

const jobsStore = useJobsStore();
const { Job } = storeToRefs(jobsStore);
const loading = ref(false);
const dashboardUrl = import.meta.env.VITE_DASHBOARD;

const redirectToJobPage = () => {
  router.push({
    name: "jobs",
  });
};
onMounted(async () => {
  loading.value = true;
  try {
    await jobsStore.allJobs();
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
});
</script>
