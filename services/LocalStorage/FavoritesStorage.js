import LocalStorage from './LocalStorage';

class FavoritesStorage extends LocalStorage {
  constructor() {
    super('favorites');
  }

  add(id) {
    const store = this.store;
    const newId = Number(id);

    if (newId !== 0 && !newId) {
      throw new Error(`Can't write value of ${newId}`);
    }

    if (Array.isArray(store)) {
      return this.store = [...store, newId];
    } else {
      return this.store = [newId];
    }
  }

  delete(id) {
    const store = this.store;

    if (Array.isArray(store)) {
      return this.store = store.filter(storedId => storedId !== id);
    }
  }

  toggleId(id) {
    const store = this.store;
    const searchableId = Number(id);
    const isIdStored = this.find(id);

    if (isIdStored) {
      return this.delete(id);
    } else {
      return this.add(id);
    }
  }

  find(id) {
    const store = this.store;
    const searchableId = Number(id);

    if (searchableId !== 0 && !searchableId) {
      return console.error(`Bad value of ${searchableId}`);
    }

    if (Array.isArray(store)) {
      return store.find(storedId => storedId === searchableId);
    }

    return false;
  }
}

export default new FavoritesStorage();
