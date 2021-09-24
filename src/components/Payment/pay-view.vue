<template>
  <div class="payment">
    <h1>Betalning</h1>
    <p>Summa: {{ this.cost }}</p>
    <p>Fraktkostnad: {{ this.postage }}</p>
    <p>Totalsumma: {{ this.totalAmount }} Var av moms: {{ this.moms }}</p>
    <form action="/action_page.php">
      <label for="fname">Förnamn:</label><br />
      <input type="text" id="fname" name="fname" /><br />
      <label for="lname">Efternamn:</label><br />
      <input type="text" id="lname" name="lname" /><br /><br />
      <label for="fname">Adress:</label><br />
      <input type="text" id="fname" name="fname" /><br />
      <label for="lname">Stad:</label><br />
      <input type="text" id="lname" name="lname" /><br /><br />
      <label for="deliverySupplier">Välj frakt:</label>
      <select
        name="deliveryChoice"
        id="deliveryChoice"
        @change="onDeliveryChanged"
      >
        <option value="dhl">DHL</option>
        <option value="postNord">PostNord</option>
      </select>
      <br /><br />
      <label for="paymentChoice">Välj betalningssätt:</label>
      <select name="paymentChoice" id="paymentChoice">
        <option value="swish">Swish</option>
        <option value="klarna">Klarna</option>
      </select>
      <br /><br />
      <button class="payButton" @click="pay">Betala</button>
    </form>
    <footer>
      <button class="goBack" @click="back">Tillbaka</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "payView",
  props: {
    cost: Number,
  },
  data() {
    return {
      totalAmount: this.cost + 200,
      postage: 200,
      moms: (this.cost + 200) * 0.16,
    };
  },
  methods: {
    back() {
      this.$emit("back");
    },
    onDeliveryChanged(data) {
      const choice = data.target.value;
      if (choice == "dhl") {
        this.postage = 200;
      } else {
        this.postage = 350;
      }

      this.totalAmount = this.cost + this.postage;
      this.moms = this.totalAmount * 0.16;
    },
    pay() {
      this.$emit("pay");
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
</style>
