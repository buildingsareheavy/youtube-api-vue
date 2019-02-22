<template>
  <ul class="list-group col-md-4">
    <VideoListItem
      v-for="video in videos"
      v-bind:video="video"
      v-bind:key="video.etag"
      v-on:videoSelect="onVideoSelect"
    ></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
  name: "VideoList",
  components: {
    VideoListItem
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

<style scoped lang="scss">
</style>
