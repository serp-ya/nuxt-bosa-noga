<template>
  <section
    class="slider"
    v-if="slidesCount > 0"
  >
    <div class="wrapper">
      <div class="slider__pictures">
        <slot />
        <div
          class="arrow slider__arrow slider__arrow_left"
          @click="changeSlideIndex(currentSlide - 1)"
        />
        <div
          class="arrow slider__arrow slider__arrow_right"
          @click="changeSlideIndex(currentSlide + 1)"
        />
        <div class="slider__circles">
          <button
            class="slider__circle"
            v-for="(slide, i) in $slots.default"
            :key="i"
            :value="i"
            :style="{
              opacity: currentSlide === i ? 1 : 0.5,
            }"
            @click="changeSlideIndex(i)"
          />
        </div>
        <h2 class="h2" v-if="title">
          {{ title }}
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'WideSlider',
  props: {
    title: {
      type: String,
      isRequired: false,
    },
    delay: {
      type: Number,
      default: 2000,
    }
  },
  beforeCreate() {
    this.$slots.default = this.$slots.default.filter(el => el.tag);
  },
  mounted() {
    this.changeSlidesStyles();
    this.engine = setInterval(
      () => this.changeSlideIndex(++this.currentSlide),
      this.delay
    );
  },
  beforeDestroy() {
    clearInterval(this.engine);
  },
  data() {
    return {
      slides: this.$slots.default,
      slidesCount: this.$slots.default.length,
      currentSlide: 0,
      engine: null,
    };
  },
  methods: {
    changeSlideIndex(index) {
      if (index < 0) {
        this.currentSlide = this.slidesCount -1;
      } else if (index >= this.slidesCount) {
        this.currentSlide = 0;
      } else {
        this.currentSlide = index;
      }
      this.changeSlidesStyles();
    },
    changeSlidesStyles() {
      this.slides.forEach((slide, i) => {
        slide.elm.style.opacity = this.currentSlide === i ? 1 : 0;
        slide.elm.style.zIndex = this.currentSlide === i ? 2 : 0;
      });
    },
  },
};
</script>
