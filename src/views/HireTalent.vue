<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, computed, reactive, ref, watch, onUnmounted } from "vue";
import { useHead } from "@vueuse/head";
import { storeToRefs } from "pinia";
import GoPro from "@/components/Bander/GoPro.vue";
import Arrow from "@/components/icons/paginationArrow.vue";
import JobCard from "@/components/Job/JobCard.vue";
import Subscribe from "@/components/Bander/Subscribe.vue";
import { useTalentsStore } from "@/stores/talents";
import { useSkillsStore } from "@/stores/skills";
import FormGroup from "@/components/Form/Input/FormGroup.vue";
// import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
// import FormSelectGroup from "@/components/Form/Input/SelectGroup.vue";
// import Label from "@/components/Form/Input/Label.vue";
import Loader from "@/components/UI/Loader/Loader.vue";
import { useRoute, useRouter } from "vue-router";
import filterBtnIcon from "@/components/icons/filterBtnIcon.vue";

const talentsStore = useTalentsStore();
const { talent } = storeToRefs(talentsStore);
const skillsStore = useSkillsStore();
const { states, countries, skills } = storeToRefs(skillsStore);
const siteData = reactive({
  title: `MySpurr | Hire talent`,
  description: ``,
});
const category = ref('')
const location = ref('')
const keyword = ref('')
const route = useRoute()
const showMobFilter = ref(false)
const country = ref('Nigeria')
const router = useRouter()

useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      property: "keywords",
      content: "",
    },
  ],
});

let isLoading = ref(false);
let rateMin = ref(null);
let rateMax = ref(null);
let range = ref([rateMin.value, rateMax.value]);

const updateRange = (value) => {
  rateMin.value = value[0];
  rateMax.value = value[1];
};

// Define variables and functions for search and filtering

const filterOptions = reactive({
  name: "",
  skills: "",
  location: "",
  expertLevel: "",
  qualification: "",
  candidateType: ""
});

const querySearch = ()=>{
  if(route.query.category && category.value !== "Job Categories"){
    filterOptions.candidateType = category.value;
  }
  if(route.query.location && location.value !== "Select Location"){
     filterOptions.location = location.value;
  }
  if(route.query.keyword && keyword.value !== undefined && keyword.value.length > 0){
    filterOptions.name = keyword.value;
  }  
}

const filters = computed(() => ({
  search: filterOptions.name,
  skill: filterOptions.skills !== "Search Skill Categories" ? filterOptions.skills : "",
  location: filterOptions.location !== "Select State"  ? filterOptions.location : "",
  experience: filterOptions.expertLevel !== "Experience" && typeof filterOptions.expertLevel === "string" ? filterOptions.expertLevel : "",
  qualification: filterOptions.qualification !== "Qualification" && typeof filterOptions.qualification === "string" ? filterOptions.qualification : "",
  employment_type: typeof filterOptions.candidateType === 'string' && filterOptions.candidateType !== "Candidate Type"? filterOptions.candidateType : "",
  salary_min: rateMin.value || "",
  salary_max: rateMax.value || ""
}));  

const handleFilter = async () => {
  isLoading.value = true;
  scrollToTop()
  try {
    await talentsStore.allTalents(1, filters.value);
    isLoading.value = false;
  } catch (error) {
    console.error(error);
    isLoading.value = false;
  } finally {
    isLoading.value = false;
  }
};

watch([
  () => filterOptions.name, 
  () => filterOptions.skills, 
  () => filterOptions.location, 
  () => filterOptions.expertLevel, 
  () => filterOptions.qualification, 
  () => filterOptions.candidateType, 
  () => rateMin.value, 
  () => rateMax.value
], async () => {
  await handleFilter();
});

const showFilter = ()=>{
  showMobFilter.value = !showMobFilter.value
  const screenWidth = window.innerWidth

  // if (screenWidth <= 1160) {
  //   filterOptions.expertLevel = "Experience";
  //   filterOptions.qualification = "Qualification";
  //   filterOptions.candidateType = "Candidate Type";
  // } else {
  //   filterOptions.expertLevel = "";
  //   filterOptions.qualification = "";
  //   filterOptions.candidateType = "";
  // }
}

const handleScreenResize = (event) => {
  if (event.matches) {
    filterOptions.expertLevel = "Experience";
    filterOptions.qualification = "Qualification";
    filterOptions.candidateType = "Candidate Type";
  } else {
    filterOptions.expertLevel = "";
    filterOptions.qualification = "";
    filterOptions.candidateType = "";
  }
};

