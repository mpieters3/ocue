<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="slider-wrapper">
      <div
        class="justify-center slide slide-style-2 slider-video-bg d-flex align-center"
        data-black-overlay="6"
      >
        <v-container>
          <v-row align="center">
            <v-col cols="12">
              <div class="text-center inner pt_sm--40">
                <span class="theme-color font-700">Have a Studio Agency</span>
                <h1 class="heading-title mt--20">Welcome Video Studio</h1>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.
                </p>
                <router-link class="btn-default btn-large mt--30" to="/contact"
                  ><span>Learn More</span></router-link
                >
              </div>
            </v-col>
          </v-row>
        </v-container>

        <div class="video-background">
          <span>
            <video muted="" autoplay="" playsinline="" loop="" poster="">
              <source src="../../assets/images/service/video.mp4" />
            </video>
          </span>
        </div>
      </div>
      <!-- End Slider Area  -->

      <!-- Start video-image-wrapper -->
      <div class="video-image-wrapper agency-thmub-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div class="thumb position-relative ">
                <CoolLightBox
                  :items="items"
                  :index="index"
                  @close="index = null"
                >
                </CoolLightBox>

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
          </div>
        </div>
      </div>
      <!-- End video-image-wrapper -->
    </div>

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

    <!-- Start Service Area -->
    <div class="service-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
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
          <v-col cols="12" class="mt--30">
            <ServiceTwo />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Service Area -->

    <!-- Start About Area  -->
    <div class="about-area ptb--120 bg_color--1">
      <div class="about-wrapper">
        <div class="container">
          <AboutThree />
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Counterup Area -->
    <div class="rn-counterup-area ptb--120 bg_color--5">
      <v-container>
        <v-row class="row">
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
        <v-row align="end" class="mb--20">
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="text-left section-title">
              <span class="subtitle">what's stories on</span>
              <h2 class="heading-title">Latest News</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="text-left blog-btn text-md-right mt_sm--10 mt_md--10">
              <a class="btn-transparent rn-btn-dark" href="blog.html"
                ><span class="text">View All News</span></a
              >
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Brand Area  -->
    <!-- Start Brand Area -->
    <div class="rn-brand-area bg_color--1 ptb--120">
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
    <FooterTwo />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Portfolio from "../../components/portfolio/Portfolio";
  import ServiceTwo from "../../components/service/ServiceTwo";
  import AboutThree from "../../components/about/AboutThree";
  import CounterOne from "../../components/counter/CounterOne";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import Brand from "../../components/brand/Brand";
  import FooterTwo from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      Portfolio,
      ServiceTwo,
      AboutThree,
      CounterOne,
      Testimonial,
      Blog,
      Brand,
      FooterTwo,
    },
    data() {
      return {
        items: [
          {
            thumb: require("../../assets/images/blog/bl-big-02.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
        logo: require("../../assets/images/logo/logo.png"),
      };
    },
  };
</script>

<style lang="scss">
  @media only screen and (min-width: 1264px) and (max-width: 1903px) {
    .slider-video-bg.slide.slide-style-2 {
      padding-top: 160px;
      padding-bottom: 260px;
      min-height: auto;
    }
  }
</style>
