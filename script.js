// Popup
let popup = document.querySelector('.popup');
let openEditFormButton = document.querySelector('.head-profile__edit-button');
let closeEditFormButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let userNameText = document.querySelector('.head-profile__username');
let userJobText = document.querySelector('.head-profile__job');

function controlPopup() {
  return popup.classList.toggle('popup_opened');
}

function refreshInputValues() {
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
  return;
}

openEditFormButton.addEventListener('click', (e) => {
  controlPopup();
  refreshInputValues();
});

closeEditFormButton.addEventListener('click', (e) => {
  controlPopup();
});


function formSubmitHandler(evt) {
  evt.preventDefault();

  userNameText.textContent = nameInput.value;
  userJobText.textContent = jobInput.value;

  popup.classList.remove('popup_opened');
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
