<template>
  <li v-on:click="onVideoSelect">
    <v-card hover>
      <v-layout row wrap my-3>
        <v-flex xs6>
          <v-responsive>
            <img v-bind:src="thumbnailUrl">
          </v-responsive>
        </v-flex>
        <v-flex xs6>
          <v-card-title v-html="video.snippet.title"></v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
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
li {
  list-style: none;
}
img {
  width: 100%;
  height: 100%;
}
</style>
