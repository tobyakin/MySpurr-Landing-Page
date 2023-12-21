<script setup>
import { computed, reactive, ref, watch } from "vue";
import { useHead } from "@vueuse/head";
import Loader from "@/components/UI/Loader.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import LocationIcon from "@/components/icons/locationIcon.vue";
import MailIcon from "@/components/icons/mailIcon.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import FormGroup from "@/components/Form/Input/FormGroup.vue";
import AuthInput from "@/components/Form/Input/AuthInput.vue";
import { sendMessage } from "@/services/ContactUs";

let loading = ref(false);
const siteData = reactive({
  title: `MySpurr | Contact Us`,
  description: ``,
});
const errors = reactive({
  name: false,
  email: false,
  subject: false,
  message: false,
});
const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const validateForm = () => {
  // Reset errorsMsg
  Object.keys(errors).forEach((key) => {
    errors[key] = false;
  });
  // Perform validation before submission
  let isValid = true;

  if (!formData.value.name) {
    errors.name = true;
    isValid = false;
  }

  if (!formData.value.email) {
    errors.email = true;
    isValid = false;
  }
  if (!formData.value.message) {
    errors.message = true;
    isValid = false;
  }
  return isValid; // Only return false if there are validation errors
};
const clearInputErrors = () => {
  Object.keys(errors).forEach((key) => {
    errors[key] = false;
  });
};

watch(formData.value, () => {
  clearInputErrors();
});
const onFinish = async () => {
  loading.value = true;
  if (!validateForm()) {
    loading.value = false;
    return;
  }
  let payload = {
    name: formData.value.name,
    email: formData.value.email,
    subject: formData.value.subject,
    message: formData.value.message,
  };
  try {
    let res = await sendMessage(payload);
    loading.value = false;
    return res;
  } catch (error) {
    return error;
  } finally {
    loading.value = false;
  }
};
useHead({
  // Can be static or computed
  title: computed(() => siteData.title),
  meta: [
    {
      name: `description`,
      content: computed(() => siteData.description),
    },
    {
      property: "keywords",
      content: "contact us,",
    },
  ],
});
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <h4
        class="font-EBGaramond500 lg:text-[72px] text-[30px] my-10 text-center text-[#007582]"
      >
        Get in touch
      </h4>
      <div><img src="@/assets/img/contactUs.webp" class="lg:h-[569.031px]" alt="" /></div>
      <div class="flex lg:flex-row flex-col justify-center my-24 gap-20">
        <div class="flex flex-col gap-2 items-center text-center">
          <LocationIcon />
          <h4 class="text-[#141518] text-[24px] font-Satoshi500">Our Address</h4>
          <p class="text-[#878787] font-Satoshi400 text-[17px] text-center">
            Abuja,Nigeria
          </p>
        </div>
        <div class="flex flex-col gap-2 items-center text-center">
          <MailIcon />
          <h4 class="text-[#141518] text-[24px] font-Satoshi500">Contact Info</h4>
          <p class="text-[#878787] font-Satoshi400 text-[17px] text-center">
            send an email to <br />
            <span class="text-[#31795A] text-[17px]">hello@myspurr.net</span>
          </p>
        </div>
      </div>
      <div class="container flex flex-col gap-12">
        <div class="flex lg:flex-row flex-col gap-12">
          <AuthInput
            labelClasses="font-Satoshi400 text-[14px] opacity-[0.4986]"
            label="Name*"
            name="Name"
            :error="errors.name"
            v-model="formData.name"
            placeholder="Rashed Kabir"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-2 !py-3 border-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
          ></AuthInput>
          <AuthInput
            labelClasses="font-Satoshi400 text-[14px] opacity-[0.4986]"
            label=" Email*"
            name="Email"
            :error="errors.email"
            v-model="formData.email"
            placeholder="kabirr277@gmail.com"
            type="email"
            inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-2 !py-3 border-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
          ></AuthInput>
        </div>
        <FormGroup
          labelClasses="font-Satoshi400 text-[14px] opacity-[0.4986]"
          label=" Subject (optional)"
          name="text"
          v-model="formData.subject"
          placeholder="Write about the subject here.."
          type="email"
          inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-2 !py-3 border-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
        ></FormGroup
        ><textarea
          name=""
          class="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-4 outline-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
          placeholder="Your Message"
          id=""
          :class="errors.message ? 'border-[#DA5252] border' : 'border-none'"
          v-model="formData.message"
          cols="30"
          rows="10"
        ></textarea
        ><button
          @click="onFinish"
          :disabled="loading"
          :class="loading ? 'cursor-not-allowed' : ''"
          class="btn-brand !text-white"
        >
          <span v-if="!loading">Send Message</span>
          <Loader class="my-2" v-else />
        </button>
      </div>
      <WorkFlow />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
