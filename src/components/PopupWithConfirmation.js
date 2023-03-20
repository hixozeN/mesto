import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { cardDelete }) {
    super(popupSelector);
    this._deleteCallback = cardDelete;
  }

  open(cardId, cardElement) {
    this._cardId = cardId;
    this._cardElement = cardElement;
    super.open();
  }

  // _proccessActionButtonText() {
  //   this._submitButton.innerHTML = `Удаление<span class="dot-1">.</span><span class="dot-2">.</span><span class="dot-3">.</span>`;
  // }

  // finalActionButtonText() {
  //   this._submitButton.innerHTML = `Да`;
  // }

  // failedActionButtonText() {
  //   this._submitButton.innerHTML = `Ошибка. Повторить?`;
  // }

  setEventListeners() {
    super.setEventListeners();
    this._submitButton.addEventListener('click', () => this._deleteCallback(this._cardId, this._cardElement))
  }
}

export default PopupWithConfirmation;