<template>
    <div class="product-showcase-product-view-wrapper section-space--pb_120" id="product">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-12">
                    <!-- gallery-warp Start -->
                    <div class="gallery-warp">
                        <div class="popup-images gallery-grid-4">
                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/notorious/notorious-event-1.jpg')"
                                class="single-gallery grid-width-2 grid-height-2"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/notorious/notorious-event-1.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/notorious/notorious-event-2.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/notorious/notorious-event-2.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/notorious/notorious-event-3.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/notorious/notorious-event-3.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/notorious/notorious-event-4.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/notorious/notorious-event-4.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->

                            <!-- single gallery Start -->
                            <silentbox-single 
                                :src="require('../../assets/img/notorious/notorious-event-5.jpg')"
                                class="single-gallery"
                            >
                                <div class="single-gallery__item">
                                    <div class="single-gallery__thum">
                                        <img class="img-fluid" src="../../assets/img/notorious/notorious-event-5.jpg" />
                                    </div>
                                    <div class="ht-overlay"></div>
                                    <div class="overlay-icon">
                                        <i class="far fa-search"></i>
                                    </div>
                                </div>
                            </silentbox-single>
                            <!-- single gallery End -->
                        </div>
                    </div>
                    <!-- gallery-warp End -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'ProductOverview',
    };
</script>

<style lang="scss">

</style>