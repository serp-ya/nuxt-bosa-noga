export default {
  initCategories(state, { categoriesList }) {
    state.categories = categoriesList;
  },
  initFilters(state, { filtersList }) {
    state.filters = filtersList;
  },
  initFeatured(state, { featuredItems }) {
    state.featured = featuredItems;
  },
  loadCategory(state, { categoryData }) {
    const { id, items } = categoryData;
    const existItemsIds = state.items.map(item => item.id);
    const newItems = items.reduce((res, item) => {
      if (!existItemsIds.includes(item.id)) {
        res.push(item);
      }
      return res;
    }, []);
    
    if (newItems.length > 0) {
      state.items = [...state.items, ...newItems];
    }

    if (id || id === 0) {
      state.loadedItemsByCategoryId.push(id);
    }
  },
  loadProduct(state, { productData }) {
    state.itemsFull = [...state.itemsFull, productData];
  },
  addToViewed(state, { productData }) {
    const { viewedItems } = state;
    const itemExist = viewedItems.find(item => item.id === productData.id);

    if (itemExist) {
      return;
    } else if (viewedItems.length >= 10) {
      viewedItems.shift();
    }
    
    viewedItems.push(productData);
  },
};