const toggleFilter = ()=>{
  showMobFilter.value = false
}

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

// Define a ref to keep track of the current page
const currentPage = ref(1);

// Create a computed property to access the talent data
const talentData = computed(() => talent.value?.data || []);

// Create a computed property to access the pagination data
const pagination = computed(() => talent.value?.pagination || {});

// Create a computed property to paginate the talent data
const paginatedTalent = computed(() => {
  const perPage = pagination.value?.per_page;
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return talentData.value?.slice(startIndex, endIndex);
});

const totalPages = computed(() => Math.ceil(pagination.value.last_page));

// Function to change the current page
const setPage = (page) => {
  if (page >= 1 && page <= (pagination.value.last_page || 1)) {
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

// You can also watch the currentPage to react to page changes
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scrolling effect
  });
}

watch(currentPage, async (newPage) => {
  scrollToTop()
  isLoading.value = true
  await talentsStore.allTalents(newPage, filters.value);
  isLoading.value = false
});

const rates = computed(()=>{
  return talent.value?.data?.filter(talent => talent.rate !== "").map(talent => parseFloat(talent.rate)) || [];
})

const highestRate = computed(() => Math.max(...(rates.value.length ? rates.value : [0])));
const lowestRate = computed(() => Math.min(...(rates.value.length ? rates.value : [0])));

const resetFilters = () => {
  filterOptions.name = "";
  filterOptions.skills = "Search Skill Categories";
  filterOptions.location = "Select State";
  filterOptions.expertLevel = "";
  filterOptions.qualification = "";
  filterOptions.candidateType = "";
  rateMin.value = "";
  rateMax.value = "";
  category.value = "";
  location.value = "";
  keyword.value = "";

  router.push({
    name: 'hire-talent',
    query: {}
  });

  if(showMobFilter.value){
    showMobFilter.value = false
  }
};

const isFilter = computed(()=>{
  const screenWidth = window.innerWidth
  if(screenWidth <= 1160){
    return filterOptions.name.length > 0 || filterOptions.skills !== "Search Skill Categories" || filterOptions.location !== "Select State" || filterOptions.expertLevel !== "Experience" || filterOptions.qualification !== "Qualification" || filterOptions.candidateType !== "Candidate Type" || rateMax.value || rateMin.value
  } else {
    return filterOptions.name.length > 0 || filterOptions.skills !== "Search Skill Categories" || filterOptions.location !== "Select State" || filterOptions.expertLevel.length > 0 || filterOptions.qualification.length > 0 || filterOptions.candidateType?.length > 0 || rateMin.value?.length > 0 || rateMax.value?.length > 0 || keyword.value?.length > 0 || rateMax.value || rateMin.value || location.value?.length > 0 && location.value !== "Select Location" || category.value?.length > 0 && category.value !== "Job Categories"
  }
})

const CandidateType = ["Freelance", "Full-time", "Part-time", "Internship", "Contract"];
const qualification = ["Certificate", "Bachelors", "Masters ", "Doctorate "];
const Experience = [
  { name: "Beginner", year: "(1-2 yrs)" },
  { name: "Intermediate", year: "(3-5 yrs)" },
  { name: "Expert", year: "(6-10 yrs)" },
  { name: "More than", year: " 10yrs" },
];

const selectExperienceLevel = (level) => { 
  if (filterOptions.expertLevel === level) {
    filterOptions.expertLevel = '';
  } else {
    filterOptions.expertLevel = level;
  }
};

const selectQualification = (item) => {
  if (filterOptions.qualification === item) {
    filterOptions.qualification = '';
  } else {
    filterOptions.qualification = item;
  }
};

const selectCandidateType = (item) => {
  if (filterOptions.candidateType === item) {
    filterOptions.candidateType = '';
  } else {
    filterOptions.candidateType = item;
  }
};

const getCountryCode = async ()=>{
  let payload = country.value
  await skillsStore.handleGetStates(payload)
}

onMounted(async()=>{
  const mediaQuery = window.matchMedia('(max-width: 1160px)');
  mediaQuery.addEventListener('change', handleScreenResize);

  handleScreenResize(mediaQuery);

  onUnmounted(() => {
    mediaQuery.removeEventListener('change', handleScreenResize);
  });

  filterOptions.location = "Select State"
  filterOptions.skills = "Search Skill Categories"
  let payload = "NG"
  await skillsStore.handleGetStates(payload);
  await skillsStore.getCountriesCode();
  await skillsStore.getSkills();
})

