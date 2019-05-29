<template>
  <!-- Added v-if="video" because it starts out as "null" -->
  <!-- It conditonally guards this data because it hasn't been loaded yet -->
  <v-flex md7 mx-2 pb-4>
    <v-flex sm12 v-if="video">
      <v-card>
        <v-responsive :aspect-ratio="16/9">
          <iframe
            v-bind:src="videoURL"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-responsive>
        <div>
          <v-card-title>
            <h2 v-html="video.snippet.title"></h2>
          </v-card-title>
          <v-card-text>
            <p>{{ video.snippet.description }}</p>
          </v-card-text>
        </div>
      </v-card>
    </v-flex>

    <v-flex sm12 v-else>
      <v-card>
        <v-card-title>
          <h1>Welcome To Simple Youtube</h1>
        </v-card-title>
        <v-card-text>A clean and colorful Youtube experience.</v-card-text>
      </v-card>
    </v-flex>
  </v-flex>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: Object //validating that we are recieving an array from the parent
  },
  computed: {
    videoURL: function() {
      const videoId = this.video.id.videoId;
      return "https://www.youtube.com/embed/" + videoId;
    }
  }
};
</script>

<style lang="scss" scoped>
iframe {
  width: 100%;
  height: 100%;
}
</style>
