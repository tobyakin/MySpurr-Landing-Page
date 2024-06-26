<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/Business/SectionOne.vue";
import SectionTwo from "@/components/Business/SectionTwo.vue";
import SectionThree from "@/components/Business/SectionThree.vue";
import SectionFour from "@/components/Home/SectionFour.vue";
import SectionFive from "@/components/Business/SectionFive.vue";
import SectionSix from "@/components/Business/SectionSix.vue";
import SectionSeven from "@/components/Home/SectionSeven.vue";
const siteData = reactive({
  title: `MySpurr | Business`,
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
</script>

<template>
  <div>
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <SectionSix />
    <SectionSeven />
    <Footer />
  </div>
</template>

<style scoped></style>
