<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1"
      data-black-overlay="6"
    >
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="breadcrumb-inner pt--100">
              <h2 class="heading-title">Service</h2>
              <ul class="page-list">
                <li
                  class="rn-breadcrumb-item"
                  v-for="(item, i) in breadcrumbs"
                  :key="i"
                >
                  <router-link :to="item.to" :disabled="item.disabled">{{
                    item.text
                  }}</router-link>
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Service Area  -->
    <div class="service-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">Our Marketing</span>
              <h2>Digital Marketing</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <div class="service-white-wrapper">
          <ServiceFour />
        </div>
      </v-container>
    </div>
    <!-- Start Service Area  -->
    <!-- Start Service Area  -->
    <div class="service-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">Our Strategy</span>
              <h2>Business Strategy</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceThree />
      </v-container>
    </div>
    <!-- Start Service Area  -->
    <!-- Start Service Area  -->
    <div class="service-area ptb--120 bg_color--5">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">Our Creatity</span>
              <h2>Creative Agency</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <ServiceTwo />
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <!-- Start Service Area  -->
    <div class="service-area ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center section-title mb--30">
              <span class="subtitle">Our Development</span>
              <h2>Business Development</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </v-col>
        </v-row>
        <!-- End .row -->
        <v-row class="service-main-wrapper">
          <!-- Start Single Service  -->
          <v-col
            lg="4"
            md="4"
            sm="6"
            cols="12"
            v-for="(service, i) in serviceContent"
            :key="i"
          >
            <div class="text-center service service__style--2">
              <router-link to="/service-details">
                <div class="service">
                  <div class="icon" v-html="iconSvg(service.icon)"></div>
                  <div class="content">
                    <h3 class="heading-title">{{ service.title }}</h3>
                    <p>
                      {{ service.desc }}
                    </p>
                  </div>
                </div>
              </router-link>
            </div>
          </v-col>
          <!-- End Single Service  -->
        </v-row>
      </v-container>
    </div>
    <!-- Start Service Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import ServiceThree from "../../components/service/ServiceThree";
  import ServiceFour from "../../components/service/ServiceFour";
  import ServiceTwo from "../../components/service/ServiceTwo";
  import Footer from "../../components/footer/Footer";
  import feather from "feather-icons";
  export default {
    components: {
      Header,
      ServiceThree,
      ServiceFour,
      ServiceTwo,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
        breadcrumbs: [
          {
            text: "Home",
            to: "/",
            disabled: false,
          },
          {
            text: "Service",
            to: "",
            disabled: true,
          },
        ],
        serviceContent2: [
          {
            icon: "cast",
            title: "Business Stratagy",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "cast",
            title: "Website Development",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "cast",
            title: "Marketing & Reporting",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
        ],
        serviceContent: [
          {
            icon: "cast",
            title: "Business Stratagy",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "layers",
            title: "Website Development",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "users",
            title: "Marketing & Reporting",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "monitor",
            title: "Mobile Development",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "camera",
            title: "Marketing & Reporting",
            desc: `I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
          },
          {
            icon: "activity",
            title: "Mobile Development",
            desc: ` I throw myself down among the tall grass by the stream as I lie
                close to the earth.`,
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

<style lang="scss">
  .service-white-wrapper
    .service-main-wrapper
    .service.service__style--2.bg-gray {
    background: #fff;
  }
</style>
