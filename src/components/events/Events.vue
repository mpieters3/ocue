<template>
    <!-- Start Single Portfolio  -->
    <VueSlickCarousel
      v-if="events.length > 0"
      v-bind="settings"
      class="slider-activation rn-slick-dot dot-light"
      style="top:-120px"
    >
      <div
        class="slide slide-style-2 slider-box-content without-overlay d-flex align-center"
        lg="4"
        md="4"
        sm="6"
        cols="12"
        data-black-overlay="2"
        v-for="(slider, i) in events"
        :key="i"
      >
        <v-container>
          <div class="im_box mt--30">
            <div class="thumbnail">
              <router-link to="/blog-details">
                <img class="w-100" :src="slider.image" alt="Blog Images" />
              </router-link>
            </div>
            <div class="content">
              <div class="inner">
                <div class="content_heading">
                  <div class="category_list">
                    <router-link to="/blog-details">{{
                      slider.startFriendly
                    }}</router-link>
                  </div>
                  <h4 class="heading-title">
                    <router-link to="/blog-details">{{ slider.summary }}</router-link> <br />
                  </h4>
                  <h5 class="heading-subtitle">
                    <router-link to="/blog">{{ slider.location }}</router-link>
                  </h5>
                </div>
                <div class="content_footer">
                  <router-link to="/blog-details" class="rn-btn btn-opacity">
                    Read More
                  </router-link>
                </div>
              </div>
              <router-link
                class="transparent_link"
                to="/blog-details"
              ></router-link>
            </div>
          </div>
        </v-container>
      </div>
      <!-- End Single Slide  -->
    </VueSlickCarousel>
    <!-- End Single Portfolio  -->
</template>


<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components: {
      VueSlickCarousel,
    },
    data() {
      return {
        events: [],
        settings: {
          dots: true,
          arrows: true,
          infinite: false,
          initialSlide: 0,
          slidesToShow: 3,
          slidesToScroll: 1,
          margin: 20,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
          ]
        },
      };
    },
    async mounted() {
      
      // Each API may support multiple versions. With this sample, we're getting
      // v3 of the blogger API, and using an API key to authenticate.

      const result = await this.axios.get(
        "https://www.googleapis.com/calendar/v3/calendars/cuod10s2ch52a4q2rfd1pnse3s@group.calendar.google.com/events",
        {
          params: {
            'timeMin': (new Date()).toISOString(),
            'maxResults': 10,
            'key': "AIzaSyDFAU8DApgL7SWIneH5SQvQyi_ke5tFZiI",
          },
        },
      );

      result.data.items.forEach(function(event, index){
        if (event.start.date) {
          event.startTime = event.start.date
        } else {
          event.startTime = event.start.dateTime
        }

        const dateObj = new Date(event.startTime);
        event.startFriendly = dateObj.toDateString();

        if (event.start.dateTime){
          event.startFriendly = event.startFriendly + " @ " + dateObj.toLocaleTimeString();
        }
      });

      //Google api can't sort on start anymore, so sort on return
      result.data.items.sort((a, b) => (a.startTime > b.startTime) ? 1 : -1);
      this.events = result.data.items; 
      
      const images = [
        require("../../assets/images/events/gsb.jpg"),
        require("../../assets/images/events/kelp.jpg"),
        require("../../assets/images/events/diver.jpg"),
        require("../../assets/images/events/fins.jpg"),
        require("../../assets/images/events/anenome.jpg"),
        require("../../assets/images/events/more_kelp.jpg"),
      ];

      this.events.forEach(function(event, index){
        event.image = images[index % 6];
      });
    }
  };
</script>

<style lang="scss">
  .form-wrapper label input,
  .form-wrapper label textarea {
    margin-bottom: 0;
  }
  .form-wrapper label {
    margin-bottom: 20px;
  }
</style>
