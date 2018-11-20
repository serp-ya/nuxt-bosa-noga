<template>
  <section class="product-catalogue-content">
    <!-- Голова каталога с названием раздела и сортировкой -->
    <section class="product-catalogue__head">
      <div class="product-catalogue__section-title">
        <h2 class="section-name">{{ categoryName }}</h2><span class="amount"> {{ productsCount }} товар(ов)</span>
      </div>

      <div class="product-catalogue__sort-by">
        <p class="sort-by">Сортировать</p>
        <select name="" id="sorting">
          <option value="">по популярности</option>
          <option value="">по размеру</option>
          <option value="">по производителю</option>
        </select>
      </div>
    </section>
    <!-- Список товаров каталога -->
    <section class="product-catalogue__item-list">
      <!-- Товары -->
      <CatalogCard
        v-if="products.length > 0"
        v-for="product in productsToShow"
        :key="product.id"
        :id="product.id"
        :title="product.title"
        :imageLinksArray="product.images"
        :brand="product.brand"
        :price="product.price"
      />
      <p v-else>
        В искомом каталоге нет товарова
      </p>
    </section>
    
    <Pagination 
      v-if="pagesCount > 1"
      :pagesCount="pagesCount"

    />
  </section>
</template>

<script>
import CatalogCard from './CatalogCard';
import Pagination from '~/components/Pagination/Pagination';

export default {
  name: 'Catalog',
  props: {
    products: {
      type: Array,
      isRequired: true,
    },
    categoryName: {
      type: String,
      default: 'Обувь',
    }
  },
  components: {
    CatalogCard,
    Pagination,
  },
  data() {
    return {
      pageLimit: 5,
    };
  },
  computed: {
    productsCount() {
      return this.products.length;
    },
    pagesCount() {
      return Math.ceil(this.productsCount / this.pageLimit);
    },
    pageNum() {
      return this.$route.query.page || 1;
    },
    productsToShow() {
      const from = this.pageLimit * (this.pageNum - 1);
      const to = from + this.pageLimit;
      return this.products.slice(from, to);
    },
  },
};
</script>
