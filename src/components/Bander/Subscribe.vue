<template>
  <div>
    <p
      class="lg:text-[24.693px] text-center lg:text-left text-[19px] font-Satoshi400 text-[#000000] capitalize"
    >
      Join & get important news regularly
    </p>
    <div
      :class="errors.email ? 'border-[#DA5252] border' : 'border-none'"
      class="bg-[#0000000A] p-4 lg:px-10 px-4 flex lg:flex-row flex-col !my-4 items-center gap-3 rounded-[11.158px]"
    >
      <FormGroup
        placeholder="Enter your email"
        v-model="email"
        class="!bg-transparent !border-none font-Satoshi400 text-[25.504px]"
      />
      <button
        @click="onFinish"
        :disabled="loading"
        :class="loading ? 'cursor-not-allowed' : ''"
        class="btn-brand"
      >
        <span v-if="!loading">Subscribe</span>
        <Loader class="!my-2" v-else />
      </button>
    </div>
    <span
      v-if="errorsMsg.email || !isValidEmail"
      class="font-Satoshi500 text-[12.606px] text-red-500"
      >{{ errorsMsg.email }}</span
    >
    <p class="text-[16.316px] text-center lg:text-left font-Satoshi400 text-[#979797]">
      We only send interesting and relevant emails.
    </p>
  </div>
</template>
<script setup>
import { defineAsyncComponent, reactive, watch, computed, ref } from 'vue'
import { subscribe } from '@/services/Subscribe'
import Loader from '@/components/UI/Loader.vue'

let email = ref('')
let loading = ref(false)
const errors = reactive({
  email: false
})
const errorsMsg = {
  email: ''
}

const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
const isValidEmail = computed(() => {
  return emailRegex.test(email.value)
})

const validateForm = () => {
  // Reset errorsMsg
  Object.keys(errors).forEach((key) => {
    errors[key] = false
  })
  // Perform validation before submission
  let isValid = true

  if (!email.value.trim()) {
    errors.email = true
    errorsMsg.email = 'Email is required'
    isValid = false
  } else if (!isValidEmail.value) {
    errors.email = true
    errorsMsg.email = 'Email is invalid'
    isValid = false
  } else {
    errors.email = false
    errorsMsg.email = ''
  }
  return isValid // Only return false if there are validation errors
}
const clearInputErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = false
  })
  Object.keys(errorsMsg).forEach((key) => {
    errorsMsg[key] = ''
  })
}

watch(email.value, () => {
  clearInputErrors()
})
const onFinish = async () => {
  loading.value = true
  if (!validateForm()) {
    loading.value = false
    return
  }
  let payload = {
    email: email.value
  }
  try {
    let res = await subscribe(payload)
    loading.value = false
    return res
  } catch (error) {
    return error
  } finally {
    loading.value = false
  }
}
const FormGroup = defineAsyncComponent(() => import('@/components/Form/Input/Input.vue'))
</script>
