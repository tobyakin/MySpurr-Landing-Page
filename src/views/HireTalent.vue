<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, computed, reactive, ref, watch } from "vue";
import { useHead } from "@vueuse/head";
import { storeToRefs } from "pinia";
import GoPro from "@/components/Bander/GoPro.vue";
import Arrow from "@/components/icons/paginationArrow.vue";
import JobCard from "@/components/Job/JobCard.vue";
import Subscribe from "@/components/Bander/Subscribe.vue";
import { useTalentsStore } from "@/stores/talents";
import FormGroup from "@/components/Form/Input/FormGroup.vue";
// import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/antd.css";
// import FormSelectGroup from "@/components/Form/Input/SelectGroup.vue";
// import Label from "@/components/Form/Input/Label.vue";
import Loader from "@/components/UI/Loader/Loader.vue";
import { useRoute } from "vue-router";
import filterBtnIcon from "@/components/icons/filterBtnIcon.vue";


const talentsStore = useTalentsStore();
const { talent } = storeToRefs(talentsStore);
const siteData = reactive({
  title: `MySpurr | Hire talent`,
  description: ``,
});
const category = ref('')
const location = ref('')
const keyword = ref('')
const route = useRoute()
const showMobFilter = ref(false)

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

// Define variables and functions for search and filtering
const filterOptions = reactive({
  name: "",
  skills: "",
  location: "",
  expertLevel: "",
  qualification: "",
  candidateType: ""
});

let isLoading = ref(false);
let rateMin = ref(null);
let rateMax = ref(null);
let range = ref([rateMin.value, rateMax.value]);

const updateRange = (value) => {
  rateMin.value = value[0];
  rateMax.value = value[1];
};

const showFilter = ()=>{
  showMobFilter.value = !showMobFilter.value

  if (showMobFilter.value) {
    filterOptions.expertLevel = "Experience";
    filterOptions.qualification = "Qualification";
    filterOptions.candidateType = "Candidate Type";
  } else {
    filterOptions.expertLevel = "";
    filterOptions.qualification = "";
    filterOptions.candidateType = "";
  }
}

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
watch(currentPage, async (newPage) => {
  await talentsStore.allTalents(newPage);
});

const rates = computed(()=>{
  return talent.value?.data?.filter(talent => talent.rate !== "").map(talent => parseFloat(talent.rate)) || [];
})

const highestRate = computed(() => Math.max(...(rates.value.length ? rates.value : [0])));
const lowestRate = computed(() => Math.min(...(rates.value.length ? rates.value : [0])));
 

// const highestRate = computed(()=> Math.max(...rates.value))
// const lowestRate = computed(()=> Math.min(...rates.value))

const filteredJobs = computed(() => {
  let filtered = talent.value?.data; // Create a shallow copy of the jobs array

  // let filterOptions = filterOptions

  // Filtering based on the search criteria
  if (filterOptions.name) {
    filtered = filtered?.filter((item) =>
      item?.first_name?.toLowerCase().includes(filterOptions?.name?.toLowerCase())
    );
  }
  if (filterOptions.skills) {
    filtered = filtered?.filter((item) =>
      item.skill_title.toLowerCase().includes(filterOptions.skills.toLowerCase())
    );
  }

  if (filterOptions.location) {
    filtered = filtered?.filter((item) =>
      item?.location?.toLowerCase().includes(filterOptions?.location?.toLowerCase())
    );
  }

  if (filterOptions.candidateType && typeof filterOptions.candidateType === 'string' && filterOptions.candidateType !== "Candidate Type") {
    filtered = filtered?.filter((item) =>
      item.employment_type
        .toLowerCase()
        .includes(filterOptions.candidateType.toLowerCase())
    );
  }

  if (filterOptions.expertLevel && typeof filterOptions.expertLevel === 'string' && filterOptions.expertLevel !== "Experience") {
    filtered = filtered?.filter((item) => {
        if(item.experience_level.toLowerCase() === filterOptions.expertLevel.toLowerCase()){
        return item
      }
    })
  }

  if (filterOptions.qualification && typeof filterOptions.qualification === 'string' && filterOptions.qualification !== "Qualification") {
    filtered = filtered?.filter((item) =>
      item.highest_education
        .toLowerCase()
        .includes(filterOptions.qualification.toLowerCase())
    );
  }

  // Filtering by Rate within the specified range
  if (rateMin.value || rateMax.value) {
    filtered = filtered?.filter((item) => {
      const rate = parseFloat(item.rate);
      const min = rateMin.value ? parseFloat(rateMin.value) : Number.MIN_SAFE_INTEGER;
      const max = rateMax.value ? parseFloat(rateMax.value) : Number.MAX_SAFE_INTEGER;

      return rate >= min && rate <= max;
    });
  }
  return filtered;
});


