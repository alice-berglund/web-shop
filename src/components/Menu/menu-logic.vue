<template>
  <div id="menuLogic">
    <app-menu menu-title="Meny">
      <section class="option">
        <button @click="goToClothes" class="button">Kläder</button>
      </section>
      <section class="option">
        <button @click="goToHorseEquipment" class="button">Häst</button>
      </section>
      <section class="option">
        <button @click="goToRidingEquipment" class="button">
          Ridutrustning
        </button>
      </section>
      <section class="option">
        <button @click="goToAdmin" class="button">Admin</button>
      </section>
    </app-menu>
    <div v-if="selectedProduct == null" class="products-container">
      <app-product-display
        @onSelected="selected"
        v-for="product in productOnDisplay"
        :bild_src="product.Bild"
        :kategori="product.Kategori"
        :lagersaldo="product.Lagersaldo"
        :name="product.Name"
        :pris="product.Pris"
        :text="product.Text"
        :key="product.Name"
      >
      </app-product-display>
    </div>
    <div v-if="selectedProduct != null">
      <product
        @addToCart="addToCart"
        @back="back"
        :bild_src="selectedProduct.Bild"
        :kategori="selectedProduct.Kategori"
        :lagersaldo="selectedProduct.Lagersaldo"
        :name="selectedProduct.Name"
        :pris="selectedProduct.Pris"
        :text="selectedProduct.Text"
        :key="selectedProduct.Name"
      >
      </product>
    </div>
  </div>
</template>

<script>
import appMenu from "./app-menu.vue";
import appProductDisplay from "../app-product-display.vue";
import product from "../Product/product.vue";

export default {
  components: {
    appMenu,
    appProductDisplay,
    product,
  },
  name: "menuLogic",
  props: {
    products: [],
  },
  watch: {
    products(newVal) {
      this.productOnDisplay = newVal.filter((p) => p.Utvald);
    },
  },
  data() {
    return {
      productOnDisplay: this.products.filter((p) => p.Utvald),
      selectedProduct: null,
    };
  },
  methods: {
    goToClothes() {
      this.productOnDisplay = this.products.filter(
        (p) => p.Kategori == "Klader"
      );
    },
    goToHorseEquipment() {
      this.productOnDisplay = this.products.filter((p) => p.Kategori == "Hast");
    },
    goToRidingEquipment() {
      this.productOnDisplay = this.products.filter(
        (p) => p.Kategori == "Ridutrustning"
      );
    },
    addToCart(productName) {
      this.$emit("addToCart", productName);
    },
    selected(productName) {
      this.selectedProduct = this.products.find((p) => p.Name == productName);
    },
    goToAdmin() {
      this.$emit("goToAdmin");
    },
    back() {
      this.selectedProduct = null;
    },
    goToStartPage() {
      this.productOnDisplay = this.products.filter((p) => p.Utvald);
    },
  },
};
</script>

<style scoped>
.option {
  position: relative;
  width: 300px;
  height: 40px;
  display: flex;
}

.button {
  width: 300px;
  background-color: rgb(231, 219, 231);
  color: black;
  cursor: pointer;
}

.products-container {
  display: inline-grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 50px;
  padding: 25px;
}
</style>
