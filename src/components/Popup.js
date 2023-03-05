class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    this._popup.addEventListener('mousedown', this._handleOverlayClose.bind(this));
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    this._popup.classList.remove('popup_opened');
    this._popup.removeEventListener('mousedown', this._handleOverlayClose);
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', () => this.close());
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  _handleOverlayClose(evt) {
    if (evt.target.classList.contains('popup_opened')) {
      this.close();
    };
  }
}

export default Popup;
