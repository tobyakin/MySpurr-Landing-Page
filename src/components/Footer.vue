<script setup>
import { ref, reactive } from "vue";

const getYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-[#00474F] mt-0 py-10 text-white">
    <div
      class="container py-[90px] flex lg:flex-row flex-col justify-center lg:justify-between gap-[130px] lg:py-[140px]"
    >
      <div class="w-auto">
        <div class="mb-4">
          <img
            src="@/assets/whiteLogo.png"
            class="h-[40px] md:h-[27.53px] w-auto"
            alt=""
          />
        </div>
        <div class="flex lg:flex-cols-2 flex-col gap-1 justify-center lg:justify-between">
          <h3
            class="font-Satoshi500 text-[14.753px] leading-[22.2px] opacity-[0.6000000238418579]"
          >
            support@myspurr.net
          </h3>
          <hr
            class="bg-[#80BAC0] h-[2px] lg:w-full w-[50%] justify-start my-3 ml-0 mr-[50%] lg:mr-[65%]"
          />

          <div
            class="text-[14px] justify-between lg:flex flex-col block opacity-[0.6000000238418579] font-Satoshi500"
          >
            <!-- <hr
              class="bg-[#80BAC0] h-[2px] lg:w-[35%] w-[50%] justify-start my-3 ml-0 mr-[50%] lg:mr-[65%]"
            /> -->

            <div class="flex gap-2 justify-start lg:mt-0 mt-4">
              <a href="https://twitter.com/usemyspurr" target="_blank" role="button">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="1.1875"
                    width="34.2672"
                    height="34.4375"
                    rx="5.5"
                    stroke="white"
                  />
                  <path
                    d="M28.2132 13.6455C27.4952 13.9528 26.7533 14.1656 25.9636 14.2602C26.7773 13.7874 27.3995 13.0309 27.6867 12.1089C26.9209 12.5581 26.0833 12.8654 25.1978 13.0545C24.4799 12.298 23.4508 11.8252 22.3261 11.8252C20.1483 11.8252 18.4013 13.5746 18.4013 15.7022C18.4013 16.0096 18.4253 16.2933 18.497 16.5769C15.2424 16.4351 12.3706 14.8748 10.4322 12.5344C9.04418 14.993 10.5997 17.0261 11.6288 17.7117C11.0066 17.7117 10.3843 17.5226 9.85785 17.2389C9.85785 19.1538 11.2219 20.7377 12.9928 21.0923C12.6099 21.2105 11.7484 21.2814 11.2219 21.1632C11.7245 22.6998 13.1843 23.8346 14.8834 23.8582C13.5433 24.8984 11.5809 25.7258 9.06812 25.4658C10.8151 26.5769 12.8732 27.2152 15.0988 27.2152C22.3261 27.2152 26.2508 21.3051 26.2508 16.1987C26.2508 16.0332 26.2508 15.8677 26.2269 15.7022C27.0405 15.1112 27.7106 14.4257 28.2132 13.6455Z"
                    fill="white"
                  />
                </svg>
              </a>

              <a href="https://www.instagram.com/myspurr/" target="_blank" role="button">
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.767212"
                    y="1.1875"
                    width="34.2672"
                    height="34.4375"
                    rx="5.5"
                    stroke="white"
                  />
                  <path
                    d="M13.7924 8H22.1924C25.3924 8 27.9924 10.6 27.9924 13.8V22.2C27.9924 23.7383 27.3814 25.2135 26.2937 26.3012C25.2059 27.3889 23.7307 28 22.1924 28H13.7924C10.5924 28 7.99243 25.4 7.99243 22.2V13.8C7.99243 12.2617 8.6035 10.7865 9.69121 9.69878C10.7789 8.61107 12.2542 8 13.7924 8ZM13.5924 10C12.6377 10 11.722 10.3793 11.0468 11.0544C10.3717 11.7295 9.99243 12.6452 9.99243 13.6V22.4C9.99243 24.39 11.6024 26 13.5924 26H22.3924C23.3472 26 24.2629 25.6207 24.938 24.9456C25.6131 24.2705 25.9924 23.3548 25.9924 22.4V13.6C25.9924 11.61 24.3824 10 22.3924 10H13.5924ZM23.2424 11.5C23.574 11.5 23.8919 11.6317 24.1263 11.8661C24.3607 12.1005 24.4924 12.4185 24.4924 12.75C24.4924 13.0815 24.3607 13.3995 24.1263 13.6339C23.8919 13.8683 23.574 14 23.2424 14C22.9109 14 22.593 13.8683 22.3585 13.6339C22.1241 13.3995 21.9924 13.0815 21.9924 12.75C21.9924 12.4185 22.1241 12.1005 22.3585 11.8661C22.593 11.6317 22.9109 11.5 23.2424 11.5ZM17.9924 13C19.3185 13 20.5903 13.5268 21.528 14.4645C22.4656 15.4021 22.9924 16.6739 22.9924 18C22.9924 19.3261 22.4656 20.5979 21.528 21.5355C20.5903 22.4732 19.3185 23 17.9924 23C16.6663 23 15.3946 22.4732 14.4569 21.5355C13.5192 20.5979 12.9924 19.3261 12.9924 18C12.9924 16.6739 13.5192 15.4021 14.4569 14.4645C15.3946 13.5268 16.6663 13 17.9924 13ZM17.9924 15C17.1968 15 16.4337 15.3161 15.8711 15.8787C15.3085 16.4413 14.9924 17.2044 14.9924 18C14.9924 18.7956 15.3085 19.5587 15.8711 20.1213C16.4337 20.6839 17.1968 21 17.9924 21C18.7881 21 19.5511 20.6839 20.1138 20.1213C20.6764 19.5587 20.9924 18.7956 20.9924 18C20.9924 17.2044 20.6764 16.4413 20.1138 15.8787C19.5511 15.3161 18.7881 15 17.9924 15Z"
                    fill="white"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/usemyspurr/"
                target="_blank"
                role="button"
              >
                <svg
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.0343"
                    y="1.1875"
                    width="34.2672"
                    height="34.4375"
                    rx="5.5"
                    stroke="white"
                  />
                  <path
                    d="M27.7409 25.9994V19.3611C27.7409 16.0986 27.0448 13.6064 23.2728 13.6064C21.4542 13.6064 20.2417 14.6033 19.7478 15.5549H19.7029V13.901H16.1329V25.9994H19.86V19.9955C19.86 18.4096 20.1519 16.8916 22.0828 16.8916C23.9913 16.8916 24.0138 18.6815 24.0138 20.0861V25.9768H27.7409V25.9994Z"
                    fill="white"
                  />
                  <path
                    d="M10.3282 13.6064H13.9557V25.9994H10.3282V13.6064Z"
                    fill="white"
                  />
                  <path
                    d="M11.7791 7.77441C10.5775 7.77441 9.60266 8.74893 9.60266 9.95008C9.60266 11.1512 10.5775 12.1484 11.7791 12.1484C12.9808 12.1484 13.9556 11.1512 13.9556 9.95008C13.9556 8.74893 12.9808 7.77441 11.7791 7.77441Z"
                    fill="white"
                  /></svg></a
              ><a href="https://www.instagram.com/myspurr/" target="_blank" role="button"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 31 31"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="1"
                    width="28.9046"
                    height="29.0442"
                    rx="4.91754"
                    stroke="white"
                    stroke-width="0.819589"
                  />
                  <path
                    d="M12.766 16.5566C12.7119 16.5566 11.5237 16.5566 10.9836 16.5566C10.6955 16.5566 10.6055 16.45 10.6055 16.1836C10.6055 15.4732 10.6055 14.7451 10.6055 14.0347C10.6055 13.7505 10.7135 13.6617 10.9836 13.6617H12.766C12.766 13.6084 12.766 12.5784 12.766 12.0989C12.766 11.3885 12.892 10.7136 13.2521 10.092C13.6302 9.45263 14.1703 9.02639 14.8544 8.77775C15.3045 8.61791 15.7546 8.54688 16.2408 8.54688H18.0052C18.2572 8.54688 18.3652 8.65343 18.3652 8.90207V10.9267C18.3652 11.1753 18.2572 11.2819 18.0052 11.2819C17.519 11.2819 17.0329 11.2819 16.5468 11.2997C16.0607 11.2997 15.8087 11.5305 15.8087 12.0278C15.7906 12.5606 15.8087 13.0757 15.8087 13.6262H17.8971C18.1852 13.6262 18.2932 13.7328 18.2932 14.0169V16.1659C18.2932 16.45 18.2032 16.5388 17.8971 16.5388C17.249 16.5388 15.8627 16.5388 15.8087 16.5388V22.3286C15.8087 22.6305 15.7186 22.737 15.3946 22.737C14.6384 22.737 13.9002 22.737 13.144 22.737C12.874 22.737 12.766 22.6305 12.766 22.3641C12.766 20.4993 12.766 16.6099 12.766 16.5566Z"
                    fill="white"
                  /></svg
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col lg:flex-row lg:justify-around lg:text-left text-center justify-center w-full"
      >
        <div>
          <h5 class="font-Satoshi500 text-[19.67px] mb-8">Links</h5>
          <ul class="flex flex-col gap-2">
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> About </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/blog"> Blog </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Case Study </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> FAQ </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Contact </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Advertise </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="font-Satoshi500 text-[19.67px] mb-8">Product</h5>
          <ul class="flex flex-col gap-2">
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Take a tour </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Internships </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Learning </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Go Pro </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h5 class="font-Satoshi500 text-[19.67px] mb-8">Legal</h5>
          <ul class="flex flex-col gap-2">
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Terms of use </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Terms & Conditions </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Privacy </router-link>
            </li>
            <li class="text-[13.933px] font-Satoshi400 leading-[36.062px]">
              <router-link to="/"> Cookie policy </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <p class="my-2 font-Satoshi400 text-[12.294px] tewxt-[#fff] opacity-[0.6]">
        Copyright @ {{ getYear }} A Trigon Media Product.
      </p>
    </div>
  </footer>
</template>
