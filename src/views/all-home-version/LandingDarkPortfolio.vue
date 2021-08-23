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
                <span style="color:white;">Welcome to</span>
                <h1 class="heading-title">
                  <span> Orange <br/>County</span> <br />
                  Underwater<br />Explorers
                </h1>
                <div class="slide-btn mt--30">
                  <div
                    active-class="v-btn--active"
                    bezier-easing-value=".5,0,.35,1"
                    :offset="71"
                  >
                    <a
                      class="btn-default btn-border btn-opacity scrollactive-item"
                      onclick="window.open('https://www.youtube.com/watch?v=0Q1ZqH-kqUw','_blank')"

                      >#DiveGUE
                    </a>
                  </div>
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
            <v-carousel
              slot="thum-img"
              hide-delimiters
              cycle
              :progress="false"
              :show-arrows="false"
            >
              <v-carousel-item
                v-for="(item,i) in photos"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              ></v-carousel-item>
            </v-carousel>
          </AboutFour>
        </div>
      </div>
    </div>
    <!-- Start About Area  -->

    <!-- Start Service Area  -->
    <div class="rn-blog-area pt--120 bg_color--8" id="events">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col md="12">
            <div class="text-center section-title">
              <h2 class="heading-title">Upcoming Events</h2>
              <p>
                Join us on one of our upcoming events
              </p>
            </div>
          </v-col>
        </v-row>
        <Events />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Blog Area  -->
    <!-- 
    <div class="rn-blog-area pt--120 bg_color--8" id="blog">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col md="12">
            <div class="text-center section-title">
              <h2 class="heading-title">Latest News</h2>
              <p>
                What's happening in OCUE?
              </p>
            </div>
          </v-col>
        </v-row>
        <Blog />
      </v-container>
    </div>
    -->
    <!-- End Blog Area  -->

    <!-- Start Footer Area  -->
    <Footer />
    <!-- End Footer Area  -->
  </div>
</template>
<style scoped>
  .fade-transition-leave-active{
      position: absolute;
      width:100%;
  }

  .fade-transition-enter-active {
    position: absolute;
    top: 0;
    width:100%;
  }
</style>

<script>
  import HeaderOnePageTwo from "../../components/header/HeaderOnePageTwo";
  import AboutFour from "../../components/about/AboutFour";
  import Blog from "../../components/blog/Blog";
  import Footer from "../../components/footer/FooterTwo";
  import Events from "../../components/events/Events";

  export default {
    components: {
      HeaderOnePageTwo,
      AboutFour,
      Blog,
      Footer,
      Events,
    },
    data() {
      return {
        photos: [
          {
            src: require("../../assets/images/about/ocue-about-1.jpg"),
          },
          {
            src: require("../../assets/images/about/ocue-about-2.jpg"),
          },
          {
            src: require("../../assets/images/about/ocue-about-3.jpg"),
          },
          {
            src: require("../../assets/images/about/ocue-about-4.jpg"),
          },
          {
            src: require("../../assets/images/about/ocue-about-5.jpg"),
          },
        ]
      };
    },
  };
</script>
