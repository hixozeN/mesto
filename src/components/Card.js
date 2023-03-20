class Card {
  constructor(cardData, currentUserId, cardTemplate, handlers) {
    this._cardData = cardData;
    this._name = this._cardData.name;
    this._link = this._cardData.link;
    this._cardTemplate = cardTemplate;
    this._currentUserId = currentUserId;
    this._cardId = this._cardData._id;
    this._authorId = this._cardData.owner._id;
    this._handleCardClick = handlers.handleCardClick;
    this._handleCardLike = handlers.handleCardLike;
    this._handleCardDislike = handlers.handleCardDislike;
    this._handleCardDelete = handlers.handleCardDelete;
  }

  _setEventListeners() {
    // Likes
    this._cardLikeButton.addEventListener('click', () => this._setLikeButtonState());
    // Delete button
    if (this._currentUserId === this._authorId) {
      this._cardDeleteButton.addEventListener('click', () => this._handleCardDelete(this._cardId, this));
    } else {
      this._cardDeleteButton.remove();
    };
    // Image Zoomer
    this._cardImage.addEventListener('click', () => this._handleCardClick(this._name, this._link));
  }
  // Проверка на лайк карточки от текущего пользователя
  _isCardLiked() {
    return this.likesArray.find(user => this._currentUserId === user._id);
  }
  // Подсчет и отрисовка лайков
  countCardLikes(data) {
      this.likesArray = data.likes;
      // Защита от переполнения счетчика лайков
      this.likeCount = this.likesArray.length;
      this.suffix = '';
      if (this.likesArray.length >= 1000) {
        this.likeCount = parseFloat((this.likesArray.length/1000).toFixed(1));
        this.suffix = 'K';
      }
      this._likesCounter.textContent = this.likeCount + this.suffix;

      this._isCardLiked()
        ? this._cardLikeButton.classList.add('card__like-button_active')
        : this._cardLikeButton.classList.remove('card__like-button_active')
  }

  _setLikeButtonState() {
    if (this._isCardLiked()) {
      this._handleCardDislike(this._cardId);
    } else {
      this._handleCardLike(this._cardId);
    }
  }

  deleteCard() {
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
    this._likesCounter = this._element.querySelector('.card__like-counter');

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this.countCardLikes(this._cardData);
    this._setEventListeners();
    return this._element;
  }
}

export default Card;
