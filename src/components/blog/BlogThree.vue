<template>
    <VueSlickCarousel
      v-if="blogContent.length > 0"
      v-bind="settings"
      class="slider-activation rn-slick-dot dot-light"
      style="top:-120px"
    >
      <!-- Start Blog Area  -->
      <div
        class="slide slide-style-2 slider-box-content without-overlay d-flex align-center"
        lg="4"
        md="4"
        sm="6"
        cols="12"
        data-black-overlay="2"
        v-for="(item, i) in blogContent"
        :key="i"
      >
        <v-container>
          <div class="im_box mt--30">
            <div class="thumbnail">
              <router-link to="/blog-details">
                <img class="w-100" :src="item.src" alt="Blog Images" />
              </router-link>
            </div>
            <div class="content">
              <div class="inner">
                <div class="content_heading">
                  <div class="category_list" v-if="!!item.labels">
                    <router-link :to="{ name: 'BlogDetails', params: { post_id: item.id }}">
                    <span v-html="iconSvg('tag')"></span>
                    {{
                      item.labels.join(', ')
                    }}</router-link>
                  </div>
                  <h4 class="heading-title">
                    <router-link :to="{ name: 'BlogDetails', params: { post_id: item.id }}">{{ item.title }}</router-link>
                  </h4>
                </div>
                <div class="content_footer">
                  <router-link :to="{ name: 'BlogDetails', params: { post_id: item.id }}" class="rn-btn btn-opacity">
                    Read More
                  </router-link>
                </div>
              </div>
              <router-link
                class="transparent_link"
                :to="{ name: 'BlogDetails', params: { post_id: item.id }}"
              ></router-link>
            </div>
          </div>
        </v-container>
      </div>
    </VueSlickCarousel>
    <!-- End Blog Area  -->
</template>

<script>
  import feather from "feather-icons";
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    components: {
      VueSlickCarousel,
    },
    props: {
      'showHidden': {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        blogContent: [],
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
      const result = await this.axios.get(
        "https://www.googleapis.com/blogger/v3/blogs/5857449385985900086/posts",
        {
          params: {
            'key': process.env.VUE_APP_BLOGGER_API_KEY,
          },
        },
      );

      const images = [
        require("../../assets/images/events/gsb.jpg"),
        require("../../assets/images/events/kelp.jpg"),
        require("../../assets/images/events/diver.jpg"),
        require("../../assets/images/events/fins.jpg"),
        require("../../assets/images/events/anenome.jpg"),
        require("../../assets/images/events/more_kelp.jpg"),
      ];      
      
      const BeautifulDom = require('beautiful-dom');
      const filteredResult = result.data.items.filter(blog => !!this.showHidden || !!!blog.labels || !blog.labels.includes('hidden'));

      filteredResult.forEach(function(blog, index){
        const dom = new BeautifulDom(blog.content);
        const thumbnailImg = dom.getElementById('Thumbnail');
        
        if (!!thumbnailImg){
          const imgUrl=thumbnailImg.getAttribute('src');
          blog.src = imgUrl;
        } else {
          blog.src = images[index % 6];
        }
        blog.dateString = new Date(blog.updated).toDateString();
      });

      this.blogContent = filteredResult;
    },
    methods: {
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
