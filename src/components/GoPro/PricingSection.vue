<script setup>
import { ref, onMounted } from "vue";
import TalentGoProModal from "../Modal/TalentGoProModal.vue";
const tab = ref("USD");
const activetab = ref("monthly");

// Set initial tab value based on the prop or local storage
onMounted(() => {
  const storedTab = localStorage.getItem("activeTab");
  if (storedTab) {
    activetab.value = storedTab;
  }
});

function activateTab(tab) {
  activetab.value = tab;
  localStorage.setItem("activeTab", tab);
}
const filterTab = (category) => {
  tab.value = category;
  //   filteredTab.value = [];
  //   if (category != "ALL") {
  //     filteredTab.value = store.blogPost.filter((item) => item.blog_category == category);
  //   }
};
const talentBasic = [
  { item: "Creative portfolio on your domain" },
  { item: "Showcase your designs" },
  { item: "Access to MySpurr job board" },
  { item: "Dedicated wallet for payments" },
  { item: "Access to free resources" },
  { item: "Access to community" },
  { item: "Career coaching and mentorship" },
];
const talentPro = [
  { item: "Everything in basic" },
  { item: "Priority visibility in hiring feeds" },
  { item: "Send customizable invoices" },
  { item: "Create a team account for your agency" },
  { item: "Message business directly" },
  { item: "Access to MySpurr learning" },
];
const businessBasic = [
  { item: "Business portfolio on your domain" },
  { item: "Post jobs " },
  { item: "Access to MySpurr talent board" },
  { item: "Dedicated wallet for payments" },
  { item: "Access to free resources" },
  { item: "Access to community" },
  { item: "Stats and analytics" },
];
const businessPro = [
  { item: "Everything in basic" },
  { item: "Dedicated account support" },
  { item: "Customized hiring solutions" },
  { item: "Chat and schedule calls with talent" },
  { item: "Access to learning for your team" },
  { item: "Access to internship program" },
];
const pro = [
  { item: "Access to a diverse talent pool" },
  { item: "Customized talent search" },
  { item: "Priority job listing" },
  { item: "Dedicated account support" },
  { item: "Exclusive talent pools" },
  { item: "Bulk hiring options" },
  { item: "Chat and schedule calls with talent" },
  { item: "Access exclusive content and events" },
];
</script>
<template>
  <TalentGoProModal />
  <div class="flex flex-col gap-20 mt-20">
    <div class="flex w-[60%] flex-row justify-center mx-auto">
      <button
        class="border-[#254035AB] border-x-[0.769px] border-t-[0.769px] border-b-[0.769px] p-4 py-1 rounded-l-[11.535px] font-Satoshi500 text-[22.521px] items-center flex"
        @click="filterTab('USD')"
        :class="{ 'bg-[#43D0DF] text-white': tab == 'USD' }"
      >
        USD</button
      ><button
        class="border-[#254035AB] border-y-[0.769px] border-r-[0.769px] p-4 py-1 font-Satoshi500 text-[22.521px] items-center flex"
        @click="filterTab('NGN')"
        :class="{ 'bg-[#43D0DF] text-white': tab == 'NGN' }"
      >
        NGN</button
      ><button
        class="border-[#254035AB] border-r-[0.769px] border-y-[0.769px] p-4 py-1 rounded-r-[11.535px] font-Satoshi500 text-[22.521px] items-center flex"
        @click="filterTab('GHS')"
        :class="{ 'bg-[#43D0DF] text-white': tab == 'GHS' }"
      >
        GHS
      </button>
    </div>
    <div class="mx-auto flex w-auto justify-center gap-4 lg:gap-8 flex-row items-center">
      <h4 class="lg:text-[26.186px] text-[14px] font-Satoshi500 text-[#000000]">
        Bill Monthly
      </h4>
      <div
        class="border-[#2F929C] w-[120px] rounded-full p-1 px-[8px] border-2 gap-2 justify-between flex-row flex"
      >
        <a
          role="button"
          class="p-4 h-[35.512px] w-[35.512px] rounded-full transition ease-in-out duration-700"
          @click="activateTab('monthly')"
          :class="[
            activetab === 'monthly'
              ? 'bg-[#007582] -translate-x-[0.2rem] transition ease-in-out duration-700'
              : 'bg-none',
          ]"
        >
          <slot name="tab1"></slot>
        </a>
        <a
          role="button"
          class="p-4 h-[35.512px] w-[35.512px] rounded-full"
          @click="activateTab('yearly')"
          :class="[
            activetab === 'yearly'
              ? 'bg-[#007582] translate-x-[0.2rem] transition ease-in-out duration-700'
              : 'bg-none',
          ]"
        >
          <slot name="tab2"></slot>
        </a>
      </div>
      <h4 class="lg:text-[26.186px] text-[14px] font-Satoshi500 text-[#000000]">
        Bill Yearly
      </h4>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4">
      <div class="border-[#007582] border-[1px] p-6 py-10 rounded-[33px]">
        <h4
          class="text-[#2F929C] text-[45.909px] font-EBGaramond500 tracking-[ -0.51px] leading-[50.283px] !font-normal"
        >
          Basic
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          For Creative talents
        </p>
        <div class="flex flex-col gap-2 mt-10">
          <div
            v-for="item in talentBasic"
            :key="item"
            class="flex flex-row items-center gap-2"
          >
            <img src="@/assets/svg/circleTick.svg" alt="" />
            <h4 class="text-[#000000B2] text-[16px] font-Satoshi400 leading-[31.132px]">
              {{ item.item }}
            </h4>
          </div>
        </div>
        <hr class="text-[#254035AB] my-[60px]" />
        <h4
          class="text-[#2F929C] text-[45.909px] font-EBGaramond500 tracking-[ -0.51px] leading-[50.283px] !font-normal"
        >
          Pro
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          For Creative talents
        </p>
        <h4 class="text-[#2F929C] text-[36px] font-Satoshi700 mt-6 leading-[52.234px]">
          $5/mo
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          when billed yearly
        </p>
        <div class="flex flex-col gap-2 mt-10">
          <div
            v-for="item in talentPro"
            :key="item"
            class="flex flex-row items-center gap-2"
          >
            <img src="@/assets/svg/circleTick.svg" alt="" />
            <h4 class="text-[#000000B2] text-[16px] font-Satoshi400 leading-[31.132px]">
              {{ item.item }}
            </h4>
          </div>
        </div>
        <div class="w-full mt-10">
          <button class="btn-brand w-full font-Satoshi400">Upgrade to Pro</button>
        </div>
      </div>
      <div class="border-[#007582] border-[1px] p-6 py-10 rounded-[33px]">
        <h4
          class="text-[#2F929C] text-[45.909px] font-EBGaramond500 tracking-[ -0.51px] leading-[50.283px] !font-normal"
        >
          Basic
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          For Business
        </p>
        <div class="flex flex-col gap-2 mt-10">
          <div
            v-for="item in businessBasic"
            :key="item"
            class="flex flex-row items-center gap-2"
          >
            <img src="@/assets/svg/circleTick.svg" alt="" />
            <h4 class="text-[#000000B2] text-[16px] font-Satoshi400 leading-[31.132px]">
              {{ item.item }}
            </h4>
          </div>
        </div>
        <hr class="text-[#254035AB] my-[60px]" />
        <h4
          class="text-[#2F929C] text-[45.909px] font-EBGaramond500 tracking-[ -0.51px] leading-[50.283px] !font-normal"
        >
          Pro
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          For Business
        </p>
        <h4 class="text-[#2F929C] text-[36px] font-Satoshi700 mt-6 leading-[52.234px]">
          $5/mo
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          when billed yearly
        </p>

        <div class="flex flex-col gap-2 mt-10">
          <div
            v-for="item in businessPro"
            :key="item"
            class="flex flex-row items-center gap-2"
          >
            <img src="@/assets/svg/circleTick.svg" alt="" />
            <h4 class="text-[#000000B2] text-[16px] font-Satoshi400 leading-[31.132px]">
              {{ item.item }}
            </h4>
          </div>
        </div>
        <div class="w-full mt-10">
          <button class="btn-brand w-full font-Satoshi400">Upgrade to Pro</button>
        </div>
      </div>
      <div class="border-[#007582] border-[1px] p-6 py-10 rounded-[33px]">
        <h4
          class="text-[#2F929C] text-[45.909px] font-EBGaramond500 tracking-[ -0.51px] leading-[50.283px] !font-normal"
        >
          Pro
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          For HR Managers
        </p>
        <h4 class="text-[#2F929C] text-[36px] font-Satoshi700 mt-6 leading-[52.234px]">
          $5/mo
        </h4>
        <p class="font-Satoshi400 text-[16px] leading-[31.132px] text-[#000000B2]">
          when billed yearly
        </p>

        <div class="flex flex-col gap-2 mt-10">
          <div v-for="item in pro" :key="item" class="flex flex-row items-center gap-2">
            <img src="@/assets/svg/circleTick.svg" alt="" />
            <h4 class="text-[#000000B2] text-[16px] font-Satoshi400 leading-[31.132px]">
              {{ item.item }}
            </h4>
          </div>
        </div>
        <div class="w-full mt-10">
          <button class="btn-brand w-full font-Satoshi400">Upgrade to Pro</button>
        </div>

        <div></div>
      </div>
    </div>
  </div>
</template>
