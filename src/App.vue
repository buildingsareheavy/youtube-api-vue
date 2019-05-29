<template>
  <div id="app" class="container">
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail v-bind:video="selectedVideo"></VideoDetail>
      <VideoList v-bind:videos="videos" v-on:videoSelect="onVideoSelect"></VideoList>
    </div>
    <SearchHistory/>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import SearchHistory from "./components/SearchHistory";
const API_KEY = "AIzaSyA0hi0QYO7plQZp5gynU36p39gmJUqkeXU";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
    SearchHistory
  },
  data: function() {
    return {
      videos: [], // an array of objects, where every object represents one video
      selectedVideo: null
    };
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
            q: searchTerm // query
          }
        })
        .then(response => {
          this.videos = response.data.items; // response.data is the data from the api response, not the data we called above methods
          console.log(response.data);
        });
    }
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Overpass:400,700");
#app {
  font-family: "Overpass", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2 {
  font-weight: 700;
}
.container {
  margin-bottom: 2rem;
  @media screen and (max-width: 767px) {
    border-bottom: none;
  }
}
// RESETS
@media screen and (max-width: 767px) {
  .row,
  .col-md-8,
  .col-md-4 {
    margin-left: 0px;
    margin-right: 0px;
    padding-left: 0px;
    padding-right: 0px;
    width: 100%;
  }
  .row {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  .col-md-4 {
    padding-top: 40px;
  }
}
</style>
