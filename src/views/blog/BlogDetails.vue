<template>
  <div>
    <!-- Start Header Area -->
    <Header>
      <img slot="logo" :src="logo" />
    </Header>
    <!-- End Header Area -->

    <!-- Start Breadcrump Area  -->
    <div
      class="rn-page-title-area pt--120 pb--190 bg_image bg_image--27"
      data-black-overlay="7"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center blog-single-page-title pt--100">
              <h2 class="heading-title theme-gradient">
                The Home of the Future <br />Could Bebes
              </h2>
              <ul class="justify-center blog-meta d-flex align-center">
                <li class="d-flex" v-for="(meta, i) in metaList" :key="i">
                  <span v-html="iconSvg(meta.icon)"></span>{{ meta.text }}
                </li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start Blog Details Area  -->
    <div class="rn-blog-details pt--110 pb--70 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner">
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                </p>
                <div class="thumbnail">
                  <img
                    src="../../assets/images/blog/bl-big-01.jpg"
                    alt="Blog Images"
                  />
                </div>
                <p class="mt--40">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                </p>
                <p>
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lo rem
                  Ipsum available, but the majority have suffered alteration in
                  some form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
                <blockquote class="rn-blog-quote">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes.
                </blockquote>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
                <div class="flex-wrap blog-single-list-wrapper d-flex">
                  <div class="thumbnail">
                    <img
                      class="w-100"
                      src="../../assets/images/blog/blog-single-01.jpg"
                      alt="BLog Images"
                    /><span
                      >Lorem ipsum dolor sit amet, consectetur</span
                    >
                  </div>
                  <div class="content">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo .
                    </p>
                    <h4 class="heading-title">
                      Ordered &amp; Unordered Lists.
                    </h4>
                    <ul class="list-style">
                      <li>Yet this above sewed flirted opened ouch</li>
                      <li>Goldfinch realistic sporadic ingenuous</li>
                      <li>
                        Abominable this abidin far successfully then like piquan
                      </li>
                      <li>Risus commodo viverra</li>
                      <li>
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </li>
                    </ul>
                    <h4 class="heading-title">
                      Ordered &amp; Unordered Lists.
                    </h4>
                    <ul class="list-style">
                      <li>Yet this above sewed flirted opened ouch</li>
                      <li>Goldfinch realistic sporadic ingenuous</li>
                      <li>
                        Abominable this abidin far successfully then like piquan
                      </li>
                      <li>Risus commodo viverra</li>
                    </ul>
                  </div>
                </div>
                <p class="mt--25 mt_sm--5">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
                <div class="video-wrapper position-relative mb--40">
                  <CoolLightBox
                    :items="items"
                    :index="index"
                    @close="index = null"
                  >
                  </CoolLightBox>
                  <div class="thumbnail position-relative">
                    <div v-for="(image, imageIndex) in items" :key="imageIndex">
                      <img
                        class="w-100"
                        :src="image.thumb"
                        alt="About Images"
                      />
                      <a
                        @click="index = imageIndex"
                        class="video-popup position-top-center play__btn"
                        ><span class="play-icon"></span
                      ></a>
                    </div>
                  </div>
                </div>
                <p class="mb--0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum. You need to be sure there isn't anything
                  embarrassing hidden in the middle of text. All the Lorem Ipsum
                  generators on the Internet tend toitrrepeat predefined chunks.
                  Necessary, making this the first true generator on the
                  Internet. It re are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injectedeed eedhumour, or randomised words which
                  don't look even slightly believable.
                </p>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Blog Details Area  -->

    <!-- Start Comment Form  -->
    <div class="blog-comment-form pb--120 bg_color--1">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <div class="section-title">
                <span class="subtitle">Have a Comment?</span>
                <h2 class="heading-title">Leave a Reply</h2>
              </div>
              <ValidationObserver v-slot="{ handleSubmit }">
                <form class="mt--40" @submit.prevent="handleSubmit(onSubmit)">
                  <v-row>
                    <v-col lg="6" md="12" cols="12">
                      <div class="rnform-group">
                        <ValidationProvider
                          name="name"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label>
                            <input
                              type="text"
                              v-model="formData.name"
                              placeholder="Name"
                            />
                            <span class="inpur-error">{{ errors[0] }}</span>
                          </label>
                        </ValidationProvider>
                      </div>
                      <div class="rnform-group">
                        <ValidationProvider
                          name="email"
                          rules="required|email"
                          v-slot="{ errors }"
                        >
                          <label>
                            <input
                              type="text"
                              rules="required|email"
                              v-model="formData.email"
                              placeholder="Email"
                            />
                            <span class="inpur-error">{{ errors[0] }}</span>
                          </label>
                        </ValidationProvider>
                      </div>
                      <div class="rnform-group">
                        <ValidationProvider
                          name="website"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label>
                            <input
                              type="text"
                              v-model="formData.subject"
                              placeholder="Website"
                            />
                            <span class="inpur-error">{{ errors[0] }}</span>
                          </label>
                        </ValidationProvider>
                      </div>
                    </v-col>
                    <v-col lg="6" md="12" cols="12">
                      <div class="rnform-group">
                        <ValidationProvider
                          name="comment"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <label>
                            <textarea
                              v-model="formData.message"
                              placeholder="Comment"
                            ></textarea>
                            <span class="inpur-error">{{ errors[0] }}</span>
                          </label>
                        </ValidationProvider>
                      </div>
                    </v-col>
                    <v-col cols="12">
                      <div class="blog-submit-btn">
                        <button
                          class="btn-default"
                          type="submit"
                          value="submit"
                        >
                          SEND MESSAGE
                        </button>
                      </div>
                    </v-col>
                  </v-row>
                </form>
              </ValidationObserver>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Comment Form  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import Footer from "../../components/footer/Footer";
  import feather from "feather-icons";
  import { ValidationObserver } from "vee-validate";
  import { ValidationProvider } from "vee-validate/dist/vee-validate.full.esm";
  export default {
    components: {
      Header,
      Footer,
      ValidationObserver,
      ValidationProvider,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
        formData: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
        items: [
          {
            thumb: require("../../assets/images/blog/bl-big-01.jpg"),
            src: "https://www.youtube.com/watch?v=ZOoVOfieAF8",
          },
        ],
        metaList: [
          {
            icon: "clock",
            text: "May 18, 2020",
          },
          {
            icon: "user",
            text: "Fatima",
          },
          {
            icon: "message-circle",
            text: "15 Comments",
          },
          {
            icon: "heart",
            text: "Like",
          },
        ],
        index: null,
      };
    },

    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
      onSubmit() {
        console.log(this.formData);
      },
    },
  };
</script>
