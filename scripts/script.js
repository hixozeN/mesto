// #Popup
const popup = document.querySelector('.popup');
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');
const buttonCloseEditForm = document.querySelector('.popup__close-button');
const formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let userNameText = document.querySelector('.head-profile__username');
let userJobText = document.querySelector('.head-profile__job');

/*  Function which will refresh actual input values from username and userjob titles
    when user will toggle popup */
function refreshInputValues() {
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
}

// This function will control the popups by toggle popup_opened class
function controlPopup() {
  popup.classList.toggle('popup_opened');
  refreshInputValues();
}

// Listeners for buttons
buttonOpenEditForm.addEventListener('click', controlPopup);
buttonCloseEditForm.addEventListener('click', controlPopup);

// Function that handles the form submission
function formSubmitHandler(evt) {
  evt.preventDefault();
  userNameText.textContent = nameInput.value;
  userJobText.textContent = jobInput.value;
  controlPopup();
}

// Listener for a sumbit event
formElement.addEventListener('submit', formSubmitHandler);
