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
              <h2 class="heading-title">Blog</h2>
              <ul class="page-list">
                <li><router-link to="/">Home</router-link></li>
                <li class="current-page">Blog</li>
              </ul>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- End Breadcrump Area  -->

    <!-- Start blog Area  -->
    <div class="rn-blog-area ptb--120 bg_color--1">
      <v-container>
        <BlogThree />
        <v-row>
          <v-col lg="12">
            <div class="text-center rn-pagination mt--60 mt_sm--30">
              <Pagination />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start blog Area  -->

    <Footer />
  </div>
</template>

<script>
  import Header from "../../components/header/Header";
  import BlogThree from "../../components/blog/BlogThree";
  import Pagination from "../../components/pagination/Pagination";
  import Footer from "../../components/footer/Footer";
  export default {
    components: {
      Header,
      BlogThree,
      Pagination,
      Footer,
    },
    data() {
      return {
        logo: require("../../assets/images/logo/logo.png"),
      };
    },

    methods: {},
  };
</script>
