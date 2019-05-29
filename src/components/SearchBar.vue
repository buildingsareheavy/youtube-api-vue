<template>
  <v-toolbar fixed id="searchBar">
    <v-spacer></v-spacer>
    <v-text-field label="Search" v-on:keyup.enter="onInput" type="search" class="mt-3 pa-2"></v-text-field>
    <v-btn icon class="search-button">
      <v-icon>search</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
  </v-toolbar>
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

<style lang="scss" scoped>
.search-button {
}
</style>
