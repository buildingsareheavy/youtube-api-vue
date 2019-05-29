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
        <h2 v-html="video.snippet.title"></h2>
        <p>{{ video.snippet.description }}</p>
      </div>
    </div>
    <div v-else>
      <div class="no-video-selected">
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
.details {
  padding: 1.25rem 2rem;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  /* background: hsl(240, 2%, 90%); */
  background: hsl(166, 93%, 80%);
  @media screen and (max-width: 767px) {
    border-radius: 0;
  }
  h2 {
    padding: 10px 0;
  }
}
.no-video-selected {
  padding: 32%;
  text-align: center;
  background: hsl(166, 93%, 80%);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-bottom: 30px;
  width: 100%;
  font-size: 2rem 0;
  @media screen and (max-width: 767px) {
    padding: 25% 0;
    font-size: 1.5rem;
    margin-bottom: 45px;
  }
  h1,
  p {
    padding: 1rem;
  }
  ul {
    padding: 0;
    list-style: none;
  }
}
</style>
