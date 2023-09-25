<template>
  <div class="active-dark bg_color--9">
    <!-- Start Header Area -->
    <!-- End Header Area -->
    <Header />

    <!-- Start blog Area  -->
    <div class="rn-blog-area ptb--120 bg_color--8">
            <v-row>
          <v-col lg="12">
            <div class="text-center section-title pt--80 pb--60">
              <h2 class="heading-title">Wetnotes</h2>
            </div>
          </v-col>
        </v-row>

      <v-container>
        <BlogThree v-bind:showHidden="false" />
      </v-container>
    </div>
    <!-- Start blog Area  -->
    <Footer />
  </div>
</template>

<script>
  import Header from "../components/header/Header";
  import BlogThree from "../components/blog/BlogThree";
  import Footer from "../components/footer/Footer";
  export default {
    components: {
      Header,
      BlogThree,
      Footer,
    },
    data() {
      return {

      };
    },
  };
</script>
