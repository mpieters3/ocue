<template>
  <v-row class="mt--30">
    <!-- Start Single Portfolio  -->
    <v-col
      lg="4"
      md="4"
      sm="6"
      cols="12"
      v-for="(item, i) in events"
      :key="i"
    >
      <div class="im_box mt--30">
        <div class="thumbnail">
          <router-link to="/blog-details">
            <img class="w-100" :src="calendarImage" alt="Blog Images" />
          </router-link>
        </div>
        <div class="content">
          <div class="inner">
            <div class="content_heading">
              <div class="category_list">
                <router-link to="/blog-details">{{
                  item.start.dateTime
                }}</router-link>
              </div>
              <h4 class="heading-title">
                <router-link to="/blog-details">{{ item.summary }}</router-link> <br />
              </h4>
              <h5 class="heading-subtitle">
                <router-link to="/blog" style="text: white">{{ item.location }}</router-link>
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
    </v-col>
    <!-- End Single Portfolio  -->
  </v-row>
</template>


<script>
  export default {
    data() {
      return {
        calendarImage: require("../../assets/images/portfolio/portfolio-8.jpg"),
        events: {},
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
            'key': "AIzaSyCZ4HU-iF9q18bAJqcr2H2Q2A7wKOi_y0I",
          },
        },
      );

      //Google api can't sort on start anymore, so sort on return
      result.data.items.sort((a, b) => (a.start.dateTime > b.start.dateTime) ? 1 : -1);
      this.events = result.data.items.slice(0,2);
      
      this.events.push({
        'start': {'dateTime': ''},
        'summary': "See More Events",
        'description': "Click to see more upcoming events",
      })
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
