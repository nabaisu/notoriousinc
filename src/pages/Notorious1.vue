<template>
	<div class="main-container">
		<!-- Navbar section -->
		<HeaderShowcase />

		<!-- hero section -->
		<HeroAppShowcase />

		<!-- FeatureList section -->
		<FeatureList />
		

        <!-- payment feature section -->
        <PaymentFeatureSection />

		<!-- brand logo carousel -->
		<BrandLogoCarousel class="pb-0" />
		
		<!-- feature section -->
		<FeatureAppShowcase />

		<!-- three step process -->
		<ThreeStepProcessWrap />

		<!-- newsletter section -->
		<AppShowcaseNewsletter />

		<!-- footer section -->
        <FooterAppShowcase />

		<!-- overlay menu section -->
		<OverlayMenu/>
	</div>
</template>

<script>
	import HeaderShowcase from "../components/HeaderShowcase";
	import HeroAppShowcase from "../components/HeroAppShowcase";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import PaymentFeatureSection from "../components/sections/PaymentFeatureSection";
	import FeatureList from "../components/FeatureList";
	import ThreeStepProcessWrap from "../components/ThreeStepProcessWrap";
	import AppShowcaseNewsletter from "../components/sections/AppShowcaseNewsletter";
	import FooterAppShowcase from "../components/FooterAppShowcase";
	import OverlayMenu from "../components/OverlayMenu";

	export default {
		name: "app",
		components: {
			HeaderShowcase,
			HeroAppShowcase,
			BrandLogoCarousel,
			PaymentFeatureSection,
			FeatureList,
			ThreeStepProcessWrap,
			AppShowcaseNewsletter,
			FooterAppShowcase,
			OverlayMenu
		}
	};
</script>

