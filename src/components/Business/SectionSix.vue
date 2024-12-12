<template>
  <div class="container pt-[40px] pb-[20px] lg:pt-40 lg:pb-20">
    <div class="w-full">
      <iframe
        v-if="steps[1]"
        class="w-full lg:h-[630px] h-[28vh] animate__bounceIn rounded-[14px]"
        width="auto"
        height="auto"
        src="https://www.youtube.com/embed/9Nt6WHX55f4?si=GCgNDyd3coWfA3aS"
        title="Celebrate your passion"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe
      ><button class="animate__bounceOut w-full" @click="changeScreen(0, 1)" v-if="steps[0]">
        <div
        class="w-full lg:h-[600px] h-[28vh] rounded-[14px] overflow-hidden relative"
        >
          <img
            loading="lazy"
            class="h-full w-full"
            src="https://ik.imagekit.io/ldtt3hq8g2/Landing%20Page/videoImage.png?updatedAt=1733308493643"
            alt=""
          />
          <div class="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[5rem] h-[5rem]">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 120 119" fill="none">
            <path d="M119.435 59.4843C119.435 91.834 92.969 118.066 60.3114 118.066C27.6538 118.066 1.18738 91.834 1.18738 59.4843C1.18738 27.1347 27.6538 0.902344 60.3114 0.902344C92.969 0.902344 119.435 27.1347 119.435 59.4843Z" stroke="#63D8E4"/>
            <path d="M47.5375 38.3702C47.5375 36.3873 49.8208 35.2745 51.3826 36.4963L81.4338 60.0052C82.71 61.0036 82.6366 62.9578 81.2891 63.8577L51.238 83.9263C49.657 84.9821 47.5375 83.8488 47.5375 81.9477V38.3702Z" fill="#63D8E4"/>
          </svg>
          </div>
          <div class="absolute left-[5.34rem] msgTab:left-[2rem] bottom-[3.44rem] msgTab:bottom-[1rem]">
            <h3 class="text-[#fff] font-Satoshi500 text-[2.06rem] leading-[2.62rem] mob:text-[1.2rem] mob:leading-[1.5rem]">MySpurr</h3>
            <p class="text-left text-[#fff] font-Satoshi400 text-[1rem] leading-[1.28rem] mob:text-[0.8rem]">Introduction video</p>
          </div>
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import 'animate.css'

const steps = ref([true, false])
const changeScreen = (from, to, type = null) => {
  steps.value[from] = false
  steps.value[to] = true
}
</script>
