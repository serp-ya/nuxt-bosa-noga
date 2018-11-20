<template>
  <a class="item-list__item-card item">
    <CatalogCardPicture
      :id="id"
      :title="title"
      :imageLinksArray="imageLinksArray"
    />
    <div class="item-desc">
      <nuxt-link
        :to="`/product/${id}`"
      >
        <h4 class="item-name">
          {{ title }}
        </h4>
      </nuxt-link>
      <p class="item-producer">
        Производитель: 
        <span class="producer">
          {{ brand }}
        </span>
        </p>
      <p class="item-price">
        {{ price | currencyFormat(currencyOptions) }}
      </p>
    </div>
</a>
</template>

<script>
import CatalogCardPicture from './CatalogCardPicture';

export default {
  name: 'CatalogCard',
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
  components: {
    CatalogCardPicture,
  },
  data() {
    return {
      currencyOptions: {
        currencySign: '₽',
        currencySignPosition: 'rigth',
        delimiter: ' ',
      }
    };
  },
};
</script>
