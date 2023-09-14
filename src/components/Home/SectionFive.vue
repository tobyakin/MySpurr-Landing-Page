<template>
  <div class="bg-[#E9FAFB] py-20">
    <div class="container">
      <div class="flex justify-center">
        <h2
          class="text-dimBrand text-[43px] lg:text-[72px] !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 mb-8"
        >
          Loved by Creatives
        </h2>
      </div>
      <div class="md:grid md:grid-cols-3 flex overflow-x-scroll gap-4 my-4 mb-[50px]">
        <!-- <div
          v-for="item in tweetId"
          :key="item"
          class="bg-white lg:w-full w-[413.625px] rounded-[15.24px]"
        > -->
        <Tweet
          v-for="item in tweetId"
          :key="item"
          class="w-full min-h-full rounded-[15.24px]"
          :tweetId="item.id"
        />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import Tweet from "vue-tweet";
const tweetId = [
  { id: "1702098727865909649" },
  { id: "1699736717731758416" },
  { id: "1700044310677233821" },
  { id: "1700586831186694167" },
  { id: "1701526774989914568" },
  { id: "1699838825894408605" },
  { id: "1701907211033719262" },
];
</script>

<style>
.twitter-tweet,
.twitter-tweet-rendered {
  margin-top: 0 !important;
  margin-bottom: 0 !important;
}
/* .twitter-tweet,
.twitter-tweet-rendered,
iframe {
  @apply !max-h-[500px];
} */
</style>
