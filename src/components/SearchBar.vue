<template>
  <div>
    <input v-on:input="onInput" type="search" placeholder="Search">
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
  width: 66%;
  padding: 10px 20px;
  border: none;
  border-bottom: 1px solid black;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  transition: all 0.2s;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
  &:focus {
    background: hsl(50, 100%, 60%);
  }
}
div {
  margin: 20px 0;
}
</style>
