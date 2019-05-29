<template>
  <div>
    <transition-group name="list" tag="ul">
      <VideoListItem
        v-for="video in videos"
        v-bind:video="video"
        v-bind:key="video.etag"
        v-on:videoSelect="onVideoSelect"
      ></VideoListItem>
    </transition-group>
  </div>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
  },
  data: {
    video: null
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
</style>
