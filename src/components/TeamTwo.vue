<template>
    <div class="row">
        <div class="col-lg-12">
            <div class="section-title text-center section-space--mb_60">


                
                <h2 class="font-weight--bold mb-15 wow move-up" style="color:#3a3a3a">Notorious Team</h2>
                <span class="section-text wow move-up" style="color:#3a3a3a">Our team joins years of experience of partnership success.</span>
            </div>
        </div>
        <div class="col-lg-12">
            <div class="swiper-container team-slider__container">
                <swiper :options="swiperOption">
                    <div class="swiper-slide">
                        <div class="grid-item wow move-up">
                            <!-- ht-team-member Start -->
                            <div class="ht-team-member text-center">
                                <div class="ht-team-member--inner">
                                    <!-- team-image Start -->
                                    <div class="team-image">
                                        <img class="img-fluid" style="border-radius: 50%;" src="../assets/img/notorious/notorious-team1-300x250.jpeg" alt="avatar 01">
                                    </div>
                                    <!-- team-image End -->
                                    <!-- team-info Start -->
                                    <div class="team-info text-center">
                                        <h5 class="name">Extravagant Azevedo</h5>

                                        <div class="position">Co-Founder</div>

                                        <div class="social-networks-rounded mt-10">
                                            <ul class="list ht-social-networks solid-rounded-icon">
                                                <li class="item">
                                                    <a target="_blank" href="#" class="social-link hint--bounce hint--top  hint--primary" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="#" class="social-link hint--bounce hint--top hint--primary" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="#" class="social-link hint--bounce hint--top hint--primary" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- team-info End -->
                                </div>
                            </div>
                            <!-- ht-team-member End -->
                        </div>
                    </div>
 
                    <div class="swiper-slide">
                        <div class="grid-item wow move-up">
                            <!-- ht-team-member Start -->
                            <div class="ht-team-member text-center">
                                <div class="ht-team-member--inner">
                                    <!-- team-image Start -->
                                    <div class="team-image">
                                        <img class="img-fluid" style="border-radius: 50%;" src="../assets/img/notorious/notorious-team1-300x250.jpeg"  alt="avatar 05">
                                    </div>
                                    <!-- team-image End -->
                                    <!-- team-info Start -->
                                    <div class="team-info text-center">
                                        <h5 class="name">Genius Ribeiro</h5>

                                        <div class="position">Co-Founder</div>

                                        <div class="social-networks-rounded mt-10">
                                            <ul class="list ht-social-networks solid-rounded-icon">
                                                <li class="item">
                                                    <a target="_blank" href="#" class="social-link hint--bounce hint--top  hint--primary" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="#" class="social-link hint--bounce hint--top hint--primary" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                                </li>
                                                <li class="item">
                                                    <a target="_blank" href="#" class="social-link hint--bounce hint--top hint--primary" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- team-info End -->
                                </div>
                            </div>
                            <!-- ht-team-member End -->
                        </div>
                    </div>
                </swiper>
                <!-- Add Arrows -->
                <div class="swiper-pagination swiper-pagination-2 section-space--mt_50"></div>
            </div>
        </div>
    </div>
                
</template>

<script>
    export default {
        name: 'TeamTwo',
        data () {
            return {
                swiperOption: {
                    speed: 800,
                    loop: true,
                    slidesPerView: 2,
                    spaceBetween : 30,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                     breakpoints: {
                        1499:{
                            slidesPerView : 2
                        },

                        991:{
                            slidesPerView : 2
                        },

                        767:{
                            slidesPerView : 1

                        },

                        575:{
                            slidesPerView : 1
                        }
                    }
                }
            }
        }
    }
</script>
