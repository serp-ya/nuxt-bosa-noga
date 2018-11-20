<template>
  <Catalog
    :products="items"
    :categoryName="currentCategoryName"
  />
</template>

<script>
import Catalog from '~/components/Catalog/Catalog';
import { mapState } from 'vuex';

export default {
  name: 'CatalogCategoryPage',
  components: {
    Catalog,
  },
  computed: {
    ...mapState('products', [
      'items',
      'categories',
    ]),
    categoryId() {
      return +this.$route.params.id;
    },
    currentCategoryName() {
      const currentCategory = this.categories.find(cat => cat.id === +this.categoryId);
      if (typeof currentCategory !== 'undefined') {
        return currentCategory.title;
      }

      return '';
    },
  },
};
</script>
