<template>
  <li>{{ video.snippet.title }}</li>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object // validating that we are recieving an object from the parent
  }
};
</script>

<style scoped>
</style>
