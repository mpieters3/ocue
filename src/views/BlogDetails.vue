<template>
  <div class="active-dark bg_color--9">
    <!-- Start Header Area -->
    <!-- End Header Area -->
    <Header />

    <!-- Start Breadcrumb Area  -->
    <div
      class="rn-page-title-area pt--90 pb--190 bg_image bg_image--27"
      data-black-overlay="7"
      :style="bgStyle"
    >
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="text-center blog-single-page-title pt--100"
            >
              <h2 class="heading-title">
                {{ title }}
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
    <div class="rn-blog-details pt--60 pb--70 bg_color--8">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner-wrapper">
              <div class="inner">
                <div class="content" v-html="content">
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <!-- Start Comment Form  -->
    <div class="blog-comment-form pb--120 bg_color--8">
      <v-container>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <div class="section-title">
                <h2 class="heading-title">
                    Comments
                </h2>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <v-list three-line rounded
                color="rgb(14, 21, 37)"
              >
                <v-list-item
                  v-for="comment in comments"
                  :key="comment.id"
                  class="bg_color--8"
                > <!--
                  <v-list-item-avatar>
                    <v-img :src="comment.author.image.url"></v-img>
                  </v-list-item-avatar>
                  -->
                  <v-list-item-content class="content">
                    <v-list-item-title style="font-size: 16px;"><b>{{ comment.author.displayName }} said...</b></v-list-item-title>
                    <v-list-item-subtitle style="font-size: 16px;" class="content" v-html="comment.content"></v-list-item-subtitle>
                    <v-list-item-subtitle style="font-size: 14px;" class="content">{{ comment.dateText }}</v-list-item-subtitle>
                  </v-list-item-content>
                  <v-divider inset></v-divider>
                </v-list-item>
              </v-list>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="inner">
              <div class="section-title">
                <h4 class="heading-title">
                    <a @click="openComment()">Post a Comment</a>
                </h4>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    
    <Footer />
  </div>
</template>
<style scoped>
  .content {
    color:#c6c9d8 !important;
    background-color: none !important;
    background: none !important;
  }

  .content /deep/ p {
    color:#c6c9d8 !important;
    background: none !important;
  }

  .content /deep/ span {
    color:#c6c9d8 !important;
    background: none !important;
  }

  .content /deep/ blockquote {
    color:#c6c9d8 !important;
    background: none !important;
  }

  .content /deep/ ul {
    color:#c6c9d8 !important;
    background: none !important;
  }

  .content /deep/ li {
    color:#c6c9d8 !important;
    background: none !important;
  }

  .content /deep/ li::before {
    color:#c6c9d8 !important;
    background: none !important;
    content: "\2022";
    top: 0px;
  }

</style>

<script>
  import Header from "../components/header/Header";
  import Footer from "../components/footer/Footer";
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
        post: {},
        title: "",
        bgStyle: "",
        comments: [],
        content: "",
        logo: require("../assets/images/logo/logo.png"),
        metaList: [
          {
            icon: "clock",
            text: "",
          },
          {
            icon: "message-circle",
            text: "",
          },
        ],
        index: null,
      };
    },
    async mounted() {
      const BeautifulDom = require('beautiful-dom');

      const result = await this.axios.get(
        "https://www.googleapis.com/blogger/v3/blogs/5857449385985900086/posts/" + this.$route.params.post_id,
        {
          params: {
            'key': process.env.VUE_APP_BLOGGER_API_KEY,
          },
        },
      );
            
      this.post = result.data;
      this.title = this.post.title;
      this.content = this.post.content;

      const dom = new BeautifulDom(this.content);
      const thumbnailImg = dom.getElementById('Thumbnail');
      if (!!thumbnailImg){
        const imgUrl=thumbnailImg.getAttribute('src');
        this.bgStyle= "background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url('" + imgUrl + "'); background-size:cover;";
      }

      this.metaList.forEach((metaElement, index) => {
        if(metaElement.icon == 'clock'){
          const dateObj = new Date(this.post.updated);
          metaElement.text = dateObj.toDateString();
        } else if (metaElement.icon == "user"){
          metaElement.text = this.post.author.displayName;
        } else if (metaElement.icon == "message-circle"){
          metaElement.text = this.post.replies.totalItems + " Comments";
        }
      });

      if(!!this.post.labels){
        this.metaList.unshift({
          icon: 'tag',
          text: this.post.labels.join(', ')
        });
      }
      else if (metaElement.icon == "tag"){
          metaElement.text = this.post.replies.totalItems + " Comments";
        }

      const commentsResult = await this.axios.get(
        this.post.replies.selfLink,
        {
          params: {
            'key': process.env.VUE_APP_BLOGGER_API_KEY,
          },
        },
      );

      if(!!commentsResult.data.items){
        commentsResult.data.items.forEach(function(comment, index){
          const dateObj = new Date(comment.updated);
          comment.dateText = dateObj.toDateString() + " @ " + dateObj.toLocaleTimeString();
        });
        this.comments = commentsResult.data.items;
      } else {
        this.comments = [];
      }


    },
    methods: {
      openComment(){
        window.open("https://www.blogger.com/comment.g?blogID=5857449385985900086&postID=" + this.$route.params.post_id,
          "Add Comment",
          "width=600,height=500"
        );
      },
      iconSvg(icon) {
        return feather.icons[icon].toSvg();
      },
    },
  };
</script>
