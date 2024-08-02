<template>
  <div class="w-full">
    <Label :class="labelClasses">{{ label }}</Label>
    <Select
      @update:modelValue="passInputValue"
      :value="modelValue"
      :class="inputClasses"
      :placeholder="placeholder"
      :name="name"
      :items="items"
    />
    <Label class="text-2xl text-left" :name="name" />
  </div>
</template>

<script setup>
import Select from "./Select.vue";
import Label from "./Label.vue";

const emit = defineEmits(["update:modelValue"]);

defineProps({
  type: String,
  placeholder: String,
  label: String,
  name: String,
  labelClasses: String, // Optional
  inputClasses: String, // Optional
  modelValue: [String, Number],
  items: Array,
});

const passInputValue = (value) => {
  emit("update:modelValue", value);
};
</script>
