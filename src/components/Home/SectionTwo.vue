<template>
  <SampleOne
    :heading="BuildHeading"
    :list="section4List1"
    :image="Build"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="DiscoverHeading"
    :list="section4List2"
    :reverse="true"
    :image="Discover"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="ConnectHeading"
    :list="section4List3"
    :image="Connect"
    :reverseOnMobile="true"
  />
  <SampleOne
    :heading="GrowHeading"
    :list="section4List"
    :reverse="true"
    :image="Grow"
    :reverseOnMobile="true"
  />
  <div class="flex justify-center items-center pb-[6rem]">
    <a
      target="_blank"
      :href="dashboardUrl + 'signup'"
      role="button"
      class="btn-brand font-Satoshi400"
    >
      Sign up for free
    </a>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { images } from "../../imgAsset";
// import Build from "@/assets/img/build.webp";
// import Connect from "@/assets/img/connect.webp";
// import Discover from "@/assets/img/discover.webp";
// import Grow from "@/assets/img/grow.webp";
import SampleOne from "@/components/genericComponents/sampleOne.vue";
const Build = images.build
const Connect = images.connect
const Discover = images.discover
const Grow = images.grow
const BuildHeading = ` <span class="font-Satoshi700">Build</span> your creative <br class="md:block hidden" /> career`;
const DiscoverHeading = ` <span class="font-Satoshi700">Discover </span> <br class="md:block hidden" /> job opportunities`;
const ConnectHeading = ` <span class="font-Satoshi700">Connect</span>  with top  <br class="md:block hidden" /> businesses`;
const GrowHeading = ` <span class="font-Satoshi700">Grow </span> with a <br class="md:block hidden" /> community`;
const dashboardUrl = import.meta.env.VITE_DASHBOARD;

const section4List1 = ref([
  {
    text: "Attract potential employers and showcase your best work with your portfolio.",
  },
  {
    text:
      "Stand out from the crowd and attract the attention of the right employers for their skills and experience.",
  },
]);
const section4List2 = ref([
  {
    text:
      "Find creative opportunities that match your skills and interests more easily with our advanced job board  and recommendation system.",
  },
  {
    text:
      " Get job alerts based on your preferences, and stay up-to-date with the latest job postings in your field.",
  },
]);

const section4List3 = ref([
  {
    text:
      "Connect with businesses from all around the world, and find the right job opportunity. ",
  },
  {
    text:
      "Explore exciting new projects and gain experience working with different industries and cultures.",
  },
]);
const section4List = ref([
  {
    text:
      "Gain access to networking events, workshops, and industry insights. We provide a community of creative professionals where they can network, share ideas, and learn from each other.",
  },
  {
    text:
      "Stay up-to-date with industry trends, learn new skills, and discover new opportunities in your field.",
  },
]);
</script>
