<template>
  <SampleOne
    :heading="HeadingOne"
    :list="section4List1"
    :image="ImageOne"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="HeadingTwo"
    :list="section4List2"
    :reverse="true"
    :image="ImageThree"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="HeadingThree"
    :list="section4List3"
    :image="ImageTwo"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="HeadingFour"
    :list="section4List"
    :reverse="true"
    :image="ImageFour"
    :reverseOnMobile="true"
  />
  <div class="flex justify-center items-center pb-[6rem]">
    <a
      target="_blank"
      href="https://zcal.co/myspurr/30min"
      role="button"
      class="btn-brand font-Satoshi400"
    >
      Book a demo
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { images } from "../../imgAsset";
import SampleOne from "@/components/genericComponents/sampleOne.vue";

const ImageOne = images.access
const ImageTwo = images.manage
const ImageThree = images.find
const ImageFour = images.collaborate
const HeadingOne = ` <span class="font-Satoshi700">Access</span>  creative  <br class="md:block hidden" /> talents`;
const HeadingTwo = ` <span class="font-Satoshi700">Find </span> talents <br class="md:block hidden" /> for your projects`;
const HeadingThree = ` <span class="font-Satoshi700">Manage</span>   your  <br class="md:block hidden" /> hiring process`;
const HeadingFour = ` <span class="font-Satoshi700">Collaborate </span>  with <br class="md:block hidden" /> creative experts`;

const section4List1 = ref([
  {
    text:
      "Access to a diverse pool of talented creatives from all around the world, making it easier to find the right talent for their projects.",
  },
  {
    text: "Streamline their recruitment process and save time on sourcing talent.",
  },
]);
const section4List2 = ref([
  {
    text:
      "Get started on your projects faster by hiring the right talent based on the skills, experience, and availability.",
  },
  {
    text: "Achieve your goals more efficiently.",
  },
]);

const section4List3 = ref([
  {
    text:
      "Manage their hiring process more seamlessly with features like automated job posting, applicant tracking, sorting, project management and communication tools. ",
  },
  {
    text: " Stay competitive and achieve better outcomes on your projects.",
  },
]);
const section4List = ref([
  {
    text: "Benefit from the unique perspectives and creative skills of experts.",
  },
  {
    text:
      "Access to top professionals in their industry, and collaborate with creatives who have unique perspectives and creative skills.",
  },
]);

const dashboardUrl = import.meta.env.VITE_DASHBOARD;
</script>
