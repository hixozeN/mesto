// Функция, показывающая ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // выбираем span по id инпута, куда передадим ошибку

  inputElement.classList.add('popup__input_type_error'); // красим border-bottom инпута
  errorElement.classList.add('popup__input-error_active'); // добавляем класс с прозрачностью = 1
  errorElement.textContent = errorMessage; // отображаем полученный текст ошибки из функции isValid
};

// Функция, скрывающая ошибку
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('popup__input_type_error'); // убираем красный border-bottom инпута
  errorElement.classList.remove('popup__input-error_active'); // убираем класс с прозрачностью = 1
  errorElement.textContent = ''; // чистим span с текстом ошибки
};

// Функция проверки валидности
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage); // отправляем ошибку, если не валидно
  } else {
    hideInputError(formElement, inputElement); // скрываем, если ок
  }
}

// Функция проверки инвалидного инпута
const hasInvalidInput = (inputList) => {
  /* перебираем все инпуты, проверяем валидность, если хоть один инпут не валиден, вернем true
  возвращем через '!' потому что метод [].some вернет первый попавшийся валидный инпут (inputElement.validity.valid === true)
  а нам нужно возвращать true, если хотя б один инпут будет с валидностью false, поэтому зеркалим и получаем то, что надо */
  return inputList.some(inputElement => !inputElement.validity.valid);
}

// Функция, которая повесит слушатели на все инпуты с коллбэком на isValid и дальнейшим вывводом\чисткой ошибки
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input')); // получаем массив инпутов из формы
  const buttonElement = formElement.querySelector('.popup__submit-button');

  inputList.forEach((inputElement) => {
    // перебираем и вешаем слушатель на каждый инпут с проверкой валидности
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      setButtonState(inputList, buttonElement);
    });
  });

  setButtonState(inputList, buttonElement); // применяем состояние кнопки при загрузке страницы
};

// Функция изменения состояния кнопок в формах
const setButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) { // делаем кнопку неактивной, если хотя б один инпут в форме будет невалиден
    buttonElement.classList.add('popup__submit-button_inactive');
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove('popup__submit-button_inactive');
    buttonElement.removeAttribute('disabled');
  }
}

// Функция, которая переберет все формы на странице и повесит на них слушатель с валидацией
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));

  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

// Включаем валидацию
enableValidation();
