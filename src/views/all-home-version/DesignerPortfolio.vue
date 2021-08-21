<template>
  <div>
    <!-- Start Header Area -->
    <HeaderTwo class="designer-portfolio-header">
      <img slot="logo" :src="logo" alt="Creative Agency Logo" />
    </HeaderTwo>
    <!-- End Header Area -->

    <div class="btn-hire">
      <router-link class="btn-default" to="/contact">Hire Me</router-link>
    </div>

    <!-- Start Slider Area  -->
    <div class="slider-wrapper">
      <div
        class="slide designer-portfolio slider-style-3  d-flex align-center justify-center bg_color--5 rn-slider-height"
      >
        <BannerTwo />
      </div>
    </div>
    <!-- End Slider Area  -->

    <!-- Start Gallery Area  -->
    <div class="designer-portfolio-area ptb--120 bg_color--1">
      <div class="rn-masonary-wrapper">
        <div class="wrapper plr--70 plr_sm--15 plr_md--30">
          <div class="tab-default ">
            <PortfolioThree />
          </div>
        </div>
      </div>
    </div>
    <!-- End Gallery Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<script>
  import HeaderTwo from "../../components/header/HeaderTwo";
  import BannerTwo from "../../components/slider/BannerTwo";
  import PortfolioThree from "../../components/portfolio/PortfolioThree";
  import Footer from "../../components/footer/FooterTwo";
  export default {
    components: {
      HeaderTwo,
      BannerTwo,
      PortfolioThree,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo-symbol-dark.png"),
      };
    },
  };
</script>
