// #Popups
const popupEdit = document.querySelector('.popup_edit');
const popupAdd = document.querySelector('.popup_add');

// #Buttons
const buttonOpenEditForm = document.querySelector('.head-profile__edit-button');
const buttonAdd = document.querySelector('.head-profile__add-button');
const buttonClose = document.querySelectorAll('.popup__close-button');
const buttonLike = document.querySelectorAll('.card__like-button');

// #Constants
const formElement = document.querySelector('.popup__form');
// Cards at photo-feed
const initialCards = [
  {
    name: 'Рабочее место',
    link: './images/card1.jpg'
  },
  {
    name: 'Рефакторинг',
    link: './images/card2.jpg'
  },
  {
    name: 'Праздник к нам приходит',
    link: './images/card3.jpg'
  },
  {
    name: 'Прокрастинация',
    link: './images/card4.jpg'
  },
  {
    name: 'Ночной дожор',
    link: './images/card5.jpg'
  },
  {
    name: 'Вечерняя прогулка',
    link: './images/card6.jpg'
  }
];

// #Variables
let nameInput = document.querySelector('.popup__input_field_name');
let jobInput = document.querySelector('.popup__input_field_job');
let userNameText = document.querySelector('.head-profile__username');
let userJobText = document.querySelector('.head-profile__job');
let cardTitle = document.querySelectorAll('.card__title');
let cardImage = document.querySelectorAll('.card__image');

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

function cardPreload() {
  let cardContainer = document.querySelector('.photo-feed');
  for (let i = 0; i < initialCards.length; i++) {
    cardContainer.insertAdjacentHTML('beforeend', `<article class="card">
  <img class="card__image" src="${initialCards[i].link}" alt="Компьютерный стол с двумя мониторами, мышкой и клавиатурой в приглушенном свете">
  <div class="card__heading">
    <h2 class="card__title">${initialCards[i].name}</h2>
    <button class="card__like-button" type="button" aria-label="Нравится"></button>
  </div>
</article>`);
  };
};

// #Listeners
// Listeners for form buttons
buttonOpenEditForm.addEventListener('click', () => {
  controlPopup(popupEdit);
  nameInput.value = userNameText.textContent;
  jobInput.value = userJobText.textContent;
});
buttonAdd.addEventListener('click', () => controlPopup(popupAdd));

// Listener for each button which closes popup
buttonClose.forEach(function (button) {
  button.addEventListener('click', () => controlPopup(button));
});

// Like button listener
buttonLike.forEach(function (button) {
  button.addEventListener('click', () => {
    button.classList.toggle('card__like-button_active');
  });
});

// Listener for a sumbit event
formElement.addEventListener('submit', formSubmitHandler);

// Preload cards at photo-feed section from initialCards[]
cardPreload();
