<template>
  <div id="app">
    <br />
    <app-header></app-header>
    <shopping-cart
      :number="this.productsInCart.length"
      v-on:click.native="onViewCart"
    ></shopping-cart>
    <menu-logic
      v-if="currentView == 'home'"
      @addToCart="addToCart"
      @back="back"
      @goToAdmin="goToAdmin"
      :products="this.products"
    ></menu-logic>
    <div class="cartView" v-if="currentView == 'cart'">
      <h1>Kundvagn:</h1>
      <div class="productLine">
        <cart-product-display
          class="product"
          v-for="product in this.productsInCart"
          @onSelected="selected"
          @onDelete="deleteProduct"
          :bild_src="product.Bild"
          :name="product.Name"
          :pris="product.Pris"
          :key="product.Name"
        >
        </cart-product-display>
      </div>
      <div class="cart-info">
        <p class="amount">Summa: {{ this.totalAmount }}</p>
        <button
          class="payButton"
          v-if="this.totalAmount > 0"
          @click="goToPayView"
        >
          Betala
        </button>
      </div>
      <footer>
        <button class="goBack" @click="back">Tillbaka</button>
      </footer>
    </div>
    <pay-view
      v-if="currentView == 'pay'"
      :cost="this.totalAmount"
      @back="back"
      @pay="pay"
    ></pay-view>
    <add-product
      v-if="currentView == 'admin'"
      @add="addNewProduct"
      @back="back"
    ></add-product>
  </div>
</template>

<script>
import appHeader from "./components/Header/app-header.vue";
import ShoppingCart from "./components/Cart/Shopping-Cart.vue";
import menuLogic from "./components/Menu/menu-logic.vue";
import { ProductApiService } from "./services/productApi.service";
import cartProductDisplay from "./components/Cart/cart-product-display.vue";
import payView from "./components/Payment/pay-view.vue";
import addProduct from "./components/Admin/add-product.vue";

const service = new ProductApiService();
export default {
  name: "App",
  components: {
    appHeader,
    ShoppingCart,
    menuLogic,
    cartProductDisplay,
    payView,
    addProduct,
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
      currentView: "home",
      cart: {},
      productsInCart: [],
      totalAmount: 0,
    };
  },
  async created() {
    this.products = await service.loadProducts();
  },
  methods: {
    addToCart(productName) {
      let item = this.cart[productName];

      if (item != null) this.cart[productName]++;
      else this.cart[productName] = 1;

      let product = this.products.find((p) => p.Name == productName);
      product.Lagersaldo--;

      this.productsInCart.push(product);

      this.totalAmount += product.Pris;
    },
    onViewCart() {
      this.currentView = "cart";
    },
    selected(productName) {
      this.selectedProduct = this.products.find((p) => p.Name == productName);
    },
    deleteProduct(productName) {
      const productIndex = this.productsInCart.findIndex(
        (p) => p.Name == productName
      );

      this.productsInCart.splice(productIndex, 1);

      let product = this.products.find((p) => p.Name == productName);
      product.Lagersaldo++;
      this.totalAmount -= product.Pris;
    },
    back() {
      this.currentView = "home";
    },
    goToPayView() {
      this.currentView = "pay";
    },
    pay() {
      this.currentView = "home";
      this.totalAmount = 0;
      this.productsInCart = [];
    },
    addNewProduct(newProduct) {
      this.products.push(newProduct);
    },
    goToAdmin() {
      this.currentView = "admin";
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(231, 219, 231);
}

.cartView {
  font-family: "Times New Roman";
  color: black;
  margin: 15px;
}

.product {
  color: rgb(183, 216, 248);
}
footer {
  background-color: green;
  border: 2px solid black;
  height: 60px;
  margin: auto;
  width: 100%;
}
.goBack {
  margin-top: 20px;
  margin-left: 10px;
  width: 95px;
  background-color: rgb(183, 216, 248);
  color: black;
  border: black;
  border-radius: 6px;
  cursor: pointer;
}
.productLine {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  padding: 25px;
}
.cart-info {
  display: flex;
  margin-left: 40%;
  font-size: 25px;
  color: black;
}
.payButton {
  margin-left: 10px;
  margin-bottom: 20px;
  width: 95px;
  height: 50px;
  font-size: 20px;
  background-color: rgb(183, 216, 248);
  border: black;
  color: black;
  border-radius: 6px;
  cursor: pointer;
  border-color: black;
  border-style: solid;
  margin: 0px;
}
.amount {
  margin-right: 10px;
}
</style>
