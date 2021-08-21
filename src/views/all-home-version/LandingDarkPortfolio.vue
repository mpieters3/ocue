<template>
  <div class="active-dark bg_color--9">
    <!-- Start Header Area -->
    <HeaderOnePageTwo />
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
    <div class="slider-wrapper poss_relative" id="home">
      <div
        class="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-center bg_image bg_image--28"
      >
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="text-left inner">
                <span>Welcome to my World</span>
                <h1 class="heading-title">
                  I’m Joe Biden <br />
                  <span> JS Developer.</span>
                </h1>
                <h2>based in USA.</h2>
                <div class="slide-btn mt--30">
                  <scrollactive
                    active-class="v-btn--active"
                    bezier-easing-value=".5,0,.35,1"
                    :offset="71"
                  >
                    <a
                      class="btn-default btn-border btn-opacity scrollactive-item"
                      href="#contact"
                      >Download CV</a
                    >
                  </scrollactive>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
    <!-- End Slider Area -->

    <!-- Start About Area  -->
    <div class="about-area pt--120 bg_color--8" id="about">
      <div class="about-wrapper">
        <div class="container">
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/about/about-8.jpg"
              alt="About Images"
            />
          </AboutFour>
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <div
      class="service-area creative-service-wrapper pt--120 bg_color--8"
      id="service"
    >
      <div class="container">
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--30 mb_sm--0">
              <span class="subtitle">What I can do for you</span>
              <h2 class="heading-title">My Awesome Service</h2>
              <p>
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

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 bg_color--8" id="portfolio">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--30 mb_sm--0">
              <span class="subtitle">My complete project</span>
              <h2 class="heading-title">My Latest Project</h2>
              <p>
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
            <div class="text-center view-more-btn mt--60 mt_sm--30">
              <a class="btn-default" href="#">View Projects</a>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area pt--120 bg_color--8" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col md="12">
            <div class="text-center section-title">
              <span class="subtitle">Latest news</span>
              <h2 class="heading-title">Latest News</h2>
              <p>
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

    <!-- Start Contact Area  -->
    <div class="rn-contact-area ptb--120 bg_color--8" id="contact">
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              class="w-100"
              src="../../assets/images/about/about-13.jpg"
              alt="contact images"
            />
          </Contact>
        </v-container>
      </div>
    </div>
    <!-- End Contact Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePageTwo from "../../components/header/HeaderOnePageTwo";
  import AboutFour from "../../components/about/AboutFour";
  import ServiceThree from "../../components/service/ServiceThree";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Blog from "../../components/blog/Blog";
  import Contact from "../../components/contact/Contact";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePageTwo,
      AboutFour,
      ServiceThree,
      PortfolioFour,
      Blog,
      Contact,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>
