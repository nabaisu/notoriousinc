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
            <div class="section-title text-white text-center section-space--mb_60">
              <h2 class="font-weight--bold mb-15 text-white">Our mission:</h2>
              <p
                class="text-center lead"
              >Notorious Inc is a lifestyle marketing project that aims to connect people and companies, in casual and mutually beneficial relationships. Companies offer access to unique and exclusive events, from trips, to dinner parties and other adventures, that are often limited to a restricted group of people, allowing members of the Notorious Inc community (Notorees) to have amazing high-value experiences and enjoy life, at the same time that content is created to dynamize both the brand and the Notorees’ social network.</p>
            </div>
          </div>

              <!-- brand carousel -->
    <CarouselStartup />
        </div>
      </div>
    </div>
    <!-- gradation component end -->


    <!-- payment feature section -->
    <div class="section-space--pt_60" style="background:#5D5D5D">
      <TeamAgency />
      <PaymentFeatureSection />
    </div>



    <!-- team 2   
    <div class="team-member-wrapper section-space--ptb_120" style="background:#5D5D5D">
      <div class="container">
        <TeamTwo />
      </div>
    </div>
    -->


    <!-- newsletter section -->
    <ContactForm />

    <!-- footer section -->
    <div class="team-member-wrapper section-space--pt_60" style="background:#5D5D5D">
      <div class="container">
        <FooterBottom />
      </div>
    </div>
  </div>
</template>

<script>
import HeroPayment from "@/components/sections/HeroPayment";
import PaymentFeatureSection from "@/components/sections/PaymentFeatureSection";
import CarouselStartup from "@/components/CarouselStartup";
import FooterBottom from "@/components/FooterBottom";
import ContactForm from "@/components/ContactForm";
import TeamAgency from "@/components/sections/TeamAgency";

export default {
  name: "app",
  components: {
    HeroPayment,
    PaymentFeatureSection,
    CarouselStartup,
    FooterBottom,
    ContactForm,
    TeamAgency
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variabls.scss";
@import "../assets/scss/page-section/_payment.scss";
</style>

