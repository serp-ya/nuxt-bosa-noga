<template>
  <main class="product-card">
    <section class="product-card-content">
      <h2 class="section-name">Ботинки женские</h2>
      <section class="product-card-content__main-screen">

        <section class="main-screen__favourite-product-slider">
          <div class="favourite-product-slider">
            <div
              class="favourite-product-slider__arrow favourite-product-slider__arrow_up arrow-up"
              v-if="images.length >= 3"
              @click="changeImage(selectedImageIndex - 1)"
            />
            <div 
              class="favourite-product-slider__item"
              v-for="(image, i) in images"
              :key="image"
              :style="{ background: `url(${image}) center center / cover no-repeat` }"
              @click="changeImage(i)"
            >
              <a></a>
            </div>
            <div
              class="favourite-product-slider__arrow favourite-product-slider__arrow_down arrow-down"
              v-if="images.length >= 3"
              @click="changeImage(selectedImageIndex + 1)"
            />
          </div>
        </section>

        <div 
          class="main-screen__favourite-product-pic"
          :style="{ background: `url(${selectedImage}) center center / cover no-repeat` }"
        />

        <!-- Блок информации о товаре -->
        <div class="main-screen__product-info">
          <div class="product-info-title">
            <h2>{{ title }}</h2>
            <div class="in-stock">{{ inStock ? 'В наличии' : 'Нет в наличии' }}</div>
          </div>
          <div class="product-features">
            <table class="features-table">
              <tr>
                <td class="left-col">Артикул:</td>
                <td class="right-col">{{ sku }}</td>
              </tr>
                <tr>
                  <td class="left-col">Производитель:</td>
                  <td class="right-col">
                    <a href="#">
                      <span class="producer">
                        {{ brand }}
                      </span>
                    </a>
                  </td>
              </tr>
                <tr>
                  <td class="left-col">Цвет:</td>
                  <td class="right-col">{{ color }}</td>
              </tr>
                <tr>
                  <td class="left-col">Материалы:</td>
                  <td class="right-col">{{ material }}</td>
              </tr>
                <tr>
                  <td class="left-col">Сезон:</td>
                  <td class="right-col">{{ season }}</td>
              </tr>
                <tr>
                  <td class="left-col">Повод:</td>
                  <td class="right-col">{{ reason }}</td>
              </tr>
            </table>
          </div>
          <p class="size">Размер</p>
          <ul class="sizes">
            <li>
              <a
                v-for="(size, i) in sizes"
                :key="size.size"
                :class="{active: selectedSizeIndex === i}"
                @click="selectedSizeIndex = i"
              >
                {{ size.size }}
              </a>
            </li>
          </ul>
          <a
            class="in-favourites-wrapper"
            @click="toggleFavorite"
          >
            <div 
            class="favourite"
            :style="favoriteStyle"
            />
            <p
              class="in-favourites"
            >
              В избранное
            </p>
          </a>
          <div class="basket-item__quantity">
            <div
              class="basket-item__quantity-change basket-item-list__quantity-change_minus"
              @click="changeCount(-1)"
            >
              -
            </div>
            {{ count }}
            <div
              class="basket-item__quantity-change basket-item-list__quantity-change_plus"
              @click="changeCount(1)"
            >
              +
            </div>
          </div>
          <div class="price">{{ countedPrice | currencyFormat(currencyOptions) }}</div>

          <button 
            class="in-basket in-basket-click"
            :class="{'in-basket_disabled': !inStock}"
            :disabled="!inStock"
          >В корзину</button>
        </div>
      </section>
    </section>
  </main>
</template>

<script>
import { favoritesStorage } from '~/services/LocalStorage';
import cacheImages from '~/services/cacheImages';

export default {
  name: 'SingleProduct',
  props: {
    id: {
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
    color: {
      type: String,
      isRequired: true,
    },
    material: {
      type: String,
      isRequired: true,
    },
    season: {
      type: String,
      isRequired: true,
    },
    reason: {
      type: String,
      isRequired: true,
    },
    sizes: {
      type: Array,
      isRequired: true,
    },
    images: {
      type: Array,
      isRequired: true,
    },
    price: {
      type: Number,
      isRequired: true,
    },
    sku: {
      type: String,
      isRequired: true,
    },
  },
  data() {
    return {
      count: 1,
      selectedSizeIndex: 0,
      selectedImageIndex: 0,
      isFavorite: !!favoritesStorage.find(this.id),
      currencyOptions: {
        currencySign: '₽',
        currencySignPosition: 'rigth',
        delimiter: ' ',
      },
    };
  },
  computed: {
    countedPrice() {
      return this.price * this.count;
    },
    inStock() {
      return this.sizes[this.selectedSizeIndex].available;
    },
    selectedImage() {
      return this.images[this.selectedImageIndex];
    },
    favoriteStyle() {
      if (this.isFavorite) {
        return {
          'background-image': 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAcCAYAAACdz7SqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG3SURBVHgBxZbNUcJAFMf/b8nNCyVgBUIHWIFQgVABIETGE8nJGQGHDoQO6ADsIB2IR28c9ETY9bEgH0Egi7D+ZiA7m7z9zX6+JURQZS8J56IEQg4KaV1JCCApwHTiU+dhtCemwDGpRfUQUvUgp8NoDG0Eu60SB3lcSuJ3xoD0qVXvxI4hjDBVPj3fdxGVqlq7wQ16iIdHLdc/JmYpVXdPBQh6gRlD/mVhgpJ5atf7c6nbfFubi/MxG+qJk0noXhIVYIckRPgh2H4Dq1BW8FymYROiK2FlLtdhn8A/IPSKsksgIOUrrKLeuaeiC5tILA6HKh8OZGFBKYyo7V7OF5JSPmyw8Kwd+M0BTM9SEzg9UtPNzIqrLROGRe7+GOdiEuZ/ikupTrQKZxpmuZH8Kfqah7nLj1ucCkVdateK61XbJ1LolPk/wEmEs1vDZyVavSWlTmXM85vXAX8WhtfU8bbWCe2MKT+mkHAGR+3fpXD7ErdXerT4gPCg1FgcQzjjYGrTDXBDMeY4iCOMJV2JnQxn/f6OT3oIv2IJdXswhPexx4/GqkZfvj0YYCzV4morB1IlLrLQHcKQbygRxVklR3BoAAAAAElFTkSuQmCC)',
        };
      }
    },
  },
  methods: {
    changeCount(diff) {
      const result = this.count + diff;

      if (result < 1) {
        return;
      }

      this.count = result;
    },
    changeImage(index) {
      if (index < 0 || index >= this.images.length) {
        return;
      }
      this.selectedImageIndex = index;
    },
    toggleFavorite() {
      const result = favoritesStorage.toggleId(this.id);
      const isFavorite = !!favoritesStorage.find(this.id);
      this.isFavorite = isFavorite;
    },
  },
  created() {
    if (process.client) {
      cacheImages(this.images);
    }
  },
};
</script>
