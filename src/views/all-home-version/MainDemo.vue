<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <div class="slider-wrapper">
      <SliderOne></SliderOne>
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area -->
    <div class="about-area ptb--120">
      <div class="about-wrapper">
        <About>
          <img
            slot="thum-img"
            class="w-100"
            src="../../assets/images/about/about-1.png"
            alt="About Images"
          />
        </About>
      </div>
    </div>
    <!-- End About Area -->

    <!-- Start Service Area -->
    <div class="service-area ptb--120 bg_color--5">
      <v-container>
        <v-row class="mb--30">
          <v-col cols="12">
            <div class="text-center section-title">
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
        <ServiceTwo />
      </v-container>
    </div>
    <!-- End Service Area -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area ptb--120 bg_color--1">
      <div class="portfolio-wrapper">
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="text-center section-title">
                <span class="subtitle">Our project</span>
                <h2 class="heading-title">Some of our Recent Works</h2>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum
                  available, <br />
                  but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
          <Portfolio />
        </v-container>
      </div>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div class="rn-counterup-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title">
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

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area bg_color--1 ptb--120">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title">
              <span class="subtitle">what's stories on</span>
              <h2 class="heading-title">Latest News</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
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
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import SliderOne from "../../components/slider/SliderOne";
  import About from "../../components/about/About";
  import ServiceTwo from "../../components/service/ServiceTwo";
  import Portfolio from "../../components/portfolio/Portfolio";
  import CounterOne from "../../components/counter/CounterOne";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/Footer";

  export default {
    components: {
      Header,
      SliderOne,
      About,
      ServiceTwo,
      Portfolio,
      CounterOne,
      Testimonial,
      Blog,
      Brand,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
      };
    },
  };
</script>
