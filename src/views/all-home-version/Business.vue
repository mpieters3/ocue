<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Slider Area -->
    <SliderTwo />
    <!-- End Slider Area -->

    <!-- Start Brand Area -->
    <div class="rn-brand-area business-brand-area bg_color--5 ptb--60">
      <v-container>
        <v-row>
          <v-col cols="12">
            <Brand />
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Brand Area -->

    <!-- Start Service Area  -->
    <div class="service-area creative-service-wrapper ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12" class="mb--20 mb_sm--0">
            <div class="text-center section-title mb--30 mb_sm--0">
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
    <div class="rn-about-area ptb--120 bg_color--5">
      <v-container>
        <AboutTwo />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start About Area  -->
    <div class="rn-about-area ptb--120 bg_color--1">
      <v-container>
        <AboutSix />
      </v-container>
    </div>
    <!-- End About Area  -->

    <!-- Start Portfolio Area  -->
    <div class="portfolio-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="text-center section-title mb--30 mb_sm--0">
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

    <!-- Start team Area  -->
    <div class="rn-team-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div
              class="text-center section-title service-style--3 mb--25 mb_sm--0"
            >
              <span class="subtitle">Our experts</span>
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

    <!-- Start blog Area  -->
    <div class="rn-blog-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title">
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
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <!-- Start Call to action Area  -->
    <CallToAction />
    <!-- End Call to action Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import Header from "../../components/header/Header";
  import SliderTwo from "../../components/slider/SliderTwo";
  import Brand from "../../components/brand/Brand";
  import ServiceThree from "../../components/service/ServiceThree";
  import AboutTwo from "../../components/about/AboutTwo";
  import AboutSix from "../../components/about/AboutSix";
  import PortfolioFour from "../../components/portfolio/PortfolioFour";
  import Team from "../../components/team/Team";
  import Blog from "../../components/blog/Blog";
  import CallToAction from "../../components/callto-action/CallToAction.vue";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      Header,
      SliderTwo,
      Brand,
      ServiceThree,
      AboutTwo,
      AboutSix,
      PortfolioFour,
      Team,
      Blog,
      CallToAction,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
      };
    },
  };
</script>

<style lang="scss">
  .business-brand-area {
    .row.mt--20 {
      margin-top: 0 !important;
    }
  }
</style>
