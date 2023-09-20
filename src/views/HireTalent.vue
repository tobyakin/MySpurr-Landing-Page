<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { defineAsyncComponent } from "vue";
import GoPro from "@/components/Bander/GoPro.vue";
import Arrow from "@/components/icons/paginationArrow.vue";
import JobCard from "@/components/Job/JobCard.vue";
import Subscribe from "@/components/Bander/Subscribe.vue";
const FormGroup = defineAsyncComponent(() =>
  import("@/components/Form/Input/FormGroup.vue")
);
const FormSelectGroup = defineAsyncComponent(() =>
  import("@/components/Form/Input/SelectGroup.vue")
);
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
        <JobCard class="w-full" v-for="item in 10" :key="item" />
      </div>
      <div class="mt-12 flex w-[60%] flex-row justify-center mx-auto">
        <button
          class="border-[#007582] border-x-2 border-t-2 border-b-2 p-4 py-2 rounded-l-[6.032px] font-Satoshi500 text-[22.621px] items-center flex"
        >
          1
        </button>
        <button
          class="border-[#007582] border-y-2 border-r-2 p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex"
        >
          2
        </button>
        <button
          class="border-[#007582] border-y-2 border-r-2 p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex"
        >
          3
        </button>
        <button
          class="border-[#007582] border-y-2 border-r-2 p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex"
        >
          4
        </button>
        <button
          class="border-[#007582] border-y-2 border-r-2 p-4 py-2 font-Satoshi500 text-[22.621px] items-center flex"
        >
          5
        </button>
        <button
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
