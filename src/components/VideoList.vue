<template>
  <v-flex md4>
    <v-flex mx-2>
    <v-card flat color="amber" v-if="this.videos != false">
      <v-card-title>
        <h2>Results</h2>
      </v-card-title>
    </v-card>

    <transition-group name="list" tag="ul">
      <VideoListItem
        v-for="video in videos"
        v-bind:video="video"
        v-bind:key="video.etag"
        v-on:videoSelect="onVideoSelect"
      ></VideoListItem>
    </transition-group>
  </v-flex>
  </v-flex>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  data: function() {
    return {
    video: null
    }
  },
  props: {
    videos: Array //validating that we are recieving an array from the parent
  },
  methods: {
    onVideoSelect: function(video) {
      this.$emit("videoSelect", video);
    }
  }
};
</script>

<style lang="scss" scoped>
ul,
li {
  padding: 0;
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(1, 0);
  transition: all 0.2s;
}
.list-enter-to {
  opacity: 1;
  transform: scale(1, 1);
  transition: all 0.2s;
  transition-delay: 0.5s;
}
</style>
