// #Constants
// Popups
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupPreview = document.querySelector('.popup_preview');
// Buttons
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');
const buttonAdd = document.querySelector('.head-profile__add-button');
const buttonClose = document.querySelectorAll('.popup__close-button');
// Edit form for user profile (username & userjob)
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
// Consts for adding and creating card
const formAddCard = document.querySelector('.popup__form_type_card-add');
const cardsContainer = document.querySelector('.photo-feed');
const template = document.querySelector('#card-template').content;
const cardTitleInput = document.querySelector('.popup__input_field_placename');
const cardImageInput = document.querySelector('.popup__input_field_placeurl');
// Cards at photo-feed (preload)
const initialCards = [
  {
    name: 'Рабочее место',
    link: './images/card1.jpg'
  },
  {
    name: 'Рефакторинг',
    link: './images/card2.jpg'
  },
  {
    name: 'Праздник к нам приходит',
    link: './images/card3.jpg'
  },
  {
    name: 'Прокрастинация',
    link: './images/card4.jpg'
  },
  {
    name: 'Ночной дожор',
    link: './images/card5.jpg'
  },
  {
    name: 'Вечерняя прогулка',
    link: './images/card6.jpg'
  }
];

// #Global variables
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let userNameText = document.querySelector('.head-profile__username');
let userJobText = document.querySelector('.head-profile__job');

// #Functions
/* This function will control the popups by toggle popup_opened class */
function controlPopup(option) {
  if (option.closest('.popup').classList.contains('popup_opened')) {
    option.closest('.popup').classList.remove('popup_opened');
  } else {
    option.classList.add('popup_opened');
  }
}

// Function that handles the edit form submission
function formSubmitHandler(evt) {
  evt.preventDefault();
  userNameText.textContent = nameInput.value;
  userJobText.textContent = jobInput.value;
  controlPopup(evt.target);
}

// Function that handles the add form submission
function formAddCardHandler(evt) {
  evt.preventDefault();
  cardPrepend(cardCreate(cardTitleInput.value, cardImageInput.value));
  controlPopup(evt.target);
}

// Function that creates new cards
function cardCreate(name, link) {
  const newCard = template.querySelector('.card').cloneNode(true); // choose div from template and clone it
  const cardImg = newCard.querySelector('.card__image');
  const cardTitle = newCard.querySelector('.card__title');
  const cardLikeButton = newCard.querySelector('.card__like-button');
  const cardDeleteButton = newCard.querySelector('.card__delete-button');

  cardImg.alt = name; // Image's alt attribute will equal card's title
  cardImg.src = link;
  cardTitle.textContent = name;

  // Listener for card like button
  cardLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  // Listener for card delete button
  cardDeleteButton.addEventListener('click', function () {
    newCard.remove();
  });

  cardImg.addEventListener('click', function () {
    const popupPreviewImage = popupPreview.querySelector('.popup__image-preview');
    const popupPreviewTitle = popupPreview.querySelector('.popup__title-preview');
    popupPreviewImage.alt = name;
    popupPreviewImage.src = link;
    popupPreviewTitle.textContent = name;
    controlPopup(popupPreview);
  });

  return newCard;
};

function cardPrepend(card) {
  cardsContainer.prepend(card);
}

// #Listeners
// Listener for edit form button
buttonOpenEditForm.addEventListener('click', () => {
  controlPopup(popupEdit);
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
});

// Listener for add form button
buttonAdd.addEventListener('click', () => {
  cardTitleInput.value = "";
  cardImageInput.value = "";
  controlPopup(popupAdd);
});

// Listener for each button which closes popup
buttonClose.forEach(function (button) {
  button.addEventListener('click', () => controlPopup(button));
});

// Listeners for a sumbit events
formEditProfile.addEventListener('submit', formSubmitHandler);
formAddCard.addEventListener('submit', formAddCardHandler);

// Preload cards at photo-feed section from initialCards[]
function cardsRender () {
  const preload = initialCards.map(card => cardCreate(card.name, card.link));
  cardsContainer.prepend(...preload);
};

cardsRender ();
