export default {
  toggleSearchBar(state) {
    state.searchBarOpen = !state.searchBarOpen;
  },
  toggleProfile(state) {
    state.basketIsOpen = false;
    state.profileIsOpen = !state.profileIsOpen;
  },
  toggleBasket(state) {
    state.profileIsOpen = false;
    state.basketIsOpen = !state.basketIsOpen;
  },
  setOpenCatId(state, { catId }) {
    if (state.openCatId === catId) {
      state.openCatId = null;
    } else {
      state.openCatId = catId;
    }
  },
  clearOpenCatId(state) {
    state.openCatId = null;
  },
};