const resetFilters = () => {
  filterOptions.name = "";
  filterOptions.skills = "";
  filterOptions.location = "";
  filterOptions.expertLevel = "";
  filterOptions.qualification = "";
  filterOptions.candidateType = "";
  rateMin.value = "";
  rateMax.value = "";
  category.value = "";
  location.value = "";
  keyword.value = "";
};

const isFilter = computed(()=>{
  if(showMobFilter.value){
    return filterOptions.name.length > 0 || filterOptions.skills.length > 0 || filterOptions.location.length > 0 || filterOptions.expertLevel !== "Experience" || filterOptions.qualification !== "Qualification" || filterOptions.candidateType !== "Candidate Type"
  } else {
    return filterOptions.name.length > 0 || filterOptions.skills.length > 0 || filterOptions.location.length > 0 || filterOptions.expertLevel.length > 0 || filterOptions.qualification.length > 0 || filterOptions.candidateType?.length > 0 || rateMin.value?.length > 0 || rateMax.value?.length > 0 || category.value?.length > 0 || location.value?.length > 0 || keyword.value?.length > 0
  }
})

const querySearch = ()=>{
  if(category.value !== "Job Categories"){
    filterOptions.candidateType = category.value || "";
  }
  if(location.value !== "Select Location"){
     filterOptions.location = location.value || "";
  }
  if(keyword.value !== undefined && keyword.value.length > 0){
    filterOptions.name = keyword.value || "";
  }
   
}

onMounted(async () => {
  category.value = route.query.category
  location.value = route.query.location
  keyword.value = route.query.keyword
  querySearch()
  try {
    isLoading.value = true;
    await talentsStore.allTalents(currentPage.value);
    isLoading.value = false;
  } catch (error) {
    isLoading.value = false;
    throw error;
  } finally {
    isLoading.value = false;
  }
});
// const getTalentsData = async (page) => {
//   let response = await talentsStore.allTalents(page);
//   return response;
// };

