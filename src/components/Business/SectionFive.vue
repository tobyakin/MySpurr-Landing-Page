<template>
  <div class="bg-[#EDF0B8] py-20">
    <div class="container">
      <div class="flex justify-center">
        <h2
          class="text-dimBrand text-[43px] lg:text-[50px] !font-semibold leading-[68.056px] lg:leading-[74px] font-EBGaramond500 mb-8"
        >
          Loved by Businesses
        </h2>
      </div>
      <div
        class="md:grid md:grid-cols-3 hide-scrollbar flex overflow-x-scroll gap-4 my-4 mb-[50px]"
      >
        <div
          v-for="item in tweetPost"
          :key="item"
          class="bg-white lg:w-full w-[1013.625px] min-h-[218.617px] p-4 rounded-[15.24px] hover:border-[0.5px] hover:border-brand"
        >
          <a target="_blank" :href="item.tweetUrl" role="button" class="w-full">
            <div class="flex justify-stretch items-center gap-3 w-full">
              <div class="">
                <img width="40" alt="" :src="item.img" class="rounded-full" />
              </div>
              <div class="flex justify-between w-full items-center">
                <div class="w-[80%]">
                  <h6
                    class="text-[#000000] leading-[26.122px] font-Satoshi700 text-[15.86px]"
                  >
                    {{ item.username }}
                  </h6>
                  <h6
                    class="text-[#00000080] font-Satoshi400 text-[14.927px] leading-[22.39px]"
                  >
                    {{ item.usertag }}
                  </h6>
                </div>
                <div id="w-node-_6ed55d2a-1ce2-0984-7251-a40d464802a7-df26a236" class="">
                  <h6
                    class="text-[#01272C] text-[14.927px] font-Satoshi500 leading-[22.857px]"
                  >
                    {{ item.date }}
                  </h6>
                </div>
              </div>
            </div>
            <div>
              <div
                class="text-[14.927px] font-Satoshi500 leading-[22.857px] pt-4 text-[#011B1F]"
              >
                <p v-html="item.tweetText"></p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const tweetPost = [
  {
    img: "https://pbs.twimg.com/profile_images/1667897892877508613/hbh5xaZH_400x400.jpg",
    username: "NO'ELL HENCH",
    usertag: "@NoellHench55",
    date: " Sep 9",
    tweetUrl: "https://x.com/NoellHench55/status/1700586831186694167?s=20",
    tweetText: `<a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a> The best projects require the best talents. <a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a> ensures you find the perfect match. Join the waitlist and let your projects shine.<a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a> <a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a> `,
    brandUrl: "",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1701661683796574208/NYFXrF8l_400x400.jpg",
    username: "Damisrael Consulting",
    usertag: "@DamisraelC",
    date: " Sep 7",
    tweetUrl: "https://twitter.com/DamisraelC/status/1699736717731758416?s=20",
    tweetText: `<a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a>
 community is all about collaboration and growth. Connect with fellow creatives, learn, and prosper together. Join the waitlist and be part of the movement. 
<a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a>
 <a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a> <a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a>`,
    brandUrl: "",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1677616813419503618/m5T8XibY_400x400.jpg",
    username: "Splendor Charles🦋",
    usertag: "@CharlieSplendy",
    date: " Sep 8",
    tweetUrl: "https://twitter.com/CharlieSplendy/status/1700044310677233821?s=20",
    tweetText: `
<a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a> offers you a personalized learning experience to boost your creative skills. Join the waitlist and unlock a world of possibilities. <a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a>

<a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a> <a href="https://twitter.com/hashtag/MySpurr" target="_blank" class="text-[#1d9bf0]">#MySpurr</a>`,
    brandUrl: "",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1700063176040030208/Qa9A1YJu_400x400.jpg",
    username: "eseroberts",
    usertag: "@robertsese6",
    date: " Sep 14",
    tweetUrl: "https://twitter.com/robertsese6/status/1702098727865909649?s=20",
    tweetText: `<a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a> offers you a personalized learning experience to boost your creative skills. Join the waitlist and unlock a world of possibilities. <a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a>
<a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a>  <a href="https://twitter.com/hashtag/MySpurr" target="_blank" class="text-[#1d9bf0]">#MySpurr</a>
`,
    brandUrl: "",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1668982490722074625/0XpVCWEd_400x400.png",
    username: "bolaji adefioye",
    usertag: "@BolajiAdefioye",
    date: " Sep 12",
    tweetUrl: "https://twitter.com/BolajiAdefioye/status/1701526774989914568?s=20",
    tweetText: `
 <a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a> 
 
The best projects require the best talents.
 <a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a> 
 ensures you find the perfect match. Join the wait-list and let your projects shine. <a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a> <a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a> 
    
`,
    brandUrl: "",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1662847837716066304/9wkYN8Wl_400x400.jpg",
    username: "MelaninMafia🍫",
    usertag: "@alphafeemale008",
    date: " Sep 9",
    tweetUrl: "https://twitter.com/BolajiAdefioye/status/1701526774989914568?s=20",
    tweetText: `
The best projects require the best talents. 
    <a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a>
 ensures you find the perfect match. Join the waitlist and let your projects shine. <a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a> <a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a> 
 
`,
    brandUrl: "",
  },
  {
    img: "https://pbs.twimg.com/profile_images/1662847837716066304/9wkYN8Wl_400x400.jpg",
    username: "MelaninMafia🍫",
    usertag: "@alphafeemale008",
    date: " Sep 9",
    tweetUrl: "https://twitter.com/BolajiAdefioye/status/1701526774989914568?s=20",
    tweetText: `

    <a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a>

 The best projects require the best talents. 
    <a target="_blank" href="https://twitter.com/usemyspurr" class="text-[#1d9bf0]">@usemyspurr</a>

 ensures you find the perfect match. Join the waitlist and let your projects shine.<a target="_blank" href="http://myspurr.net" class="text-[#1d9bf0]"> myspurr.net</a> <a href="https://twitter.com/hashtag/CreativeExcellence" target="_blank" class="text-[#1d9bf0]">#CreativeExcellence</a> MySpurr reposted
Splendor Charles🦋
@
`,
    brandUrl: "",
  },
];
</script>
