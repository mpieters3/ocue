<template>
  <div class="active-dark bg_color--10">
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="rn-slider-area">
      <div
        class="justify-center slide slide-style-2 fullscreen d-flex align-center bg_image bg_image--24"
        data-black-overlay="6"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title theme-gradient">
            Minimal
          </h1>
          <p slot="description" class="description">
            There are many variations of passages of Lorem Ipsum available but
            the majority have suffered alteration.
          </p>
          <router-link
            slot="button"
            class="btn-default btn-border btn-opacity"
            to="/contact"
            >Contact Us</router-link
          >
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Portfolio Area  -->
    <div class="rn-portfolio-area bg_color--10 ptb--120">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">My complete project</span>
              <h2 class="heading-title">Our Project</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div class="wrapper plr--30">
        <PortfolioSix />
        <v-row>
          <v-col lg="12">
            <div class="text-center view-more-btn mt--60">
              <a class="btn-default" href="portfolio.html"
                ><span>View More Project</span></a
              >
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
    <!-- End Portfolio Area  -->

    <!-- Start Service Area  -->
    <div class="service-area pb--120 bg_color--10" id="service">
      <div class="container">
        <v-row>
          <v-col lg="12">
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
        <ServiceThree />
      </div>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Progress Area  -->
    <div class="rn-progress-area pb--120 bg_color--10">
      <v-container class="container">
        <v-row class="row--35 align-items-center">
          <v-col lg="6" md="6" cols="12">
            <div class="thumbnail">
              <img
                class="w-100"
                src="../../assets/images/about/about-4.png"
                alt="About Images"
              />
            </div>
          </v-col>
          <v-col lg="6" md="6" cols="12" class="mt_md--30 mt_sm--30">
            <div class="progress-content-here">
              <div class="section-title text-left">
                <span class="subtitle">Our Skill</span>
                <h2 class="heading-title">Agency Skill</h2>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration.
                </p>
              </div>
              <div class="progress-wrapper">
                <div class="rn-progress-charts progress-bar--3">
                  <h6 class="heading heading-h6">Designing</h6>
                  <div class="progress fadeInLeft">
                    <div class="progress-bar" style="width: 95%;">
                      <span class="percent-label">95%</span>
                    </div>
                  </div>
                </div>
                <div class="rn-progress-charts progress-bar--3">
                  <h6 class="heading heading-h6">Managment</h6>
                  <div class="progress">
                    <div class="progress-bar" style="width: 85%;">
                      <span class="percent-label">85%</span>
                    </div>
                  </div>
                </div>
                <div class="rn-progress-charts progress-bar--3">
                  <h6 class="heading heading-h6">Marketing</h6>
                  <div class="progress">
                    <div class="progress-bar" style="width: 75%;">
                      <span class="percent-label">75%</span>
                    </div>
                  </div>
                </div>
                <div class="rn-progress-charts progress-bar--3">
                  <h6 class="heading heading-h6">Development</h6>
                  <div class="progress">
                    <div class="progress-bar" style="width: 90%;">
                      <span class="percent-label">90%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Progress Area  -->

    <!-- Start Brand Area  -->
    <div class="rn-brand-area pb--120 bg_color--10">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="section-title text-center mb--30">
              <span class="subtitle">Top video</span>
              <h2 class="heading-title">Our Clients Review</h2>
            </div>
          </v-col>
        </v-row>
        <div class="video-image-wrapper mt--30">
          <v-container>
            <v-row>
              <v-col lg="10" offset-lg="1">
                <div class="thumb position-relative">
                  <CoolLightBox
                    :items="items"
                    :index="index"
                    @close="index = null"
                  >
                  </CoolLightBox>

                  <div class="thumbnail position-relative">
                    <div v-for="(image, imageIndex) in items" :key="imageIndex">
                      <img
                        class="w-100"
                        :src="image.thumb"
                        alt="About Images"
                      />
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
          </v-container>
        </div>
      </v-container>
    </div>
    <!-- End Brand Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Banner from "../../components/slider/Banner";
  import PortfolioSix from "../../components/portfolio/PortfolioSix";
  import ServiceThree from "../../components/service/ServiceThree";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      Banner,
      PortfolioSix,
      ServiceThree,
      Footer,
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
