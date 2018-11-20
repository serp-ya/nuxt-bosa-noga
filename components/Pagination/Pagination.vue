<template>
  <div class="product-catalogue__pagination">
    <div class="page-nav-wrapper">
      <div class="angle-back">
        <a @click="changePage(activePage - 1)"/>
      </div>
      <ul>
        <li
          v-for="pageNum in pagesCount"
          :key="pageNum"
          :class="{active: pageNum === activePage}"
        >
          <a 
            @click="changePage(pageNum)"
          >
            {{ pageNum }}
          </a>
        </li>
      </ul>
      <div class="angle-forward">
        <a @click="changePage(activePage + 1)" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    pagesCount: {
      type: Number,
      isRequired: true,
    },
  },
  computed: {
    activePage() {
      return +this.$route.query.page || 1;
    },
  },
  methods: {
    changePage(pageNum) {
      if (pageNum <= 0 || pageNum > this.pagesCount) {
        return;
      }

      this.$router.replace({query: {page: pageNum}});
    }
  },
};
</script>
