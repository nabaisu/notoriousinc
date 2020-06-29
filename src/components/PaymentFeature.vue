<template>
    <div class="row">
        <div v-for="item in items" :key="item.id" class="col-lg-6 col-md-12 mb-25 wow move-up">
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
                        text:'Get to know beautiful islands in the Middle of the Atlantic'
                    },
                    {
                        icon:'fa fa-anchor text-black', 
                        heading:'Incredible Experiences', 
                        text:'Such as surf classes and sailing tours.'
                    },
                    {
                        icon: 'fa fa-camera text-black', 
                        heading:'Multimedia Content', 
                        text:'A new portfolio by our own experienced photographer, as well as videos and photos from all attended events.'
                    },
                    {
                        icon:'fa fa-graduation-cap text-black', 
                        heading:'Specific Education', 
                        text:'Introductory course to personal branding and communication, as well as Introductory course to personal branding and communication'
                    },
                    {
                        icon: 'fa fa-home text-black', 
                        heading:'Discounts in partner stores', 
                        text:'Where you can profit from the unique range of products.'
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
