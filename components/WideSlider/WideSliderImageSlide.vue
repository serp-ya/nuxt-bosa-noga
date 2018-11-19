<template>
  <nuxt-link
    class="slider__image"
    tag="a"
    :to="imageLink"
  >
    <img
      :src="imageSrc"
      alt="slide picture"
    />
  </nuxt-link>
</template>

<script>
export default {
  name: 'WideSliderImageSlide',
  props: {
    imageSrc: {
      type: String,
      isRequired: true,
    },
    imageLink: {
      type: String,
      isRequired: false,
    },
  },
};
</script>

<style scoped>
.slider__image {
  transition: opacity 0.75s;
}
</style>
