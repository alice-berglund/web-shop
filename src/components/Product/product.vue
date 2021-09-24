<template>
  <div class="product-container">
    <img width="300px" height="300px" alt="picture" v-bind:src="bild_src" />
    <h1>{{ name }}</h1>
    <h2>{{ pris }} SEK</h2>
    <p>{{ text }}</p>
    <p>Kategori: {{ kategori }} Lagersaldo: {{ lagersaldo }}</p>
    <footer>
      <button class="addCartButton" @click="addToCart">
        Lägg till i varukorgen
      </button>
      <button class="goBack" @click="back">Tillbaka</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    name: String,
    text: String,
    kategori: String,
    lagersaldo: Number,
    pris: Number,
    bild_src: String,
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.name);
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
.product-container {
  width: 500px;
  height: 500px;
  background-color: #210340;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid black;
  color: rgb(183, 216, 248);
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
footer {
  background-color: green;
  border: 2px solid black;
  height: 60px;
  margin: auto;
  width: 100%;
}
.addCartButton {
  margin-top: 20px;
  margin-right: 10px;
  width: 165px;
  background-color: rgb(183, 216, 248);
  border: black;
  color: black;
  border-radius: 6px;
  cursor: pointer;
}
.goBack {
  margin-top: 20px;
  margin-left: 10px;
  width: 95px;
  background-color: rgb(183, 216, 248);
  border: black;
  color: black;
  border-radius: 6px;
  cursor: pointer;
}
</style>
