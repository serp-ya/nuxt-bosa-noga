<template>
  <div class="new-deals__menu">
    <ul class="new-deals__menu-items">
      <NewDealsMenuItem
        v-for="cat in categories"
        :key="cat.id"
        :categoryId="cat.id"
        :title="cat.title"
        :activeItemId="activeItemId"
        :onClick="onClick"
      />
    </ul>
  </div>
</template>

<script>
import NewDealsMenuItem from './NewDealsMenuItem';

export default {
  name: 'NewDealsMenu',
  props: {
    categories: {
      type: Array,
      isRequired: true,
    },
    activeItemId: {
      type: Number,
      isRequired: true,
    },
    onClickCallback: {
      type: Function,
      isRequired: true,
    },
  },
  components: {
    NewDealsMenuItem,
  },
  computed: {
    activeItemClasses(id) {
      return {
        'new-deals__menu-item_active': id === this.activeItemId,
      };
    },
  },
  methods: {
    onClick(categoryId) {
      this.onClickCallback(categoryId);
    },
  },
};
</script>
