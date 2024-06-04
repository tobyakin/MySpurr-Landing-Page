<script setup>
import { onMounted, ref, onUnmounted } from "vue";
import { useRoute } from "vue-router";
// import { useStore } from "@/stores/user";
import CircleBookMarkIcon from "@/components/icons/circleBookMarkIcon.vue";
import { storeToRefs } from "pinia";
import SearchIcon from "@/components/icons/circleSearchIcon.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import Loader from "@/components/UI/Loader/Loader.vue";
import { useRouter } from "vue-router";

// import CircleTick from "@/components/icons/circleTick.vue";
import VerifyIcon from "@/components/icons/verifyIcon.vue";
// let store = useStore();
import { useJobsStore } from "@/stores/jobs";
import { useNumberFomateStore } from "@/stores/numberFomate";
import { useClipboard } from "@vueuse/core";
import { useToast } from "vue-toastification";
const toast = useToast();
const loading = ref(false);

let source = window.location.href;
const { copy, copied, isSupported } = useClipboard({ source });
const copyUrl = () => {
  if (isSupported) {
    if (copied) {
      console.log(source);
      copy(source);
      toast.success("Link Copied", {
        timeout: 4000,
      });
    }
  } else {
    toast.error("Your browser does not support Clipboard API", {
      timeout: 4000,
    });
  }
};

const store = useNumberFomateStore();

const jobsStore = useJobsStore();
const { JobDetails } = storeToRefs(jobsStore);
const route = useRoute();
// const router = useRouter();

const emit = defineEmits(["apply"]);
const apply = () => {
  emit("apply");
};
// onMounted(async () => {
//   await jobsStore.handleGetJobDetailsBySlug(route.params.slug);
// });
const router = useRouter();
const url = import.meta.env.VITE_DASHBOARD;
const redirectToJobDetails = (slug) => {
  window.open(url + `view/job/` + `${slug}`, "_blank");
};

defineProps({ singleJob: Object });
onMounted(async () => {
  loading.value = true;
  try {
    await jobsStore.handleGetJobDetailsBySlug(route.params.slug);
    loading.value = false;
  } catch (error) {
    console.error;
    loading.value = false;
  }
});
onUnmounted(() => {
  JobDetails.value = null;
});
</script>

<template>
  <div>
    <Navbar />
    <Loader v-if="loading" />

    <div v-if="!loading" class="py-20 container">
      <div class="bg-[#E9FAFB] border-[0.735px] rounded-[17.104px] lg:p-10 p-6">
        <div class="flex lg:flex-row flex-col lg:justify-normal justify-center lg:items-start items-center gap-3 w-full">
          <div               class="h-[61.011px] w-[61.011px] object-contain rounded-full"