onMounted(async () => {
  category.value = route.query.category
  location.value = route.query.location
  keyword.value = route.query.keyword
  try {
    isLoading.value = true;
    querySearch();
      await talentsStore.allTalents(1, filters.value);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    throw error;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <div class="relative">
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
                v-model="filterOptions.name"
                labelClasses="font-Satoshi500 text-[1.52rem]"
                label=""
                name="Name"
                placeholder="Search by keywords"
                type="text"
                inputClasses="w-full mt-2 font-light font-Satoshi400 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
              ></FormGroup>
              <div>
                <label for="location" class="font-Satoshi500 !text-[1rem]">Skills Categories</label>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="filterOptions.skills"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                  >
                    <option disabled value="Search Skill Categories" class="text-[1rem] font-Satoshi500">Search Skill Categories</option>
                    <option v-for="skill in skills?.data" :key="skill.id" :value="skill.name" 
                    class="text-[0.88rem]"
                    >
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
                    v-model="filterOptions.location"
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
                        :checked="filterOptions.expertLevel === item?.name"
                       
                        class="w-[1.55156rem] h-[1.55156rem] rounded-[0.2865rem] border-[1.528px] border-[#0000001a] bg-[#fff] cursor-pointer"
                        @change="selectExperienceLevel(item.name)"
                      />
                      <span>{{ item.name }} {{ item.year }} years</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-[0.5rem] w-full text-left">
                <Label class="font-Satoshi500 !text-[1rem]">Qualification</Label>
                <div
                  class="w-full flex flex-col searchBreak:flex-row searchBreak:flex-wrap gap-[0rem] mob:gap-[0.5rem]"
                >
                  <div 
                    class="font-light font-Satoshi400 opacity-[0.8029] text-[0.88rem] flex items-center gap-[1.05rem] leading-[2.387rem] text-[#000000]"
                    v-for="item in qualification"
                    :key="item"
                  >
                    <label class="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        :value="item"
                        :checked="filterOptions.qualification === item"
                       
                        class="w-[1.55156rem] h-[1.55156rem] rounded-[0.2865rem] border-[1.528px] border-[#0000001a] bg-[#fff] cursor-pointer"
                        @change="selectQualification(item)"
                      />
                      <span>{{ item }}</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div class="flex flex-col justify-center">
                  <Label class="font-Satoshi500 !text-[1rem]">Hourly fees (Min-Max)</Label>
                  <div class="flex items-center gap-1 mt-2">
                    <div class="flex w-[70%] gap-[0.48rem] items-center">
                      <input
                        class="font-light font-Satoshi400 !p-2 border-[#0000001a] border-[1.528px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem] min-w-[2.961rem] flex-1"
                        type="number"
                        v-model="rateMin"
                        id="start"
                      />
                      <div class="h-[2px] w-4 bg-black"></div>
                      <input
                        class="font-light font-Satoshi400 !p-2 border-[#0000001a] border-[1.528px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem] min-w-[2.961rem] flex-1"
                        type="number"
                        v-model="rateMax"
                        id="end"
                      />
                    </div>
                    <span class="text-[#000] font-Satoshi400 text-[1rem] leading-[1.91rem]">USD</span>
                  </div>
                </div>
                <div class="flex mt-[0.97rem]">
                  <input 
                  type="range" 
                  v-model="rateMin" 
                  max="250" 
                  :min="lowestRate" 
                  class="w-full range-slider cursor-pointer" @input="handleMinPrice" />
                  <input 
                  type="range" 
                  v-model="rateMax" 
                  max="250" 
                  :min="lowestRate" 
                  class="w-full range-slider cursor-pointer" @input="handleMaxPrice" />
                </div>
              </div>
              <div class="flex flex-col gap-[0.5rem] w-full text-left">
                <Label class="font-Satoshi500 !text-[1rem]">Employment Type</Label>
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
                        :checked="filterOptions.candidateType === item"
                       
                        class="w-[1.55156rem] h-[1.55156rem] rounded-[0.2865rem] border-[1.528px] border-[#0000001a] bg-[#fff] cursor-pointer"
                        @change="selectCandidateType(item)"
                      />
                      <span>{{ item }}</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex gap-12">
              <button
                @click="resetFilters"
                class="bg-[#31795A] text-white w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex btn-hover-2"
              >
                Reset Filter
              </button>
            </div>
          </div>
        </div>
        <div class="!w-full">
          <GoPro />
          <div class="!mb-10 flex items-center justify-between">
            <button 
            @click="showFilter"
            class="items-center gap-[0.71rem] bg-[#31795A] text-[#fff] px-8 py-6 rounded-[2.4375rem] w-[9rem] btn-hover-2 hidden searchBreak:flex mob:py-4">
              <filterBtnIcon />
              <span class="text-[1.13638rem] mob:text-[1rem] font-Satoshi500 leading-[ 2.55681rem]">Filter</span>
            </button>
            <div>
              <p class="text-[#00000066] font-Satoshi400 text-[1.49rem] mob:text-[1.2rem]" v-if="!isFilter">
                All
                <span class="text-[#000000] font-Satoshi500">{{talent?.pagination?.total}}</span>
                candidates found
              </p>
              <p v-else class="text-[#00000066] font-Satoshi400 text-[1.49rem] mob:text-[1.2rem]">
                All
                <span v-if="talent?.data?.length > 0" class="text-[#000000] 
                font-Satoshi500">
                  {{talent?.data?.length}}
                </span>
                <span v-else class="text-[#000000] 
                font-Satoshi500">0</span> candidates found
              </p>
            </div>
          </div>
          <div v-if="talent?.data?.length < 1" class="w-full h-[20rem] grid place-items-center">
            <h3>Sorry!! There are no talents matching your search parameters at this moment</h3>
          </div>
           <div>
            <div v-if="!isLoading">
              <div v-if="!talent?.data" class="mt-14 flex flex-col gap-8">
                <JobCard
                  class="w-full"
                  v-for="item in paginatedTalent"
                  :key="item"
                  :talent="item"
                />
              </div>
              <div v-else class="mt-14 flex flex-col gap-8">
                <JobCard class="w-full" v-for="item in talent?.data" :key="item" :talent="item" />
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
           </div>
           
          <Loader v-if="isLoading" class="!flex !items-start !justify-center"/>
        </div>
      </div>
      <Subscribe class="mt-[18.83rem] !mb-14" />
      <div class="mobile_filter fixed bottom-0 left-0 w-full overflow-y-auto hidden searchBreak:block transitionItem"
      :class="showMobFilter? 'h-[70vh]': 'h-0'"
      >
        <section class="pb-[5.83rem] pt-[2rem] px-[1.94rem] bg-[#E9FAFB] rounded-t-[1.42044rem]">
          <div class="mb-[3rem] flex justify-end">
            <button class="border-gray-300 border p-[0.5rem] font-Satoshi700 cursor-pointer bg-[#fff] hover:scale-105 transitionItem" @click="toggleFilter">X</button>
          </div>
          <div class="w-[80%] mob:w-[90%] mx-auto flex flex-col gap-[2.1rem]">
              <FormGroup
                  v-model="filterOptions.name"
                  labelClasses="font-Satoshi500 text-[1.52rem]"
                  label=""
                  name="Name"
                  placeholder="Search by keywords"
                  type="text"
                  inputClasses="w-full mt-2 font-light font-Satoshi400 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-t-[6.828px] text-[0.88rem]"
                  >
              </FormGroup>

              <div>
                <label for="location" class="font-Satoshi500 !text-[1rem]">Skills Categories</label>
                <div
                  class="bg-[#fff] w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-gray-300 border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                >
                  <select
                    v-model="filterOptions.skills"
                    :bordered="false"
                    :show-arrow="false"
                    class="w-full !outline-none !px-0 cursor-pointer text-[#000000] font-Satoshi500 leading-[1.75rem]"
                    show-search
                  >
  
                    <option disabled value="Search Skill Categories" class="text-[1rem] font-Satoshi500">Search Skill Categories</option>
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
                    v-model="filterOptions.location"
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
                      v-model="filterOptions.expertLevel"
                      placeholder="Experience"
                      :bordered="false"
                      :show-arrow="false"
                      class="w-full !outline-none !px-0 cursor-pointer !text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] !bg-transparent"
                      show-search
                      
                  >
                      <option disabled value="Experience">Experience</option>
                      <option v-for="item in Experience" :key="item.name" :value="item.name">
                      {{ item.name }} {{ item.year }}
                      </option>
                  </select>
              </div>
              <div
              class="w-full font-Satoshi500 !p-0 !text-[1.13638rem] leading-[2.55681rem] text-[#000] !bg-transparent !pb-6 !border-b-2 border-[#666666]"
              >
                  <select
                      v-model="filterOptions.qualification"
                      placeholder="Qualification"
                      :bordered="false"
                      :show-arrow="false"
                      class="w-full !outline-none !px-0 cursor-pointer !text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] !bg-transparent"
                      show-search
                      
                  >
                      <option disabled value="Qualification">Qualification</option>
                      <option v-for="item in qualification" :key="item" :value="item">
                      {{ item }}
                      </option>
                  </select>
              </div>
              <div
              class="w-full font-Satoshi500 !p-0 !text-[1.13638rem] leading-[2.55681rem] text-[#000] !bg-transparent !pb-6 !border-b-2 border-[#666666]"
              >
                  <select
                      v-model="filterOptions.candidateType"
                      placeholder="Employment Type"
                      :bordered="false"
                      :show-arrow="false"
                      class="w-full !outline-none !px-0 cursor-pointer !text-[#000000] font-Satoshi500 text-[1rem] leading-[1.75rem] !bg-transparent"
                      show-search
                      
                  >
                      <option disabled value="Candidate Type">Candidate Type</option>
                      <option v-for="item in CandidateType" :key="item" :value="item">
                      {{ item }}
                      </option>
                  </select>
              </div>
              <div class="w-full">
                  <div class="flex flex-col justify-center">
                      <Label class="font-Satoshi500 !text-[1rem]leading-[2.55681rem] pt-[0.5rem]">Hourly fees (Min-Max)</Label>
                      <div class="flex items-center gap-1 mt-2">
                          <div class="flex w-[70%] gap-[0.48rem] items-center">
                              <input
                              class="font-light font-Satoshi400 !p-2 border-[#0000001a] border-[1.528px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem] min-w-[2.961rem] flex-1"
                              type="number"
                              v-model="rateMin"
                              id="start"
                              />
                              <div class="h-[2px] w-4 bg-black"></div>
                              <input
                              class="font-light font-Satoshi400 !p-2 border-[#0000001a] border-[1.528px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem] min-w-[2.961rem] flex-1"
                              type="number"
                              v-model="rateMax"
                              id="end"
                              />
                          </div>
                          <span class="text-[#000] font-Satoshi400 text-[1rem] leading-[1.91rem]">USD</span>
                      </div>
                  </div>
                  <div class="flex mt-[0.97rem]">
                      <input 
                      type="range" 
                      v-model="rateMin" 
                      max="250" 
                      :min="lowestRate" 
                      class="w-full range-slider cursor-pointer" @input="handleMinPrice" />
                      <input 
                      type="range" 
                      v-model="rateMax" 
                      max="250" 
                      :min="lowestRate" 
                      class="w-full range-slider cursor-pointer" @input="handleMaxPrice" />
                  </div>
              </div>
              <div class="flex items-center" :class="isFilter? 'gap-4': 'gap-0'">
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
                <button
                  @click="resetFilters"
                    class="bg-[#31795A] text-white w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex mt-[0.5rem] btn-hover-2"
                    v-if="isFilter"
                  >
                    Reset Filter
                  </button>
              </div>
            </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  .custom-range {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 8px;
  background: #ddd;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s; /* Smooth transition for opacity on hover */
}

.custom-range:hover {
  opacity: 1;
}

/* WebKit browsers (Chrome, Safari, etc.) */
.custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
  transition: box-shadow 0.2s ease; /* Smooth transition for shadow on hover */
}

.custom-range::-webkit-slider-thumb:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Add shadow on hover */
}

/* All Firefox */
.custom-range::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
  border-radius: 50%;
  transition: box-shadow 0.2s ease;
}

.custom-range::-moz-range-thumb:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

/* Track style for WebKit browsers */
.custom-range::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: #ddd;
  border-radius: 25px;
  transition: background 0.2s ease; /* Smooth transition for background */
}

.custom-range::-webkit-slider-runnable-track:hover {
  background: linear-gradient(90deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%);
}

/* Track style for Firefox */
.custom-range::-moz-range-track {
  width: 100%;
  height: 8px;
  cursor: pointer;
  background: #ddd;
  border-radius: 25px;
  transition: background 0.2s ease;
}

.custom-range::-moz-range-track:hover {
  background: linear-gradient(90deg, #4CAF50 0%, #8BC34A 50%, #CDDC39 100%);
}

</style>
