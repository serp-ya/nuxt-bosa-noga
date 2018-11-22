import LocalStorage from './LocalStorage';

class CartStorage extends LocalStorage {
  constructor() {
    super('cart');
  }

  getId() {
    const store = this.store;

    if (!store) {
      return null;
    }
    return this.store.id;
  }

  addId(id) {
    const store = this.store;
    const oldId = store.id;
    const newId = Number(id);

    if (newId !== 0 && !newId) {
      throw new Error(`Can't write value of ${newId} in cart storage`);
    } else if (oldId) {
      throw new Error('Cart id alredy exist. Delete old cart id before write new');
    }
    
    store.id = newId;
    this.store = store;
  }

  deleteId() {
    const store = this.store;
    delete store.id;
    this.store = store;

    return true;
  }
}

export default new CartStorage();
