<template>
  <header>
    <p class="title">Ridsports</p>
    <img width="110" height="130" alt="Logo" src="../../assets/logo.png" />
    <p class="title">Affären</p>
  </header>
</template>

<script>
export default {
  name: "appHeader",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
header {
  text-align: center;
  color: black;
  display: flex;
  justify-content: center;
  background-color: rgb(231, 219, 231);
  height: 190px;
}
.title {
  margin-left: 40px;
  margin-right: 40px;
  font-family: "Times New Roman";
  font-size: 70px;
  color: black;
}
</style>
