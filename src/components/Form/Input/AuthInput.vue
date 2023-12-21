<template>
  <div class="relative w-full">
    <Label :class="labelClasses">{{ label }}</Label>

    <!-- <input
      v-bind="$attrs"
      :class="(error ? 'border-[#DA5252]' : 'border-[#254035]', inputClasses)"
      class="w-full font-light font-Satoshi400 text-[14px] !p-2 border-[0.509px] opacity-[0.8029] rounded-[4.074px] text-sm"
      :placeholder="placeholder"
      :type="type"
      required
      @input="$emit('update:modelValue', $event.target.value)"
    /> -->
    <div class="relative w-full">
      <Input
        @update:modelValue="passInputValue"
        :value="modelValue"
        :class="inputClasses"
        :placeholder="placeholder"
        :type="type"
        :name="name"
      />

      <errorInputIcon v-if="error" class="absolute top-[9px] right-[9px]" />
    </div>
    <!-- <greenInputTick v-if="modelValue.length && !error" class="absolute top-1 right-1" /> -->
    <!-- <span v-if="error" class="text-[#993939] font-Satoshi400 text-sm">{{
      errorsMsg
    }}</span> -->
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
const Label = defineAsyncComponent(() => import("./Label.vue"));
const Input = defineAsyncComponent(() => import("./Input.vue"));

// import greenInputTick from "@/components/icons/greenInputTick.vue";
import errorInputIcon from "@/components/icons/inputErrorIcon.vue";
defineProps({
  modelValue: String | Number,
  type: String,
  placeholder: String,
  error: Boolean,
  errorsMsg: String,
  inputClasses: String,
  labelClasses: String, // Optional
  label: String,
  name: String,
});

const emit = defineEmits(["update:modelValue"]);
const passInputValue = (value) => {
  emit("update:modelValue", value);
};

// const emit = defineEmits(["update:modelValue"]);
</script>
