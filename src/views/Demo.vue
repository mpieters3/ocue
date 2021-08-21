<template>
  <div class="active-dark">
    <!-- Start Header Area -->
    <PreviewHeader>
      <img slot="logo" :src="logo" />
    </PreviewHeader>
    <!-- End Header Area -->

    <!-- Start Banner Area  -->
    <div class="pv-slider-area slider-wrapper">
      <div class="slider-activation">
        <div
          class="slide slide-style-1 slider-fixed--height d-flex align-center bg_image bg_image--34"
          data-black-overlay="9"
        >
          <div class="container position-relative">
            <div class="row">
              <div class="col-lg-12">
                
                <div class="inner">
                  <h1 class="heading-title theme-gradient">
                    Quick agency &amp; portfolio template for your next website
                  </h1>
                </div>
              </div>
            </div>
            <div class="service-wrapper service-white">
              <v-row class="row--25">
                <!-- Start Single Service  -->
                <v-col
                  xl="4"
                  lg="4"
                  md="4"
                  sm="6"
                  cols="12"
                  v-for="(service, i) in serviceContent"
                  :key="i"
                >
                  <div class="service service__style--1">
                    <div class="icon" v-html="iconSvg(service.icon)"></div>
                    <div class="content">
                      <h4 class="heading-title">
                        {{ service.title }}
                      </h4>
                      <p>
                        {{ service.desc }}
                      </p>
                    </div>
                  </div>
                </v-col>
                <!-- End Single Service  -->
              </v-row>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Banner Area  -->

    <!-- Start Main Demo Area  -->
    <div class="main-wrapper">
      <!-- Start Home Demo  -->
      <div class="home-demo-area bg_color--1 ptb--120" id="view-demo">
        <div class="wrapper plr--120 rn-masonary-wrapper">
          <v-row>
            <v-col cols="12">
              <div class="text-center section-title pb--30">
                <h2 class="heading-title theme-gradient">Home Demo</h2>
                <p>
                  Choose one of styles or cutomize easily your site following
                  your ideas. <br />
                  More demos are coming soon.
                </p>
              </div>
            </v-col>
          </v-row>
          <div class="be-custom-gallery main-page-preview-gallery">
            <v-tabs v-model="tab" centered flat hide-slider color="primary">
              <v-tab :ripple="false" v-for="item in tabItems" :key="item.id">{{
                item.name
              }}</v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="item in tabContent" :key="item.id" transition="none">
                <div
                  class="gallery-wrapper gallery-grid mesonry-list grid-metro3"
                  id="animated-thumbnials"
                >
                  <div
                    v-for="(item, i) in item.content"
                    :key="i"
                    class="single-demo image masonry_item portfolio-33-33"
                  >
                    <router-link rel="noopener" target="_blank" :to="item.href">
                      <img :src="item.src" :alt="item.alt" />
                      <h3 class="heading-title">
                        {{ item.title }}
                        <span v-if="item.active" :class="'label-new'">
                          {{ item.sticker }}
                        </span>
                      </h3>
                    </router-link>
                  </div>
                </div>
              </v-tab-item>
            </v-tabs-items>
          </div>
        </div>
      </div>
      <!-- End Home Demo  -->

      <!-- Start Inner Page Demo  -->
      <div class="home-demo-area inner-page-demo bg_color--5 ptb--120">
        <div class="wrapper plr--120">
          <v-row>
            <v-col lg="12">
              <div class="text-center section-title pb--30">
                <h2 class="heading-title theme-gradient">Inner Pages</h2>
                <p>
                  Choose one of styles or cutomize easily your site following
                  your ideas
                </p>
              </div>
            </v-col>
          </v-row>
          <v-row class="row--0">
            <!-- Start Single Demo  -->
            <v-col
              lg="4"
              md="6"
              sm="6"
              cols="12"
              v-for="(innerPage, i) in innerPages"
              :key="i"
            >
              <div class="single-demo">
                <router-link :to="innerPage.href" rel="noopener" target="_blank">
                  <img :src="innerPage.src" :alt="innerPage.alt" />
                  <h3 class="heading-title">{{ innerPage.title }}</h3>
                </router-link>
              </div>
            </v-col>
            <!-- End Single Demo  -->
          </v-row>
        </div>
      </div>
      <!-- End Inner Page Demo  -->

      <!-- Start Feature Area  -->
      <div class="prv-feature service-area bg_color--4 ptb--120" id="feature">
        <div class="wrapper plr--120 plr_sm--30 plr_md--30 plr_lg--30">
          <v-row>
            <v-col lg="12">
              <div class="text-center section-title pb--30 pb_sm--0 pb_md--0">
                <span class="subtitle">Our Imroz Feature</span>
                <h2 class="heading-title white--text">Awesome Feature</h2>
              </div>
            </v-col>
          </v-row>
          <div class="row service-main-wrapper prev-service-main-wrapper">
            <!-- Start Single Feature  -->
            <v-col
              xl="3"
              lg="6"
              md="6"
              sm="6"
              cols="12"
              v-for="(features, i) in featuresContent"
              :key="i"
            >
              <div class="text-left service service__style--2">
                <div class="icon" v-html="iconSvg(features.icon)"></div>
                <div class="content">
                  <h3 class="heading-title">{{ features.title }}</h3>
                  <p class="subtitle">
                    {{ features.desc }}
                  </p>
                </div>
              </div>
            </v-col>
            <!-- End Single Feature  -->
          </div>
        </div>
      </div>
      <!-- End Feature Area  -->

      <div class="pv-feaq-area bg_color--5 ptb--120" id="faq">
        <v-container>
          <v-row>
            <v-col lg="8" offset-lg="2">
              <div class="text-left section-title pb--30">
                <span class="subtitle theme-gradient"
                  >Check out our FAQ section to see if we can help.</span
                >
                <h2 class="heading-title">Do you have any Question</h2>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col lg="8" offset-lg="2">
              <div class="faq-area">
                <v-expansion-panels
                  accordion
                  flat
                  v-model="panel"
                  mandatory
                  class="about-expension-panels home-page-panels"
                >
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      What is Imroz ? How does it
                      work?</v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <p>
                        Welcome to Imroz VueJS Creative Agency and Portfolio Template Built With VueJS. NO
                        jQuery!. It works too much faster loading speed and you
                        can works too much comfortability.Trydo create your
                        website so much faster and Well Documented Codes for
                        your customization.
                      </p></v-expansion-panel-content
                    >
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      How can I run Imroz vue template?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        You can run Imroz vue template easily. First You'll need
                        to have node and npm on your machine. So Please open
                        your command prompt then check your node -v and npm -v
                        Version. Goes To Your your command prompt: then First:
                        <strong>npm install</strong>
                      </p>
                      <p>
                        At Last: <strong>npm run serve</strong>. By the
                        following way you can be run your project easily.
                      </p></v-expansion-panel-content
                    >
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      How can I change my demo page instead of splash page?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <div>
                        <p>
                          You can be presenting any home page instead of splash
                          page. http://localhost:8000 you can showing any page
                          as your you are like. First you have to go to
                          <strong> index.js from router folder</strong>
                          then:
                        </p>
                        <p>
                          First Step (replace your choose demo page): Example:
                          import Demo form '../views/Demo.vue' Instead of
                          '../views/all-home-version/MainDemo.vue'
                        </p>
                        <p>
                          Example:
                          <a
                            target="_blank"
                            className="theme-gradient"
                            href="http://prntscr.com/12a42ty"
                            >http://prntscr.com/12a42ty</a
                          >
                        </p>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      How can I get the customer support?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        After purchasing the product need you any support you
                        can be share with us with sending mail to
                        <a
                          className="theme-gradient"
                          href="mailto:ibthemes21@gmail.com"
                          >ibthemes21@gmail.com</a
                        >.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      Can I get update regularly and For how long do I get
                      updates?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content
                      ><p>
                        Yes, We will get update the Trydo. And you can get it
                        any time. Next time we will comes with more feature. You
                        can be get update for unlimited times. Our dedicated
                        team works for update.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      Can I change any component as I like?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        Yes, You can change any component as you like. And By
                        the way you can build your website which you are choose.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                  <v-expansion-panel>
                    <v-expansion-panel-header hide-actions>
                      Can I build a complete project with this template?
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <p>
                        Yes, Why not. You can build a project and complete
                        website as you are like. More component are available
                        include in this templete. And you can be use it
                        following documentation.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <!-- End v-expension-panel -->
                </v-expansion-panels>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- Start Call To Action Area  -->
      <footer
        class="pv-callto-action call-to-action-wrapper text-white-wrapper call-to-action ptb--120 bg_image bg_image--34"
        data-black-overlay="9"
      >
        <v-container>
          <v-row>
            <v-col lg="12">
              <div class="text-center inner">
                <span
                  ><span
                    >Purchase The Imroz and Make Your Site super faster and
                    easy.</span
                  ></span
                >
                <h2 class="mt--20 theme-gradient font-700">
                  Let's go to Purchase
                </h2>
                <div class="footer-btn mt--35">
                  <a
                    class="btn-default"
                    target="_blank"
                    href="https://themeforest.net/checkout/from_item/32012548?license=regular"
                    ><span>Purchase Now</span></a
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </footer>
      <!-- End Call To Action Area  -->
    </div>
    <!-- End Main Demo Area  -->
  </div>
  <!-- End Page Wrapper  -->
