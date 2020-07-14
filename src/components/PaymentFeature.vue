<template>
    <div class="row">
        <div v-for="item in items" :key="item.id" class="col-lg-6 col-md-12 mb-25 ">
            <div class="ht-service-box--three" style="background: ">
                <div class="service-box-wrap">
                    <div class="image__media">
                        
                        <i :class="item.icon" alt="" style="font-size:4rem"></i>
                    </div>
                    <div class="content">
                        <h5 class="heading font-weight--light">{{ item.heading }}</h5>
                        <div class="service_text">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PaymentFeature',
        data (){
            return {
                items: [
                    {
                        icon: 'fa fa-map text-black',
                         heading:'Traveling', 
                        text:'Get to know different countries, fly to paradisiacal islands and enrich yourself by being in contact with different environments and cultures.'
                    },
                    {
                        icon:'fa fa-anchor text-black', 
                        heading:'Incredible Experiences', 
                        text:'From skiing in virgin snow, sailing and surfing in crystalline waters, to spiritual nature-based retreats.'
                    },
                    {
                        icon: 'fa fa-camera text-black', 
                        heading:'Multimedia Content', 
                        text:'Get access to high-quality content to dynamize your social network produced by our team of professional photographers, content producers and marketeers, as you enjoy these exclusive experiences.'
                    },
                    {
                        icon:'fa fa-graduation-cap text-black', 
                        heading:'Specific Education', 
                        text:'Some Notorees by showing great potential can even be offered courses in personal branding and communication and even get the chance to become a part of our full-time influencers team.'
                    },
                    {
                        icon: 'fa fa-home text-black', 
                        heading:'Discounts in partner stores', 
                        text:'Notorees have access to discounts in partner stores where they can profit from a unique range of products.'
                    },
                    {
                        icon: 'fa fa-star text-black', 
                        heading:'Nightlife', 
                        text:'Access to exclusive parties and VIP entrances to clubs​.'
                    },
                ]
            }
        }
    }
</script>
