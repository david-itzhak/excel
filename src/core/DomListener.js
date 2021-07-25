import {capitalize} from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('No $root provided for DomListener');
    }
    this.$root = $root;
    this.listeners = listeners;
  }

  initDomListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodNameFromListener(listener);
      if (!this[method]) {
        // eslint-disable-next-line max-len
        throw new Error(`Method ${method} not implemented in ${this.name} Component`);
      }
      this[method] = this[method].bind(this);
      // The same addEventListener
      this.$root.on(listener, this[method]);
      console.log('this[method] ', this[method]);
    });
  }

  removeDomListeners(listener) {
    console.log('removeDOM');
    this.listeners.forEach(listener => {
      const method = getMethodNameFromListener(listener);
      console.log('removeDOM');
      this.$root.off(listener, this[method]);
    });
  }
}

function getMethodNameFromListener(listener) {
  return 'on' + capitalize(listener);
}
