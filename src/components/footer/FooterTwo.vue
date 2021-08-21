<template>
  <!-- Start Footer Style Two  -->
  <div class="footer-style-2 ptb--30 bg_color--6" data-black-overlay="6">
    <div class="wrapper plr--50 plr_sm--20">
      <v-row align="center">
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="inner">
            <div class="text-center d-block logo text-sm-left mb_sm--20">
              <router-link to="/"
                ><img :src="logo" alt="Logo images"
              /></router-link>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="6" cols="12">
          <div class="text-center inner">
            <ul class="justify-center social-share d-flex liststyle">
              <li v-for="(social, i) in socialList" :key="i">
                <a :href="social.url" target="_blank"
                  ><i class="fab" :class="social.icon"></i
                ></a>
              </li>
            </ul>
          </div>
        </v-col>
        <!-- End .col -->
        <v-col lg="4" md="4" sm="12" cols="12">
          <div class="text-center inner text-md-right mt_md--20 mt_sm--20">
            <div class="text">
              <p>
                Copyright © {{ new Date().getFullYear() }} <a
                  target="_blank"
                  class="copyright_txt"
                  href="https://themeforest.net/user/ib-themes"
                  >ib-themes</a> All Rights
                Reserved.
              </p>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
  </div>
  <!-- End Footer Style Two  -->
</template>

<script>
  export default {
    data() {
      return {
        logo: require("../../assets/images/logo/logo-light.png"),
        socialList: [
          {
            icon: "fa-facebook-f",
            url: "https://www.facebook.com/",
          },
          {
            icon: "fa-linkedin-in",
            url: "https://www.linkedin.com/",
          },
          {
            icon: "fa-twitter",
            url: "https://twitter.com/",
          },
          {
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/",
          },
        ],
      };
    },
  };
</script>
