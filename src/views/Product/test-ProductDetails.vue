<template>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <h1>{{ product.price }}</h1>
  </div>
</template>

<script>
  import ProductList from "./ProductList.json";
  export default {
    name: "ProductDetails",
    data() {
      return {
        product: {
          name: "product-name",
          price: "product-price",
        },
      };
    },
    created() {
      this.setProduct();
    },
    methods: {
      setProduct() {
        const product = ProductList.find((product) => product.id === this.$route.params.id); // Find product via the route id param
        this.product = product;
      },
    },
  };
</script>

<style></style>
