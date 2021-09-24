export class ProductApiService {
  url = "products.json";
  async loadProducts() {
    return await fetch(this.url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((resp) => resp.json())
      .then(function(data) {
        return data.Products;
      });
  }

  async filteredProducts(category) {
    const products = await this.loadProducts();

    return products.filter((x) => x.Kategori == category);
  }
}
