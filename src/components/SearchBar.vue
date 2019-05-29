<template>
  <div id="searchBar">
    <input v-on:keyup.enter="onInput" type="search" placeholder="Search">
    <button v-on:click="onInput" class="search-button" aria-label="Search">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
        ></path>
      </svg>
    </button>
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

<style scoped lang="scss">
@media screen and (max-width: 767px) {
  #searchBar {
    position: fixed;
    z-index: 3;
    margin-top: -5px;
    min-width: 100%;
    input {
      width: 510px; // Bootstrap preset size
      border-bottom-left-radius: 30px;
      border-bottom-right-radius: 30px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      border: 1px solid black;
    }
    button {
      transform: translate(-53px, 5px);
      border-bottom-right-radius: 30px;
      border-top-right-radius: 0;
      float: none;
      svg {
        transform: translate(-5px, -5px);
      }
    }
  }
}
input {
  width: 66%;
  padding: 12px 25px 8px 25px;
  border: none;
  border-bottom: 1px solid black;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
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
button {
  background: transparent;
  border: none;
  height: 2.75rem;
  width: 3.25rem;
  border-top-right-radius: 30px;
  transform: translate(-3.25rem, 5px);
  transition: all 0.4s;
  &:hover {
    cursor: pointer;
    background: hsl(35, 100%, 50%);
  }
  svg {
    margin-top: 10px;
    height: 1.25rem;
    fill: #2c3e50;
  }
  @media screen and (max-width: 767px) {
    float: right;
    transform: translate(0, -45px);
  }
}
</style>
