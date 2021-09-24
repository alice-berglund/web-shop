<template>
  <div class="container" @click="onSelected(name)">
    <img width="200px" height="200px" alt="picture" v-bind:src="bild_src" />
    <h1>{{ name }}</h1>
    <h2>{{ pris }} SEK</h2>
    <button class="deleteProduct" @click="onDelete">Ta bort</button>
  </div>
</template>

<script>
export default {
  name: "appProductDisplay",
  props: {
    name: String,
    lagersaldo: Number,
    pris: Number,
    bild_src: String,
  },
  methods: {
    onSelected(name) {
      this.$emit("onSelected", name);
    },
    onDelete() {
      this.$emit("onDelete", this.name);
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
.deleteProduct {
  margin-top: 20px;
  margin-left: 10px;
  width: 95px;
  font-size: 20px;
  background-color: rgb(183, 216, 248);
  border: black;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  border-color: red;
  border-style: solid;
  margin: 0px;
}
</style>
