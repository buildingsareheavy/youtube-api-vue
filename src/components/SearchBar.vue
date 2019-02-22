<template>
  <div>
    <input v-on:input="onInput" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      this.$emit("termChange", event.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  width: 75%;
  padding: 5px 10px;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
