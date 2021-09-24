<template>
  <div class="container" @click="onSelected(name)">
    <img width="200px" height="200px" alt="picture" v-bind:src="bild_src" />
    <h1>{{ name }}</h1>
    <h2>{{ pris }} SEK</h2>
  </div>
</template>

<script>
export default {
  name: "appProductDisplay",
  props: {
    name: String,
    pris: Number,
    bild_src: String,
  },
  methods: {
    onSelected(name) {
      this.$emit("onSelected", name);
    },
  },
};
</script>

<style scoped>
.container {
  width: 350px;
  height: 350px;
  background-color: #140028;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid black;
  color: rgb(183, 216, 248);
  cursor: pointer;
}
</style>
