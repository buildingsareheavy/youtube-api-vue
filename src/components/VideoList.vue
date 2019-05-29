<template>
  <div class="col-md-4">
    <transition-group name="list" class="list-group" tag="ul">
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

<style scoped lang="scss">
h2 {
  font-size: 1rem;
  /* transform: translateY(-1rem); */
}
ul {
  margin-bottom: 20px;
  max-height: 620px; // Prevents jumping when results transition
}
.list-enter,
.list-leave-to {
  opacity: 0;
  transform: scale(0);
  transition: all 0.2s;
}
.list-enter-to {
  opacity: 1;
  transform: scale(1);
  transition: all 0.2s;
  transition-delay: 0.5s;
}
</style>
