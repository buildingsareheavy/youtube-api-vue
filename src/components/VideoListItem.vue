<template>
  <li class="list-group-item media" v-on:click="onVideoSelect">
    <img class="mr-3" v-bind:src="thumbnailUrl">
    <div class="media-body" v-html="video.snippet.title"></div>
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

<style scoped lang="scss">
li {
  display: flex;
  transition: all 0.2s;
  &:hover {
    background-color: hsl(354, 100%, 85%);
    cursor: pointer;
  }
}
img {
  width: 50%;
}
.list-group-item {
  border: none;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top: 1px solid black;
  padding-top: 20px;
  @media screen and (max-width: 767px) {
    margin-left: 15px;
  }
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: -10px;
  }
  &:first-child {
    margin-top: -21px;
  }
}
.media-body {
  font-size: 0.85rem;
}

@media screen and (max-width: 991px) {
  li {
    display: block; // resets from flex
  }
  img {
    float: left; // allows text to wrap image
  }
  .list-group-item {
    padding: 10px;
  }
}
</style>
