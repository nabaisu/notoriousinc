<template>
  <div class="main-container">
    <!-- Navbar section -->
    <!--<HeaderPayment /> -->
    

    <!-- hero section -->
    <HeroPayment />

    <!-- gradation component start -->
    <div class="icon-process-area section-space--ptb_120">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <Gradation />
          </div>
        </div>
      </div>
    </div>
    <!-- gradation component end -->

    <!-- payment feature section -->
    <div class="section-space--pt_60" style="background:#5D5D5D">
      <PaymentFeatureSection />
    </div>

    <!-- brand carousel -->
    <CarouselStartup />

    <!-- team 2 -->
    <div class="team-member-wrapper section-space--ptb_120 black-bg">
      <div class="container">
        <TeamTwo />
      </div>
    </div>

    <!-- newsletter section -->
    <ContactForm />

    <!-- footer section -->
    <div class="team-member-wrapper section-space--pt_60 black-bg">
      <div class="container">
        <FooterBottom />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderPayment from "@/components/sections/HeaderPayment";
import HeroPayment from "@/components/sections/HeroPayment";
import PaymentFeatureSection from "@/components/sections/PaymentFeatureSection";
import PaymentStep from "@/components/sections/PaymentStep";
import PaymentPricingWrapper from "@/components/sections/PaymentPricingWrapper";
import PaymentNewsletter from "@/components/sections/PaymentNewsletter";
import CarouselStartup from "@/components/CarouselStartup";
import FooterBottom from "@/components/FooterBottom";
import Gradation from "@/components/Gradation";
import ContactForm from "../components/ContactForm";
import TeamTwo from "../components/TeamTwo";

export default {
  name: "app",
  components: {
    HeaderPayment,
    HeroPayment,
    PaymentFeatureSection,
    PaymentStep,
    PaymentPricingWrapper,
    PaymentNewsletter,
    CarouselStartup,
    FooterBottom,
    Gradation,
    TeamTwo,
    ContactForm
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variabls.scss";
@import "../assets/scss/page-section/_payment.scss";
</style>

