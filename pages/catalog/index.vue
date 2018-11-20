<template>
  <Catalog
    :products="items"
  />
</template>

<script>
import Catalog from '~/components/Catalog/Catalog';
import { mapState } from 'vuex';

export default {
  name: 'CatalogMainPage',
  components: {
    Catalog,
  },
  computed: {
    ...mapState('products', [
      'items',
    ]),
  },
};
</script>
