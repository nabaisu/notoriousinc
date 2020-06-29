<template>
	<div class="main-container">
		<!-- Navbar section -->
		<HeaderShowcase />

        <!-- hero section -->
        <HeroClinic />

		<!-- brand logo carousel -->
		<BrandLogoCarousel class="pb-0" />
		
		<!-- feature section -->
		<FeatureList />

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
	import HeroClinic from "../components/sections/HeroClinic";
	import BrandLogoCarousel from "../components/BrandLogoCarousel";
	import FeatureList from "../components/FeatureList";
	import Download from "../components/Download";
	import ThreeStepProcessWrap from "../components/ThreeStepProcessWrap";
	import AppShowcaseNewsletter from "../components/sections/AppShowcaseNewsletter";
	import FooterAppShowcase from "../components/FooterAppShowcase";
	import OverlayMenu from "../components/OverlayMenu";

	export default {
		name: "app",
		components: {
			HeaderShowcase,
			HeroClinic,
			BrandLogoCarousel,
			FeatureList,
			Download,
			ThreeStepProcessWrap,
			AppShowcaseNewsletter,
			FooterAppShowcase,
			OverlayMenu
		}
	};
</script>

