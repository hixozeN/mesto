// Формы
const formEditProfile = document.querySelector('.popup__form_type_profile-edit');           // Форма редактирования профиля пользователя
const formAddCard = document.querySelector('.popup__form_type_card-add');                   // Форма добавления новой карточки
// Контейнер с контентом
const cardsContainer = document.querySelector('.photo-feed');                               // Контейнер, куда добавляется контент
// Кнопки
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');            // Кнопка, открывающая попап с формой редактирования
const buttonOpenAddForm = document.querySelector('.head-profile__add-button');              // Кнопка, открывающая попап с формой добавления карточки
// Элементы секции профиля пользователя
const userNameText = document.querySelector('.head-profile__username');                     // Элемент с именем пользователя
const userJobText = document.querySelector('.head-profile__job');                           // Элемент с деятельностью пользователя

export {
  formEditProfile, formAddCard,
  cardsContainer,
  buttonOpenEditForm, buttonOpenAddForm,
  userNameText, userJobText
};
