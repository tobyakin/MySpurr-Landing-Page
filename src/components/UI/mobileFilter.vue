<template>
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
            {{ isFilterValid }}
            <button
            @click="isFilterValid ? emitFilteredJobs() : null"
                class="bg-[#31795A] text-white w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex mt-[0.5rem]"
                :class="
                  !isFilterValid
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-[#31795A] btn-hover-2'
                "
              >
                Apply Filter
              </button>
        </div>
    </section>
</template>

<script setup>
import FormGroup from "@/components/Form/Input/FormGroup.vue";
import { computed } from "vue";
import { ref } from "vue";
import { reactive } from "vue";
import { useTalentsStore } from "@/stores/talents";
import { storeToRefs } from "pinia";

const talentsStore = useTalentsStore();
const { talent } = storeToRefs(talentsStore);
let rateMin = ref(null);
let rateMax = ref(null);
const rates = computed(()=>{
  return talent.value?.data?.filter(talent => talent.rate !== "").map(talent => parseFloat(talent.rate)) || [];
})
const highestRate = computed(() => Math.max(...(rates.value.length ? rates.value : [0])));
const lowestRate = computed(() => Math.min(...(rates.value.length ? rates.value : [0])));

const filterOptions = reactive({
  name: "",
  skills: "",
  location: "",
  expertLevel: "Experience",
  qualification: "Qualification",
  candidateType: "Candidate Type",
});

const CandidateType = ["Freelance", "Full-time", "Part-time", "Internship", "Contract"];

const qualification = ["Certificate", "Bachelors", "Masters ", "Doctorate "];

const Experience = [
  { name: "Beginner", year: "(1-2 yrs)" },
  { name: "Intermediate", year: "(3-5 yrs)" },
  { name: "Expert", year: "(6-10 yrs)" },
  { name: "More than", year: " 10yrs" },
];

const filteredJobs = computed(() => {
  let filtered = talent.value?.data; // Create a shallow copy of the jobs array

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

const isFilterValid = computed(()=>{
    return filterOptions.name.length > 0 || filterOptions.skills.length > 0 || filterOptions.location.length > 0 || filterOptions.expertLevel !== "Experience" || filterOptions.qualification !== "Qualification" || filterOptions.candidateType !== "Candidate Type"
})

const emit = defineEmits(['filteredJob', 'isFilter'])

const emitFilteredJobs = ()=>{
    emit('isFilter', isFilterValid.value)
    emit('filteredJob', filteredJobs.value)
}


</script>

<style lang="scss" scoped>


</style>