<template>
    <div class="degital-agency-free-mode-wrap agency-free-mode-bg section-space--pb_90" id="team">
        <div class="container">
            <div class="digital-agency-section-title-area section-space--mb_60">
            </div>
            <div class="row">
                <div class="col-lg-12 wow move-up">
                    <div class="flexible-image-slider-wrap grey-image">
                        <div class="swiper-container auto--per-flexible__container__aegency">
                            <div class="swiper-wrapper auto-plexible-row">
                                <swiper :options="swiperOption">
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/notorious/notorious-event-6.jpg" alt="gallery 01">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/notorious/notorious-event-3.jpg" alt="gallery 02">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/notorious/notorious-event-4.jpg" alt="gallery 03">
                                        </div>
                                    </div>                                    
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/notorious/notorious-event-2.jpg" alt="gallery 01">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/notorious/notorious-event-5.jpg" alt="gallery 02">
                                        </div>
                                    </div>
                                    <div class="swiper-slide">
                                        <div class="single-flexible-slider">
                                            <img class="img-fluid" src="../../assets/img/notorious/notorious-event-1.jpg" alt="gallery 03">
                                        </div>
                                    </div>
                                </swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import BrandLogoCarouselTwo from '../BrandLogoCarouselTwo'
    export default{
        name: 'TeamAgency',
        components: {
            BrandLogoCarouselTwo
        },
        data () {
            return {
                swiperOption: {
                    spaceBetween : 30,
                    loop: true,
                    freeMode: true,
                    slidesPerView: 'auto',
                    autoplay: {
                        delay: 0,
                        disableOnInteraction: false,
                    },
                    speed: 10000
                }
            }
        }
    };
</script>

<style>
.grey-image{
    filter: grayscale(100%);
}
</style>