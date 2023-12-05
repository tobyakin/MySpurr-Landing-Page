<script setup>
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/Learn/SectionOne.vue";
import SectionTwo from "@/components/Learn/SectionTwo.vue";
import SectionSeven from "@/components/Learn/SectionSeven.vue";
const siteData = reactive({
  title: `MySpurr | Courses`,
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
      content: "Courses, learn",
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <SectionOne />
    <SectionTwo />
    <SectionSeven />
    <Footer />
  </div>
</template>

<style scoped></style>
