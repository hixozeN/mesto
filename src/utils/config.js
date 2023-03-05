import cardOneImage from '../images/card1.jpg';
import cardTwoImage from '../images/card2.jpg';
import cardThreeImage from '../images/card3.jpg';
import cardFourImage from '../images/card4.jpg';
import cardFiveImage from '../images/card5.jpg';
import cardSixImage from '../images/card6.jpg';

const initialCards = [
  {
    name: 'Рабочее место',
    link: cardOneImage
  },
  {
    name: 'Рефакторинг',
    link: cardTwoImage
  },
  {
    name: 'Праздник к нам приходит',
    link: cardThreeImage
  },
  {
    name: 'Прокрастинация',
    link: cardFourImage
  },
  {
    name: 'Ночной дожор',
    link: cardFiveImage
  },
  {
    name: 'Вечерняя прогулка',
    link: cardSixImage
  }
];

const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export { initialCards, formValidationConfig };
