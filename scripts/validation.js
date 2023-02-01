const selectors = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

// Функция, выбирающая span по id инпута, куда передадим ошибку
const getErrorElement = (formElement, inputElement) => formElement.querySelector(`.${inputElement.id}-error`);

// Функция, получающая список инпутов в конкретной форме
const getinputList = (formElement) => Array.from(formElement.querySelectorAll(selectors.inputSelector));

// Функция, показывающая ошибку
const showInputError = (formElement, inputElement, errorMessage) => {
  inputElement.classList.add(selectors.inputErrorClass); // красим border-bottom инпута
  getErrorElement(formElement, inputElement).classList.add(selectors.errorClass); // добавляем класс с прозрачностью = 1
  getErrorElement(formElement, inputElement).textContent = errorMessage; // отображаем полученный текст ошибки из функции isValid
};

// Функция, скрывающая ошибку
const hideInputError = (formElement, inputElement) => {
  inputElement.classList.remove(selectors.inputErrorClass); // убираем красный border-bottom инпута
  getErrorElement(formElement, inputElement).classList.remove(selectors.errorClass); // убираем класс с прозрачностью = 1
  getErrorElement(formElement, inputElement).textContent = ''; // чистим span с текстом ошибки
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
  const buttonElement = formElement.querySelector(selectors.submitButtonSelector);

  getinputList(formElement).forEach((inputElement) => {
    // перебираем и вешаем слушатель на каждый инпут с проверкой валидности
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);
      setButtonState(getinputList(formElement), buttonElement);
    });
  });

  setButtonState(getinputList(formElement), buttonElement); // применяем состояние кнопки при загрузке страницы
};

// Функция изменения состояния кнопок в формах
const setButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) { // делаем кнопку неактивной, если хотя б один инпут в форме будет невалиден
    buttonElement.classList.add(selectors.inactiveButtonClass);
    buttonElement.setAttribute('disabled', 'disabled');
  } else {
    buttonElement.classList.remove(selectors.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

// Функция, которая переберет все формы на странице и повесит на них слушатель с валидацией
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(selectors.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

// Функция сброса формы валидации
const resetValidation = (formElement) => {
  const submitButton = formElement.querySelector(selectors.submitButtonSelector);
  getinputList(formElement).forEach(inputElement => hideInputError(formElement, inputElement));
  setButtonState(getinputList(formElement), submitButton);
};

// Включаем валидацию
enableValidation(selectors);
