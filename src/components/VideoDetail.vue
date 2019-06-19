<template>
  <!-- Added v-if="video" because it starts out as "null" -->
  <!-- It conditonally guards this data because it hasn't been loaded yet -->
  <v-flex md8 sm12 pb-4>
    <v-flex mx-2 v-if="video">
      <v-card flat color="teal lighten-4">
        <v-responsive :aspect-ratio="16/9">
          <iframe
            class="pa-3"
            v-bind:src="videoURL"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-responsive>
        <v-layout row wrap>
        <v-flex sm6 class="pb-2 video-title">
          <v-card-title class="pa-0 pl-4 pb-2">
            <h2 v-html="video.snippet.title"></h2>
          </v-card-title>
          <p class="px-4">{{ video.snippet.channelTitle }} - <span style="display: inline-block;" class="" v-html="publishedTime"></span></p>
          </v-flex>
          <v-flex sm6>
          <v-card-text class="pl-4 pt-0">
            <p>{{ video.snippet.description }}</p>
          </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>

    <v-flex class="offset-md6 md6 welcome" v-else>
      <v-card flat color="teal lighten-4" class="mx-2 py-5 px-4">
        <v-card-title class="py-5 d-block">
          <h1>Welcome To Simple Youtube</h1>
          <p class="py-4"><span> A clean and colorful </span><span>Youtube experience.</span></p>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-flex>
</template>

<script>
import moment from 'moment';
export default {
  name: "VideoDetail",
  props: {
    video: Object //validating that we are recieving an array from the parent
  },
  computed: {
    videoURL: function() {
      const videoId = this.video.id.videoId;
      return "https://www.youtube.com/embed/" + videoId;
    },
    publishedTime: function() {
      const pubTime = this.video.snippet.publishedAt;
      return moment(pubTime).format('Do MMMM YYYY');
    }
  }
};
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 100%;
}
.video-title {
  @media screen and (min-width: 600px){
    border-right: 2px solid #4FC3F7;
  }
  @media screen and (max-width: 599px){
      p {
        display: inline-block;
        padding-bottom: 1rem;
        border-bottom: 2px solid #4FC3F7;
      }
    margin-bottom: -1rem;
  }
}
.welcome {
  h1 {
    line-height: 2.25rem;
    padding-bottom: 12rem;
    margin-top: -4rem;
    @media screen and (max-width: 599px) {
      padding-bottom: 5rem;
    }
  }
  p {
    max-width: 70%;
    float: right;
    text-align: right;
    span {
      display: inline-block;
    }
  }
}

</style>
