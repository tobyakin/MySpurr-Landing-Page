<template>
  <div
    class="min-h-[917.496px] background py-20"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container"></div>
  </div>
</template>
<script setup>
import mainbg from "@/assets/img/sectionOnebg.png";
const image = mainbg;
</script>

<style scoped>
.background {
  background-size: cover;
  background-blend-mode: overlay;
  background: linear-gradient(
      from 270deg at 50% 50%,
      rgba(15, 14, 14, 0.28) 184.15632963180542deg,
      rgba(13, 11, 11, 0.33) 270.5531358718872deg,
      rgba(18, 16, 16, 0.32) 353.79907608032227deg
    ),
    lightgray 50%;
}
</style>
