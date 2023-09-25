<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import SectionOne from "@/components/Internship/SectionOne.vue";
import TrustedByBrands from "@/components/Bander/TrustedByBrands.vue";
import SectionTwo from "@/components/Internship/SectionTwo.vue";
import SectionThree from "@/components/Internship/SectionThree.vue";
import SectionFour from "@/components/Internship/SectionFour.vue";
import SectionFive from "../components/Internship/SectionFive.vue";
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
