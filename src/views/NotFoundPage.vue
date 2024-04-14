<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useRouter } from "vue-router";
const router = useRouter();

const siteData = reactive({
  title: `MySpurr | Not Found`,
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
      content: "Not Found Page,",
    },
  ],
});
const redirectToHome = () => {
  router.push({
    name: "home",
  });
};
</script>

<template>
  <div>
    <Navbar />
    <div class="bg-[#ECFAFC] flex flex-col h-[80vh] py-6 justify-center text-center">
      <h1 class="text-[#244034] lg:text-[514.2px] text-5xl font-Satoshi500">404</h1>

      <p
        class="text-[#244034] text-lg lg:text-[29.96px] font-Satoshi500 leading-[46.48px]"
      >
        Sorry, there’s nothing to see here
      </p>
      <div class="my-10">
        <button @click="redirectToHome" class="btn-brand !bg-[#31795A] !border-none">
          Home
        </button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
