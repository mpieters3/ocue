<template>
  <ul
    class="social-share social-style--2 color-black d-flex justify-content-start liststyle"
  >
    <li v-for="(social, i) in socialList" :key="i">
      <a target="_blank" :href="social.url"
        ><i :class="social.icon">{{ social.content }}</i
      ></a>
    </li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        socialList: [
          {
            icon: "fab fa-facebook-f",
            url: "https://www.facebook.com/groups/OrangeCountyUnderwaterExplorers",
            content: '',
          },
          {
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/ocunderwaterexplorers/",
            content: '',
          },
        ],
      };
    },
  };
</script>
