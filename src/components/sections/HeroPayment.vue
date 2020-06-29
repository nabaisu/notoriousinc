<template>
  <div>
    <div class="payment-hero__slider bg-cover" :style="bgImg" id="home">
      <div class="container-fluid container-fluid--cp-150">
        <div class="row">
          <div class="col-lg-12">
            <div class="payment-hero-hero__content text-center section-space--mt_30">
              <div class="row">

                  <div class="payment-hero__text " style="max-width:100vw">
                    <h1 class="text-black mt-3">The most glamorous and exclusive delights of life...</h1>
                    <div style="height:10vh"></div>
                  </div>

              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <div class="payment-hero-hero__content text-center section-space--mt_30">
              <div class="payment-hero--images__midea">
                <img
                  src="../../assets/img/notorious/notorious-inc.png"
                  alt="hero thumb"
                  class="img-fluid"
                />
                <div style="height:20vh"></div>     
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="payment_feature_svg vc_row-separator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          preserveAspectRatio="none"
          viewBox="0 0 4 0.266661"
        >
          <linearGradient id="svg-fill-5d3a79b9bb254">
            <stop offset="0%" stop-color="#3a3a3a" />
            <stop offset="100%" stop-color="#3a3a3a" />
          </linearGradient>
          <polygon points="4,0 4,0.266661 -30,0.266661" fill="url( #svg-fill-5d3a79b9bb254 )" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgImg: {
        backgroundImage: `url(${require("../../assets/img/notorious/thenotoriousinc.jpg")})`
      }
    };
  }
};
</script>
