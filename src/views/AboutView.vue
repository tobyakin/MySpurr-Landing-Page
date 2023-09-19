<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/About/SectionOne.vue";
import SectionTwo from "@/components/About/SectionTwo.vue";
import AppOccupant from "@/components/Bander/AppOccupant.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import SectionThree from "@/components/About/SectionThree.vue";
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
