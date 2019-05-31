<template>
  <li v-on:click="onVideoSelect">
    <v-card flat hover color="amber lighten-2">
      <v-layout row wrap>
        <v-flex xs6>
          <v-responsive>
            <img class="pa-3" v-bind:src="thumbnailUrl">
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
import VueScrollTo from 'vue-scrollto'

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
      VueScrollTo.scrollTo('#app', 800, {offset: -80 });
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
  border-top: 2px solid #FFB300; // amber darken-1
  &:first-of-type {
    border-top: 2px solid #FFC107; // amber
  }
  &:hover {
    border-top: 2px solid #ffd54f; // amber lighten-2
    div {
    z-index: 1;
    }
  }
}
.v-card--hover:hover {
  box-shadow: 0 5px 5px -3px #ffc400,0 8px 10px 1px rgba(0,0,0,0.25),0 3px 14px 2px #FFB300
}
img {
  width: 100%;
  height: 100%;
}
</style>
