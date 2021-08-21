<template>
  <div>
    <!-- Start Header Area -->
    <Header class="digital-agency-header color-white">
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <SliderThree />
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div class="service-area pt--120 pb--50 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">What we can do for you</span>
              <h2 class="heading-title">Our Awesome Service</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceThree class="bg-white--service" />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area  -->
    <div class="portfolio-area ptb--120 bg_image bg_image--3">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title service-style--3 mb--15">
              <span class="subtitle">Our complete project</span>
              <h2 class="heading-title">Our Project</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <PortfolioFour />
        <v-row>
          <v-col lg="12">
            <div class="text-center view-more-btn mt--60">
              <a class="btn-default" href="/portfolio"
                ><span>View More Project</span></a
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start Portfolio Area  -->

    <!-- Start About Area  -->
    <div class="about-area ptb--120 bg_color--1">
      <div class="about-wrapper">
        <v-container>
          <v-row class="row--35">
            <v-col md="5" cols="12">
              <div class="thumbnail">
                <img
                  class="w-100"
                  src="../../assets/images/about/about-3.jpg"
                  alt="About Images"
                />
              </div>
            </v-col>
            <v-col md="7" cols="12">
              <div class="about-inner inner">
                <div class="section-title">
                  <span class="subtitle">Our company about</span>
                  <h2 class="heading-title">About</h2>
                  <p class="description">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum,
                  </p>
                </div>
                <div class="row mt--30 d-agency-tab">
                  <Tab />
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End About Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area ptb--120 bg_color--5">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area pt--120 pb--80 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title service-style--3">
              <span class="subtitle">Latest post</span>
              <h2 class="heading-title">Latest News</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End row -->
        <Blog />
        <v-row class="mt--60">
          <v-col lg="12">
            <div class="text-center view-more-button">
              <a class="btn-default" href="#">View More</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col>
            <div class="text-center section-title mb--30">
              <span class="subtitle">Our Clients</span>
              <h2 class="heading-title">Our Clients</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <BrandTwo />
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import Header from "../../components/header/Header";
  import SliderThree from "../../components/slider/SliderThree";
  import Brand from "../../components/brand/Brand";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import CallToAction from "../../components/callto-action/CallToAction.vue";
  import BrandTwo from "../../components/brand/BrandTwo.vue";
  import Footer from "../../components/footer/Footer";
  import Tab from "../../components/tabs/Tab";
  import Accordion from "../../components/accordion/Accordion";
  export default {
    components: {
      Header,
      SliderThree,
      ServiceThree,
      PortfolioFour,
      Testimonial,
      Blog,
      Tab,
      BrandTwo,
      CallToAction,
      Footer,
      Accordion,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo-light.png"),
      };
    },
  };
</script>

<style lang="scss">
  .d-agency-tab {
    .single-tab-content {
      padding-top: 20px;
    }
    .list0style-inner.mt--30 {
      margin-top: 0 !important;
    }
  }
</style>
