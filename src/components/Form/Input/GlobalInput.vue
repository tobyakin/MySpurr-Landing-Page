<template>
  <div class="relative">
    <input
      v-bind="$attrs"
      :class="error ? 'border-[#DA5252]' : 'border-[#254035]'"
      class="w-full font-light font-Satoshi400 text-[14px] !p-2 border-[0.509px] opacity-[0.8029] rounded-[4.074px] text-sm"
      :placeholder="placeholder"
      :type="type"
      required
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <!-- <errorInputIcon v-if="error" class="absolute top-1 right-1" /> -->
    <!-- <greenInputTick v-if="modelValue.length && !error" class="absolute top-1 right-1" /> -->
    <!-- <span v-if="error" class="text-[#993939] font-Satoshi400 text-sm">{{
      errorsMsg
    }}</span> -->
  </div>
</template>

<script setup>
// import greenInputTick from "@/components/icons/greenInputTick.vue";
// import errorInputIcon from "@/components/icons/errorInputIcon.vue";
defineProps({
  modelValue: [String, Number],
  type: String,
  placeholder: String,
  error: Boolean,
  errorsMsg: String,
});

const emit = defineEmits(["update:modelValue"]);
</script>
