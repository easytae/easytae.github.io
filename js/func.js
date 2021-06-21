const ez = class {
  static load(parent, tag, cdnAttrs, vendorAttrs) {
    let el = ez.#createElement(parent, tag, cdnAttrs);
    el.onerror = function () {
      el.remove();
      ez.#createElement(parent, tag, vendorAttrs);
    };
  }

  static #createElement(parent, tag, attrs) {
    let el = document.createElement(tag);
    for (const [attr, val] of Object.entries(attrs)) {
      el[attr] = val;
    }
    parent.append(el);
    return el;
  }
};
