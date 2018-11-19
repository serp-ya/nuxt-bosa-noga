<template>
  <div class="new-deals__product-info">
    <nuxt-link
      tag="a"
      class="h3"
      :to="`product/${productId}`"
    >
      {{ title }}
    </nuxt-link>
    <p>Производитель:
      <span>{{ brand }}</span>
    </p>
    <h3 class="h3">{{ price | currencyFormat('₽', 'right') }}</h3>
  </div>
</template>

<script>
export default {
  name: 'NewDealsProductInfo',
  props: {
    productId: {
      type: Number,
      isRequired: true,
    },
    title: {
      type: String,
      isRequired: true,
    },
    brand: {
      type: String,
      isRequired: true,
    },
    price: {
      type: Number,
      isRequired: true,
    },
  },
};
</script>
