import { initialCards, formValidationConfig } from "../utils/config.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Popup from "../components/Popup.js";
import '../pages/index.css'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";

// #Constants
// Popups
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');
const popupPreview = document.querySelector('.popup_preview');
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
const popupPreviewImage = popupPreview.querySelector('.popup__image-preview');
const popupPreviewTitle = popupPreview.querySelector('.popup__title-preview');
const cardTitleInput = document.querySelector('.popup__input_field_placename');
const cardImageInput = document.querySelector('.popup__input_field_placeurl');
// Buttons
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');
const buttonAdd = document.querySelector('.head-profile__add-button');
const closeButtons = document.querySelectorAll('.popup__close-button');

// #Functions
// This function will open the popups by add popup_opened class
function openPopup(popup) {
  popup.classList.add('popup_opened');
  popup.addEventListener('mousedown', closeByOverlay);
  document.addEventListener('keydown', closeByEscBtn);
};

function openPopupPreview(name, link) {
  popupPreviewImage.src = link;
  popupPreviewImage.alt = name;
  popupPreviewTitle.textContent = name;
  const zoomImage = new PopupWithImage('.popup_preview');
  zoomImage.open(name, link);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  popup.removeEventListener('mousedown', closeByOverlay);
  document.removeEventListener('keydown', closeByEscBtn);
};

const closeByOverlay = (evt) => {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
  };
};

const closeByEscBtn = (evt) => {
  if (evt.key === 'Escape') {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  };
};

function createCard(item) {
  const card = new Card(item.name, item.link, '#card-template', openPopupPreview);
  const cardElement = card.createCard();
  return cardElement;
}

function formEditProfileSubmitHandler(evt) {
  evt.preventDefault();
  userNameText.textContent = nameInput.value;
  userJobText.textContent = jobInput.value;
  closePopup(popupEdit);
};

function formAddCardHandler(evt) {
  evt.preventDefault();
  cardsContainer.prepend(createCard({ name: cardTitleInput.value, link: cardImageInput.value }));
  closePopup(popupAdd);
};

// #Listeners
// Слушатель кнопки открытия попапа с формой редактирования профиля
const popupEditForm = new Popup('.popup_edit');
buttonOpenEditForm.addEventListener('click', () => {
  // openPopup(popupEdit);
  popupEditForm.open()
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
  formEditValidation.resetValidation(formEditProfile, formValidationConfig); // сброс валидации при сабмите или переоткрытии
});

// Слушатель кнопки открытия попапа с формой добавления фото
buttonAdd.addEventListener('click', () => {
  formAddCard.reset();
  formAddCardValidation.resetValidation(formAddCard, formValidationConfig); // сброс валидации при сабмите или переоткрытии
  openPopup(popupAdd);
});

// Слушатель для каждой кнопки закрытия попапа
popupEditForm.setEventListeners()
// closeButtons.forEach((button) => {
//   button.addEventListener('click', () => {
//     const activePopup = document.querySelector('.popup_opened')
//     closePopup(activePopup);
//   });
// });

// Включение валидации каждой формы
const formEditValidation = new FormValidator(formValidationConfig, formEditProfile);
formEditValidation.enableValidation();
const formAddCardValidation = new FormValidator(formValidationConfig, formAddCard);
formAddCardValidation.enableValidation();

// Слушатели форм на событие отправки
formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);
formAddCard.addEventListener('submit', formAddCardHandler);

// Рендер карточек (preload)
const renderCards = new Section({
  items: initialCards,
  renderer: (item) => {
    renderCards.addItem(createCard({name: item.name, link: item.link}));
  }
}, cardsContainer);

renderCards.renderItems();
