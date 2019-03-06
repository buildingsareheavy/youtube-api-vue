<template>
  <div id="app" class="container">
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
    <div class="row">
      <VideoDetail v-bind:video="selectedVideo"></VideoDetail>
      <VideoList v-bind:videos="videos" v-on:videoSelect="onVideoSelect"></VideoList>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
const API_KEY = "AIzaSyDT-efffIVbAzJw7P3dnEYvSGulYIj6EDM";

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
  border-bottom: 1px solid black;
  margin-bottom: 2rem;
  @media screen and (max-width: 767px) {
    border-bottom: none;
  }
}
</style>
