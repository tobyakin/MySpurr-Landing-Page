<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { defineAsyncComponent, onMounted, computed, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import GoPro from "@/components/Bander/GoPro.vue";
import Arrow from "@/components/icons/paginationArrow.vue";
import JobCard from "@/components/Job/JobCard.vue";
import Subscribe from "@/components/Bander/Subscribe.vue";
import { useTalentsStore } from "@/stores/talents";
const talentsStore = useTalentsStore();
const { talent } = storeToRefs(talentsStore);

const FormGroup = defineAsyncComponent(() =>
  import("@/components/Form/Input/FormGroup.vue")
);
const FormSelectGroup = defineAsyncComponent(() =>
  import("@/components/Form/Input/SelectGroup.vue")
);
const talentsData = computed(() => {
  return talent.value.data;
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
const totalPages = computed(() =>
  Math.ceil(talentsData.value.length / pagination.value.per_page)
);

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
watch(currentPage, (newPage) => {
  console.log("Current Page:", newPage);
});

onMounted(async () => {
  await talentsStore.allTalents();
  console.log("talents", talent.value.data);
  console.log("is array", Array.isArray(talentsData.value));
});
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
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Name or Keyword"
            name="Name"
            placeholder="Name or keyword"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
          <FormGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Categories"
            name="Name"
            placeholder="Graphics Design"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
          <FormGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Location"
            name="Name"
            placeholder="Abuja. Nigeria"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-[#EDEDED] border-[0.509px] opacity-[0.8029] rounded-[6.828px] text-[12.68px]"
          ></FormGroup>
        </div>
        <div class="flex lg:flex-row flex-col justify-between w-full gap-12">
          <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Expert Level"
            name="Name"
            placeholder="Expert Level"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-b-[#31795A33] border-b-[0.509px] !bg-transparent opacity-[0.8029]  text-[12.68px]"
          ></FormSelectGroup>
          <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Qualification"
            name="Name"
            placeholder="Qualification"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-b-[#31795A33] border-b-[0.509px] !bg-transparent opacity-[0.8029]  text-[12.68px]"
          ></FormSelectGroup>
        </div>
        <div class="flex lg:flex-row flex-col justify-between w-full gap-12">
          <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Salary Range"
            name="Name"
            placeholder="Salary Range"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-b-[#31795A33] border-b-[0.509px] !bg-transparent opacity-[0.8029]  text-[12.68px]"
          ></FormSelectGroup>
          <FormSelectGroup
            labelClasses="font-Satoshi500 text-[15.606px]"
            label=" Candidate Type"
            name="Name"
            placeholder="Candidate Type"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 !p-2 border-b-[#31795A33] border-b-[0.509px] !bg-transparent opacity-[0.8029]  text-[12.68px]"
          ></FormSelectGroup>
        </div>
        <div class="flex gap-12">
          <button
            class="bg-[#31795A] text-white lg:w-[40%] w-full text-center mx-auto p-4 py-4 justify-center rounded-full font-Satoshi500 text-[12.103px] items-center flex"
          >
            Apply Filter
          </button>
        </div>
      </div>
      <div class="text-center lg:my-10 my-5 py-20 pb-10">
        <h4 class="text-[50.549px] text-[#000000] font-Satoshi500 leading-[47.52px]">
          Creative Talents for Hire
        </h4>
        <p class="text-[#007582] text-[21.194px] font-Satoshi400 lg:leading-[39.552px]">
          Find you desired talent & make your work done
        </p>
      </div>
      <GoPro />
      <div class="my-10">
        <p class="text-[#00000066] font-Satoshi400 text-[23.998px]">
          All <span class="text-[#000000] font-Satoshi500">1,270</span> candidates found
        </p>
      </div>
      <div class="mt-14 flex flex-col gap-8">
        <JobCard
          class="w-full"
          v-for="item in paginatedTalent"
          :key="item"
          :talent="item"
        />
      </div>
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
      <Subscribe class="mt-44 my-14" />
    </div>

    <Footer />
  </div>
</template>

<style scoped></style>
