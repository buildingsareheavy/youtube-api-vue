<template>
  <!-- Added v-if="video" because it starts out as "null" -->
  <!-- It conditonally guards this data because it hasn't been loaded yet -->
  <div>
    <div v-if="video">
      <div>
        <iframe
          v-bind:src="videoURL"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div>
        <h2 v-html="video.snippet.title"></h2>
        <p>{{ video.snippet.description }}</p>
      </div>
    </div>
    <div v-else>
      <div>
        <h1>Welcome To Simple Youtube</h1>
        <p>A clean and colorful Youtube experience.</p>
      </div>
    </div>
  </div>
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
</style>
