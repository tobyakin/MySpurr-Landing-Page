<script setup>
import { ref } from "vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer.vue";
import WorkFlow from "@/components/Bander/WorkFlow.vue";
import FAQsSection from "@/components/FAQs/FAQsSection.vue";
import ProFeatureCard from "@/components/GoPro/ProFeatureCard.vue";
import PriorityIcon from "@/assets/svg/priorityIcon.svg";
import Chat from "@/assets/svg/chat.svg";
import SupportIcon from "@/assets/svg/supportIcon.svg";
import listingIcon from "@/assets/svg/listingIcon.svg";
import Invoice from "@/assets/svg/invoice.svg";
import AgencyIcon from "@/assets/svg/agencyIcon.svg";
import InternIcon from "@/assets/svg/internIcon.svg";
import learningIcon from "@/assets/svg/learningIcon.svg";
import BulbGearIcon from "@/assets/svg/bulbGearIcon.svg";
import Analytics from "@/assets/svg/analytics.svg";
import CoachingIcon from "@/assets/svg/coachingIcon.svg";
import useFaqStore from "@/stores/faq";
import PricingSection from "@/components/GoPro/PricingSection.vue";

const store = useFaqStore();
const boxLists = ref([
  {
    icon: PriorityIcon,
    heading: " Priority talent visibility",
    text: `Get noticed faster by top employers with priority placement for your creative talent profile.`,
  },
  {
    icon: Invoice,
    heading: "Customizable invoices",
    text: `Send professional, tailored invoices to clients and receive direct payments on your wallet`,
  },
  {
    icon: listingIcon,
    heading: "Premium job listing",
    text: `Showcase your job openings to a curated pool of top talents with our premium listing feature.`,
  },
  {
    icon: learningIcon,
    heading: "MySpurr learning",
    text: `Access a world of creative knowledge and upskill with curated courses.`,
  },
  {
    icon: CoachingIcon,
    heading: "Career Coaching",
    text: `Elevate your creative career with personalized guidance and coaching from industry experts. `,
  },
  {
    icon: SupportIcon,
    heading: "Account support",
    text: ` Enjoy dedicated support for your MySpurr account, ensuring a seamless experience. `,
  },
  {
    icon: BulbGearIcon,
    heading: "Hiring solutions",
    text: `Tailor your talent search with customized solutions to find the perfect creative professional. `,
  },
  {
    icon: Chat,
    heading: "Chat and scheduling",
    text: `Connect and collaborate effortlessly with integrated chat and scheduling features. `,
  },
  {
    icon: InternIcon,
    heading: "MySpurr internships",
    text: ` Bridge the gap between talent and opportunity with our platform for graduate internships.`,
  },
  {
    icon: AgencyIcon,
    heading: "Agency account",
    text: `Streamline project showcases for your agency with a team account for seamless project management. `,
  },
  {
    icon: Analytics,
    heading: "Stats and analytics",
    text: `Gain valuable insights into your talent interactions and job listings with our analytics tools. `,
  },
  {
    icon: Chat,
    heading: "Send direct messages",
    text: `Connect instantly with businesses and other talents  through direct communication. `,
  },
]);
</script>
<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="flex justify-center mt-20 lg:mt-40">
        <h4
          class="text-[#993939] text-[20px] lg:text-[27.198px] leading-[36.264px] font-Satoshi500"
        >
          MySpurr Pro
        </h4>
      </div>

      <div class="flex justify-center text-center mt-10">
        <h4
          class="text-[#011B1F] text-[40px] lg:text-[89.956px] font-normal font-EBGaramond500 leading-[40px] lg:leading-[98.526px]"
        >
          Do more with <br class="md:block hidden" />
          MySpurr Pro
        </h4>
      </div>
      <div class="flex justify-center text-center mt-12">
        <p
          class="text-[#000000B2] lg:text-[27.198px] font-Satoshi400 leading-[20px] lg:leading-[36.264px]"
        >
          Our Pro offerings are designed to empower both creative talents and businesses
          with <br class="md:block hidden" />
          enhanced tools, features, and support that take your projects and collaborations
          to the <br class="md:block hidden" />
          next level.
        </p>
      </div>
      <PricingSection />
      <div class="flex flex-col text-center justify-center gap-4 my-20 lg:my-40">
        <h4 class="text-[#000000] text-[40px] lg:text-[72px] font-EBGaramond500">
          Pro Features
        </h4>
        <p class="text-[#000000B2] lg:text-[27.198px] font-Satoshi400">
          Some benefits of becoming a MySpurr Pro user
        </p>
      </div>

      <div class="grid !px-0 lg:grid-cols-4 lg:gap-[40px] gap-[30px] grid-cols-1">
        <ProFeatureCard :boxLists="boxLists" />
      </div>
      <div class="flex justify-center mt-40">
        <h4 class="text-[#000000] text-[59.569px] font-Satoshi500">FAQs</h4>
      </div>
      <FAQsSection :faqs="store.faqs" />
      <div class="flex justify-center mt-40">
        <button class="btn-brand font-Satoshi500">Upgrade to Pro</button>
      </div>
      <WorkFlow />
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
