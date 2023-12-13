<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/Internship/SectionOne.vue";
import TrustedByBrands from "@/components/Bander/TrustedByBrands.vue";
import SectionTwo from "@/components/Internship/SectionTwo.vue";
import SectionThree from "@/components/Internship/SectionThree.vue";
import SectionFour from "@/components/Internship/SectionFour.vue";
import SectionFive from "../components/Internship/SectionFive.vue";
const siteData = reactive({
  title: `MySpurr | Internship`,
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
      content: "Internship",
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <SectionOne />
    <TrustedByBrands />
    <SectionTwo />
    <SectionThree />
    <SectionFour />
    <SectionFive />
    <Footer />
  </div>
</template>

<style scoped></style>
