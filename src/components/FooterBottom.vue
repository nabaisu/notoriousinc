<template>
    <div class="footer-area-wrapper">
        <div class="footer-copyright-area ebook-footer section-space--pb_120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ebook-social-group__list mb-20 text-center">
                            <ul class="list ht-social-networks tilte-style">
                                <li class="item">
                                    <a href="#" target="_blank" class="social-link"><span class="link-text text-white">Twitter</span> </a>
                                </li>
                                <li class="item">
                                    <a href="#" target="_blank" class="social-link"><span class="link-text text-white">Instagram</span></a>
                                </li>
                                <li class="item">
                                    <a href="#" target="_blank" class="social-link"><span class="link-text text-white">LinkedIn</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row aling-items-center">
                    <div class="col-md-12">
                        <div class="horizontal-list text-center">
                            <ul>
                                <li> © {{ new Date().getFullYear() }} The Notorious Inc. All Rights Reserved</li>
                                <li><a href="tel:+351916712298" class="hover-style-link hover-style-link--sub-color">(+351) 916 712 298</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'FooterBottom',
    };
</script>