<template>
  <li v-on:click="onVideoSelect">
    <img v-bind:src="thumbnailUrl">
    <div v-html="video.snippet.title"></div>
  </li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object // validating that we are recieving an object from the parent
  },
  computed: {
    thumbnailUrl() {
      return this.video.snippet.thumbnails.medium.url;
    }
  },
  methods: {
    onVideoSelect: function() {
      this.$emit("videoSelect", this.video);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
