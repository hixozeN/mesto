// Popup
let popup = document.querySelector('.popup');
let openEditFormButton = document.querySelector('.head-profile__edit-button');
let closeEditFormButton = document.querySelector('.popup__close-button');
let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let userNameText = document.querySelector('.head-profile__username');
let userJobText = document.querySelector('.head-profile__job');

function refreshInputValues() {
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
  return;
}

function controlPopup(open, close) {
  open.addEventListener('click', (e) => {
    popup.classList.add('popup_opened');
    refreshInputValues();
  });

  close.addEventListener('click', (e) => {
    popup.classList.remove('popup_opened');
  });
}

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

controlPopup(openEditFormButton, closeEditFormButton);
