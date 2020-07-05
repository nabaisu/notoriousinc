<template>
    <div class="brand-logo-slider-area section-space--pt_90" :class="brandlogo">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="brand-logo-slider__container-area">
                        <div class="swiper-container brand-logo-slider__container">
                            <div class="swiper-wrapper brand-logo-slider__wrapper">
                                <swiper :options="swiperOption">


                                   <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center ">
                                            <img src="../assets/img/notorious/notorious-partner-1.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/notorious-partner-3.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide ">
                                        <div class=" brand-logo__image text-center ">
                                            <img src="../assets/img/notorious/ibm-logo.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                                        <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/deloitte-logo.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>                                    <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/edp-logo.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>                                    <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/kpmg-logo.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>      
                                                                        <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class="brand-logomb-0 wow move-up">
                                            <img src="../assets/img/notorious/notorious-partner-2.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>                              <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/lidl-logo.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/mckinsey-logo.png" class="img-fluid" alt="brand logo">
                                        </div>
                                    </div>
                                    <div class="swiper-slide agency-brand-logo brand-logo--slider">
                                        <div class=" brand-logo__image text-center">
                                            <img src="../assets/img/notorious/pwc-logo.png" class="img-fluid" alt="brand logo">
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
    export default {
        name: 'BrandLogoCarouselTwo',
        props: ["brandlogo"],
        data (){
            return {
                swiperOption: {
                    speed: 800,
                    loop: true,
                    autoplay: true,
                    slidesPerView: 6,
                    breakpoints: {
                        991:{
                            slidesPerView : 4
                        },
                        767:{
                            slidesPerView : 3
                        },
                        575:{
                            slidesPerView : 2
                        }
                    }
                }
            }
        }
    }
</script>