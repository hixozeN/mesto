import Popup from "./Popup.js";

class PopupWithConfirmation extends Popup {
  constructor(popupSelector, { callbackConfirm }) {
    super(popupSelector);
    this._callbackConfirm = callbackConfirm;
  }
}