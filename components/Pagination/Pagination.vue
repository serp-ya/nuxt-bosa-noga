<template>
  <div class="product-catalogue__pagination">
    <div class="page-nav-wrapper">
      <div class="angle-back">
        <a @click="changePage(activePage - 1)"/>
      </div>
      <ul>
        <li
          v-for="pageItem in pagesList"
          :key="pageItem.page"
          :class="{active: pageItem.page === activePage}"
        >
          <a 
            @click="changePage(pageItem.page)"
          >
            {{ pageItem.title }}
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
    maxPagesCount: {
      type: Number,
      default: 7,
    },
  },
  computed: {
    pagesList() {
      const {
        pagesCount,
        activePage,
        maxPagesCount
      } = this;

      if (pagesCount <= maxPagesCount) {
        return new Array(pagesCount).fill(1).map((n, i) => ({ page: n + i, title: n + i }));
      }

      const firstPage = { page: 1, title: 1 };
      const lastPage = { page: pagesCount, title: pagesCount };
      const result = [firstPage];

      if (activePage < maxPagesCount - 1) {
        for (let i = result.length + 1; result.length < maxPagesCount - 2; i++) {
          result.push({ page: i, title: i });
        }
        const lastItem = result[result.length - 1].page + 1;
        result.push({ page: lastItem, title: '...'});

      } else if (activePage - 3 < maxPagesCount) {
        result.push({ page: activePage - 2, title: '...'});
        const loops = maxPagesCount - 4;
        for (let i = activePage - 1, c = 0; c < loops; i++, c++) {
          result.push({ page: i, title: i });
        }
        const lastItem = result[result.length - 1].page;
        result.push({ page: lastItem.page + 1, title: '...'});

      } else {
        const startFrom = pagesCount - (maxPagesCount - 2);
        result.push({ page: startFrom, title: '...'});
        for (let i = startFrom + 1; i < pagesCount; i++) {
          result.push({ page: i, title: i });
        }
      }
      result.push(lastPage);
      return result;
    },
    activePage() {
      const currentPage = +this.$route.query.page;
      if (!currentPage || currentPage < 1) {
        return 1;
      } else if (currentPage > this.pagesCount) {
        return this.pagesCount;
      }
      return currentPage;
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
