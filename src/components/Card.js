class Card {
  constructor(name, link, cardTemplate, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
  }

  _setEventListeners() {
    this._cardLikeButton.addEventListener('click', () => this._setLikeButtonState());
    this._cardDeleteButton.addEventListener('click', () => this._deleteCard());
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }

  _setLikeButtonState() {
    this._cardLikeButton.classList.toggle('card__like-button_active');
  }

  _deleteCard() {
    this._element.remove();
    this._element = null;
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

    this._cardImage = this._element.querySelector('.card__image');
    this._cardTitle = this._element.querySelector('.card__title');
    this._cardLikeButton = this._element.querySelector('.card__like-button');
    this._cardDeleteButton = this._element.querySelector('.card__delete-button');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();
    return this._element;
  }
}

export default Card;