// const { isLoading } = useQuery(["talents"], getTalentsData, {
//   retry: 10,
//   staleTime: 10000,
//   onSuccess: (data) => {
//     talent.value = data;
//   },
// });
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
              <FormGroup
                v-model="filterOptions.skills"
                labelClasses="font-Satoshi500 !text-[1rem]"
                label=" Skills"
                name="Name"
                placeholder="Graphics Design"
                type="text"
                inputClasses="w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
              ></FormGroup>
              <FormGroup
                v-model="filterOptions.location"
                labelClasses="font-Satoshi500 !text-[1rem]"
                label=" Location"
                name="Name"
                placeholder="Abuja. Nigeria"
                type="text"
                inputClasses="w-full mt-[0.5rem] font-light font-Satoshi500 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
              ></FormGroup>
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
                        v-model="filterOptions.expertLevel"
                        class="w-[1.55156rem] h-[1.55156rem] rounded-[0.2865rem] border-[1.528px] border-[#0000001a] bg-[#fff] cursor-pointer"
                        @change="selectExperienceLevel(item.name)"
                      />
                      <span>{{ item.name }} ({{ item.year }} years)</span>
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
                        v-model="filterOptions.qualification"
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
                    <!-- <div class="w-full">
                      <SelectGroup
                        labelClasses="font-Satoshi500 hidden text-[15.606px]"
                        name="Name"
                        placeholder="currency"
                        type="text"
                        :items="['USD', 'NGN']"
                        inputClasses="w-full mt-0 font-light font-Satoshi400 bg-white !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[0.88rem]"
                      />
                    </div> -->
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
                    <!-- <input 
                      type="range" 
                      v-model="rateMin" 
                      :min="lowestRate"
                      :max="highestRate" 
                      step="1"
                      class="mt-[0.97rem] w-full cursor-pointer rotate-[180deg]"
                    />
                    <input 
                      type="range" 
                      v-model="rateMax" 
                      :max="highestRate"
                      :min="lowestRate" 
                      step="1"
                      class="mt-[0.97rem] w-full cursor-pointer"
                    /> -->
                    <!-- <vue-slider
                  v-model="range"
                  :tooltip="'none'"
                  :enable-cross="false"
                ></vue-slider> -->

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
                        v-model="filterOptions.candidateType"
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
                <span v-if="filteredJobs?.length > 0" class="text-[#000000] 
                font-Satoshi500">
                  {{filteredJobs?.length}}
                </span>
                <span v-else class="text-[#000000] 
                font-Satoshi500">0</span>
                candidates found
              </p>
            </div>
          </div>
          <!-- <div class="!my-10">
            <p class="text-[#00000066] font-Satoshi400 text-[23.998px]">
              All
              <span v-if="filteredJobs?.length > 0">
                {{filteredJobs?.length}}
              </span>
              <span v-else class="text-[#000000] 
              font-Satoshi500">0</span>
              candidates found from <span class="text-[#000000] font-Satoshi500">{{talent?.pagination?.total}}</span>
            </p>
          </div> -->
          <!-- <PagePreLoader /> -->
           <!-- <div v-if="isFilterApplied" class="mt-14 flex flex-col gap-8">
            <JobCard class="w-full" v-for="item in mobFilteredJobs" :key="item" :talent="item" />
           </div> -->
           
             <div v-if="!filteredJobs && isLoading" class="mt-14 flex flex-col gap-8">
               <JobCard
                 class="w-full"
                 v-for="item in paginatedTalent"
                 :key="item"
                 :talent="item"
               />
             </div>
             <div v-else class="mt-14 flex flex-col gap-8">
               <JobCard class="w-full" v-for="item in filteredJobs" :key="item" :talent="item" />
             </div>
           
          <Loader v-if="isLoading" class="!flex !items-start !justify-center"/>
    
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
      <Subscribe class="mt-[18.83rem] !mb-14" />
      <div class="mobile_filter fixed bottom-0 left-0 w-full overflow-y-auto hidden searchBreak:block transitionItem"
      :class="showMobFilter? 'h-[70vh]': 'h-0'"
      >
        <section class="py-[5.83rem] px-[1.94rem] bg-[#E9FAFB] rounded-t-[1.42044rem]">
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
              <FormGroup
                  v-model="filterOptions.skills"
                  labelClasses="font-Satoshi500 !text-[1rem]"
                  label=" Skills"
                  name="Skills"
                  placeholder="Graphics Design"
                  type="text"
                  inputClasses="w-full mt-[0.5rem] font-light font-Satoshi400 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-t-[6.828px] text-[0.88rem]"
                  >
              </FormGroup>
      
              <FormGroup
                  v-model="filterOptions.location"
                  labelClasses="font-Satoshi500 !text-[1rem]"
                  label=" Location"
                  name="Location"
                  placeholder="Abuja. Nigeria"
                  type="text"
                  inputClasses="w-full mt-[0.5rem] font-light font-Satoshi500 !p-4 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-t-[6.828px] text-[0.88rem]"
                  >
              </FormGroup>
      
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
                      {{ item.name }} ({{ item.year }})
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
