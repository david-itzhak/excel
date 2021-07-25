import {$} from "@core/Dom";

export class Excel {
  constructor(appRoot, components) {
    this.$appRoot = $(appRoot);
    this.componentsArray = components.componentsArray || [];
  }

  getRoot() {
    const $root = $.create('div', 'excel');
    this.componentsArray = this.componentsArray.map(Component => {
      const $domListenerElement = $.create('div', Component.className);
      const component = new Component($domListenerElement);
      if (component.name) {
        window['c' + component.name] = component;
      }
      $domListenerElement.html(component.toHtml());
      $root.append($domListenerElement);
      return component;
    });
    return $root;
  }

  render() {
    this.$appRoot.append(this.getRoot());
    this.componentsArray.forEach(component => component.init());
  }
}
