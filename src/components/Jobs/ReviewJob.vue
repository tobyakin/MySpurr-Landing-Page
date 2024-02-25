<script setup>
import { defineAsyncComponent, onMounted, ref, computed, reactive, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useJobsStore } from '@/stores/jobs'
import { useStore } from '@/stores/user'
import { useUserProfile } from '@/stores/profile'
import WhiteLoader from '@/components/ui/WhiteLoader.vue'
import CenteredModalLarge from '@/components/ui/CenteredModalLarge.vue'
import { useRouter } from 'vue-router'
import CircleBookMarkIcon from '@/components/icons/circleBookMarkIcon.vue'
import SearchIcon from '@/components/icons/circleSearchIcon.vue'
import CircleTick from '@/components/icons/circleTick.vue'
import VerifyIcon from '@/components/icons/verifyIcon.vue'
let store = useStore()
let loading = ref(false)
let showModal = ref(false)
const userProfile = useUserProfile()
const userDetails = computed(() => {
  return userProfile.user.data
})
const router = useRouter()
const jobsStore = useJobsStore()
const { Job, postJobsValue, ciso, siso } = storeToRefs(jobsStore)
const emit = defineEmits(['back'])
const back = () => {
  emit('back')
}
const isFormValid = computed(() => {
  return (
    postJobsValue.value.job_title !== null &&
    postJobsValue.value.job_type.trim() !== '' &&
    postJobsValue.value.description !== null &&
    postJobsValue.value.responsibilities.trim() !== '' &&
    postJobsValue.value.required_skills !== null &&
    postJobsValue.value.benefits !== null &&
    postJobsValue.value.salaray_type !== null &&
    postJobsValue.value.salary_min !== null &&
    postJobsValue.value.salary_max !== null &&
    postJobsValue.value.skills !== null &&
    postJobsValue.value.experience !== null &&
    postJobsValue.value.qualification !== null &&
    postJobsValue.value.questions !== null &&
    ciso.value !== null &&
    siso.value.trim() !== ''
  )
})
const restForm = () => {
  ;(postJobsValue.value.job_title = ''),
    (postJobsValue.value.job_type = ''),
    (postJobsValue.value.description = ''),
    (postJobsValue.value.responsibilities = ''),
    (postJobsValue.value.required_skills = ''),
    (postJobsValue.value.benefits = ''),
    (postJobsValue.value.salaray_type = ''),
    (postJobsValue.value.salary_min = ''),
    (postJobsValue.value.salary_max = ''),
    (postJobsValue.value.skills = ''),
    (postJobsValue.value.experience = ''),
    (postJobsValue.value.qualification = ''),
    (postJobsValue.value.questions = ''),
    (ciso.value = ''),
    (siso.value = '')
}

