<template>
  <div class="container py-[60px] lg:py-40">
    <div class="w-full">
      <iframe
        v-if="steps[1]"
        class="w-full lg:h-[630px] h-[28vh] animate__bounceIn rounded-[14px]"
        width="auto"
        height="auto"
        src="https://www.youtube.com/embed/1f-vEXh_XaI"
        title="Celebrate your passion"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe
      ><button class="animate__bounceOut w-full" @click="changeScreen(0, 1)" v-if="steps[0]">
        <img
          loading="lazy"
          class="w-full lg:h-[600px] h-[28vh] rounded-[14px]"
          src="@/assets/img/videoBg.webp"
          alt=""
        />
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
