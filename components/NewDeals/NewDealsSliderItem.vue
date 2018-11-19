<template>
  <div
    class="new-deals__product"
    :class="isActiveClasses"
    :style="productImageStyles"
  >
    <nuxt-link
      tag="a"
      :to="isActive ? productLink : ''"
    />
    <div
      class="new-deals__product_favorite"
      v-if="isActive"
      :class="heartClasses"
      @click="toggleFavorite"
    />
  </div>
</template>

<script>
import { favoritesStorage } from '~/services/LocalStorage';

export default {
  name: 'NewDealsSliderItem',
  props: {
    productId: {
      type: Number,
      isRequired: true,
    },
    productLink: {
      type: String,
      isRequired: true,
    },
    imageLink: {
      type: String,
      isRequired: true,
    },
    isActive: {
      type: Boolean,
      isRequired: true,
    },
  },
  data() {
    return {
      favoritesIdsArray: favoritesStorage.store || [],
    };
  },
  computed: {
    isActiveClasses() {
      return {
        'new-deals__product_active': this.isActive,
      };
    },
    productImageStyles() {
      return {
        'background-image': `url(${this.imageLink})`,
      };
    },
    productIsFavorite() {
      return favoritesStorage.find(this.productId);
    },
    heartClasses() {
      return {
        'product-catalogue__product_favorite-chosen': this.favoritesIdsArray.find(id => id === this.productId),
      };
    },
  },
  methods: {
    toggleFavorite() {
      const result = favoritesStorage.toggleId(this.productId);
      this.favoritesIdsArray = result;
    },
  },
}
</script>

<style scoped>
  .new-deals__product {
    background-size: cover;
    background-position: center;
  }
</style>