const postJob = async () => {
  loading.value = true
  try {
    const res = await jobsStore.handlePostJob()
    if (res.status === 'true') {
      loading.value = false
      showModal.value = true
      restForm()
    } else {
      // Handle unsuccessful submission
      console.log('Login failed:', res.data.message)
      loading.value = false
      back()
    }
    loading.value = false
    return res
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}
const goToJobList = () => {
  router.push({ name: 'job-lists' })
}
</script>

<template>
  <div>
    <CenteredModalLarge v-if="showModal"
      ><div class="text-center px-10 py-10">
        <h4 class="text-[#01181B] font-Satoshi700 text-[28.537px] mt-[20px]">
          Congratulations! Your job has been successfully posted on MySpurr!
        </h4>
        <p class="text-[#01181B] text-[18px] font-Satoshi400 mt-4">
          Now, talented creatives can discover and apply for your exciting opportunity. Stay tuned
          for applications and manage your job seamlessly from your dashboard.
        </p>
        <div class="flex justify-center gap-4 mt-12">
          <button
            @click="back()"
            class="bg-[#43D0DF] font-Satoshi500 text-[14.153px] uppercase leading-[11.593px] rounded-full px-5 p-3 w-[45%]"
          >
            VIEW CANDIDATES</button
          ><button
            @click="goToJobList()"
            class="bg-[#43D0DF] font-Satoshi500 text-[14.153px] uppercase leading-[11.593px] rounded-full px-5 p-3 w-[45%]"
          >
            <span v-if="!loading">JOB LISTING </span>
            <WhiteLoader v-else />
          </button>
        </div></div
    ></CenteredModalLarge>
    <div class="bg-[#E9FAFB] border-[0.735px] rounded-[17.104px] lg:p-10 p-6">
      <div class="flex lg:flex-row flex-col gap-3 w-full">
        <div>
          <img
            class="h-[61.011px] w-[61.011px] object-contain rounded-full"
            :src="userDetails?.company_logo"
            :alt="userDetails?.business_name"
          />
        </div>
        <div class="w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between">
            <div class="">
              <p class="text-[22.805px] font-Satoshi400 flex text-[#000]">
                {{ userDetails?.business_name }}
              </p>
              <div class="flex mt-1 gap-1">
                <VerifyIcon class="w-4" />
                <p class="text-[11.633px] font-Satoshi700 text-[#000000B2]">Verified Client.</p>
              </div>
            </div>
            <div>
              <div class="flex gap-2">
                <button class="">
                  <CircleBookMarkIcon class="lg:w-[54.215px] lg:h-[54.215px] h-[40px] w-[40px]" />
                </button>
                <button class="">
                  <SearchIcon class="lg:w-[54.215px] lg:h-[54.215px] h-[40px] w-[40px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-between mt-5">
        <div class="flex lg:flex-row flex-col gap-6 items-center justify-between w-full lg:gap-3">
          <p class="lg:text-[26.625px] capitalize text-[19px] font-Satoshi500 text-[#000000]">
            {{ postJobsValue.job_title }}
          </p>
          <button
            @click="postJob"
            :disabled="!isFormValid"
            :class="!isFormValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#43D0DF]'"
            class="font-Satoshi500 text-[9.708px] uppercase p-3 px-12 text-[#000000] rounded-full"
          >
            <span v-if="!loading">Post</span>
            <WhiteLoader v-else />
          </button>
        </div>
        <div class="flex justify-between lg:mt-2 mt-6">
          <div class="flex gap-3 flex-wrap items-center">
            <div
              v-for="skill in postJobsValue.skills"
              :key="skill"
              class="bg-[#2F929C] font-Satoshi500 text-[13.24px] capitalize p-[4px] px-6 text-[#fff] rounded-full"
            >
              {{ skill.name }}
            </div>
            <!-- <div
              class="bg-[#2F929C] font-Satoshi500 text-[13.24px] capitalize p-[4px] px-6 text-[#fff] rounded-full"
            >
              Brand identity
            </div>
            <div
              class="bg-[#2F929C] font-Satoshi500 text-[13.24px] capitalize p-[4px] px-6 text-[#fff] rounded-full"
            >
              UI/UI design
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[#E9FAFB] border-[0.735px] flex lg:flex-row flex-col gap-5 justify-between rounded-[17.104px] mt-10 p-6 lg:px-10"
    >
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Salary</p>
        <p
          v-if="postJobsValue.salary_min || postJobsValue.salary_max"
          class="text-[#244034] text-[17.104px] font-Satoshi500"
        >
          {{ postJobsValue.salary_min }}-{{ postJobsValue.salary_max }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Expertise</p>
        <p class="text-[#244034] text-[17.104px] font-Satoshi500">
          {{ postJobsValue.qualification }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Location</p>
        <p
          v-if="postJobsValue.state_id || postJobsValue.country_id"
          class="text-[#244034] text-[17.104px] font-Satoshi500"
        >
          {{ postJobsValue.state_id }},{{ postJobsValue.country_id }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Job Type</p>
        <p class="text-[#244034] text-[17.104px] font-Satoshi500">
          {{ postJobsValue.job_type }}
        </p>
      </div>
      <!-- <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Date</p>
        <p class="text-[#244034] text-[17.104px] font-Satoshi500">12 jun, 2022</p>
      </div> -->
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Experience</p>
        <p class="text-[#244034] text-[17.104px] font-Satoshi500">
          {{ postJobsValue.experience }}
        </p>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row mt-10 w-full">
      <div class="lg:w-[60%] p-4">
        <p v-if="postJobsValue.description" class="text-[16.236px] text-[#000] font-Satoshi500">
          Job Description
        </p>

        <div
          v-html="postJobsValue.description"
          class="text-[#000]/[0.75] font-Satoshi400 editor text-[12.546px] mt-4 leading-[24.689px]"
        ></div>

        <p
          v-if="postJobsValue.responsibilities"
          class="text-[16.236px] text-[#000] font-Satoshi500 !mb-4 mt-6"
        >
          Responsibilities
        </p>
        <div
          v-html="postJobsValue.responsibilities"
          class="text-[#000]/[0.75] font-Satoshi400 editor text-[12.546px] mt-4 leading-[24.689px]"
        ></div>

        <p
          v-if="postJobsValue.required_skills"
          class="text-[16.236px] text-[#000] editor font-Satoshi500 !mb-4 mt-6"
        >
          Required Skills:
        </p>
        <div
          v-html="postJobsValue.required_skills"
          class="text-[#000]/[0.75] font-Satoshi400 editor text-[12.546px] leading-[24.689px]"
        ></div>

        <p v-if="postJobsValue.benefits" class="text-[16.236px] text-[#000] font-Satoshi500">
          Benefits:
        </p>
        <div
          v-html="postJobsValue.benefits"
          class="text-[#000]/[0.75] editor font-Satoshi400 text-[12.546px] leading-[24.689px]"
        ></div>
        <div>
          <!-- <button
            @click="apply"
            class="bg-[#43D0DF] font-Satoshi500 text-[9.708px] p-3 px-12 text-[#000000] rounded-full"
          >
            APPLY
          </button> -->
        </div>
      </div>
      <div class="lg:w-[40%]">
        <div class="bg-[#E9FAFB] border-[0.735px] rounded-[17.104px] p-6">
          <p class="font-Satoshi700 text-[17.104px] text-[#31795A]/[0.70]">About the Company</p>
          <div class="flex mt-8 gap-4">
            <div>
              <img
                class="h-[61.011px] w-[61.011px] rounded-full"
                :src="userDetails?.company_logo"
                :alt="userDetails?.business_name"
              />
            </div>
            <div>
              <div class="flex gap-2 items-center">
                <p class="text-[20.166px] font-Satoshi400 flex text-[#000]">
                  {{ userDetails?.business_name }}
                </p>
                <div class="flex mt-1 gap-1">
                  <VerifyIcon class="w-4" />
                  <p class="text-[10.646px] font-Satoshi700 text-[#000000B2]">Verified Client.</p>
                </div>
              </div>
              <div class="flex gap-3 flex-wrap items-center">
                <div
                  v-for="skill in postJobsValue.skills"
                  :key="skill"
                  class="bg-[#2F929C] font-Satoshi500 text-[8.552px] capitalize p-[4px] px-4 text-[#fff] rounded-full"
                >
                  {{ skill.name }}
                </div>
              </div>
            </div>
          </div>
          <div class="text-[#000]/[0.75] font-Satoshi400 text-[12.546px] mt-6 leading-[24.689px]">
            <p>
              Vibratique hubis a full service creative agency at WillowTree, you’ll give form to
              ideas by being the voice and owner of product decisions. You’ll drive the design
              direction, and then make it happen!
            </p>
            <p class="mt-4">
              We understand our responsibility to create a diverse, equitable, and inclusive place
              within the tech industry, while pushing to make our industry more representative.
            </p>
          </div>
          <hr class="border-[#2C4C50] border-[1.14px] !my-[26px]" />
          <div class="text-[#000]/[0.75] font-Satoshi400 text-[12.546px] mt-6 leading-[24.689px]">
            <p>2 Jobs opened</p>
          </div>

          <hr class="border-[#2C4C50] border-[1.14px] !my-[26px]" />
          <div class="flex rounded-[17.104px] mb-4 gap-6">
            <div class="flex flex-col gap-2">
              <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Completed Jobs</p>
              <p class="text-[#244034] text-[17.104px] font-Satoshi500">5</p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-[#244034c5] text-[17.104px] font-Satoshi400">Hired Jobs</p>
              <p class="text-[#244034] text-[17.104px] font-Satoshi500">28</p>
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
    <div class="flex justify-between gap-4 mt-12">
      <button
        @click="back"
        class="bg-[#43D0DF] font-Satoshi500 text-[14.153px] uppercase leading-[11.593px] rounded-full px-8 p-3 w-auto"
      >
        Back</button
      ><button
        @click="postJob"
        :disabled="!isFormValid"
        :class="!isFormValid ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#43D0DF]'"
        class="font-Satoshi500 text-[14px] uppercase leading-[11.593px] rounded-full px-8 p-3 w-auto"
      >
        <span v-if="!loading">Post</span>
        <WhiteLoader v-else />
      </button>
    </div>
  </div>
</template>
