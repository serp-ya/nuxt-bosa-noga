<template>
  <SingleProduct
    :id="productData.id"
    :title="productData.title"
    :brand="productData.brand"
    :color="productData.color"
    :material="productData.material"
    :season="productData.season"
    :reason="productData.reason"
    :sizes="productData.sizes"
    :images="productData.images"
    :price="productData.price"
    :sku="productData.sku"
  />
</template>

<script>
import SingleProduct from '~/components/SingleProduct/SingleProduct';
import { mapState } from 'vuex';

export default {
  name: 'ProductPage',
  components: {
    SingleProduct,
  },
  async fetch({ store, app, params, redirect, error }) {
    try {
      const { id } = params;
      const products = store.state.products.itemsFull;
      const productIsLoaded = products.find(
        product => product.id === +id
      );

      if (!productIsLoaded) {
        const url = `products.json?orderBy="id"&equalTo=${id}`;
        const productData = await app.$axios.$get(url);
        const productKey = Object.keys(productData)[0];
        const productIsEmpty = typeof productKey === 'undefined';
  
        if (productIsEmpty) {
          return error({ statusCode: 404, message: '404 - product not found' });
        }

        store.dispatch('products/loadProduct', { productData: productData[productKey] });
      }
    } catch (e) {
      console.log('catalog fetch error');
      error({ statusCode: 500, message: 'Internal server error' });
    }
  },
  computed: {
    ...mapState('products', [
      'itemsFull'
    ]),
    productData() {
      const currentProductId = Number(this.$route.params.id);
      return this.itemsFull.find(product => product.id === currentProductId);
    },
  }
};
</script>
