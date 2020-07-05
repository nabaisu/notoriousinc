<template>
  <div class="contact-form-section section-space--ptb_120" id="contact">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 order-2 order-lg-1">
          <div class="section-title text-left section-space--mb_60">
            <h2 class="font-weight--bold mb-15 wow move-up">Join the Notorious life</h2>
            <span
              class="section-text_left wow move-up"
            >Let’s become partners to build a better future for today.</span>
          </div>
          <div class="contact-from-wrapper wow move-up">
            <form id="contact-form" >
              <div class="contact-page-form">
                <div class="contact-input">
                  <div class="contact-inner">
                    <input name="name" type="text" placeholder="Name *" v-model="name" />
                  </div>
                  <div class="contact-inner">
                    <input name="email" type="email" placeholder="Email *" v-model="email"/>
                  </div>
                </div>
                <div class="contact-inner">
                  <input name="insta" type="text" placeholder="Instagram profile *" v-model="insta"/>
                </div>
                <div class="contact-inner contact-message">
                  <textarea name="text" placeholder="Message *" v-model="text"></textarea>
                </div>
                <div class="contact-submit-btn">
                  <div class="ht-btn ht-btn-md text-white" type="submit" :disabled="disabledButton" v-on:click="sendEmail">{{disabledButton ? "Sending..." : "Send Message"}} </div>
                  <p class="form-messege"></p>
                </div>
              </div>
            </form>
            <div v-if="submitted" class="alert mt-3" :class="this.successClass" role="alert">
                {{successMessage}}
            </div>
          </div>
        </div>
        <div class="col-lg-5 order-1 order-lg-2">
          <div style="height:5vh"></div>
          <div class="peatures_image-wrap section-space--mb_40">
            <div class="image text-center wow move-up">
              <img
                class="img-fluid"
                src="../assets/img/notorious/notorious-inc.png"
                alt="contact thumb"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
        submitted:false,
        successClass: "alert-success",
        disabledButton: false,
        successMessage:"",
      name: "",
      email: "",
      insta: "",
      text: "",
      data_js : {
        "access_token": "5yw8nch8ybjro79wem8eg83b"
    }
    }
  },
  methods: {

    sendEmail() {
        this.disabledButton = true;
        let vm = this;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                vm.onSuccess();
            } else
            if(request.readyState == 4) {
                vm.onError(request.response);
            }
            this.disabledButton = false;
        };

        var subject = "new submission by:"+this.name
        var message = `name: ${this.name}, instagram: ${this.insta}, email: ${this.email}, message: ${this.text}`
        this.data_js['subject'] = subject;
        this.data_js['text'] = message;
        var params = this.toParams();

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);
    },
     toParams() {
        var form_data = [];
        for ( var key in this.data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(this.data_js[key]));
        }

        return form_data.join("&");
    },
    onSuccess() {
        this.submitted = true;
        this.successMessage = "Great! The message was correctly sent. One of out notorious members will contact you soon."
        this.successClass = "alert-success"
    },
    onError(error) {
        this.submitted = true;
        this.successMessage = "sorry but there was an error when trying to send the message, please try again, or contact contact@notoriousinc.io by email"
        this.successClass = "alert-danger"
    }
  }
};
</script>