</template>

<script>
  import feather from "feather-icons";
  import PreviewHeader from "../components/header/PreviewHeader";
  export default {
    components: {
      PreviewHeader,
    },
    name: "Home",
    data() {
      return {
        logo: require("../assets/images/logo/logo.png"),
        tab: null,
        tabItems: [
          {
            id: 1,
            name: "All Demo",
          },
          {
            id: 2,
            name: "Agency",
          },
          {
            id: 3,
            name: "Corporate",
          },
          {
            id: 4,
            name: "Portfolio",
          },
          {
            id: 5,
            name: "Landing",
          },
        ],
        tabContent: [
          {
            id: 1,
            content: [
              {
                src: require("../assets/images/preview/demo-home.png"),
                alt: "Main Demo",
                title: "Main Demo",
                href: "/main-demo",
                active: false,
              },
              {
                src: require("../assets/images/preview/dark-main-demo.png"),
                title: "Main Demo-Dark Version",
                alt: "Main Demo Dark",
                href: "/main-demo-dark",
                active: false,
              },
              {
                src: require("../assets/images/preview/personal-portfolio.png"),
                title: "Personal Portfolio",
                alt: "Personal Portfolio",
                href: "/personal-portfolio",
                sticker: "Hot",
                active: true,
              },
              {
                src: require("../assets/images/preview/interior-design.png"),
                title: "Interior Design",
                alt: "Interior Design",
                href: "/landing-interior",
                sticker: "Hot",
                active: true,
              },
              {
                src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
                title: "Personal Portfolio Dark",
                alt: "Personal Portfolio Dark",
                href: "/landing-dark-portfolio",
                sticker: "New",
                active: false,
              },
              {
                src: require("../assets/images/preview/portfolio-home.png"),
                title: "Minimal Portfolio",
                alt: "Minimal Portfolio",
                href: "/minimal-portfolio",
                active: false,
              },
              {
                src: require("../assets/images/preview/digital-agency.png"),
                title: "Digital Agency",
                alt: "Digital Agency",
                href: "/digital-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/creative-agency.png"),
                title: "Creative Agency",
                alt: "Creative Agency Images",
                href: "/creative-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/corporate-business.png"),
                title: "Corporate Business",
                alt: "Corporate Business",
                href: "/corporate-business",
                sticker: "New",
                active: false,
              },
              {
                src: require("../assets/images/preview/personal-portfolio-landing.png"),
                title: "Personal Portfolio — One Page",
                alt: "Personal Portfolio — One Page",
                href: "/landing-personal-portfolio",
                sticker: "Hot",
                active: true,
              },
              {
                src: require("../assets/images/preview/creative-landing.png"),
                title: "Creative Agency 02-One Page",
                alt: "Creative Agency 02",
                href: "/landing-creative-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/business.png"),
                title: "Business",
                alt: "Business",
                href: "/business",
                active: false,
              },
              {
                src: require("../assets/images/preview/designer-portfolio.png"),
                title: "Designer Portfolio",
                alt: "Designer Portfolio",
                href: "/designer-portfolio",
                sticker: "Hot",
                active: false,
              },
              {
                src: require("../assets/images/preview/homeparticles.png"),
                title: "Home Particle - Landing Page",
                alt: "Home Particle",
                href: "/landing-home-particle",
                active: false,
              },
              {
                src: require("../assets/images/preview/studio-agency.png"),
                title: "Studio Agency",
                alt: "Studio Agency",
                href: "studio-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/startup.png"),
                title: "Startup",
                alt: "Startup",
                href: "/startup",
                active: false,
              },
              {
                src: require("../assets/images/preview/creative-portfolio.png"),
                title: "Creative Portfolio",
                alt: "Creative Portfolio",
                href: "/creative-portfolio",
                sticker: "New",
                active: false,
              },
              {
                src: require("../assets/images/preview/coming-soon.png"),
                title: "Coming Soon",
                alt: "Coming Soon",
                desc: `More Feature are Coming Soon`,
                href: "/",
                active: false,
              },
            ],
          },
          {
            id: 2,
            content: [
              {
                src: require("../assets/images/preview/demo-home.png"),
                alt: "Main Demo",
                title: "Main Demo",
                href: "/main-demo",
                active: false,
              },
              {
                src: require("../assets/images/preview/creative-agency.png"),
                title: "Creative Agency",
                alt: "Creative Agency Images",
                href: "/creative-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/corporate-business.png"),
                title: "Creative Agency",
                alt: "Creative Agency",
                href: "/corporate-business",
                sticker: "New",
                active: true,
              },
              {
                src: require("../assets/images/preview/homeparticles.png"),
                title: "Home Particle - Landing Page",
                alt: "Home Particle",
                href: "/landing-home-particle",
                active: false,
              },
              {
                src: require("../assets/images/preview/digital-agency.png"),
                title: "Digital Agency",
                alt: "Digital Agency",
                href: "/digital-agency",
                active: false,
              },

              {
                src: require("../assets/images/preview/creative-portfolio.png"),
                title: "Creative Portfolio",
                alt: "Creative Portfolio",
                href: "/creative-portfolio",
                sticker: "New",
                active: false,
              },
              {
                src: require("../assets/images/preview/studio-agency.png"),
                title: "Studio Agency",
                alt: "Studio Agency",
                href: "studio-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/dark-main-demo.png"),
                title: "Main Demo-Dark Version",
                alt: "Main Demo Dark",
                href: "/main-demo-dark",
                active: false,
              },
              {
                src: require("../assets/images/preview/creative-landing.png"),
                title: "Creative Agency 02-One Page",
                alt: "Creative Agency 02",
                href: "/landing-creative-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/interior-design.png"),
                title: "Interior Design",
                alt: "Interior Design",
                href: "/landing-interior",
                sticker: "Hot",
                active: true,
              },
            ],
          },
          {
            id: 3,
            content: [
              {
                src: require("../assets/images/preview/business.png"),
                title: "Business",
                alt: "Business",
                href: "/business",
                active: false,
              },
              {
                src: require("../assets/images/preview/startup.png"),
                title: "Startup",
                alt: "Startup",
                href: "/startup",
                active: false,
              },
              {
                src: require("../assets/images/preview/corporate-business.png"),
                title: "Creative Agency",
                alt: "Creative Agency",
                href: "/corporate-business",
                sticker: "New",
                active: true,
              },
              {
                src: require("../assets/images/preview/creative-portfolio.png"),
                title: "Creative Portfolio",
                alt: "Creative Portfolio",
                href: "/creative-portfolio",
                sticker: "New",
                active: true,
              },
              {
                src: require("../assets/images/preview/homeparticles.png"),
                title: "Home Particle",
                alt: "Home Particle",
                href: "/landing-home-particle",
                active: false,
              },

              {
                src: require("../assets/images/preview/studio-agency.png"),
                title: "Studio Agency",
                alt: "Studio Agency",
                href: "studio-agency",
                active: false,
              },
            ],
          },
          {
            id: 4,
            content: [
              {
                src: require("../assets/images/preview/personal-portfolio.png"),
                title: "Personal Portfolio",
                alt: "Personal Portfolio",
                href: "/personal-portfolio",
                sticker: "New",
                active: true,
              },
              {
                src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
                title: "Personal Portfolio 02 — One Page",
                alt: "Personal Portfolio 02 — One Page",
                href: "/landing-dark-portfolio",
                sticker: "New",
                active: false,
              },
              {
                src: require("../assets/images/preview/designer-portfolio.png"),
                title: "Designer Portfolio",
                alt: "Designer Portfolio",
                href: "/designer-portfolio",
                sticker: "Hot",
                active: false,
              },

              {
                src: require("../assets/images/preview/portfolio-home.png"),
                title: "Minimal Portfolio",
                alt: "Minimal Portfolio",
                href: "/minimal-portfolio",
                active: false,
              },
              {
                src: require("../assets/images/preview/creative-portfolio.png"),
                title: "Creative Portfolio",
                alt: "Creative Portfolio",
                href: "/creative-portfolio",
                sticker: "New",
                active: true,
              },
              {
                src: require("../assets/images/preview/personal-portfolio-landing.png"),
                title: "Personal Portfolio — One Page",
                alt: "Personal Portfolio — One Page",
                href: "/landing-personal-portfolio",
                active: false,
              },
            ],
          },
          {
            id: 5,
            content: [
              {
                src: require("../assets/images/preview/dark-personal-portfolio-landing.png"),
                title: "Personal Portfolio 02 — One Page",
                alt: "Personal Portfolio 02 — One Page",
                href: "/landing-dark-portfolio",
                sticker: "New",
                active: false,
              },
              {
                src: require("../assets/images/preview/personal-portfolio-landing.png"),
                title: "Personal Portfolio — One Page",
                alt: "Personal Portfolio — One Page",
                href: "/landing-personal-portfolio",
                sticker: "Hot",
                active: true,
              },
              {
                src: require("../assets/images/preview/creative-landing.png"),
                title: "Creative Agency 02-One Page",
                alt: "Creative Agency 02",
                href: "/landing-creative-agency",
                active: false,
              },
              {
                src: require("../assets/images/preview/interior-design.png"),
                title: "Interior Design",
                alt: "Interior Design",
                href: "/landing-interior",
                sticker: "Hot",
                active: true,
              },
              {
                src: require("../assets/images/preview/homeparticles.png"),
                title: "Home Particle",
                alt: "Home Particle",
                href: "/landing-home-particle",
                active: false,
              },
            ],
          },
        ],
        innerPages: [
          {
            src: require("../assets/images/preview/service.png"),
            title: "Service",
            href: "/service",
            alt: "Service",
          },
          {
            src: require("../assets/images/preview/service-details.png"),
            title: "Service Details",
            href: "/service-details",
            alt: "Service Details",
          },
          {
            src: require("../assets/images/preview/about.png"),
            title: "About",
            href: "/about",
            alt: "About",
          },
          {
            src: require("../assets/images/preview/blog-list.png"),
            title: "Blog List",
            href: "/blog",
            alt: "Blog List",
          },
          {
            src: require("../assets/images/preview/blog-details.png"),
            title: "Blog Details",
            href: "/blog-details",
            alt: "Blog Details",
          },
          {
            src: require("../assets/images/preview/portfolio.png"),
            title: "Portfolio",
            href: "/portfolio",
            alt: "Portfolio",
          },
          {
            src: require("../assets/images/preview/portfolio-details.png"),
            title: "Portfolio Details",
            href: "/portfolio-details",
            alt: "Portfolio Details",
          },
          {
            src: require("../assets/images/preview/video-popup.png"),
            title: "Video Popup",
            href: "/video-popup",
            alt: "video popup",
          },
          {
            src: require("../assets/images/preview/contact.png"),
            title: "Contact",
            href: "/contact",
            alt: "contact",
          },
        ],
        panel: 0,
        featuresContent: [
          {
            icon: "check-square",
            title: "VueJS",
            desc: ` No.1 Github Start & Developer Friendly Top Progressive JavaScript Framework `,
          },
          {
            icon: "cast",
            title: "Vuetify Js",
            desc: `It's a complete UI framework built with Vue.js which you get rich user experiences`,
          },
          {
            icon: "smartphone",
            title: "Perfect Responsive",
            desc: `Vuetify takes a mobile first approach to design like phone, tablet, or desktop computer.`,
          },
          {
            icon: "command",
            title: "Sass Available",
            desc: ` The tamplate has Sass available for css. You can Change
                        css by sass`,
          },
          {
            icon: "cpu",
            title: "Fast Loading Speed",
            desc: `Trydo is faster loading speed.Trydo create your theme so
                        much faster way`,
          },
          {
            icon: "file-plus",
            title: "Well Documented Codes",
            desc: `The Trydo code is awesome well documented code. And Its
                        customization is very easily`,
          },
          {
            icon: "framer",
            title: "Modern Design",
            desc: `Trydo is a modern creatuve design for Creative Agency ,
                        Personal Portfolio etc....`,
          },
          {
            icon: "headphones",
            title: "24 Support System",
            desc: `We are provide 24 hours support for all clients.You can
                        purchase without hesitation.`,
          },
        ],
        serviceContent: [
          {
            icon: "activity",
            title: "Fast Performance",
            desc: `Optimized for a smaller build size, faster dev compilation and dozens of other improvements.`,
          },
          {
            icon: "cast",
            title: "Perfect Responsive",
            desc: `Our Template is full Perfect for all device. You can visit our template all device easily.`,
          },
          {
            icon: "map",
            title: "Fast & Friendly Support",
            desc: `We are provide 24 hours support for all clients.You can purchase without hesitation.`,
          },
        ],
      };
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>

<style lang="scss" scoped>
  .theme--light.about-expension-panels .v-expansion-panel-header::after {
    height: 1px;
    width: 100%;
  }
  .theme--light.about-expension-panels .v-expansion-panel-header {
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 0 10px 0;
    font-size: 18px;
  }
  .main-page-preview-gallery {
    .v-tabs {
      margin: 35px auto 30px;
    }
  }
  .v-expansion-panel-content__wrap {
    p {
      a {
        font-weight: 500;
      }
    }
  }
</style>
<style lang="scss">

  .header-area .logo a img {
    max-height: 60px;
  }
  .faq-area {
    strong {
      color: var(--color-primary);
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 767px){
    .home-demo-area.inner-page-demo{
      .single-demo{
        padding: 0;
      }
      .wrapper{
        padding: 0 20px !important;
      }
    }
    .prv-feature {
      .plr_sm--30 {
          padding: 0 20px !important;
      }
    }
  }

</style>
