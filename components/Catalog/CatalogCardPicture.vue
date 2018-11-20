<template>
  <div
    class="item-pic"
    :style="pictureStyles"
  >
    <div
      :class="heartClasses"
      @click="toggleFavorite"
    >
      <p></p>
    </div>
    <div
      class="arrow arrow_left"
      v-if="imageLinksArray.length > 0"
      @click="switchImage(-1)"
    />
    <div
      class="arrow arrow_right"
      v-if="imageLinksArray.length > 0"
      @click="switchImage(1)"
    />
  </div>
</template>

<script>
import { favoritesStorage } from '~/services/LocalStorage';
import cacheImages from '~/services/cacheImages';

export default {
  name: 'CatalogCardPicture',
  props: {
    id: {
      type: Number,
      isRequired: true,
    },
    title: {
      type: String,
      isRequired: true,
    },
    imageLinksArray: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      activeImageIndex: 0,
      imagesCount: this.imageLinksArray.length,
      favoritesIdsArray: favoritesStorage.store || [],
    };
  },
  computed: {
    imageToShow() {
      return this.imageLinksArray[this.activeImageIndex];
    },
    productIsFavorite() {
      return favoritesStorage.find(this.productId);
    },
    heartClasses() {
      return {
        'product-catalogue__product_favorite': !this.favoritesIdsArray.find(id => id === this.id),
        'product-catalogue__product_favorite-chosen': this.favoritesIdsArray.find(id => id === this.id),
      };
    },
    pictureStyles() {
      return {
        'background-image': `url(${this.imageToShow})`,
        'background-size': 'cover',
        'background-position': 'center',
        'background-repeat': 'no-repeat',
      };
    },
  },
  methods: {
    switchImage(diff) {
      const newIndex = this.activeImageIndex + diff;

      if (newIndex < 0) {
        this.activeImageIndex = this.imagesCount - 1;
      } else if (newIndex >= this.imagesCount) {
        this.activeImageIndex = 0;
      } else {
        this.activeImageIndex = newIndex;
      }
    },
    toggleFavorite() {
      const result = favoritesStorage.toggleId(this.id);
      this.favoritesIdsArray = result;
    },
  },
  created() {
    if (process.client) {
      cacheImages(this.imageLinksArray);
    }
  },
};
</script>