>
            <img
              class="h-[61.011px] w-[61.011px] object-cover rounded-full"
              :src="JobDetails?.data?.company?.company_logo"
              :alt="JobDetails?.data?.company?.business_name + `logo`"
            />
          </div>
          <div class="w-full">
            <div class="flex lg:flex-row flex-col gap-4 justify-center lg:items-start items-center lg:justify-between">
              <div class=" flex flex-col lg:items-start items-center">
                <p class="text-[22.805px] font-Satoshi400 lg:text-left text-center items-center lg:items-start flex text-[#000]">
                  {{ JobDetails?.data?.company?.business_name }}
                </p>
                <div class="flex mt-1 gap-1">
                  <VerifyIcon class="w-4" />
                  <p class="text-[11.633px] font-Satoshi700 text-[#000000B2]">
                    Verified Client.
                  </p>
                </div>
              </div>
              <div>
                <div class="flex gap-2">
                  <!-- <button class="">
                    <CircleBookMarkIcon
                      class="lg:w-[44.215px] lg:h-[44.215px] h-[40px] w-[40px]"
                    />
                  </button> -->
                  <button @click="copyUrl()" class="">
                    <SearchIcon
                      class="lg:w-[44.215px] lg:h-[44.215px] h-[40px] w-[40px]"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between mt-5 lg:mt-2">
          <div
            class="flex lg:flex-row flex-col gap-6 items-center justify-between w-full lg:gap-3"
          >
            <p
              class="lg:text-[26.625px] capitalize text-[19px] font-Satoshi500 text-[#000000]"
            >
              {{ JobDetails?.data?.job_title }}
            </p>
            <button
              @click="redirectToJobDetails(JobDetails?.data?.id)"
              class="bg-[#43D0DF] font-Satoshi500 text-[12.708px] p-3 px-12 text-white btn-hover-1 rounded-full"
            >
              Sign up to apply
            </button>
          </div>
          <div class="flex lg:justify-between justify-center lg:mt-2 mt-6">
            <div class="flex gap-3 flex-wrap lg:justify-normal justify-center items-center">
              <div
                v-for="skill in JobDetails?.data?.skills"
                :key="skill"
                class="bg-[#2F929C] font-Satoshi500 text-[13.58px] capitalize p-[4px] px-6 text-[#fff] rounded-full"
              >
                {{ skill.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-[#E9FAFB] border-[0.735px] flex lg:flex-row flex-col gap-5 justify-between rounded-[17.104px] mt-10 p-6 lg:px-10"
      >
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Salary</p>
          <p class="text-[#244034] text-[14.104px] font-Satoshi500">
            {{ JobDetails?.data?.currency }}
            {{ store.abbr(JobDetails?.data?.salary_min) }}-
            {{ store.abbr(JobDetails?.data?.salary_max) }}/
            {{ JobDetails?.data?.salaray_type }}
          </p>
        </div>
        <!-- <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Expertise</p>
        <p class="text-[#244034] text-[17.104px] font-Satoshi500">
          {{ JobDetails?.data?.qualification }}
        </p>
      </div> -->
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Location</p>
          <p class="text-[#244034] text-[14.104px] font-Satoshi500">
            {{ JobDetails?.data?.state }},
            {{ JobDetails?.data?.country }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Job Type</p>
          <p class="text-[#244034] text-[14.104px] font-Satoshi500">
            {{ JobDetails?.data?.job_type }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Date</p>
          <p class="text-[#244034] text-[14.104px] font-Satoshi500">
            {{ JobDetails?.data?.date_created }}
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Experience</p>
          <p class="text-[#244034] text-[14.104px] font-Satoshi500">
            {{ JobDetails?.data?.experience }}
          </p>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row gap-8 mt-10 w-full">
        <div class="lg:w-[60%] flex flex-col gap-6 justify-between p-4">
          <div>
            <p
              v-if="JobDetails?.data?.description"
              class="text-[16.236px] text-[#000] font-Satoshi500"
            >
              Job Description
            </p>

            <div
              v-html="JobDetails?.data?.description"
              class="text-[#000]/[0.75] editor font-Satoshi400 text-[16.546px] mt-4 leading-[24.689px]"
            ></div>

            <p class="text-[16.236px] text-[#000] font-Satoshi500 !mb-4 mt-6">
              Responsibilities
            </p>
            <div
              v-html="JobDetails?.data?.responsibilities"
              class="text-[#000]/[0.75] font-Satoshi400 editor text-[16.546px] mt-4 leading-[24.689px]"
            ></div>

            <p class="text-[16.236px] text-[#000] font-Satoshi500 !mb-4 mt-6">
              Required Skills:
            </p>
            <div
              v-html="JobDetails?.data?.required_skills"
              class="text-[#000]/[0.75] font-Satoshi400 editor text-[16.546px] mt-4 leading-[24.689px]"
            ></div>

            <p
              v-if="JobDetails?.data?.benefits"
              class="text-[16.236px] text-[#000] font-Satoshi500"
            >
              Benefits:
            </p>
            <div
              v-html="JobDetails?.data?.benefits"
              class="text-[#000]/[0.75] font-Satoshi400 text-[16.546px] leading-[24.689px]"
            ></div>
          </div>
          <div>
            <button
              @click="redirectToJobDetails(JobDetails?.data?.id)"
              class="bg-[#43D0DF] font-Satoshi500 text-[12.708px] p-3 px-12 text-white btn-hover-1 rounded-full"
            >
              Sign up to apply
            </button>
          </div>
        </div>
        <div class="lg:w-[40%]">
          <div class="bg-[#E9FAFB] border-[0.735px] rounded-[17.104px] p-6">
            <p class="font-Satoshi700 text-[17.104px] text-[#31795A]/[0.70]">
              About the Company
            </p>
            <div class="flex mt-8 gap-4">
              <div>
                <img
                  class="h-[61.011px] w-[61.011px] rounded-full"
                  :src="JobDetails?.data?.company?.company_logo"
                  :alt="JobDetails?.data?.company?.business_name + `logo`"
                />
              </div>
              <div>
                <div class="flex gap-2 items-center">
                  <p class="text-[20.166px] font-Satoshi400 flex text-[#000]">
                    {{ JobDetails?.data?.company.business_name }}
                  </p>
                  <div class="flex mt-1 gap-1">
                    <VerifyIcon class="w-4" />
                    <p class="text-[10.646px] font-Satoshi700 text-[#000000B2]">
                      Verified Client.
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 flex-wrap mt-2 items-center">
                  <div
                    v-for="skill in JobDetails?.data?.company?.industry"
                    :key="skill"
                    class="bg-[#2F929C] font-Satoshi500 text-[8.552px] capitalize p-[4px] px-4 text-[#fff] rounded-full"
                  >
                    {{ skill.name }}
                  </div>
                </div>
              </div>
            </div>
            <div
              v-html="JobDetails?.data?.company.about_business"
              class="text-[#000]/[0.75] editor font-Satoshi400 text-[12.546px] mt-6 leading-[24.689px]"
            ></div>
            <hr class="border-[#2C4C50] border-[1.14px] !my-[26px]" />
            <div
              class="text-[#000]/[0.75] font-Satoshi400 text-[12.546px] mt-6 leading-[24.689px]"
            >
              <p>{{ JobDetails?.data?.total_opened_jobs }} Jobs opened</p>
            </div>

            <hr class="border-[#2C4C50] border-[1.14px] !my-[26px]" />
            <div class="flex rounded-[17.104px] !mb-4 gap-6">
              <div class="flex flex-col gap-2">
                <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">
                  Completed Jobs
                </p>
                <p class="text-[#244034] text-[17.104px] font-Satoshi500">
                  {{ JobDetails?.data?.completed_jobs }}
                </p>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Hired Jobs</p>
                <p class="text-[#244034] text-[17.104px] font-Satoshi500">
                  {{ JobDetails?.data?.hired_jobs }}
                </p>
              </div>
            </div>
            <!-- <button
              class="bg-[#31795A] rounded-full p-2 px-10 font-Satoshi500 text-[16.646px] text-white"
            >
              Message
            </button> -->
          </div>
        </div>
      </div>
      <WorkFlow />
    </div>

    <Footer />
  </div>
</template>
