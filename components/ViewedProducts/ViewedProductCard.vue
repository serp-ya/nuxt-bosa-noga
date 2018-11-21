<template>
  <div 
    class="overlooked-slider__item"
    :style="{ background: `url(${imageUrl}) center center / cover no-repeat` }"
  >
    <nuxt-link
      :to="`/product/${id}`"
    />
  </div>
</template>

<script>
export default {
  name: 'ViewedProductCard',
  props: {
    id: {
      type: Number,
      isRequred: true,
    },
    imageUrl: {
      type: String,
      isRequred: true,
    },
  },
};
</script>
