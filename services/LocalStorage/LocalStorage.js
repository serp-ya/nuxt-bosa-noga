class LocalStorage {
  constructor(path) {
    this.path = path;
  }

  get store() {
    if (typeof localStorage === 'undefined') {
      return;
    }

    const storage = localStorage[this.path];
    if (!storage) {
      return {};
    }
    return JSON.parse(storage);
  }

  set store(value) {
    if (typeof localStorage === 'undefined') {
      return;
    }
    localStorage[this.path] = JSON.stringify(value);
  }
}

export default LocalStorage;
export const bosaNogaStorage = new LocalStorage('bosa-noga');
