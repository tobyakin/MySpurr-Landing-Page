<template>
  <div :class="inputClasses" class="relative h-[126.955px] w-[126.955px] rounded-full">
    <img
      :class="inputClasses"
      :src="imageUrl ? imageUrl : Icon"
      class="h-[126.955px] w-[126.955px] rounded-full"
      :alt="imgAlt"
    />
    <GreenIcon class="absolute -top-1 right-3" />
  </div>
</template>
<script setup>
import GreenIcon from "@/components/icons/greenIcon.vue";
import Icon from "@/assets/defultAvater.png";
defineProps({
  imgAlt: String,
  inputClasses: String,
  imageUrl: String,
});
</script>
