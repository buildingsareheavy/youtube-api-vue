<template>
  <v-toolbar fixed color="deep-orange accent-3" id="searchBar">
    <v-spacer class="hidden-sm-and-down"></v-spacer>
    <v-text-field clearable label="Search" v-on:keyup.enter="onInput" v-model="searchTerm" type="search" class="mt-3 pa-2"></v-text-field>
    <v-btn icon class="search-button" v-on:click="onInput">
      <v-icon>search</v-icon>
    </v-btn>
    <v-spacer class="hidden-sm-and-down"></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: "SearchBar",
  data: function() {
      return {
      searchTerm: []
    }
  },
  mounted() {
    if (localStorage.searchTerm) {
      this.searchTerm = localStorage.searchTerm;
      console.log("This is local: " + localStorage.searchTerm);
    }
  },
  watch: {
 searchTerm(newSeachTerm) {
   localStorage.searchTerm = newSeachTerm;
 }
  },
  methods: {
    onInput: function() {
      this.$emit("termChange", this.searchTerm);
    }
  }
};
</script>

<style lang="scss" scoped>
#searchBar {
  padding: 10px;
}
 button {
   transform: translateY(-2px);
 }
</style>
