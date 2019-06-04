<template>
  <v-app>
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
    <v-layout row wrap mt-5 pt-5 mx-4>
      <VideoDetail v-bind:video="selectedVideo"></VideoDetail>
      <VideoList id="results" v-bind:videos="videos" v-on:videoSelect="onVideoSelect"></VideoList>
    </v-layout>
  </v-app>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
// const API_KEY = "AIzaSyA0hi0QYO7plQZp5gynU36p39gmJUqkeXU";
const API_KEY = "AIzaSyDT-efffIVbAzJw7P3dnEYvSGulYIj6EDM";
import VueScrollTo from 'vue-scrollto'

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail
  },
  data: function() {
    return {
      videos: [], // an array of objects, where every object represents one video
      selectedVideo: null
    }
  },
  methods: {
    onVideoSelect: function(video) {
      this.selectedVideo = video;
    },
    onTermChange(searchTerm) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            maxResults: "10",
            q: searchTerm // query
          }
        })
        .then(response => {
          this.videos = response.data.items; // response.data is the data from the api response, not the data we called above methods
          // console.log(response.data);
        });
        VueScrollTo.scrollTo('#results', 800, {offset: -100 });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu+Mono|Ubuntu:500&display=swap");
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #FFECB3;
  padding-top: 25px;
  @media screen and (max-width: 959px) {
    padding-top: 10px;
  }
  h1,
  h2,
  .v-card__title {
    font-family: "Ubuntu", sans-serif;
  }
}
div {
  font-family: "Ubuntu Mono", monospace;
}
</style>
