<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <div class="slider-wrapper">
      <SliderFive />
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area -->
    <div class="about-area ptb--120 bg_color--1">
      <v-container>
        <AboutThree />
      </v-container>
    </div>
    <!-- End About Area -->

    <!-- Start Service Area  -->
    <div class="service-area creative-service-wrapper ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--30">
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
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area ptb--120 bg_color--1">
      <div class="portfolio-sacousel-inner mb--55">
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

    <!-- Start Progreess Area -->
    <div class="rn-progress-area ptb--120 bg_color--5">
      <v-container>
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
          <v-col lg="6" md="6" cols="12">
            <div class="progress-content-here pt--30">
              <div class="text-left section-title">
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
    <!-- End Progress Area -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area bg_color--1 ptb--120">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area bg_color--5 ptb--120">
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

    <!-- Start contact-map Area -->
    <div class="rn-contact-map-wrapper ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--50">
              <span class="subtitle">Office Location</span>
              <h2 class="heading-title">Our Office Location</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col lg="6" md="6" sm="12" cols="12">
            <div class="google-map rn-contact-map-area position-relative">
              <div class="mapouter">
                <Map />
              </div>
            </div>
          </v-col>
          <v-col lg="6" md="6" sm="12" cols="12" class="mt_md--30 mt_sm--30">
            <div class="google-map rn-contact-map-area position-relative">
              <div class="mapouter">
                <Map />
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End contact-map Area -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import SliderFive from "../../components/slider/SliderFive";
  import AboutThree from "../../components/about/AboutThree";
  import ServiceTwo from "../../components/service/ServiceTwo";
  import Portfolio from "../../components/portfolio/Portfolio";
  import Testimonial from "../../components/testimonial/Testimonial";
  import Blog from "../../components/blog/Blog";
  import Footer from "../../components/footer/Footer";
  import Map from "../../components/location/Map";

  export default {
    components: {
      Header,
      SliderFive,
      AboutThree,
      ServiceTwo,
      Portfolio,
      Testimonial,
      Blog,
      Footer,
      Map,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
      };
    },
  };
</script>
