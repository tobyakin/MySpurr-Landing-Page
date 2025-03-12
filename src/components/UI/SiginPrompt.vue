<template>
    <transition name="fade">
        <section class="fixed bg-[#00000066] !z-[99] w-full h-full top-0 left-0 grid pt-[20vh]">
           <div class="w-[40%] tab:w-[50%] msgTab:w-[80%] h-fit mx-auto msgMob:mt-0 rounded-[0.5rem] bg-white transitionItem overflow-hidden msgMob:w-[90%]">
             <div 
             class="mt-[1.96rem] pr-[1.96rem] w-full flex justify-end mb-[1.56rem] cursor-pointer"
             @click="handleClose"
             >
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" viewBox="0 0 20 19" fill="none">
                 <path d="M19.8535 2.00753L17.865 0.167969L9.98145 7.461L2.09789 0.167969L0.109375 2.00753L7.99293 9.30056L0.109375 16.5936L2.09789 18.4332L9.98145 11.1401L17.865 18.4332L19.8535 16.5936L11.97 9.30056L19.8535 2.00753Z" fill="#323232"/>
                 </svg>
             </div>
             <div class="w-[79.39%] msgMob:w-[90%] mx-auto flex flex-col items-center text-center pb-[1.96rem]">
                 <div class="mb-[1.25rem]">
                     <logoIcon />
                 </div>
                 <div>
                     <h3 class="font-Satoshi700 text-[#01181B] text-[1.78rem] leading-[2.06rem] !mb-4">Create an account or Sign in to start a conversation</h3>
                     <p class="text-[#011B1F] font-Satoshi400 text-[1.1rem] leading-[1.94rem] !mb-[3.44rem]">
                         Whether you're a business looking to hire top-tier African talent or a talent ready to elevate your career, MySpurr is here to connect you.
                     </p>
                 </div>
                 <div class="flex items-center justify-center w-full gap-[2.4rem]">
                     <a
                     role="button"
                     target="_blank"
                     :href="dashboardUrl + 'login'"
                     class="btn-light font-Satoshi500 !text-[1rem]"
                     >
                     Sign in
                     </a>
                     <a
                     role="button"
                     target="_blank"
                     :href="dashboardUrl + 'signup'"
                     class="btn-brand font-Satoshi500"
                     >Sign up for free
                     </a>
                 </div>
             </div>
             
           </div>
         </section>
    </transition>
</template>

<script setup>
import logoIcon from '../icons/logoIcon.vue';

const emits = defineEmits(['close', 'signin', 'signup'])

const handleClose = ()=>{
    emits('close')
}
// const handleSignIn = ()=>{
//     emits('signin')
// }
// const handleSignUp = ()=>{
//     emits('signup')
// }

const dashboardUrl = import.meta.env.VITE_DASHBOARD_HOST;

</script>

<style lang="scss" scoped>

</style>