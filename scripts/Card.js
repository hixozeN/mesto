class Card {
  constructor(name, link, cardTemplate, openPopupPreview) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._openPopupPreview = openPopupPreview;
  }

  _setEventListeners() {
    this._element.querySelector('.card__like-button').addEventListener('click', this._setLikeButtonState);
    this._element.querySelector('.card__delete-button').addEventListener('click', () => {
      this._deleteCard();
    });
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._handlePopupPreview();
    });
  }

  _setLikeButtonState(evt) {
    evt.target.classList.toggle('card__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
  }

  _handlePopupPreview() {
    this._openPopupPreview(this._name, this._link);
  }

  _getCardTemplate() {
    return document
      .querySelector(this._cardTemplate)
      .content
      .querySelector('.card')
      .cloneNode(true);
  }

  createCard() {
    this._element = this._getCardTemplate();
    this._setEventListeners();

    const cardImage = this._element.querySelector('.card__image');
    const cardTitle = this._element.querySelector('.card__title');

    cardImage.src = this._link;
    cardImage.alt = this._name;
    cardTitle.textContent = this._name;

    return this._element;
  }
}

export default Card;
