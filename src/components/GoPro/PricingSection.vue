<script setup>
import { ref, onMounted } from "vue";

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
</script>
<template>
  <div>
    <div class="my-20 flex w-[60%] flex-row justify-center mx-auto">
      <button
        class="border-[#254035AB] border-x-[0.769px] border-t-[0.769px] border-b-[0.769px] p-4 py-2 rounded-l-[11.535px] font-Satoshi500 text-[22.521px] items-center flex"
        @click="filterTab('USD')"
        :class="{ 'bg-[#43D0DF] text-white': tab == 'USD' }"
      >
        USD</button
      ><button
        class="border-[#254035AB] border-y-[0.769px] border-r-[0.769px] p-4 py-2 font-Satoshi500 text-[22.521px] items-center flex"
        @click="filterTab('NGN')"
        :class="{ 'bg-[#43D0DF] text-white': tab == 'NGN' }"
      >
        NGN</button
      ><button
        class="border-[#254035AB] border-r-[0.769px] border-y-[0.769px] p-4 py-2 rounded-r-[11.535px] font-Satoshi500 text-[22.521px] items-center flex"
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
        class="border-[#2F929C] w-[120.601px] rounded-full p-1 px-[4px] border-2 gap-2 justify-between flex-row flex"
      >
        <a
          role="button"
          class="p-4 h-[42.512px] w-[42.512px] rounded-full"
          @click="activateTab('monthly')"
          :class="[activetab === 'monthly' ? 'bg-[#007582]' : 'bg-none']"
        >
          <slot name="tab1"></slot>
        </a>
        <a
          role="button"
          class="p-4 h-[42.512px] w-[42.512px] rounded-full"
          @click="activateTab('yearly')"
          :class="[activetab === 'yearly' ? 'bg-[#007582]' : 'bg-none']"
        >
          <slot name="tab2"></slot>
        </a>
      </div>
      <h4 class="lg:text-[26.186px] text-[14px] font-Satoshi500 text-[#000000]">
        Bill Yearly
      </h4>
    </div>
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-20">
      <div class="border-[#254035AB] border-2 p-10 rounded-full"></div>
      <div class="border-[#254035AB] border-2 p-10 rounded-full"></div>
      <div class="border-[#254035AB] border-2 p-10 rounded-full"></div>
    </div>
  </div>
</template>
