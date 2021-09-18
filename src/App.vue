<template>
  <div id="app">
    <p class="title">Ridsports</p>
    <img width="110" height="130" alt="Logo" src="./logo.png">
    <p class="title">Affären</p>
     <div class="shoppingCart" v-on:click="viewCart()">
     <img width="90" height="70" alt="Logo" src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png">
     <p class="number">{{number}}</p>
     </div>
  </div> 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 45px;
  display: flex;
  justify-content: center;
}
.title {
  margin-left: 40px;
  margin-right: 40px;
  font-family: 'Times New Roman';
  font-size: 70px;
  color: black;
}
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
