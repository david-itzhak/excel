import {DomListener} from "@core/DomListener";

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners);
    this.name = options.name || '';
  }

  // This method return template of a component
  toHtml() {
    return '';
  }

  init() {
    this.initDomListeners();
  }

  destroy() {
    this.removeDomListeners();
  }
}
