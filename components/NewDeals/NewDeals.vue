<template>
  <section class="new-deals wave-bottom">
    <h2 class="h2">Новинки</h2>

    <NewDealsMenu
      v-if="Array.isArray(categories) && categories.length > 0"
      :categories="categories"
      :activeItemId="activeCategoryId"
      :onClickCallback="clickCategoryCallback"
    />

    <template v-if="filteredProducts.length > 0">
      <NewDealsSlider
        :productsList="filteredProducts"
        :pullProductDataCallback="getActiveProductInfo"
      />

      <NewDealsProductInfo
        v-if="activeProductInfo !== null"
        :productId="activeProductInfo.id"
        :title="activeProductInfo.title"
        :brand="activeProductInfo.brand"
        :price="activeProductInfo.price"
      />
    </template>
    
    <p v-else>
      В данной категории товаров нет
      </p>
  </section>
</template>

<script>
import NewDealsMenu from './NewDealsMenu';
import NewDealsSlider from './NewDealsSlider';
import NewDealsProductInfo from './NewDealsProductInfo';

export default {
  name: 'NewDeals',
  props: {
    products: {
      type: Array,
      isRequired: true,
    },
    categories: {
      type: Array,
      isRequired: false,
    },
  },
  components: {
    NewDealsMenu,
    NewDealsSlider,
    NewDealsProductInfo,
  },
  data() {
    return {
      activeCategoryId: null,
      activeProductInfo: null,
    };
  },
  computed: {
    filteredProducts() {
      if (this.activeCategoryId === null) {
        return this.products;
      }
      return this.products.filter(
        item => item.categoryId === this.activeCategoryId
      );
    },
  },
  methods: {
    clickCategoryCallback(id) {
      this.activeCategoryId = id;
    },
    getActiveProductInfo(productData) {
      this.activeProductInfo = productData;
    },
  },
}
</script>
