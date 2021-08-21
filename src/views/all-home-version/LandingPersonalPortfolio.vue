<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePageTwo />
    <!-- End Header Area -->
    <!-- Start Slider Area  -->
    <div class="slider-wrapper poss_relative" id="home">
      <div
        class="justify-center slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-center bg_image bg_image--25"
      >
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="text-left inner">
                <span class="theme-color font-700"
                  >Freelance digital designer</span
                >
                <h1 class="heading-title theme-gradient">
                  Hello, I’m <span>Fatima</span> Welcome to my World.
                </h1>
                <div class="slide-btn mt--20">
                  <scrollactive
                    active-class="v-btn--active"
                    bezier-easing-value=".5,0,.35,1"
                    :offset="71"
                  >
                    <a class="btn-default scrollactive-item" href="#contact"
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
    <div class="about-area pt--120 bg_color--5" id="about">
      <div class="about-wrapper">
        <v-container>
          <AboutFour>
            <img
              slot="thum-img"
              class="w-100"
              src="../../assets/images/about/about-7.jpg"
              alt="About Images"
            />
          </AboutFour>
        </v-container>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <div
      class="service-area creative-service-wrapper pt--120 bg_color--5"
      id="service"
    >
      <v-container>
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
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pt--120 bg_color--5" id="portfolio">
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
        <PortfolioTwo />
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

    <div class="rn-pricing-table-area pt--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div
              class="text-center section-title service-style--3 mb--25 mb_sm--0"
            >
              <span class="subtitle">My Budget Plan</span>
              <h2 class="heading-title">Pricing Plan</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <PricingPlan />
      </v-container>
    </div>
    <!-- End Pricing Area -->

    <!-- Start Blog Area  -->
    <div class="rn-blog-area pt--120 bg_color--5" id="blog">
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
    <div class="rn-contact-area ptb--120 bg_color--5" id="contact">
      <div class="contact-form--1">
        <v-container>
          <Contact>
            <img
              slot="contact-img"
              class="w-100"
              src="../../assets/images/about/about-11.jpg"
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
  import PortfolioTwo from "../../components/portfolio/PortfolioFour";
  import PricingPlan from "../../components/pricing-plan/PricingPlan";
  import Blog from "../../components/blog/Blog";
  import Contact from "../../components/contact/Contact";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePageTwo,
      AboutFour,
      ServiceThree,
      PortfolioTwo,
      PricingPlan,
      Blog,
      Contact,
      Footer,
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .feather-menu {
    color: #1d1d24;
  }
</style>
