// Popup
let popup = document.querySelector('.popup');
let openEditFormButton = document.querySelector('.head-profile__edit-button');
let closeEditFormButton = document.querySelector('.popup__close-button');

function popupOpen() {
  return popup.classList.add('popup_opened');
}

function popupClose() {
  return popup.classList.remove('popup_opened');
}

openEditFormButton.addEventListener('click', (e) => {
  //popup.classList.add('popup_opened');
  popupOpen();
});

closeEditFormButton.addEventListener('click', (e) => {
  //popup.classList.remove('popup_opened');
  popupClose();
});

//
//  Скрипт смены данных в user-section
//
// Находим форму в DOM
let formElement = document.querySelector(".popup__form");

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault(); // Отменяем стандартную форму отправки
  popup.classList.remove('popup_opened'); // И закрываем окно после отправки формы по клику

  // Находим поля формы в DOM
  let nameInput = document.querySelector('.popup__input_field_name');
  let userJobInput = document.querySelector('.popup__input_field_job');

  // Получаем значение полей из свойства value
  let nameValue = nameInput.value;
  let userJobValue = userJobInput.value;

  // Выбераем элементы, куда должны быть вставлены значения полей
  let usernameChange = document.querySelector('.head-profile__username');
  let userJobChange = document.querySelector('.head-profile__job');

  // Вставляем новые значения с помощью textContent
  usernameChange.textContent = nameValue;
  userJobChange.textContent = userJobValue;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// и отправлять форму по нажатию на энтер
let EditProfileSaveBtn = document.querySelector('.popup__save-button');

formElement.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault(); // отменяем преезагрузку страницы при отправке формы
    EditProfileSaveBtn.click(); // отправляем по энтеру
    popup.classList.remove('popup_opened'); // Закрываем окно после отправки
  }
});
