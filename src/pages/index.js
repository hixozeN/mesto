import { initialCards, formValidationConfig } from "../utils/config.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import '../pages/index.css'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { buttonOpenEditForm, buttonOpenAddForm } from '../utils/constants.js'

function handleCardClick(name, link) {                                                // Функция открытия попапа с полноразмерным изображением и данными из карточки
  imageFullsize.open(name, link);
};

function createCard(item) {                                                           // Функция создания новой карточки
  const card = new Card(item.name, item.link, '#card-template', handleCardClick);
  return card.createCard();
};

// Рендер созданных карточек с помощью класса Section
const cardsSection = new Section({
  renderer: (item) => {
    cardsSection.addItem(createCard({ name: item.name, link: item.link }));
  }
}, '.photo-feed');
cardsSection.renderItems(initialCards);

/*
  Экземпляр класса UserInfo с профилем пользователя
  Методы:
    .getUserInfo() - подгрузить в значения инпутов текущие данные пользователя
    .setUserInfo(values) - изменить данные пользователя в DOM из формы редактирования
*/
const userProfile = new UserInfo({
  username: '.head-profile__username',
  userjob: '.head-profile__job'
});

/*
  Экземпляр класса PopupWithImage с попапом полноразмерной картинки
  Методы:
    .open(название_картинки, ссылка_на_картинку) - открыть попап и заполняет данные о картинке из аргументов
    .close() - закрыть попап
    .setEventListeners() - установить слушатели, позволяющие закрыть попап
*/
const imageFullsize = new PopupWithImage('.popup_preview');

/*
  Экземпляр класса PopupWithForm с попапом и формой редактирования,
  коллбэк 'callbackSubmitForm' описывает функционал изменения данных пользователя в секции head-profile
  Методы:
    .open(), .close(), .setEventListeners()
*/
const popupWithEditForm = new PopupWithForm('.popup_edit', {
  callbackSubmitForm: (values) => {
    userProfile.setUserInfo(values);
    popupWithEditForm.close();
  }
});

/*
  Экземпляр класса PopupWithForm с попапом и формой добавления карточек,
  коллбэк 'callbackSubmitForm' описывает функционал добавления карточки в контейнер 'photo-feed'
  Методы:
    .open(), .close(), .setEventListeners()
*/
const popupWithAddForm = new PopupWithForm('.popup_add', {
  callbackSubmitForm: (values) => {
    cardsSection.addItem(createCard({ name: values.placename, link: values.placeurl }));
    popupWithAddForm.close();
  }
});

/*
  Декларирует валидаторы форм из класса FormValidator
  Методы:
    .enableValidation() - включить валидацию формы
    .resetValidation() - сбросить валидирование формы
        (чистит ошибки, контролирует состояние сабмит-кнопки после переоткрытия формы или после её отправки)
*/
const formEditValidation = new FormValidator(formValidationConfig, '.popup__form_type_profile-edit');
const formAddCardValidation = new FormValidator(formValidationConfig, '.popup__form_type_card-add');

// Включает валидацию форм
formEditValidation.enableValidation();
formAddCardValidation.enableValidation();

// #Слушатели
// Слушатель кнопки открытия попапа с формой редактирования профиля
buttonOpenEditForm.addEventListener('click', () => {
  popupWithEditForm.open()
  popupWithEditForm.setInputValues(userProfile.getUserInfo()); // Заполнение значений инпутов данными с актуальной информацией
  formEditValidation.resetValidation(); // Сброс валидации при сабмите или переоткрытии
});

// Слушатель кнопки открытия попапа с формой добавления фото
buttonOpenAddForm.addEventListener('click', () => {
  formAddCardValidation.resetValidation(); // Сброс валидации при сабмите или переоткрытии
  popupWithAddForm.open();
});

// Слушатели для каждого попапа
popupWithEditForm.setEventListeners();
popupWithAddForm.setEventListeners();
imageFullsize.setEventListeners();
