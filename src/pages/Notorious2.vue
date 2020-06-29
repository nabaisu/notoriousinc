<template>
	<div class="main-container">
		<!-- Navbar section -->
		<HeaderShowcase />

		<!-- hero section -->
		<HeroDigitalAgency />

		<!-- brand logo carousel -->
		<BrandLogoCarousel class="pb-0" />
		
		<!-- feature section -->
		<PaymentFeatureSection />

		<!-- download section -->
		<Download />

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
	import HeroDigitalAgency from "../components/sections/HeroDigitalAgency";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import PaymentFeatureSection from "../components/sections/PaymentFeatureSection";
	import Download from "../components/Download";
	import ThreeStepProcessWrap from "../components/ThreeStepProcessWrap";
	import AppShowcaseNewsletter from "../components/sections/AppShowcaseNewsletter";
	import FooterAppShowcase from "../components/FooterAppShowcase";
	import OverlayMenu from "../components/OverlayMenu";

	export default {
		name: "app",
		components: {
			HeaderShowcase,
			HeroDigitalAgency,
			BrandLogoCarousel,
			PaymentFeatureSection,
			Download,
			ThreeStepProcessWrap,
			AppShowcaseNewsletter,
			FooterAppShowcase,
			OverlayMenu
		}
	};
</script>

