<template>
  <!-- Added v-if="video" because it starts out as "null" -->
  <!-- It conditonally guards this data because it hasn't been loaded yet -->
  <div class="col-md-8">
    <div v-if="video">
      <div class="embed-responsive embed-responsive-16by9">
        <iframe
          class="embed-responsive-item"
          v-bind:src="videoURL"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="details">
        <h2>{{ video.snippet.title }}</h2>
        <p>{{ video.snippet.description }}</p>
      </div>
    </div>
    <div v-else></div>
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
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
}
h1 {
  font-size: 2rem;
}
</style>
