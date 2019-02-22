<template>
  <li class="list-group-item media">
    <img class="mr-3" v-bind:src="thumbnailUrl">
    <div class="media-body">{{ video.snippet.title }}</div>
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
      return this.video.snippet.thumbnails.default.url;
    }
  }
};
</script>

<style scoped lang="scss">
li {
  display: flex;
  &:hover {
    cursor: pointer;
    background-color: #eee;
  }
}
</style>
