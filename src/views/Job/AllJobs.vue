<script setup>
import { ref, computed, onMounted, reactive, watch, watchEffect } from "vue";
import { storeToRefs } from "pinia";
// import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
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
const loading = ref(false);
import { useSkillsStore } from "@/stores/skills";
import filterBtnIcon from "@/components/icons/filterBtnIcon.vue";

const jobsStore = useJobsStore();
const { Job } = storeToRefs(jobsStore);
const router = useRouter();
const skillsStore = useSkillsStore();
const { states, countries, skills } = storeToRefs(skillsStore);
const country = ref('Nigeria')
const showMobFilter = ref(false)

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

const selectCandidateType = (item) => {
  if (sortInput.jobType === item) {
    sortInput.jobType = '';
  } else {
    sortInput.jobType = item;
  }
};

const selectExperienceLevel = (level) => {
  if (sortInput.experienceLevel === level) {
    sortInput.experienceLevel  = '';
  } else {
    sortInput.experienceLevel  = level;
  }
};

const showFilter = ()=>{
  showMobFilter.value = !showMobFilter.value

  if (showMobFilter.value) {
    sortInput.experienceLevel = "Experience";
    sortInput.jobType = "Job Type";
  } else {
    sortInput.experienceLevel = "";
    sortInput.candidateType = "";
  }
}

const toggleFilter = ()=>{
  showMobFilter.value = false
}

