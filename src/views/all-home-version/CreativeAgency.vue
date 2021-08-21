<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="slider-paralax bg_image  d-flex align-center justify-center"
        :style="{ backgroundImage: 'url(' + creativeAgencyImg + ')' }"
        data-black-overlay="6"
      >
        <div class="slide slide-style-4">
          <v-container>
            <div class="inner text-center">
              <h1 class="heading-title">
                Introduce Our <br />
                Creative Agency.
              </h1>
              <p class="description">
                There are many variations of passages of Lorem Ipsum <br />
                available but the majority have suffered alteration.
              </p>
              <div class="slide-btn button-group">
                <router-link class="btn-default" to="/contact"
                  >Imroz Service</router-link
                >
                <router-link
                  class="btn-default btn-border btn-opacity"
                  to="/portfolio"
                  >See Projects</router-link
                >
              </div>
            </div>
          </v-container>
        </div>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Service Area  -->
    <div class="service-area creative-service-wrapper ptb--120 bg_color--1">
      <v-container>
        <v-row class="mb--30">
          <v-col cols="12">
            <div class="section-title text-center">
              <span class="subtitle">What we can do for you</span>
              <h2 class="heading-title">Services provide for you.</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <ServiceThree />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 pb--140 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center">
              <span class="subtitle">Our project</span>
              <h2 class="heading-title">Some of our Recent Works</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <PortfolioTwo />
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div class="rn-counterup-area ptb--120 bg_color--1">
      <v-container>
        <v-row class="row">
          <v-col cols="12">
            <div class="section-title text-center">
              <span class="subtitle">Experts growts</span>
              <h2 class="heading-title">Our Company Growth</h2>
              <p class="description">
                We have grown strength over the past 20 years.
              </p>
            </div>
          </v-col>
        </v-row>
        <CounterOne />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start team Area  -->
    <div class="rn-team-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--20 mb_sm--0">
              <span class="subtitle">Our experts</span>
              <h2 class="heading-title">Our Skilled Team</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <Team />
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area bg_color--1 ptb--120">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area pt--120 pb--140 bg_color--5">
      <v-container>
        <v-row class="mb--10">
          <v-col lg="12">
            <div class="section-title text-center">
              <span class="subtitle">Latest news</span>
              <h2 class="heading-title">Latest News</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <BlogTwo />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 ptb--120">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Top clients</span>
              <h2 class="heading-title">We worked with brands.</h2>
            </div>
          </v-col>
        </v-row>
        <Brand />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Footer Area  -->
    <div class="footer-style-3 pt--100 pb--30 bg_color--6">
      <Footer />
    </div>
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
  import CounterOne from "../../components/counter/CounterOne";
  import Team from "../../components/team/Team";
  import Testimonial from "../../components/testimonial/Testimonial";
  import BlogTwo from "../../components/blog/BlogTwo";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/FooterThree";

  export default {
    components: {
      Header,
      ServiceThree,
      PortfolioTwo,
      CounterOne,
      Team,
      Testimonial,
      BlogTwo,
      Brand,
      Footer,
    },
    data() {
      return {
        creativeAgencyImg: require("../../assets/images/bg/bg-image-11.jpg"),
        logo: require("../../assets/images/logo/logo-light.png"),
      };
    },
  };
</script>
