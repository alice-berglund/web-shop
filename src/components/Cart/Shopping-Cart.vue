<template>
  <div class="shoppingCart">
    <img
      width="90"
      height="70"
      alt="Logo"
      src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"
    />
    <p class="number">{{ number }}</p>
  </div>
</template>

<script>
export default {
  name: "appShoppingCart",
  props: {
    number: Number,
  },
};
</script>

<style scoped>
.shoppingCart {
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 2%;
  margin-right: 4%;
  cursor: pointer;
}
.number {
  position: absolute;
  top: 22%;
  left: 55%;
  transform: translate(-50%, -50%);
  font-size: 15px;
  color: black;
}
</style>
