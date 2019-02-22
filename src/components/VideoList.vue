<template>
  <ul>
    <VideoListItem v-for="video in videos" v-bind:video="video" v-bind:key="video.etag"></VideoListItem>
    <VideoListItem>yay!</VideoListItem>
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
  }
};
</script>

<style scoped>
</style>
