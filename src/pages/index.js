import { formValidationConfig } from "../utils/config.js";
import { apiConfig } from "../utils/apiConfig.js";
import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import '../pages/index.css'
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js"
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import { buttonOpenEditForm, buttonOpenAddForm, buttonOpenAvatarForm } from '../utils/constants.js'

const api = new Api(apiConfig);
let currentUserId;

function createCard(cardData) {
  const card = new Card(cardData, currentUserId, '#card-template', {
    handleCardClick: (name, link) => imageFullsize.open(name, link),
    handleCardDelete: (cardId, cardElement) => popupWithConfirmation.open(cardId, cardElement),
    handleCardLike: (cardId) => {
      api.putCardLike(cardId)
        .then(res => card.renderCardLikes(res))
        .catch(err => console.log('Ошибка при лайке: ', err))
    },
    handleCardDislike: (cardId) => {
      api.deleteCardLike(cardId)                                                                                                                                                                                    
        .then(res => card.renderCardLikes(res))
        .catch(err => console.log('Ошибка при дизлайке: ', err))
    }
  });
  return card.createCard();
};

const cardsSection = new Section({
  renderer: (item) => {
    cardsSection.addItem(createCard(item));
  }
}, '.photo-feed');

const userProfile = new UserInfo({
  username: '.head-profile__username',
  userjob: '.head-profile__job',
  avatar: '.head-profile__avatar'
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardList]) => {
    currentUserId = userData._id;
    userProfile.setUserInfo({username: userData.name, userjob: userData.about});
    userProfile.setUserAvatar(userData.avatar)
    cardsSection.renderItems(cardList);
  })
  .catch((err) => {
    console.log('Ошибка при первоначальном рендере: ', err);
    userProfile.setUserInfo({username: 'Жак-Ив Кусто', userjob: 'Исследователь океанов'});
    document.querySelector('.photo-feed').innerHTML = `<p style='text-align: center'>Что-то пошло не так :(</p>`
  })

const imageFullsize = new PopupWithImage('.popup_preview');

const popupWithConfirmation = new PopupWithConfirmation('.popup_confirm', {
  cardDelete: (cardId, cardElement) => {
    popupWithConfirmation.proccessActionButtonText('Удаление');
    api.deleteCard(cardId)
      .then(() => {
        cardElement.deleteCard();
        popupWithConfirmation.close();
      })
      .catch(err => console.log('При удалении возникла ошибка: ', err))
      .finally(() => popupWithConfirmation.finalActionButtonText('Да'))
  }
});

const popupWithEditForm = new PopupWithForm('.popup_edit', {
  callbackSubmitForm: (values) => {
    popupWithEditForm.proccessActionButtonText('Сохранение')
    api.setUserInfo({
      name: values.username,
      about: values.userjob
    })
      .then(() => {
        userProfile.setUserInfo(values);
        popupWithEditForm.close();
      })
      .catch(err => console.log('Ошибка: ', err))
      .finally(() => popupWithEditForm.finalActionButtonText('Сохранить'))
  }
});

const popupEditAvatar = new PopupWithForm('.popup_edit-avatar', {
  callbackSubmitForm: (value) => {
    popupEditAvatar.proccessActionButtonText('Сохранение');
    api.setUserAvatar({
      avatar: value.avaurl
    })
      .then((res) => {
        userProfile.setUserAvatar(res.avatar)
        popupEditAvatar.close();
      })
      .catch()
      .finally(() => popupEditAvatar.finalActionButtonText('Сохранить'))
  }
});

const popupWithAddForm = new PopupWithForm('.popup_add', {
  callbackSubmitForm: (values) => {
    popupWithAddForm.proccessActionButtonText('Создание');
    api.createCard({name: values.placename, link: values.placeurl})
      .then((cardData) => {
        cardsSection.addItem(createCard(cardData));
        popupWithAddForm.close();
      })
      .catch(err => console.log('Ошибка при добавлении карточки: ', err))
      .finally(() => popupWithAddForm.finalActionButtonText('Создать'))
  }
});

const formEditValidation = new FormValidator(formValidationConfig, '.popup__form_type_profile-edit');
const formAddCardValidation = new FormValidator(formValidationConfig, '.popup__form_type_card-add');
const formEditAvatarValidation = new FormValidator(formValidationConfig, '.popup__form_type_avatar-edit');
formEditValidation.enableValidation();
formAddCardValidation.enableValidation();
formEditAvatarValidation.enableValidation();

// #Слушатели
// Слушатель кнопки открытия попапа с формой редактирования профиля
buttonOpenEditForm.addEventListener('click', () => {
  popupWithEditForm.open()
  popupWithEditForm.setInputValues(userProfile.getUserInfo()); // Заполнение значений инпутов данными с актуальной информацией
  formEditValidation.resetValidation(); // Сброс валидации при сабмите или переоткрытии
});

// Слушать кнопки открытия попапа с формой редактирования аватара
buttonOpenAvatarForm.addEventListener('click', () => {
  formEditAvatarValidation.resetValidation();
  popupEditAvatar.open();
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
popupWithConfirmation.setEventListeners();
popupEditAvatar.setEventListeners();
