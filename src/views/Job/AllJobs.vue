<script setup>
import { ref, computed, onMounted, reactive, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
// import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
import SelectGroup from "@/components/Form/Input/SelectGroup.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
// import { useStore } from "@/stores/user";
import JobRowCard from "@/components/Jobs/JobRowCard.vue";
import Arrow from "@/components/icons/paginationArrow.vue";
import { useJobsStore } from "@/stores/jobs";
import FormGroup from "@/components/Form/Input/FormGroup.vue";
import Label from "@/components/Form/Input/Label.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import { useRouter } from "vue-router";
import Loader from "@/components/UI/Loader/Loader.vue";
import { useQuery } from "vue-query";
const loading = ref(false);

const jobsStore = useJobsStore();
const { Job } = storeToRefs(jobsStore);
const router = useRouter();

// let store = useStore();

const sortInput = reactive({
  name: "",
  jobType: "",
  Location: "",
  experienceLevel: "",
  Category: "",
  currency: "",
});
let rateMin = ref(null);
let rateMax = ref(null);
let range = ref([rateMin.value, rateMax.value]);

const updateRange = (value) => {
  rateMin.value = value[0];
  rateMax.value = value[1];
};

// Create a computed property to synchronize the range with rateMin and rateMax
const computedRange = computed(() => {
  return [rateMin.value, rateMax.value];
});

// Watch for changes in the computedRange and update the range
watch(computedRange, (newRange) => {
  range.value = newRange;
});

// Watch for changes in the range and update start and end
watch(range, (newRange) => {
  updateRange(newRange);
});

const currentPage = ref(1);
const Experience = [
  { name: "Beginner ", year: "(1-2 yrs)" },
  { name: "Intermediate ", year: "(3-5 yrs)" },
  { name: "Expert ", year: "(6-10 yrs)" },
  { name: "More than", year: " 10yrs" },
];
const CandidateType = [
  "Freelance",
  "Full-time ",
  "Part-time ",
  "Internship ",
  "Contract ",
];

// Create a computed property to paginate the talent data
const paginatedTalent = computed(() => {
  const perPage = 2;
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return Job.value?.data.slice(startIndex, endIndex);
});
const totalPages = computed(() => Math.ceil(Job.value?.length / 2));

// Function to change the current page
const setPage = (page) => {
  if (page >= 1 && page <= (2 || 1)) {
    currentPage.value = page;
  }
};
const displayedPageNumbers = computed(() => {
  const maxDisplayedPages = 4;
  const startPage = Math.max(currentPage.value - Math.floor(maxDisplayedPages / 2), 1);
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages.value);
  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
});
const filteredJobs = computed(() => {
  let filtered = Job.value?.data; // Create a shallow copy of the jobs array

  // Filtering based on the search criteria
  if (sortInput.name) {
    filtered = filtered?.filter((item) =>
      item.job_title.toLowerCase().includes(sortInput.name.toLowerCase())
    );
  }
  if (sortInput.jobType) {
    filtered = filtered?.filter((item) =>
      item.job_type.toLowerCase().includes(sortInput.jobType.toLowerCase())
    );
  }

  if (sortInput.Location) {
    filtered = filtered.filter((item) =>
      item.location.toLowerCase().includes(sortInput.Location.toLowerCase())
    );
  }

  if (sortInput.experienceLevel) {
    filtered = filtered.filter((item) =>
      item.experience.toLowerCase().includes(sortInput.experienceLevel.toLowerCase())
    );
  }

  if (sortInput.Category) {
    filtered = filtered.filter((item) =>
      item.skills.some((skill) =>
        skill.name.toLowerCase().includes(sortInput.Category.toLowerCase())
      )
    );
  }
  if (sortInput.currency) {
    filtered = filtered.filter((item) =>
      item.currency.toLowerCase().includes(sortInput.currency.toLowerCase())
    );
  }

  // Filtering by Rate within the specified range
  if (rateMin.value || rateMax.value) {
    filtered = filtered.filter((item) => {
      const salaryMin = parseFloat(item.salary_min);
      const salaryMax = parseFloat(item.salary_max);
      const min =
        rateMin.value !== null ? parseFloat(rateMin.value) : Number.MIN_SAFE_INTEGER;
      const max =
        rateMax.value !== null ? parseFloat(rateMax.value) : Number.MAX_SAFE_INTEGER;

      return salaryMax >= min && salaryMin <= max;
    });
  }
  return filtered;
});
const resetFilters = () => {
  sortInput.name = "";
  sortInput.jobType = "";
  sortInput.Location = "";
  sortInput.experienceLevel = "";
  sortInput.Category = "";
  sortInput.currency = "";
  rateMin.value = "";
  rateMax.value = "";
};
// You can also watch the currentPage to react to page changes
watch(currentPage, (newPage) => {
  console.log("Current Page:", newPage);
});
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
watchEffect(() => {
  const searchQuery = router.currentRoute.value.query.search;
  if (searchQuery) {
    // Set the search query in your component's data
    sortInput.name = searchQuery;
  }
});
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <div>
        <div
          class="bg-[#F3F5CD] rounded-[14.957px] flex flex-col gap-8 p-8 lg:px-12 border-[0.491px] border-[#97A6A8]"
        >
          <div class="flex lg:flex-row flex-col gap-8">
            <FormGroup
              v-model="sortInput.name"
              labelClasses="font-Satoshi500 text-[15.606px]"
              label=" Name or Keyword"
              name="Name"
              placeholder="Name or keyword"
              type="text"
              inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            ></FormGroup>
            <FormGroup
              v-model="sortInput.Category"
              labelClasses="font-Satoshi500 text-[15.606px]"
              label=" Skill"
              name="Name"
              placeholder="Name or keyword"
              type="text"
              inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            ></FormGroup>
            <FormGroup
              v-model="sortInput.Location"
              labelClasses="font-Satoshi500 text-[15.606px]"
              label=" Location"
              name="Name"
              placeholder="Name or keyword"
              type="text"
              inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            ></FormGroup>
          </div>
          <div class="flex lg:flex-row flex-col gap-8">
            <div class="flex flex-col w-full text-left">
              <Label class="font-Satoshi500 !text-[15.606px] !mb-2">Job Type</Label>
              <div
                class="w-full font-light font-Satoshi400 bg-white !p-0 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
              >
                <a-select
                  placeholder="Job Type"
                  :bordered="false"
                  :show-arrow="false"
                  class="w-full !outline-none !px-0"
                  show-search
                  v-model:value="sortInput.jobType"
                >
                  <a-select-option disabled>Job Type</a-select-option>
                  <a-select-option
                    v-for="item in CandidateType"
                    :key="item"
                    :value="item"
                  >
                    {{ item }}
                  </a-select-option>
                </a-select>
              </div>
            </div>

            <!-- <FormGroup
              v-model="sortInput.jobType"
              labelClasses="font-Satoshi500 text-[15.606px]"
              label=" Job Type"
              name="Name"
              placeholder="Name or keyword"
              type="text"
              inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            ></FormGroup> -->
            <div class="flex flex-col w-full text-left">
              <Label class="font-Satoshi500 !text-[15.606px] !mb-2"
                >Experience Level</Label
              >
              <div
                class="w-full font-light font-Satoshi400 bg-white !p-0 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
              >
                <a-select
                  placeholder="Experience Level"
                  :bordered="false"
                  :show-arrow="false"
                  class="w-full !outline-none !px-0"
                  show-search
                  v-model:value="sortInput.experienceLevel"
                >
                  <a-select-option disabled>Experience Level</a-select-option>
                  <a-select-option
                    v-for="item in Experience"
                    :key="item"
                    :value="item.name"
                  >
                    {{ item.name }} {{ item.year }}
                  </a-select-option>
                </a-select>
              </div>
            </div>
            <!-- <FormGroup
              v-model="sortInput.experienceLevel"
              labelClasses="font-Satoshi500 text-[15.606px]"
              label=" Experience Level"
              name="Name"
              placeholder="Name or keyword"
              type="text"
              inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            ></FormGroup> -->
            <div class="w-full flex flex-row gap-1">
              <div class="flex flex-col w-full justify-center">
                <Label class="font-Satoshi500 text-[15.606px]">Rate</Label>
                <div class="flex items-center justify-center w-full gap-1 mt-2">
                  <input
                    class="w-full font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
                    type="number"
                    v-model="rateMin"
                    id="start"
                  />
                  <div class="h-[2px] w-4 bg-black"></div>
                  <input
                    class="w-full font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
                    type="number"
                    v-model="rateMax"
                    id="end"
                  />

                  <!-- <div class="w-full">
                    <SelectGroup
                      labelClasses="font-Satoshi500 hidden text-[15.606px]"
                      name="Name"
                      placeholder="currency"
                      type="text"
                      :items="['USD', 'NGN']"
                      inputClasses="w-full mt-0 font-light font-Satoshi400 bg-white !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
                    />
                  </div> -->
                </div>
              </div>
              <div class="flex flex-col w-[30%] text-left">
                <Label class="font-Satoshi500 !text-[15.606px] !mb-2">Currency</Label>
                <div
                  class="w-full font-light font-Satoshi400 bg-white !p-0 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
                >
                  <a-select
                    placeholder=" currency"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0"
                    show-search
                    v-model:value="sortInput.currency"
                  >
                    <a-select-option
                      v-for="item in ['USD', 'NGN']"
                      :key="item"
                      :value="item"
                    >
                      {{ item }}
                    </a-select-option>
                  </a-select>
                </div>
              </div>

              <div>
                <!-- <vue-slider
                  v-model="range"
                  :tooltip="'none'"
                  :enable-cross="false"
                ></vue-slider> -->
              </div>
            </div>
          </div>

          <div class="flex gap-12">
            <button
              @click="resetFilters"
              class="bg-[#31795A] text-white lg:w-[40%] text-center mx-auto border-2 p-4 py-2 justify-center rounded-full font-Satoshi500 text-[10.672px] items-center flex btn-hover-2"
            >
              Reset
            </button>
          </div>
        </div>
        <!-- <div class="mt-14 flex flex-col gap-8">
          <JobRowCard
            class="min-w-[95%] lg:min-w-[45%]"
            v-for="item in Job.data"
            :key="item"
            :job="item"
          />
        </div> -->
        <div v-if="!loading" class="mt-14 flex flex-col gap-8">
          <JobRowCard
            class="min-w-[95%] lg:min-w-[45%]"
            v-for="item in filteredJobs"
            :key="item"
            :job="item"
          />
        </div>
        <Loader v-if="loading" />

        <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
          <button
            v-for="pageNumber in displayedPageNumbers"
            :key="pageNumber"
            :class="[
              'border-[#007582] p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex',
              pageNumber === 1
                ? 'border-t-2 border-b-2 border-l-2 rounded-l-[6.032px]'
                : 'border-y-2 border-r-2',
              pageNumber === currentPage ? 'bg-[#007582] text-white' : '',
            ]"
            @click="setPage(pageNumber)"
          >
            {{ pageNumber }}
          </button>
          <button
            @click="setPage(currentPage + 5)"
            class="border-[#007582] border-r-2 border-y-2 p-4 py-2 rounded-r-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
          >
            <Arrow />
          </button>
        </div>
      </div>
      <WorkFlow />
    </div>
    <Footer />
  </div>
</template>
<style>
.vue-slider-process {
  @apply !bg-[#007582];
}
.vue-slider-dot-handle {
  @apply !border-[#007582];
}
.vue-slider-rail {
  @apply !bg-[#43D0DF];
}
</style>
