// #Constants
// Popups
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupPreview = document.querySelector('.popup_preview');
// Buttons
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');
const buttonAdd = document.querySelector('.head-profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');
// Edit form for user profile (username & userjob)
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');
// Consts for profile edit
const nameInput = document.querySelector('.popup__input_field_name');
const jobInput = document.querySelector('.popup__input_field_job');
const userNameText = document.querySelector('.head-profile__username');
const userJobText = document.querySelector('.head-profile__job');
// Consts for adding and creating card
const formAddCard = document.querySelector('.popup__form_type_card-add');
const cardsContainer = document.querySelector('.photo-feed');
const template = document.querySelector('#card-template').content;
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

// #Functions
// This function will open the popups by add popup_opened class
function openPopup(popup) {
  popup.classList.add('popup_opened');
}
// This function will close the popups by remove popup_opened class
function closePopup(popup) {
  popup.closest('.popup').classList.remove('popup_opened');
}

// Function that handles the edit form submission
function formEditProfileSubmitHandler(evt) {
  evt.preventDefault();
  userNameText.textContent = nameInput.value;
  userJobText.textContent = jobInput.value;
  closePopup(evt.target);
}

function prependCard(card) {
  cardsContainer.prepend(card);
}

// Function that creates new cards
function createCard(name, link) {
  const newCards = template.querySelector('.card').cloneNode(true); // choose div from template and clone it
  const cardImg = newCards.querySelector('.card__image');
  const cardTitle = newCards.querySelector('.card__title');
  const cardLikeButton = newCards.querySelector('.card__like-button');
  const cardDeleteButton = newCards.querySelector('.card__delete-button');

  cardImg.alt = name; // Image's alt attribute will equal card's title
  cardImg.src = link;
  cardTitle.textContent = name;

  // Listener for card like button
  cardLikeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });

  // Listener for card delete button
  cardDeleteButton.addEventListener('click', function () {
    newCards.remove();
  });

  cardImg.addEventListener('click', function () {
    const popupPreviewImage = popupPreview.querySelector('.popup__image-preview');
    const popupPreviewTitle = popupPreview.querySelector('.popup__title-preview');
    popupPreviewImage.alt = name;
    popupPreviewImage.src = link;
    popupPreviewTitle.textContent = name;
    openPopup(popupPreview);
  });

  return newCards;
};

// Function that handles the add form submission
function formAddCardHandler(evt) {
  evt.preventDefault();
  const cardTitleInput = document.querySelector('.popup__input_field_placename');
  const cardImageInput = document.querySelector('.popup__input_field_placeurl');
  prependCard(createCard(cardTitleInput.value, cardImageInput.value));
  closePopup(evt.target);
}

// #Listeners
// Listener for edit form button
buttonOpenEditForm.addEventListener('click', () => {
  openPopup(popupEdit);
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
});

// Listener for add form button
buttonAdd.addEventListener('click', () => {
  formAddCard.reset();
  openPopup(popupAdd);
});

// Listener for each button which closes popup
closeButtons.forEach(function (popup) {
  popup.addEventListener('click', () => closePopup(popup));
});

// Listeners for a sumbit events
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);
formAddCard.addEventListener('submit', formAddCardHandler);

// Preload cards at photo-feed section from initialCards[]
function renderCards() {
  const preload = initialCards.map(card => createCard(card.name, card.link));
  cardsContainer.prepend(...preload);
};

renderCards();
