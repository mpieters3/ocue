<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--4"
      data-black-overlay="5"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center rn-page-title pt--100">
              <h2 class="heading-title theme-gradient">Website Development</h2>
              <p>Fresh From The Press Discription</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <div class="rn-service-details ptb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col lg="12">
            <div class="service-details-inner">
              <div class="inner">
                <!-- Start Single Content  -->
                <v-row class="sercice-details-content align-center row--35 ">
                  <v-col lg="6" md="6" cols="12">
                    <div class="thumb position-relative">
                      <CoolLightBox
                        :items="items"
                        :index="index"
                        @close="index = null"
                      >
                      </CoolLightBox>

                      <div class="thumbnail position-relative">
                        <div
                          v-for="(image, imageIndex) in items"
                          :key="imageIndex"
                        >
                          <img
                            class="w-100"
                            :src="image.thumb"
                            alt="About Images"
                          />
                          <a
                            @click="index = imageIndex"
                            class="video-popup play__btn"
                            ><span class="play-icon"></span
                          ></a>
                        </div>
                      </div>
                    </div>
                  </v-col>
                  <v-col lg="6" md="6" cols="12">
                    <div class="details mt_md--30 mt_sm--30">
                      <div class="section-title">
                        <span class="subtitle">Our service</span>
                        <h2 class="heading-title">Providing Service</h2>
                        <p class="description">
                          But the majority have suffered alteration in some
                          form, by injected humour, or randomised words which
                          don't look even slightly believable.
                        </p>
                        <p class="description">
                          If you are going to use a passage of Lorem Ipsum. You
                          need to be sure there isn't anything embarrassing
                        </p>
                      </div>
                      <ul class="liststyle mt--30">
                        <li>Yet this above sewed flirted opened ouch</li>
                        <li>Goldfinch realistic sporadic ingenuous</li>
                        <li>
                          Abominable this abidin far successfully then like
                          piquan
                        </li>
                        <li>Risus commodo viverra</li>
                        <li>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                        </li>
                      </ul>
                    </div>
                  </v-col>
                </v-row>
                <!-- End Single Content  -->
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="rn-service-details ptb--120 bg_color--5">
      <v-container>
        <!-- Start Single Content  -->
        <v-row class="sercice-details-content align-center row--35">
          <v-col lg="6" md="6" cols="12" order="2" order-md="1">
            <div class="details mt_md--30 mt_sm--30">
              <div class="section-title">
                <span class="subtitle">Our service</span>
                <h2 class="heading-title">Providing Service</h2>
                <p class="description">
                  But the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.
                </p>
                <p class="description">
                  If you are going to use a passage of Lorem Ipsum. You need to
                  be sure there isn't anything embarrassing If you are going to
                  use a passage of Lorem Ipsum.
                </p>
              </div>
              <ul class="list-style--1 mt--30">
                <li v-for="list in listOne" :key="list.id">
                  <i v-html="iconSvg(list.icon)"></i>
                  {{ list.desc }}
                </li>
              </ul>
            </div>
          </v-col>
          <v-col lg="6" md="6" cols="12" order="1" order-md="2">
            <div class="thumb position-relative">
              <img
                class="w-100"
                src="../../assets/images/service/service-02.png"
                alt="Service Images"
              />
            </div>
          </v-col>
        </v-row>
        <!-- End Single Content  -->
      </v-container>
    </div>
    <div class="rn-pricing-table-area ptb--120 bg_color--1">
      <v-container>
        <div class="row">
          <div class="col-lg-12">
            <div
              class="text-center section-title service-style--3 mb--25 mb_sm--0"
            >
              <span class="subtitle">Our Budget Plan</span>
              <h2 class="heading-title">Pricing Plan</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                <br />
                but the majority have suffered alteration.
              </p>
            </div>
          </div>
        </div>
        <PricingPlan />
      </v-container>
    </div>

    <Footer />
  </div>
</template>

<script>
  import feather from "feather-icons";
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";
  import PricingPlan from "../../components/pricing-plan/PricingPlan";
  export default {
    components: {
      Header,
      Footer,
      PricingPlan,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
        items: [
          {
            thumb: require("../../assets/images/service/service-01.png"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        index: null,
        listOne: [
          {
            id: 1,
            icon: "check",
            desc: `5 PPC Campaigns the majority.`,
          },
          {
            id: 2,
            icon: "check",
            desc: `Digital Marketing going to.`,
          },
          {
            id: 3,
            icon: "check",
            desc: ` Marketing Agency passage of.`,
          },
          {
            id: 4,
            icon: "check",
            desc: ` Seo Friendly you are going.`,
          },
          {
            id: 5,
            icon: "check",
            desc: `5 PPC Campaigns the majority.`,
          },
          {
            id: 6,
            icon: "check",
            desc: `Fast-Track Your business`,
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
