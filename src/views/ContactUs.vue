<script setup>
import { defineAsyncComponent } from 'vue'
import Navbar from '@/components/Navbar/Navbar.vue'
import Footer from '@/components/Footer.vue'
import LocationIcon from '@/components/icons/locationIcon.vue'
import MailIcon from '@/components/icons/mailIcon.vue'
import WorkFlow from '@/components/Bander/WorkFlow.vue'
const FormGroup = defineAsyncComponent(() => import('@/components/Form/Input/FormGroup.vue'))
</script>

<template>
  <div>
    <Navbar />
    <div class="py-20 container">
      <h4 class="font-EBGaramond500 lg:text-[72px] text-[30px] my-10 text-center text-[#007582]">
        Get in touch
      </h4>
      <div><img src="@/assets/img/contactUs.webp" class="lg:h-[569.031px]" alt="" /></div>
      <div class="flex lg:flex-row flex-col justify-center my-24 gap-20">
        <div class="flex flex-col gap-2 items-center text-center">
          <LocationIcon />
          <h4 class="text-[#141518] text-[24px] font-Satoshi500">Our Address</h4>
          <p class="text-[#878787] font-Satoshi400 text-[17px] text-center">
            1012 Peb Parkway, Mirpur 2 <br />
            Dhaka, Bangladesh
          </p>
        </div>
        <div class="flex flex-col gap-2 items-center text-center">
          <MailIcon />
          <h4 class="text-[#141518] text-[24px] font-Satoshi500">Contact Info</h4>
          <p class="text-[#878787] font-Satoshi400 text-[17px] text-center">
            Open a chat or give us call at <br />
            <span class="text-[#31795A] text-[24px]">234 8166 813 812</span>
          </p>
        </div>
      </div>
      <div class="container flex flex-col gap-12">
        <div class="flex lg:flex-row flex-col gap-12">
          <FormGroup
            labelClasses="font-Satoshi400 text-[14px] opacity-[0.4986]"
            label="Name*"
            name="Name"
            placeholder="Rashed Kabir"
            type="text"
            inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-2 !py-3 border-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
          ></FormGroup>
          <FormGroup
            labelClasses="font-Satoshi400 text-[14px] opacity-[0.4986]"
            label=" Email*"
            name="Email"
            placeholder="kabirr277@gmail.com"
            type="email"
            inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-2 !py-3 border-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
          ></FormGroup>
        </div>
        <FormGroup
          labelClasses="font-Satoshi400 text-[14px] opacity-[0.4986]"
          label=" Subject (optional)"
          name="text"
          placeholder="Write about the subject here.."
          type="email"
          inputClasses="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-2 !py-3 border-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
        ></FormGroup
        ><textarea
          name=""
          class="w-full mt-2 font-light font-Satoshi400 bg-[#F2F2F2] !p-4 border-none outline-none opacity-[0.8029] rounded-[8px] text-[12.68px]"
          placeholder="Your Message"
          id=""
          cols="30"
          rows="10"
        ></textarea
        ><button class="btn-brand !text-white">Send Message</button>
      </div>
      <WorkFlow />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
