let instance = null;
const defaultConfig = {
  percentReveal: 0,
};

/**
 * getPercentReveal
 * @param {Object} item
 */
const getPercentReveal = item => {
  const responsiveKey = item.responsivePercentReveal
    ? Object.keys(item.responsivePercentReveal).find(value => value >= window.innerWidth) || null
    : null;
  const percentReveal = responsiveKey
    ? item.responsivePercentReveal[responsiveKey]
    : item.percentReveal;
  return percentReveal;
};

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
    this.items = [...this.items, { $el, ...defaultConfig, ...config }];
    if (config.forceTransparent) {
      $el.style.visibility = 'hidden';
    }
    if (!this.isActive) {
      this.isActive = true;
      this.analyzeItems();
    }
  }
  /**
   * remove
   * @param {number} index
   */
  remove(index = 0) {
    this.items.splice(index, 1);
    if (!this.items.length) {
      this.reset();
    }
  }
  /**
   * remove
   */
  reset() {
    this.isActive = false;
  }
  /**
   * analyzeItems
   */
  analyzeItems() {
    this.items.forEach((item, index) => this.analyzeItem(item, index));
    if (this.isActive) {
      requestAnimationFrame(() => this.analyzeItems());
    }
  }
  /**
   * analyzeItem
   * @param {HTMLElement} item
   * @param {number} index
   */
  analyzeItem(item, index) {
    const { top } = item.$el.getBoundingClientRect();
    const height = item.$el.clientHeight;
    const percentReveal = getPercentReveal(item);
    const y = height * (percentReveal / 100) + top;
    if (y < window.innerHeight) {
      if (item.activeClass) {
        item.$el.classList.add(item.activeClass);
      }
      if (item.onActivation) {
        item.onActivation(item.$el, item.onActivationParams);
      }
      this.remove(index);
    }
  }
}

export default Reveal;
