let instance = null;

class Reveal {
  constructor() {
    if (!instance) {
      instance = this;
      this.items = [];
      this.isActive = false;
    }
    return instance;
  }
  /**
   * add
   * @param {Object} config
   */
  add($el, config = {}) {
    this.items = [...this.items, { $el, ...config }];
    if (!this.isActive) {
      this.isActive = true;
      this.check();
    }
  }
  /**
   * remove
   */
  reset() {
    this.isActive = false;
    this.items = [];
  }
  /**
   * check
   */
  check() {
    this.items.forEach((item, index) => {
      if (item.$el.getBoundingClientRect().top < window.innerHeight) {
        item.$el.classList.add(item.activeClass);
        this.items.splice(index, 1);
      }
    });
    if (this.isActive) {
      requestAnimationFrame(() => this.check());
    }
  }
}

export default Reveal;
