<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/Talent/SectionOne.vue";
import SectionTwo from "@/components/Talent/SectionTwo.vue";
import SectionThree from "@/components/Talent/SectionThree.vue";
import SectionFour from "@/components/Home/SectionFour.vue";
import SectionSeven from "@/components/Home/SectionSeven.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";

const siteData = reactive({
  title: `MySpurr | Creative talent hiring`,
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
    <SectionSeven />
    <WorkFlow class="container" />
    <Footer />
  </div>
</template>

<style scoped></style>
