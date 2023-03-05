class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = containerSelector;
  }

  addItem(element) {
    this._container.append(element);
  }

  renderItems() {
    this._container.innerHTML = '';                                 // чистим контейнер перед рендером элементов
    this._renderedItems.forEach(item => this._renderer(item));
  }
}

export default Section;
