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
          <a href="#" class="in-favourites-wrapper">
            <div class="favourite" href="#"></div>
            <p class="in-favourites">В избранное</p>
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
          <div class="price">{{ countedPrice | currencyFormat({ currencyOptions }) }}</div>
          <button class="in-basket in-basket-click">В корзину</button>
        </div>
        
      </section>
    </section>
  </main>
</template>

<script>
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
      type: Number,
      isRequired: true,
    },
  },
  data() {
    return {
      count: 1,
      selectedSizeIndex: 0,
      selectedImageIndex: 0,
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
    }
  }
};
</script>
