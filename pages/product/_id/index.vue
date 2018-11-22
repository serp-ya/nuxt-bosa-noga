<template>
  <div>
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
    <ViewedProducts
      v-if="viewedItems.length > 0"
      :viewedProductsList="viewedItems"
    />
</div>
</template>

<script>
import SingleProduct from '~/components/SingleProduct/SingleProduct';
import ViewedProducts from '~/components/ViewedProducts/ViewedProducts';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'ProductPage',
  components: {
    SingleProduct,
    ViewedProducts,
  },
  async fetch({ store, app, params, redirect, error }) {
    try {
      const { id } = params;
      const result = await store.dispatch('products/fetchProduct', { productId: id });

      if (typeof result === 'object' && result.statusCode) {
        error(result);
      }
    } catch (e) {
      console.log('Single page fetch error');
      error({ statusCode: 500, message: 'Internal server error' });
    }
  },
  computed: {
    ...mapState('products', [
      'itemsFull',
      'viewedItems',
    ]),
    productData() {
      const currentProductId = Number(this.$route.params.id);
      return this.itemsFull.find(product => product.id === currentProductId);
    },
  },
  methods: {
    ...mapMutations('products', [
      'addToViewed',
    ]),
  },
  created() {
    this.addToViewed({ productData: this.productData });
  },
};
</script>
