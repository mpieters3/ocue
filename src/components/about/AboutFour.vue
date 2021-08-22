<template>
  <v-row class="row--35" align="center">
    <v-col lg="5" md="5" cols="12">
      <div class="thumbnail">
        <slot name="thum-img"></slot>
      </div>
    </v-col>
    <v-col lg="7" md="7" cols="12">
      <div class="about-inner inner">
        <div class="section-title">
          <h2 class="heading-title">About Us</h2>
          <p class="description mt_dec--20">
            Orange County Underwater Explorers (OCUE) is a Global Underwater Explorers (GUE) dive group based in Orange County, California and lead by GUE instructor David Watson.  <br /><br /> We share and support the GUE pillars of education, conservation, and exploration. <br /><br /> To this end, our group offers ample opportunities for training, classes, project participation, connecting with similarly trained divers, and simply having fun!
          </p>
        </div>
        <!-- End .section-title -->
      </div>
    </v-col>
  </v-row>
</template>

<script>
  import TabTwo from "../../components/tabs/TabTwo";
  export default {
    components: { TabTwo },
    data() {
      return {};
    },
  };
</script>
