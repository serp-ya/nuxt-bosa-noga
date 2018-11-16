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
};
