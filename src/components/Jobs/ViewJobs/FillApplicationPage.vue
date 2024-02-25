<script setup>
import { onMounted, reactive, ref, computed, watch } from 'vue'
import { useJobsStore } from '@/stores/jobs'
import VerifyIcon from '@/components/icons/verifyIcon.vue'
import LinkIcon from '@/components/icons/linkIcon.vue'
import CloudUploadIcon from '@/components/icons/cloudUploadIcon.vue'
import GlobalInput from '@/components/ui/Form/Input/GlobalInput.vue'
import { storeToRefs } from 'pinia'
const JobsStore = useJobsStore()
import { useRoute } from 'vue-router'
const { singleJob } = storeToRefs(JobsStore)
const route = useRoute()
import { useUserProfile } from '@/stores/profile'
import { useTabStore } from '@/stores/tab'

const store = useTabStore()

// const { jobApplicationForm } = storeToRefs(JobsStore);
const emit = defineEmits(['back', 'next'])
let profile = useUserProfile()
const userDetails = computed(() => {
  return profile.user.data
})
const showDateInput = ref(false)
let onButton1 = ref(false)
let onButton3 = ref(false)
let onButton4 = ref(false)
let onButton5 = ref(false)
let onButton5Val = ref(0)
let onButton2 = ref(false)
let toDisable = ref(true)
const jobApplicationForm = reactive({
  job_id: route.params.id,
  rate: '',
  available_start: '',
  resume: `https://www.myspurr.net/${userDetails.value?.first_name}/${userDetails.value?.uniqueId}`,
  other_file: null,
  question_answers: Array.from({ length: singleJob.value?.data?.questions.length }, () => ({
    answer: ''
  }))
})
// const answers = ref(
//   Array.from({ length: singleJob.value?.data?.questions.length }, () => ({ answer: "" }))
// );

const toggleDateInput = () => {
  jobApplicationForm.available_start = ''
  showDateInput.value = !showDateInput.value
}
const handleButtonClick = (value) => {
  showDateInput.value = false
  jobApplicationForm.available_start = value
}

const uploadedImageName = ref('')

const uploadFile = (event) => {
  const file = event.target.files[0]

  if (file) {
    const reader = new FileReader()

    reader.onload = () => {
      jobApplicationForm.other_file = reader.result // Extract base64 data
      uploadedImageName.value = file.name
    }

    reader.readAsDataURL(file)
  } else {
    jobApplicationForm.other_file = ''
  }
}
const handleJobApplication = async () => {
  let payload = {
    job_id: jobApplicationForm.job_id,
    rate: jobApplicationForm.rate.toString(),
    available_start: jobApplicationForm.available_start,
    resume: jobApplicationForm.resume,
    other_file: jobApplicationForm.other_file,
    question_answers: jobApplicationForm.question_answers
  }
  try {
    const res = await JobsStore.applyForJob(jobApplicationForm.job_id, payload)
    if (res.status === 'true') {
      next()
    }
    return res
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  jobApplicationForm.rate = finalTotal.value

  watch(finalTotal, (newFinalTotal) => {
    jobApplicationForm.rate = newFinalTotal
    console.log(jobApplicationForm.rate)
  })
})

const disable = computed(() => {
  return onButton1.value || onButton2.value || onButton3.value || onButton4.value || onButton5.value
})

watch(
  () => [onButton1.value, onButton2.value, onButton3.value, onButton4.value, onButton5.value],
  () => {
    toDisable.value =
      onButton1.value || onButton2.value || onButton3.value || onButton4.value || onButton5.value
    console.log(toDisable.value)
  }
)

const buttons = reactive({
  1: { price: 10, active: false },
  2: { price: 20, active: false },
  3: { price: 50, active: false },
  4: { price: 100, active: false }
})

const toggleButton = (buttonId) => {
  buttons[buttonId].active = !buttons[buttonId].active
  onButton5.value = false
}

const totalPrice = computed(() => {
  let total = 0
  for (const button of Object.values(buttons)) {
    if (button.active) {
      total += button.price
    }
  }
  return total
})

