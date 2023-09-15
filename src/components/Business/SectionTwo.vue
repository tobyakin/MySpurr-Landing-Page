<template>
  <SampleOne
    :heading="HeadingOne"
    :list="section4List1"
    :image="ImageOne"
    :yellowwithHiddenButton="true"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
  />
  <SampleOne
    :heading="HeadingTwo"
    :list="section4List2"
    :yellowwithHiddenButton="true"
    :reverse="true"
    :image="ImageThree"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
  />
  <SampleOne
    :heading="HeadingThree"
    :list="section4List3"
    :image="ImageTwo"
    :yellowwithHiddenButton="true"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
  />
  <SampleOne
    :heading="HeadingFour"
    :list="section4List"
    :yellowwithHiddenButton="true"
    :reverse="true"
    :image="ImageFour"
    :registerUrl="registerUrl"
    :hideText="true"
    :yellow="true"
  />
  <div class="flex justify-center items-center pb-[6rem]">
    <a role="button" class="btn-brand font-Satoshi400"> Start Free Trial </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ImageOne from "@/assets/img/access.png";
import ImageTwo from "@/assets/img/manage.png";
import ImageThree from "@/assets/img/find.png";
import ImageFour from "@/assets/img/collaborate.png";
import SampleOne from "@/components/genericComponents/sampleOne.vue";
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

// const registerUrl = import.meta.env.VITE_DASHBOARD_BASEURL;
</script>
