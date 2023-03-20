class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__submit-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_opened') || (evt.target.classList.contains('popup__close-button'))) {
        this.close();
      }
    });
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      this.close();
    };
  }

  proccessActionButtonText(text) {
    this._submitButton.innerHTML = `${text}<span class="dot-1">.</span><span class="dot-2">.</span><span class="dot-3">.</span>`;
  }

  finalActionButtonText(text) {
    this._submitButton.innerHTML = text;
  }
}

export default Popup;
