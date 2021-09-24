<template>
  <div class="container">
    <h1>Admin</h1>
    <p>Lägg till ny product:</p>
    <form>
      <label for="imgLink">Bildlänk:</label><br />
      <input type="text" id="imgLink" name="imgLink" ref="newImgLink" /><br />
      <label for="name">Namn:</label><br />
      <input type="text" id="name" name="name" ref="newName" /><br />
      <label for="price">Pris:</label><br />
      <input type="text" id="price" name="price" ref="newPrice" /><br />
      <label for="text">Text:</label><br />
      <input type="text" id="text" name="text" ref="newText" /><br />
      <label for="category">Kategori:</label><br />
      <select name="category" id="category" ref="newCategory">
        <option value="Hast">Häst</option>
        <option value="Ridutrustning">Ridutrustning</option>
        <option value="Kläder">Kläder</option> </select
      ><br />
      <label for="stockBalance">Lagersaldo:</label><br />
      <input
        type="text"
        id="stockBalance"
        name="stockBalance"
        ref="newStockBalance"
      /><br />
    </form>
    <button class="addButton" @click="add" type="button">Lägg till</button>
    <footer>
      <button class="goBack" @click="back">Tillbaka</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "addProduct",
  methods: {
    add() {
      const newProduct = {
        Name: this.$refs.newName.value,
        Text: this.$refs.newText.value,
        Bild: this.$refs.newImgLink.value,
        Pris: this.$refs.newPrice.value,
        Utvald: false,
        Lagersaldo: this.$refs.newStockBalance.value,
        Kategori: this.$refs.newCategory.value,
      };
      this.$emit("add", newProduct);
    },
    back() {
      this.$emit("back");
    },
  },
};
</script>

<style scoped>
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
.addButton {
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
  margin: 10px;
}
.container {
  width: 350px;
  height: 500px;
  background-color: #140028;
  border-radius: 10px;
  margin: 10px;
  border: 2px solid black;
  color: rgb(183, 216, 248);
  margin-left: 38%;
}
</style>
