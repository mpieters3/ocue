<template>
  <div class="active-dark bg_color--9">
    <v-dialog
      v-if="showVideo"
      v-model="showVideo"
      fullscreen
      hide-overlay
      overflow
      transition="dialog-bottom-transition"
    >
      <v-toolbar
        dark
        class="fixed-bar"
        extension-height="64px"
      >
        <v-toolbar-title><h3>Details</h3></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items><h2>
          <a @click="showVideo=false" class="rn-btn btn-opacity" style="font-size:20px;">
            Close
          </a>
        </h2></v-toolbar-items>
      </v-toolbar>
        <iframe
          width="80%"
          height="80%"
          src="https://www.youtube-nocookie.com/embed/0Q1ZqH-kqUw?autoplay=1&modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
    </v-dialog>

    <!-- Start Header Area -->
    <Header />
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
                      @click="showVideo=true"
                    >
                      #DiveGUE
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
          <About>
            <v-carousel
              slot="thum-img"
              hide-delimiters
              cycle
              :progress="false"
              :show-arrows="false"
              eager
            >
              <v-carousel-item
                v-for="(item,i) in photos"
                :key="i"
                reverse-transition="fade-transition"
                transition="fade-transition"
                eager
              >
                <v-img :src="item.src" height="100%" eager/>
              </v-carousel-item>
            </v-carousel>
          </About>
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
    <div class="rn-blog-area bg_color--8" id="wetnotes" style="margin-top: -10rem !important;">
      <v-container>
        <v-row align="end" class="mb--20">
          <v-col md="12">
            <div class="text-center section-title">
              <h2 class="heading-title">Wetnotes</h2>
              <p>
                Read what's new at OCUE
              </p>
            </div>
          </v-col>
        </v-row>
        <BlogThree />
      </v-container>
    </div>
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
  import Header from "../components/header/Header";
  import About from "../components/about/About";
  import BlogThree from "../components/blog/BlogThree";
  import Footer from "../components/footer/Footer";
  import Events from "../components/events/Events";

  export default {
    components: {
      Header,
      About,
      BlogThree,
      Footer,
      Events,
    },
    data() {
      return {
        showVideo: false,
        photos: [
          {
            src: require("../assets/images/about/ocue-about-1.jpg"),
          },
          {
            src: require("../assets/images/about/ocue-about-2.jpg"),
          },
          {
            src: require("../assets/images/about/ocue-about-3.jpg"),
          },
          {
            src: require("../assets/images/about/ocue-about-4.jpg"),
          },
          {
            src: require("../assets/images/about/ocue-about-5.jpg"),
          },
        ],
      };
    },
  };
</script>
