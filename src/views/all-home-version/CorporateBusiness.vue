<template>
  <div>
    <!-- Start Header Area -->
    <HeaderTwo>
      <img slot="logo" :src="logo" alt="Creative Agency Logo" />
    </HeaderTwo>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <SliderFour />
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div class=" ptb--120 bg_color--1">
      <div class="container">
        <ServiceFour />
      </div>
    </div>
    <!-- Start Service Area  -->

    <!-- Start About Area  -->
    <div class="about-area rm-about-style-2 ptb--120 bg_color--5">
      <v-container>
        <AboutThree />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start countreup Area  -->
    <div
      class="rn-countreupup-area pt--60 pb--120 bg_image bg_image--17 bg-position-fixed theme-text-white"
      data-black-overlay="3"
    >
      <div class="container">
        <CounterOne />
      </div>
    </div>
    <!-- Start countreup Area  -->

    <!-- Start About Area  -->
    <div class="rn-about-area ptb--120 bg_color--5">
      <v-container>
        <AboutTwo />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start team Area  -->
    <div class="rn-team-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title text-center mb--25 mb_sm--0">
              <span class="subtitle">Our Experts</span>
              <h2 class="heading-title">Managing Team</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamThree />
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start Pricing Plan Area  -->
    <div class="rn-pricing-table-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div
              class="section-title service-style--3 text-center mb--25 mb_sm--0"
            >
              <span class="subtitle">Our Budget Plan</span>
              <h2 class="heading-title">Pricing Plan</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <PricingPlan />
      </v-container>
    </div>
    <!-- End Pricing Plan Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center mb--25 mb_sm--0">
              <span class="subtitle">Top clients</span>
              <h2 class="heading-title">Clients Say What About Us</h2>
            </div>
          </v-col>
        </v-row>
        <v-row class="mt--30">
          <v-col lg="10" offset-lg="1">
            <div class="thumb position-relative">
              <CoolLightBox :items="items" :index="index" @close="index = null">
              </CoolLightBox>

              <div class="thumbnail position-relative">
                <div v-for="(image, imageIndex) in items" :key="imageIndex">
                  <img class="w-100" :src="image.thumb" alt="About Images" />
                  <a
                    @click="index = imageIndex"
                    class="video-popup position-top-center theme-color"
                    ><span class="play-icon"></span
                  ></a>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
        <div class="pt--120 brand-inside-gutter-free">
          <Brand />
        </div>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="section-title service-style--3 text-center">
              <span class="subtitle">Latest News</span>
              <h2 class="heading-title">Latest News</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End row -->
        <Blog />
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import HeaderTwo from "../../components/header/HeaderTwo";
  import SliderFour from "../../components/slider/SliderFour";
  import ServiceFour from "../../components/service/ServiceFour";
  import AboutThree from "../../components/about/AboutThree";
  import CounterOne from "../../components/counter/CounterOne";
  import AboutTwo from "../../components/about/AboutTwo";
  import TeamThree from "../../components/team/TeamThree";
  import Brand from "../../components/brand/Brand";
  import PricingPlan from "../../components/pricing-plan/PricingPlan";
  import Blog from "../../components/blog/Blog";
  import Footer from "../../components/footer/Footer";
  import Accordion from "../../components/accordion/Accordion";
  export default {
    components: {
      HeaderTwo,
      SliderFour,
      ServiceFour,
      AboutThree,
      CounterOne,
      AboutTwo,
      TeamThree,
      Brand,
      PricingPlan,
      Blog,
      Footer,
      Accordion,
    },
    data() {
      return {
        items: [
          {
            thumb: require("../../assets/images/about/about-10.png"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
        logo: require("../../assets/images/logo/logo-all-dark.png"),
      };
    },
  };
</script>

<style lang="scss">
  .rn-countreupup-area {
    &.pt--60 {
      @media only screen and (max-width: 991px) {
        padding-top: 20px;
      }
      @media only screen and (max-width: 767px) {
        padding-top: 8px;
      }
    }
  }
</style>
