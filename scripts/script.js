// #Popups
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');

// #Buttons
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');
const buttonAdd = document.querySelector('.head-profile__add-button');
const buttonClose = document.querySelectorAll('.popup__close-button');
const buttonLike = document.querySelectorAll('.card__like-button');

// #Constants
const formElement = document.querySelector(".popup__form");

// #Variables
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let userNameText = document.querySelector('.head-profile__username');
let userJobText = document.querySelector('.head-profile__job');

// #Functions
/* This function will control the popups by toggle popup_opened class
   and refresh inputs' value, when popup opens */
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

// #Listeners
// Listeners for form buttons
buttonOpenEditForm.addEventListener('click', () => {
  controlPopup(popupEdit);
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
});
buttonAdd.addEventListener('click', () => controlPopup(popupAdd));

// Listener for each button which closes popup
buttonClose.forEach(function(button) {
  button.addEventListener('click', () => controlPopup(button));
});

// Like button listener
buttonLike.forEach(function(button) {
  button.addEventListener('click', () => {
    button.classList.toggle('card__like-button_active');
  });
});

// Listener for a sumbit event
formElement.addEventListener('submit', formSubmitHandler);
