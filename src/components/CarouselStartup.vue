<template>
  <div
    class="brand-logo-slider-area bg-black section-space--pt_100 section-space--pb_60 startup-carousel"
  >
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="section-title text-center section-space--mb_30">
            <!-- <h2 class="font-weight--bold mb-15 same-height">Notorious Partners</h2> -->
            <span class="section-text text-center">Some former projects of our members</span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="brand-logo-slider__container-area">
            <div class="swiper-container brand-logo-slider__container">
              <div class="swiper-wrapper brand-logo-slider__wrapper gray-logo">
                <swiper :options="swiperOption">
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/ibm-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/deloitte-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/edp-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/client__logo-apiax.svg"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/kpmg-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/lidl-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/mckinsey-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/pwc-logo.png"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
                    </div>
                  </div>
                  <div class="swiper-slide swiper-slide-logo">
                    <div class="brand-logo mb-0 same-height">
                      <img
                        src="../assets/img/notorious/client__logo-alix-partners.svg"
                        class="img-fuild img-teste"
                        alt="brand logo"
                      />
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
  name: "CarouselStartup",
  data() {
    return {
      swiperOption: {
        speed: 800,
        loop: true,
        autoplay: false,
        slidesPerView: 6,
        spaceBetween: 30,
        breakpoints: {
          991: {
            slidesPerView: 4
          },

          767: {
            slidesPerView: 3
          },
          575: {
            slidesPerView: 2
          }
        }
      }
    };
  }
};
</script>

<style>
.gray-logo {
  filter: grayscale(100%);
}
.swiper-slide-logo {
  height: 10rem;
}

.center-verr {
  align-items: center;
}

.img-teste {
  max-width: 100%;
  max-height: 100%;
}

.vertical-center {
  max-height: 10rem;
  max-width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.same-height {
  height: inherit;
  display: flex;
  align-items: center;
}
</style>