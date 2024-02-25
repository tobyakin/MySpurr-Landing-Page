<template>
  <div class="py-16">
    <ul class="flex flex-col font-Satoshi500 text-[#404041]">
      <li v-for="(faq, index) in faqs" :key="faq">
        <div
          @click="toogleFaq(index)"
          class="py-8 px-6 flex justify-between items-center cursor-pointer border-b-[#00000014] border-b-[1px] text-xl"
        >
          <div>{{ faq.name }}</div>
          <div>
            <div
              v-if="!faq.showContent"
              class="w-6 transition delay-100 text-[24px] ease-in-out h-6"
            >
              +
            </div>
            <div
              v-if="faq.showContent"
              class="w-6 transition delay-100 text-[24px] ease-in-out h-6"
            >
              -
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              :class="{ 'rotate-180': faq.showContent }"
              class="w-6 transition hidden delay-100 ease-in-out h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
        <div v-if="faq.showContent" class="p-4">
          <h3 class="text-sm font-Satoshi400 mb-4">{{ faq.content }}</h3>
          <ul>
            <li class="lg:flex !mb-4" v-for="list in faq.sub_content" :key="list">
              <h3 class="font-Satoshi700 lg:mr-2">{{ list.heading }}</h3>
              <p class="font-Satoshi400">{{ list.content }}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup>
const props = defineProps({
  faqs: Object,
});
const toogleFaq = (index) => {
  props.faqs[index].showContent = !props.faqs[index].showContent;
};
</script>
