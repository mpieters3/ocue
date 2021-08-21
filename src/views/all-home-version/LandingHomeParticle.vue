<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePage>
      <img slot="logo" :src="logoLight" class="logo-light" />
      <img slot="logo-dark" :src="logoDark" class="logo-dark" />
    </HeaderOnePage>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="im_modern_slider poss_relative" id="home">
      <vue-particles
        color="#fd4766"
        :particleOpacity="0.7"
        :particlesNumber="40"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="180"
        :moveSpeed="6"
        :hoverEffect="true"
        hoverMode="repulse"
        :clickEffect="false"
        clickMode="push"
      >
      </vue-particles>
      <div
        class="slide slide-style-2 bg_image bg_image--27 d-flex align-center"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title">Creative One Page</h1>
          <p slot="description" class="description_style-2">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </p>
          <router-link slot="button" class="btn-default btn-large" to="/contact"
            >Contact Us</router-link
          >
        </Banner>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start Service Area  -->
    <div
      class="service-area creative-service-wrapper ptb--120 bg_color--1"
      id="service"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-left section-title mb--30">
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

    <!-- Start About Area  -->
    <div class="about-area ptb--120 bg_color--5" id="about">
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
    <!-- Start About Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 pb--140 bg_color--1" id="portfolio">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-left section-title mb--30 mb_sm--0">
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
        <PortfolioNine />
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Counterup Area -->
    <div class="rn-counterup-area pt--140 p pb--110 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title pb--5">
              <span class="subtitle">Experts growts</span>
              <h2 class="heading-title">Our Company Growth</h2>
            </div>
          </v-col>
        </v-row>
        <CounterOne />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start team Area  -->
    <div class="rn-team-area ptb--120 bg_color--1" id="team">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-left section-title mb--25 mb_sm--0">
              <span class="subtitle">Our Experts</span>
              <h2 class="heading-title">Skilled Team</h2>
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
    <div class="rn-testimonial-area bg_color--5 ptb--120" id="tesimonial">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area pt--120 pb--140 bg_color--1" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col lg="12">
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
        </v-row>
        <BlogTwo />
      </v-container>
    </div>
    <!-- End Blog Area  -->

    <!-- Start Contact Area  -->
    <div class="rn-contact-us ptb--120 bg_color--5" id="contact">
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              class="w-100"
              src="../../assets/images/about/about-12.jpg"
              alt="contact images"
            />
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area brand-inside-gutter-free bg_color--1 ptb--120">
      <v-container>
        <v-row>
          <v-col cols="12">
            <Brand />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePage from "../../components/header/HeaderOnePage";
  import Banner from "../../components/slider/Banner";
  import About from "../../components/about/About";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioNine from "../../components/portfolio/PortfolioNine";
  import CounterOne from "../../components/counter/CounterTwo";
  import Team from "../../components/team/Team";
  import Testimonial from "../../components/testimonial/Testimonial";
  import BlogTwo from "../../components/blog/BlogTwo";
  import Contact from "../../components/contact/Contact";
  import Brand from "../../components/brand/Brand";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePage,
      Banner,
      About,
      ServiceThree,
      PortfolioNine,
      CounterOne,
      Team,
      Testimonial,
      BlogTwo,
      Brand,
      Contact,
      Footer,
    },
    data() {
      return {
        logoLight: require("../../assets/images/logo/logo-light.png"),
        logoDark: require("../../assets/images/logo/logo-dark.png"),
      };
    },
  };
</script>
