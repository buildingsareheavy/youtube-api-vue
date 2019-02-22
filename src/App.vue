<template>
  <div id="app" class="container">
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
    <VideoList v-bind:videos="videos"></VideoList>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
const API_KEY = "AIzaSyDT-efffIVbAzJw7P3dnEYvSGulYIj6EDM";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList
  },
  data: function() {
    return {
      videos: [] // an array of objects, where every object represents one video
    };
  },
  methods: {
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
        });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
