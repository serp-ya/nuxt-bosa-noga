<template>
  <div class="new-deals__slider">
    <div
      class="new-deals__arrow new-deals__arrow_left arrow"
      @click="turnSlide(false)"
    />

    <NewDealsSliderItem
      v-for="(prod, i) in productsToShow"
      :key="prod.id"
      :productId="prod.id"
      :productLink="`/product/${prod.id}`"
      :imageLink="prod.images[0]"
      :isActive="activeProductIndex === i"
    />

    <div
      class="new-deals__arrow new-deals__arrow_right arrow"
      @click="turnSlide(true)"
    />
  </div>
</template>

<script>
import NewDealsSliderItem from './NewDealsSliderItem';

export default {
  name: 'NewDealsSlider',
  props: {
    productsList: {
      type: Array,
      isRequired: true,
    },
    pullProductDataCallback: {
      type: Function,
      isRequired: false,
    },
    showQuantity: {
      type: Number,
      default: 3,
    },
  },
  components: {
    NewDealsSliderItem,
  },
  data() {
    return {
      fromIndex: 0,
      toIndex: this.showQuantity,
      activeProductIndex: Math.ceil(this.showQuantity / 2) - 1,
      products: [...this.productsList],
    };
  },
  created() {
    if (this.pullProductDataCallback) {
      this.pullProductDataCallback(this.activeProductInfo);
    }
  },
  updated() {
    if (this.pullProductDataCallback) {
      this.pullProductDataCallback(this.activeProductInfo);
    }
  },
  computed: {
    productsToShow() {
      return this.products.slice(this.fromIndex, this.toIndex);
    },
    activeProductInfo() {
      return this.productsToShow[this.activeProductIndex];
    },
  },
  watch: {
    productsList(newList, oldList) {
      this.products = [...newList];
    },
  },
  methods: {
    turnSlide(forward) {
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