const filteredJobs = computed(() => {
  let filtered = Job.value?.data; // Create a shallow copy of the jobs array

  // Filtering based on the search criteria
  if (sortInput.name) {
    filtered = filtered?.filter((item) =>
      item.job_title.toLowerCase().includes(sortInput.name.toLowerCase())
    );
  }
  if (sortInput.jobType && typeof sortInput.jobType === 'string' && sortInput.jobType !== "Job Type") {
    filtered = filtered?.filter((item) => {
      const itemJobType = item.job_type.toLowerCase().trim();
      const inputJobType = sortInput.jobType.toLowerCase().trim();
      
      if(itemJobType.includes(inputJobType)) {
        return item;
      }
    });
  }

  if (sortInput.Location && sortInput.Location !== "Select State") {
    filtered = filtered?.filter((item) => {
      const itemLocation = item.state.toLowerCase().trim();
      const inputLocation = sortInput.Location.toLowerCase().trim();
      
      if(itemLocation.includes(inputLocation)) {
        return item;
      }
    });
  }

  if (sortInput.experienceLevel && typeof sortInput.experienceLevel === 'string' && sortInput.experienceLevel !== "Experience") {
    filtered = filtered?.filter((item) => {
      const itemExperience = item.experience.toLowerCase().trim();
      const inputExperience = sortInput.experienceLevel.toLowerCase().trim();
      
      if(itemExperience.includes(inputExperience)) {
        return item;
      }
    });
  }

  if (sortInput.Category && sortInput.Category !== "Search Skills") {
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
  sortInput.Location = "Select State";
  sortInput.experienceLevel = "";
  sortInput.Category = "Search Skills";
  sortInput.currency = "";
  rateMin.value = "";
  rateMax.value = "";
};

const isFilter = computed(()=>{
  if(showMobFilter.value){
    return sortInput.name.length > 0 || sortInput.Location !== "Select State" || sortInput.experienceLevel !== "Experience" || sortInput.jobType !== "Candidate Type" || sortInput.Category !== "Search Skills"
  } else {
    return sortInput.name.length > 0 || sortInput.Location !== "Select State" || sortInput.experienceLevel.length > 0 || sortInput.jobType?.length > 0 || rateMin.value?.length > 0 || rateMax.value?.length > 0 || sortInput.Category !== "Search Skills"
  }
})

// const totalPages = computed(() => Math.ceil(Job.value?.length / 2));
const totalPages = computed(() => Math.ceil(filteredJobs.value?.length / 25));

// Function to change the current page
const setPage = (page) => {
  if (page >= 1 && page <= ( totalPages.value || 1)) {
    currentPage.value = page;
  }
};
const displayedPageNumbers = computed(() => {
  const maxDisplayedPages = 5;
  const startPage = Math.max(currentPage.value - Math.floor(maxDisplayedPages / 2), 1);
  const endPage = Math.min(startPage + maxDisplayedPages - 1, totalPages.value);
  const pageNumbers = [];

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return pageNumbers;
});

function getFilteredJobs(){
  return filteredJobs.value
}

const paginatedJobs = computed(() => {
  const perPage = 25;
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return filteredJobs.value?.slice(startIndex, endIndex);
});
// You can also watch the currentPage to react to page changes
watch(currentPage, (newPage) => {
  console.log("Current Page:", newPage);
});
onMounted(async () => {
  loading.value = true;
  try {
    await jobsStore.allJobs();
    getFilteredJobs()
    loading.value = false;
  } catch (error) {
    console.error(error);
    loading.value = false;
  }
});
watchEffect(() => {
  const searchQuery = router.currentRoute.value.query.search;
  if (searchQuery) {
    sortInput.name = searchQuery;
  }
});

const getCountryCode = async ()=>{
  let payload = country.value
  await skillsStore.handleGetStates(payload)
}

onMounted(async()=>{
  sortInput.Location = "Select State"
  sortInput.Category = "Search Skills"
  let payload = "NG"
  await skillsStore.handleGetStates(payload);
  await skillsStore.getCountriesCode()
  await skillsStore.getSkills();
})


</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 mob:pt-8 w-[90%] mx-auto">
      <div class="flex gap-[3.69rem] searchBreak:flex-col">
        <div class="searchBreak:hidden">
          <h1 class="font-Satoshi500 text-[#000000] text-[2rem] leading-[3.44rem]">Filter By</h1>
          <div
           class="bg-[#E9FAFB] rounded-[14.957px] flex flex-col gap-3 lg:gap-5 p-8 lg:px-10 px-8 md:px-10 border-[0.491px] border-[#97A6A8] h-fit w-[23rem] searchBreak:w-full mt-[1.75rem]"
          >
            <div class="flex flex-col gap-4">
              <FormGroup
                v-model="sortInput.name"
                labelClasses="font-Satoshi500 !text-[1rem]"
                label=""
                name="Name"
                placeholder="Search by keywords"
                type="text"
                inputClasses="w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
              ></FormGroup>
             
              <div>
                <label for="location" class="font-Satoshi500 !text-[1rem]">Skills</label>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="sortInput.Category"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                  >
  
                    <option disabled value="Search Skills" class="text-[1rem] font-Satoshi500">Search Skills</option>
                    <option v-for="skill in skills?.data" :key="skill.id" :value="skill.name" class="text-[0.88rem]">
                      {{ skill.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label for="location" class="font-Satoshi500 !text-[1rem]">Location</label>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="country"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                    @change="getCountryCode"
                  >
                    <option disabled value="Nigeria" class="text-[1rem] font-Satoshi500">Nigeria</option>
                    <option v-for="country in countries?.data" :key="country.id" :value="country.iso2" 
                    class="text-[0.88rem]"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </div>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="sortInput.Location"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                  >
  
                    <option disabled value="Select State" class="text-[1rem] font-Satoshi500">Select State</option>
                    <option v-for="state in states?.data" :key="state.id" :value="state.name" class="text-[0.88rem]">
                      {{ state.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="flex flex-col gap-[0.5rem] w-full text-left">
                <Label class="font-Satoshi500 !text-[1rem]">Job Type</Label>
                <div
                  class="w-full flex flex-col searchBreak:flex-row searchBreak:flex-wrap gap-[0rem] mob:gap-[0.5rem]"
                >
                  <div 
                    class="font-light font-Satoshi400 opacity-[0.8029] text-[0.88rem] flex items-center gap-[1.05rem] leading-[2.387rem] text-[#000000]"
                    v-for="item in CandidateType"
                    :key="item"
                  >
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        :value="item"
                        :checked="sortInput.jobType === item"
                        v-model="sortInput.jobType"
                        class="w-[1.55156rem] h-[1.55156rem] rounded-[0.2865rem] border-[1.528px] border-[#0000001a] bg-[#fff] cursor-pointer"
                        @change="selectCandidateType(item)"
                      />
                      <span>{{ item }}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="flex flex-col gap-[0.5rem] w-full text-left">
                <Label class="font-Satoshi500 !text-[1rem]">Experience</Label>
                <div
                  class="w-full flex flex-col searchBreak:flex-row searchBreak:flex-wrap gap-[0rem] searchBreak:gap-[0.5rem]"
                >
                  <div 
                    class="font-light font-Satoshi400 opacity-[0.8029] text-[0.88rem] flex items-center gap-[1.5rem] leading-[2.387rem] text-[#000000]"
                    v-for="item in Experience"
                    :key="item.name"
                  >
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        :value="item?.name"
                        :checked="sortInput.experienceLevel === item?.name"
                        v-model="sortInput.experienceLevel"
                        class="w-[1.55156rem] h-[1.55156rem] rounded-[0.2865rem] border-[1.528px] border-[#0000001a] bg-[#fff] cursor-pointer"
                        @change="selectExperienceLevel(item.name)"
                      />
                      <span>{{ item.name }} ({{ item.year }} years)</span>
                    </label>
                  </div>
                </div>
              </div>

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
              </div>
            </div>
            <div class="flex gap-12">
              <button
                @click="resetFilters"
                class="bg-[#31795A] text-white w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex btn-hover-2"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
        <div class="w-full">
          <div>
            <button 
            @click="showFilter"
            class="items-center gap-[0.71rem] bg-[#31795A] text-[#fff] px-8 py-6 rounded-[2.4375rem] w-[9rem] btn-hover-2 hidden searchBreak:flex mob:py-4">
              <filterBtnIcon />
              <span class="text-[1.13638rem] mob:text-[1rem] font-Satoshi500 leading-[ 2.55681rem]">Filter</span>
            </button>
          </div>
          <div v-if="filteredJobs?.length < 1" class="w-full h-[20rem] grid place-items-center">
            <h3>Sorry!! There are no jobs matching your search parameters at this moment</h3>
          </div>
          <div v-else>
            <div v-if="!loading">
              <div class="mt-14 flex flex-col gap-8">
                <JobRowCard
                  class="min-w-[95%] lg:min-w-[45%]"
                  v-for="item in paginatedJobs"
                  :key="item"
                  :job="item"
                />
              </div>
              <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
              <button
                @click="setPage(currentPage - 1)"
                class="border-[#007582] border-l-2 border-r-2 border-y-2 p-4 py-2 rounded-l-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
              >
                <Arrow class="rotate-[180deg]"/>
              </button>
              <button
                v-for="pageNumber in displayedPageNumbers"
                :key="pageNumber"
                :class="[
                  'border-[#007582] p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex border-y-2 border-r-2',
                  pageNumber === currentPage ? 'bg-[#007582] text-white' : '',
                ]"
                @click="setPage(pageNumber)"
              >
                {{ pageNumber }}
              </button>
              <button
                @click="setPage(currentPage + 1)"
                class="border-[#007582] border-r-2 border-y-2 p-4 py-2 rounded-r-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
              >
                <Arrow />
              </button>
              </div>
            </div>
            <div v-if="loading" class="w-[100%]">
              <Loader v-if="loading" class="!flex !items-start !justify-center"/>
            </div>
          </div>
        </div>
      </div>
      <WorkFlow />
      <div class="mobile_filter fixed bottom-0 left-0 w-full overflow-y-auto hidden searchBreak:block transitionItem"
      :class="showMobFilter? 'h-[70vh]': 'h-0'"
      >
        <section class="pb-[5.83rem] pt-[2rem] px-[1.94rem] bg-[#E9FAFB] rounded-t-[1.42044rem]">
          <div class="mb-[3rem] flex justify-end">
            <button class="border-gray-300 border p-[0.5rem] font-Satoshi700 cursor-pointer bg-[#fff] hover:scale-105 transitionItem" @click="toggleFilter">X</button>
          </div>
          <div class="w-[80%] mob:w-[90%] mx-auto flex flex-col gap-[2.1rem]">
              <FormGroup
                  v-model="sortInput.name"
                  labelClasses="font-Satoshi500 text-[1.52rem]"
                  label=""
                  name="Name"
                  placeholder="Search by keywords"
                  type="text"
                  inputClasses="w-full mt-2 font-light font-Satoshi400 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-t-[6.828px] text-[0.88rem]"
                  >
              </FormGroup>
              <div>
                <label for="location" class="font-Satoshi500 !text-[1rem]">Skills</label>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="sortInput.Category"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                  >
  
                    <option disabled value="Search Skills" class="text-[1rem] font-Satoshi500">Search Skills</option>
                    <option v-for="skill in skills?.data" :key="skill.id" :value="skill.name" class="text-[0.88rem]">
                      {{ skill.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div>
                <label for="location" class="font-Satoshi500 !text-[1rem]">Location</label>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="country"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                    @change="getCountryCode"
                  >
                    <option disabled value="Nigeria" class="text-[1rem] font-Satoshi500">Nigeria</option>
                    <option v-for="country in countries?.data" :key="country.id" :value="country.iso2" 
                    class="text-[0.88rem]"
                    >
                      {{ country.name }}
                    </option>
                  </select>
                </div>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="sortInput.Location"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                  >
                    <option disabled value="Select State" class="text-[1rem] font-Satoshi500">Select State</option>
                    <option v-for="state in states?.data" :key="state.id" :value="state.name" class="text-[0.88rem]">
                      {{ state.name }}
                    </option>
                  </select>
                </div>
              </div>

              <div
              class="w-full font-Satoshi500 !p-0 !text-[1.13638rem] leading-[2.55681rem] text-[#000] !bg-transparent !pb-6 !border-b-2 border-[#666666]"
              >
                  <select
                      v-model="sortInput.experienceLevel"
                      placeholder="Experience"
                      :bordered="false"
                      :show-arrow="false"
                      class="w-full !outline-none !px-0 cursor-pointer !text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] !bg-transparent"
                      show-search
                      
                  >
                      <option disabled value="Experience">Experience</option>
                      <option v-for="item in Experience" :key="item.name" :value="item.name">
                      {{ item.name }} ({{ item.year }})
                      </option>
                  </select>
              </div>
              <div
              class="w-full font-Satoshi500 !p-0 !text-[1.13638rem] leading-[2.55681rem] text-[#000] !bg-transparent !pb-6 !border-b-2 border-[#666666]"
              >
                  <select
                      v-model="sortInput.jobType"
                      placeholder="Employment Type"
                      :bordered="false"
                      :show-arrow="false"
                      class="w-full !outline-none !px-0 cursor-pointer !text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] !bg-transparent"
                      show-search
                      
                  >
                      <option disabled value="Job Type">Job Type</option>
                      <option v-for="item in CandidateType" :key="item" :value="item">
                      {{ item }}
                      </option>
                  </select>
              </div>

              <button
                @click="toggleFilter"
                  class="bg-[#31795A] text-white w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex mt-[0.5rem]"
                  :class="
                    !isFilter
                      ? 'bg-gray-300 cursor-not-allowed'
                      : 'bg-[#31795A] btn-hover-2'
                  "
                >
                  Apply Filter
                </button>
            </div>
        </section>
      </div>
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
