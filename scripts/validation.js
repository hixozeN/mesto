// Функция, показывающая ошибку
const showInputError = (formElement, inputElement, errorMessage, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`); // выбираем span по id инпута, куда передадим ошибку

  inputElement.classList.add(selectors.inputErrorClass); // красим border-bottom инпута
  errorElement.classList.add(selectors.errorClass); // добавляем класс с прозрачностью = 1
  errorElement.textContent = errorMessage; // отображаем полученный текст ошибки из функции isValid
};

// Функция, скрывающая ошибку
const hideInputError = (formElement, inputElement, selectors) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(selectors.inputErrorClass); // убираем красный border-bottom инпута
  errorElement.classList.remove(selectors.errorClass); // убираем класс с прозрачностью = 1
  errorElement.textContent = ''; // чистим span с текстом ошибки
};

// Функция проверки валидности
const isValid = (formElement, inputElement, selectors) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, selectors); // отправляем ошибку, если не валидно
  } else {
    hideInputError(formElement, inputElement, selectors); // скрываем, если ок
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
const setEventListeners = (formElement, selectors) => {
  const inputList = Array.from(formElement.querySelectorAll(selectors.inputSelector)); // получаем массив инпутов из формы
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);

  inputList.forEach((inputElement) => {
    // перебираем и вешаем слушатель на каждый инпут с проверкой валидности
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, selectors);
      setButtonState(inputList, buttonElement, selectors);
    });
  });

  setButtonState(inputList, buttonElement, selectors); // применяем состояние кнопки при загрузке страницы
};

// Функция изменения состояния кнопок в формах
const setButtonState = (inputList, buttonElement, selectors) => {
  if (hasInvalidInput(inputList)) { // делаем кнопку неактивной, если хотя б один инпут в форме будет невалиден
    buttonElement.classList.add(selectors.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(selectors.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}

// Функция, которая переберет все формы на странице и повесит на них слушатель с валидацией
const enableValidation = (selectors) => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, selectors);
  });
};

// Включаем валидацию
enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
});