const finalTotal = computed(() => {
  const value = onButton5.value ? onButton5Val.value : totalPrice.value
  return parseInt(value)
})

const resetButton = () => {
  for (const button of Object.values(buttons)) {
    if (button.active) {
      button.active = false
    }
  }
  onButton1.value = false
  onButton2.value = false
  onButton3.value = false
  onButton4.value = false
  onButton5.value = true
}

const back = () => {
  emit('back')
}
const next = () => {
  emit('next')
}
onMounted(async () => {
  await JobsStore.getSingleJob(route.params.id)
  await profile.userProfile()
})
</script>

<template>
  <div>
    <div class="bg-[#E9FAFB] border-[0.735px] rounded-[17.104px] lg:p-10 p-6">
      <div class="flex lg:flex-row flex-col gap-3 w-full">
        <div>
          <img
            class="h-[57.102px] w-[57.102px] object-cover rounded-full"
            :src="singleJob?.data?.company?.company_logo"
            alt=""
          />
        </div>
        <div class="w-full">
          <div class="flex lg:flex-row flex-col gap-4 justify-between">
            <div class="">
              <p class="text-[17.435px] font-Satoshi400 flex text-[#000]">
                {{ singleJob?.data?.company?.business_name }}
              </p>
              <div class="flex mt-1 gap-1">
                <VerifyIcon class="w-4" />
                <p class="text-[12.781px] font-Satoshi700 text-[#000000B2]">Verified Client.</p>
              </div>
            </div>
            <div class="flex flex-col justify-between">
              <div
                class="flex lg:flex-row flex-col gap-6 items-center justify-between w-full lg:gap-3"
              >
                <p class="lg:text-[26.625px] text-[19px] font-Satoshi500 text-[#000000]">
                  {{ singleJob?.data?.job_title }}
                </p>
              </div>
              <div class="flex justify-between lg:mt-2 mt-6">
                <div class="flex gap-3 flex-wrap items-center">
                  <div
                    v-for="skill in singleJob?.data?.skills"
                    :key="skill"
                    class="bg-[#2F929C] font-Satoshi500 text-[7.58px] capitalize p-[4px] px-6 text-[#fff] rounded-full"
                  >
                    {{ skill.name }}
                  </div>
                </div>
              </div>
            </div>
            <div class="items-center flex">
              <div class="flex flex-row gap-3">
                <button
                  @click="back"
                  class="bg-[#43D0DF] font-Satoshi500 uppercase lg:w-auto w-full text-[9.708px] p-3 lg:px-8 text-[#000000] rounded-full"
                >
                  back
                </button>
                <button
                  :disabled="!disable"
                  @click="handleJobApplication()"
                  :class="!disable ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#43D0DF]'"
                  class="font-Satoshi500 uppercase text-[9.708px] p-3 lg:px-8 lg:w-auto w-full text-[#000000] rounded-full"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="bg-[#E9FAFB] border-[0.735px] flex lg:flex-row flex-col gap-5 justify-between rounded-[17.104px] mt-10 p-6 lg:px-10"
    >
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Salary</p>
        <p class="text-[#244034] text-[13.076px] font-Satoshi500">
          {{ store.abbr(singleJob?.data?.salary_min) }}-
          {{ store.abbr(singleJob?.data?.salary_max) }}/
          {{ singleJob?.data?.salaray_type }}
        </p>
      </div>
      <!-- <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Expertise</p>
        <p class="text-[#244034] text-[13.076px] font-Satoshi500">Intermediate</p>
      </div> -->
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Location</p>
        <p class="text-[#244034] text-[13.076px] font-Satoshi500">
          {{ singleJob?.data?.state }},
          {{ singleJob?.data?.country }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Job Type</p>
        <p class="text-[#244034] text-[13.076px] font-Satoshi500">
          {{ singleJob?.data?.job_type }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Date</p>
        <p class="text-[#244034] text-[13.076px] font-Satoshi500">
          {{ singleJob?.data?.date_created }}
        </p>
      </div>
      <div class="flex flex-col gap-2">
        <p class="text-[#244034c5] text-[13.076px] font-Satoshi400">Experience</p>
        <p class="text-[#244034] text-[13.076px] font-Satoshi500">
          {{ singleJob?.data?.experience }}
        </p>
      </div>
    </div>
    <p class="text-[36.637px] font-Satoshi400 text-[#244034] !my-6">Fill out your Application</p>
    <div class="flex flex-col gap-4 lg:flex-row mt-10 w-full">
      <div class="lg:w-[40%] flex flex-col gap-6">
        <div class="border-[1.137px] bg-[#FFFFFD] rounded-[11.367px] border-[#254035]/[0.6] p-4">
          <p class="text-[17.887px] font-Satoshi500 text-[#000]">Profile URL</p>
          <div class="bg-[#EDF0B8] p-2 flex relative overflow-hidden rounded-[5.982px] mt-3">
            <span class="text-[15.495px] font-Satoshi500 text-[#01272C] flex overflow-x-hidden"
              >https://www.myspurr.net/{{ userDetails?.first_name.substring(0, 4) + '..' }}/{{
                userDetails?.uniqueId.substring(0, 4) + '..'
              }}</span
            >
            <div class="bg-[#2C4C50] p-2 absolute right-1 top-1 flex items-start rounded-full">
              <LinkIcon />
            </div>
          </div>
        </div>
        <div class="border-[1.137px] bg-[#FFFFFD] rounded-[11.367px] border-[#254035]/[0.6] p-4">
          <p class="text-[17.887px] font-Satoshi500 text-[#000] leading-[22.621px]">
            What is your
            <span class="lowercase">{{ singleJob?.data?.salaray_type }}</span> rate for this job?
          </p>
          <span class="text-[#DA5252] text-[13.165px] font-Satoshi500 leading-[25.232px]"
            >Client budget: {{ store.abbr(singleJob?.data?.salary_min) }}-{{
              store.abbr(singleJob?.data?.salary_max)
            }}
          </span>
          <div class="flex-col justify-between gap-2 w-full">
            <div class="flex flex-wrap lg:gap-3 justify-between mt-4">
              <button
                @click="(onButton1 = !onButton1), toggleButton(1)"
                :class="{
                  'bg-brand text-white': onButton1,
                  'bg-[#ffffff] text-[#2540358C]': !onButton1
                }"
                class="border-[1.261px] border-[#25403559] font-Satoshi500 text-[14.26px] rounded-[6.303px] p-2"
              >
                $10
              </button>
              <button
                @click="(onButton2 = !onButton2), toggleButton(2)"
                :class="{
                  'bg-brand text-white': onButton2,
                  'bg-[#ffffff] text-[#2540358C]': !onButton2
                }"
                class="border-[1.261px] border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
              >
                $20
              </button>
              <button
                @click="(onButton3 = !onButton3), toggleButton(3)"
                :class="{
                  'bg-brand text-white': onButton3,
                  'bg-[#ffffff] text-[#2540358C]': !onButton3
                }"
                class="border-[1.261px] border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
              >
                $30
              </button>
              <button
                @click="(onButton4 = !onButton4), toggleButton(4)"
                :class="{
                  'bg-brand text-white': onButton4,
                  'bg-[#ffffff] text-[#2540358C]': !onButton4
                }"
                class="border-[1.261px] border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
              >
                $100
              </button>
              <button
                @click="(onButton5 = !onButton5), resetButton()"
                :class="{
                  'bg-brand text-white': onButton5,
                  'bg-[#ffffff] text-black': !onButton5
                }"
                class="border-[1.261px] border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
              >
                Custom
              </button>
            </div>
            <GlobalInput type="number" v-show="onButton5" v-model="onButton5Val" class="mt-2" />
          </div>
        </div>
        <div class="border-[1.137px] bg-[#FFFFFD] rounded-[11.367px] border-[#254035]/[0.6] p-4">
          <p class="text-[17.887px] font-Satoshi500 text-[#000] leading-[22.621px]">
            When are you available to start?
          </p>
          <div class="flex gap-3 justify-between mt-4">
            <button
              @click="handleButtonClick('Right away')"
              :class="{
                'bg-brand text-white': jobApplicationForm.available_start === 'Right away'
              }"
              class="border-[1.261px] w-full border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
            >
              Right away
            </button>
            <button
              @click="handleButtonClick('After 2 weeks')"
              :class="{
                'bg-brand text-white': jobApplicationForm.available_start === 'After 2 weeks'
              }"
              class="border-[1.261px] w-full border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
            >
              After 2 weeks
            </button>
          </div>
          <div class="flex gap-3 justify-between mt-4">
            <button
              @click="toggleDateInput"
              :class="{
                'bg-brand !text-white': showDateInput
              }"
              class="border-[1.261px] w-full border-[#25403559] font-Satoshi500 text-[#2540358C] text-[14.26px] rounded-[6.303px] p-2"
            >
              After this specific date
            </button>
          </div>
          <GlobalInput
            v-if="showDateInput"
            v-model="jobApplicationForm.available_start"
            type="date"
            class="mt-2"
          />
        </div>
        <!-- <div
          class="border-[1.137px] bg-[#FFFFFD] rounded-[11.367px] border-[#254035]/[0.6] p-4"
        >
          <p class="text-[17.887px] font-Satoshi500 text-[#000]">
            Add your booking meeting url
          </p>
          <div class="bg-[#EDF0B8] flex relative overflow-hidden rounded-[5.982px] mt-3">
            <GlobalInput
              inputClasses="bg-transparent flex w-full !py-[7px] !px-[4px]  border-none"
              placeholder="link"
              type="text"
            />

            <div
              class="bg-[#2C4C50] p-2 absolute right-1 top-1 flex items-start rounded-full"
            >
              <LinkIcon />
            </div>
          </div>
        </div> -->
        <div
          class="border-[1.137px] bg-[#FFFFFD] rounded-[11.367px] border-[#254035]/[0.6] py-10 p-4"
        >
          <p class="text-[17.887px] font-Satoshi500 text-[#000]">
            Attach relevant files or specific portfolio?
          </p>
          <label
            for="upload_file"
            class="bg-[#EDF0B8] border-dashed cursor-pointer border-[#254035AB] border-[1.789px] p-2 py-6 flex flex-col text-center relative rounded-[5.982px] mt-3"
          >
            <div class="flex flex-col" v-if="!jobApplicationForm.other_file">
              <p class="font-Satoshi500 text-[12.3px] text-[#000]">
                Drag and Drop file or <span class="underline">Browse</span>
              </p>
              <p class="text-[#000000] text-[8.516px] font-Satoshi500">
                Attach up to 3 files, max 10MB each. A cover letter is not required
              </p>
              <CloudUploadIcon class="mx-auto mt-4" />
            </div>
            <span v-else>{{ uploadedImageName }} </span>
          </label>
          <input
            type="file"
            name=""
            @change="uploadFile"
            ref="previewImage"
            accept=".doc,.docx,.jpg,.png,.pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            hidden
            id="upload_file"
          />
        </div>
      </div>

      <div class="lg:w-[60%] flex flex-col gap-4">
        <div
          v-for="(question, index) in singleJob?.data?.questions"
          :key="question"
          class="border-[1.137px] bg-[#FFFFFD] h-full w-full rounded-[11.367px] border-[#254035]/[0.6] p-4"
        >
          <p class="text-[#2F929C] font-Satoshi500 !my-2 text-[13.552px]">
            Please answer this question from the Client
          </p>
          <div class="w-full editor">
            <p v-html="question.question" class="text-[16.311px] font-Satoshi500 text-[#000]"></p>
          </div>
          <hr class="border-[#254035AB] border-[0.596px] !my-3" />
          <textarea
            v-model="jobApplicationForm.question_answers[index].answer"
            class="w-full outline-none text-[15.816px] h-[46%] font-Satoshi500 text-[#97A6A8]"
            name=""
            placeholder="Type answer here"
            id=""
            cols="30"
            rows="6"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
