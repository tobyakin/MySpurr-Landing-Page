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
// import FormSelectGroup from "@/components/Form/Input/SelectGroup.vue";
import Label from "@/components/Form/Input/Label.vue";
// import PagePreLoader from "@/components/UI/Loader/PagePreLoader.vue";
// import { useQuery } from "vue-query";
import Loader from "@/components/UI/Loader/Loader.vue";

const talentsStore = useTalentsStore();
const { talent } = storeToRefs(talentsStore);
const siteData = reactive({
  title: `MySpurr | Hire talent`,
  description: ``,
});

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
  candidateType: "",
});
let isLoading = ref(false);
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

// Define a ref to keep track of the current page
const currentPage = ref(1);

// Create a computed property to access the talent data
const talentData = computed(() => talent.value?.data || []);

// Create a computed property to access the pagination data
const pagination = computed(() => talent.value?.pagination || {});

// Create a computed property to paginate the talent data
const paginatedTalent = computed(() => {
  const perPage = pagination.value.per_page;
  const startIndex = (currentPage.value - 1) * perPage;
  const endIndex = startIndex + perPage;
  return talentData.value.slice(startIndex, endIndex);
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
  console.log("Current Page:", newPage);
  await talentsStore.allTalents(newPage);
});
const filteredJobs = computed(() => {
  let filtered = talent.value?.data; // Create a shallow copy of the jobs array

  // Filtering based on the search criteria
  if (filterOptions.name) {
    filtered = filtered.filter((item) =>
      item.first_name.toLowerCase().includes(filterOptions.name.toLowerCase())
    );
  }
  if (filterOptions.skills) {
    filtered = filtered.filter((item) =>
      item.skill_title.toLowerCase().includes(filterOptions.skills.toLowerCase())
    );
  }

  if (filterOptions.location) {
    filtered = filtered.filter((item) =>
      item.location.toLowerCase().includes(filterOptions.location.toLowerCase())
    );
  }

  if (filterOptions.candidateType) {
    filtered = filtered.filter((item) =>
      item.employment_type
        .toLowerCase()
        .includes(filterOptions.candidateType.toLowerCase())
    );
  }
  if (filterOptions.expertLevel) {
    filtered = filtered.filter((item) =>
      item.experience_level
        .toLowerCase()
        .includes(filterOptions.expertLevel.toLowerCase())
    );
  }

  if (filterOptions.qualification) {
    filtered = filtered.filter((item) =>
      item.highest_education
        .toLowerCase()
        .includes(filterOptions.qualification.toLowerCase())
    );
  }

  // Filtering by Rate within the specified range
  if (rateMin.value || rateMax.value) {
    filtered = filtered.filter((item) => {
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
};

onMounted(async () => {
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
const CandidateType = ["Freelance", "Full-time", "Part-time", "Inernship", "Contract"];
const qualification = ["Certificate", "Bachelors", "Masters ", "Doctorate "];
const Experience = [
  { name: "Beginner ", year: "(1-2 yrs)" },
  { name: "Intermediate ", year: "(3-5 yrs)" },
  { name: "Expert ", year: "(6-10 yrs)" },
  { name: "More than", year: " 10yrs" },
];
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <div
        class="bg-[#E9FAFB] rounded-[14.957px] flex flex-col gap-3 lg:gap-5 p-8 lg:px-10 px-8 md:px-10 border-[0.491px] border-[#97A6A8]"
      >
        <div class="flex lg:flex-row flex-col gap-12">
          <FormGroup
            v-model="filterOptions.name"
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Name or Keyword"
            name="Name"
            placeholder="Name or keyword"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
          <FormGroup
            v-model="filterOptions.skills"
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Skills"
            name="Name"
            placeholder="Graphics Design"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
          <FormGroup
            v-model="filterOptions.location"
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Location"
            name="Name"
            placeholder="Abuja. Nigeria"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
        </div>
        <div class="flex lg:flex-row flex-col justify-between w-full gap-12">
          <div class="flex flex-col w-full text-left">
            <Label class="font-Satoshi500 !text-[17.792px] !mb-2">Experience</Label>
            <div
              class="w-full font-light font-Satoshi400 bg-white !p-0 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            >
              <a-select
                placeholder="Expert Level"
                :bordered="false"
                :show-arrow="false"
                class="w-full !outline-none !px-0"
                show-search
                v-model:value="filterOptions.expertLevel"
              >
                <a-select-option disabled>Expert Level</a-select-option>
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
          <div class="flex flex-col w-full text-left">
            <Label class="font-Satoshi500 !text-[17.792px] !mb-2">Qualification</Label>
            <div
              class="w-full mt-0 font-light font-Satoshi400 bg-white !p-0 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            >
              <a-select
                placeholder="Qualification"
                :bordered="false"
                :show-arrow="false"
                class="w-full !outline-none !px-0"
                show-search
                v-model:value="filterOptions.qualification"
              >
                <a-select-option disabled>Qualification</a-select-option>
                <a-select-option v-for="item in qualification" :key="item" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
          </div>

          <!-- <FormSelectGroup
            v-model="filterOptions.expertLevel"
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Expert Level"
            name="Name"
            placeholder="Expert Level"
            type="text"
            inputClasses="w-full mt-0 font-light font-Satoshi400 bg-white !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormSelectGroup>
          <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Qualification"
            name="Name"
            placeholder="Qualification"
            type="text"
            inputClasses="w-full mt-0 font-light font-Satoshi400 bg-white !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormSelectGroup> -->
        </div>
        <div class="flex lg:flex-row flex-col justify-between w-full gap-12">
          <div class="w-full">
            <div class="flex flex-col justify-center">
              <Label class="font-Satoshi500 text-[15.606px]">Salary Range ($/hr)</Label>
              <div class="flex items-center justify-center gap-1 mt-2">
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
            <div>
              <!-- <vue-slider
                  v-model="range"
                  :tooltip="'none'"
                  :enable-cross="false"
                ></vue-slider> -->
            </div>
          </div>
          <!-- <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Salary Range"
            name="Name"
            placeholder="Salary Range"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-b-[#31795A33] border-b-[0.509px] !bg-transparent opacity-[0.8029]  text-[12.68px]"
          ></FormSelectGroup> -->
          <div class="flex flex-col w-full text-left">
            <Label class="font-Satoshi500 !text-[17.792px] !mb-2">Employment Type</Label>
            <div
              class="w-full mt-0 font-light font-Satoshi400 bg-white !p-0 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
            >
              <a-select
                placeholder="Candidate Type"
                :bordered="false"
                :show-arrow="false"
                class="w-full !outline-none !px-0"
                show-search
                v-model:value="filterOptions.candidateType"
              >
                <a-select-option disabled>Candidate Type</a-select-option>
                <a-select-option v-for="item in CandidateType" :key="item" :value="item">
                  {{ item }}
                </a-select-option>
              </a-select>
            </div>
          </div>
          <!-- <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Candidate Type"
            name="Name"
            placeholder="Candidate Type"
            type="text"
            inputClasses="w-full mt-0 font-light font-Satoshi400 bg-white !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormSelectGroup> -->
        </div>
        <div class="flex gap-12">
          <button
            @click="resetFilters"
            class="bg-[#31795A] text-white lg:w-[40%] w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex btn-hover-2"
          >
            Reset Filter
          </button>
        </div>
      </div>
      <div class="text-center lg:!my-10 !my-5 py-20 pb-10">
        <h4 class="text-[50.549px] text-[#000000] font-Satoshi500 leading-[47.52px]">
          Creative Talents for Hire
        </h4>
        <p class="text-[#007582] text-[21.194px] font-Satoshi400 lg:leading-[39.552px]">
          Find your desired talent and execute your projects
        </p>
      </div>
      <GoPro />
      <div class="!my-10">
        <p class="text-[#00000066] font-Satoshi400 text-[23.998px]">
          All
          <span class="text-[#000000] font-Satoshi500">{{
            filteredJobs?.length ? filteredJobs?.length : paginatedTalent?.length
          }}</span>
          candidates found
        </p>
      </div>
      <!-- <PagePreLoader /> -->
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
      <Loader v-if="isLoading" />

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
      <Subscribe class="mt-44 !my-14" />
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>
