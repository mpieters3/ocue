<template>
  <div>
    <!-- Start Header Area -->
    <HeaderTwo class="flat-fluid-app-bar">
      <img slot="logo" :src="logo" alt="Creative Agency Logo" />
    </HeaderTwo>
    <!-- End Header Area -->

    <!-- Start Gallery Area  -->
    <div class="rn-gallery-area bg_color--1">
      <div class="creative-portfolio-wrapper plr--30">
        <PortfolioFive />
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
  import PortfolioFive from "../../components/portfolio/PortfolioFive";
  import Footer from "../../components/footer/FooterTwo";

  export default {
    components: {
      HeaderTwo,
      PortfolioFive,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo-symbol-dark.png"),
      };
    },
  };
</script>

<style lang="scss">
  .flat-fluid-app-bar {
    a.btn-default {
      padding: 13px 30px;
    }
  }
  .creative-portfolio-wrapper.plr--30 {
    @media only screen and (max-width: 767px) {
      padding: 0 15px;
    }
  }
</style>
