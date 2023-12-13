<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/About/SectionOne.vue";
import SectionTwo from "@/components/About/SectionTwo.vue";
import AppOccupant from "@/components/Bander/UserCounter.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import SectionThree from "@/components/About/SectionThree.vue";
const siteData = reactive({
  title: `MySpurr | About Us`,
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
      content: "About us,",
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <AppOccupant />
    <SectionThree />
    <WorkFlow class="container" />
    <Footer />
  </div>
</template>

<style scoped></style>
