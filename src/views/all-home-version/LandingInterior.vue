<template>
  <div>
    <!-- Start Header Area -->
    <HeaderOnePageThree>
      <img slot="logo" :src="logoLight" class="logo-light" />
      <img slot="logo-dark" :src="logoDark" class="logo-dark" />
    </HeaderOnePageThree>
    <!-- End Header Area -->

    <!-- Start Slider Area  -->
    <div class="im_modern_slider" id="home">
      <div
        class="justify-center slide slide-style-2 slider-paralax d-flex align-center bg_image bg_image--29"
        data-black-overlay="5"
      >
        <Banner>
          <h1 slot="heading-title" class="heading-title">
            Home &amp; Office Collection
          </h1>
          <p slot="description" class="description">
            Finest choice for your home &amp; office
          </p>
          <router-link slot="button" class="btn-default btn-large" to="/contact"
            >Say Hello With Us</router-link
          >
        </Banner>
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Service Area  -->
    <div
      class="service-area creative-service-wrapper ptb--120 bg_color--1"
      id="service"
    >
      <v-container>
        <v-row>
          <v-col lg="8">
            <div class="feature-area">
              <div class="feature-area">
                <span class="subtitle theme-gradient">FUTURE HOUSE</span>
                <h3 class="heading-title mt--20 fontWeight500 lineheight--1-8">
                  What you look your hopefull house we can be made it for yours.
                  We can be design yours house so dont woory you can hire us.
                  Beautiful and hand made design we can be create.
                </h3>
              </div>
            </div>
          </v-col>
        </v-row>
        <ServiceSix class="interior-services" />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area pb--120 bg_color--1">
      <v-container>
        <PortfolioTen />
      </v-container>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Call To Action Area  -->
    <div
      class="call-to-action-wrapper call-to-action callto-action-style-2 text-white-wrapper"
      id="getstart"
    >
      <div
        class="bg_image bg_image--30 ptb--200 ptb_lg--80 ptb_md--80 ptb_sm--80"
        data-black-overlay="6"
      >
        <v-container>
          <CallToActionTwo />
        </v-container>
      </div>
    </div>
    <!-- End Call To Action Area  -->

    <!-- Start Counterup Area -->
    <div
      class="rn-counterup-area pt--90 pt_sm--30 pt_md--50 pb--120 bg_color--1"
    >
      <v-container>
        <CounterTwo />
      </v-container>
    </div>
    <!-- End Counterup Area -->

    <!-- Start Content Box  -->
    <div
      class="rn-content-box-area rn-content-box-style--1 bg_color--1"
      id="about"
    >
      <v-row class="row--0" align="center">
        <v-col lg="6" md="12" cols="12">
          <div class="thumbnail">
            <img
              src="../../assets/images/featured/featured-01.jpg"
              alt="Featured Images"
            />
          </div>
        </v-col>
        <!-- End .v-col -->
        <v-col md="12" lg="6" cols="12" class="mt_lg--50 mt_md--30 mt_sm--30">
          <div class="content">
            <div class="about-inner inner">
              <div class="section-title">
                <span class="subtitle">Modern Design For Interior</span>
                <h2 class="heading-title">Read Company Values</h2>
                <p class="description">
                  Uniq interior design provide for your home. you can be create
                  as you like. Our modern designer provide as you are like.
                </p>
              </div>
              <v-row>
                <v-col md="6" sm="6" cols="12">
                  <div class="about-us-list">
                    <h5 class="title">Honest</h5>
                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                  </div>
                </v-col>
                <v-col md="6" sm="6" cols="12">
                  <div class="about-us-list">
                    <h5 class="title">Strategy</h5>
                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                  </div>
                </v-col>
                <v-col md="6" sm="6" cols="12">
                  <div class="about-us-list">
                    <h5 class="title">Development</h5>
                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                  </div>
                </v-col>
                <v-col md="6" sm="6" cols="12">
                  <div class="about-us-list">
                    <h5 class="title">Quality</h5>
                    <p>Lorem ipsum dolor sit amet, onecis et mollis.</p>
                  </div>
                </v-col>
              </v-row>
              <div class="purchase-btn mt--50">
                <router-link class="btn-transparent" to="/about"
                  >WHY WE'RE DIFFERNT VALUES</router-link
                >
              </div>
            </div>
          </div>
        </v-col>
        <!-- End .col -->
      </v-row>
    </div>
    <!-- Start Content Box -->

    <!-- Start team Area  -->
    <div class="rn-team-wrapper pt--120 bg_color--1" id="team">
      <v-container>
        <v-row>
          <v-col md="8" cols="12">
            <div class="text-left section-title mb--30">
              <span class="subtitle">Our Experts</span>
              <h2 class="heading-title">Meet Our Designer</h2>
              <p class="description">
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <TeamFour />
      </v-container>
    </div>
    <!-- End team Area  -->

    <!-- Start Testimonial Area  -->
    <div class="rn-testimonial-area bg_color--1 pt--120" id="tesimonial">
      <v-container>
        <Testimonial />
      </v-container>
    </div>
    <!-- Start Testimonial Area  -->

    <!-- Start Portfolio Area -->
    <div class="portfolio-area ptb--120 bg_color--1" id="portfolio">
      <div class="portfolio-sacousel-inner pb--30">
        <v-container>
          <v-row>
            <v-col lg="6">
              <div class="text-left section-title mb--30">
                <span class="subtitle">Our Recent Works</span>
                <h2 class="heading-title">All Works</h2>
                <p class="description">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <PortfolioEight />
      </div>
    </div>
    <!-- End Portfolio Area -->

    <!-- Start Footer Area  -->
    <FooterTwo />
    <!-- End Footer Area  -->
  </div>
</template>

<script>
  import HeaderOnePageThree from "../../components/header/HeaderOnePageThree";
  import Banner from "../../components/slider/Banner";
  import ServiceSix from "../../components/service/ServiceSix";
  import PortfolioTen from "../../components/portfolio/PortfolioTen";
  import CallToActionTwo from "../../components/callto-action/CallToActionTwo";
  import CounterTwo from "../../components/counter/CounterTwo";
  import TeamFour from "../../components/team/TeamFour";
  import Testimonial from "../../components/testimonial/Testimonial";
  import PortfolioEight from "../../components/portfolio/PortfolioEight";
  import FooterTwo from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderOnePageThree,
      Banner,
      ServiceSix,
      PortfolioTen,
      CallToActionTwo,
      PortfolioEight,
      CounterTwo,
      TeamFour,
      Testimonial,
      FooterTwo,
    },
    data() {
      return {
        logoLight: require("../../assets/images/logo/logo-light.png"),
        logoDark: require("../../assets/images/logo/logo-dark.png"),
      };
    },
  };
</script>
