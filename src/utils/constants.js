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
// Инпуты формы редактирования
const inputUserName = formEditProfile.querySelector('.popup__input_field_name');            // Инпут с именем пользователя формы редактирования
const inputUserJob = formEditProfile.querySelector('.popup__input_field_job');              // Инпут с деятельностью пользователя формы редактирования

export {
  formEditProfile, formAddCard,
  cardsContainer,
  buttonOpenEditForm, buttonOpenAddForm,
  userNameText, userJobText,
  inputUserName, inputUserJob
};
