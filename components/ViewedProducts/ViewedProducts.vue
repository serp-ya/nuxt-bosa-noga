<template>
  <section class="product-catalogue__overlooked-slider">
    <h3>Вы смотрели:</h3>
    <div class="overlooked-slider">
      <div
        class="overlooked-slider__arrow overlooked-slider__arrow_left arrow"
        v-if="showArrows"
        @click="turnSlides(false)"
      />

      <ViewedProductCard
        v-for="product in productsToShow"
        :key="product.id"
        :id="product.id"
        :imageUrl="product.images[0]"
      />

      <div
        class="overlooked-slider__arrow overlooked-slider__arrow_right arrow"
        v-if="showArrows"
        @click="turnSlides(true)"
      />
    </div>
  </section>
</template>

<script>
import ViewedProductCard from './ViewedProductCard';

export default {
  name: 'ViewedProducts',
  props: {
    viewedProductsList: {
      type: Array,
      isRequred: true,
    },
  },
  components: {
    ViewedProductCard,
  },
  data() {
    return {
      products: [...this.viewedProductsList],
    };
  },
  watch: {
    viewedProductsList(newList, oldList) {
      this.products = [...newList];
    },
  },
  computed: {
    productsToShow() {
      return this.products.slice(0, 5);
    },
    showArrows() {
      return this.products.length > 5;
    },
  },
  methods: {
    turnSlides(forward) {
      if (!forward) {
        const lastProduct = this.products.pop();
        this.products = [lastProduct, ...this.products];
      } else {
        const firstProduct = this.products.shift();
        this.products = [...this.products, firstProduct];
      }
    },
  },
};
</script>
