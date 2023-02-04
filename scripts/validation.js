const formValidationConfig = {
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
const getinputList = (formElement, config) => Array.from(formElement.querySelectorAll(config.inputSelector));

// Функция, показывающая ошибку
const showInputError = (formElement, inputElement, errorMessage, config) => {
  inputElement.classList.add(config.inputErrorClass); // красим border-bottom инпута
  getErrorElement(formElement, inputElement).classList.add(config.errorClass); // добавляем класс с прозрачностью = 1
  getErrorElement(formElement, inputElement).textContent = errorMessage; // отображаем полученный текст ошибки из функции isValid
};

// Функция, скрывающая ошибку
const hideInputError = (formElement, inputElement, config) => {
  inputElement.classList.remove(config.inputErrorClass); // убираем красный border-bottom инпута
  getErrorElement(formElement, inputElement).classList.remove(config.errorClass); // убираем класс с прозрачностью = 1
  getErrorElement(formElement, inputElement).textContent = ''; // чиgitстим span с текстом ошибки
};

// Функция проверки валидности
const isValid = (formElement, inputElement, config) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, config); // отправляем ошибку, если не валидно
  } else {
    hideInputError(formElement, inputElement, config); // скрываем, если ок
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
const setEventListeners = (formElement, config) => {
  const buttonElement = formElement.querySelector(config.submitButtonSelector);

  getinputList(formElement, config).forEach((inputElement) => {
    // перебираем и вешаем слушатель на каждый инпут с проверкой валидности
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, config);
      setButtonState(getinputList(formElement, config), buttonElement, config);
    });
  });

  setButtonState(getinputList(formElement, config), buttonElement, config); // применяем состояние кнопки при загрузке страницы
};

// Функция изменения состояния кнопок в формах
const setButtonState = (inputList, buttonElement, config) => {
  if (hasInvalidInput(inputList)) { // делаем кнопку неактивной, если хотя б один инпут в форме будет невалиден
    buttonElement.classList.add(config.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(config.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

// Функция, которая переберет все формы на странице и повесит на них слушатель с валидацией
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, config);
  });
};

// Функция сброса формы валидации
const resetValidation = (formElement, config) => {
  const submitButton = formElement.querySelector(config.submitButtonSelector);
  getinputList(formElement, config).forEach(inputElement => hideInputError(formElement, inputElement, config));
  setButtonState(getinputList(formElement, config), submitButton, config);
};

// Включаем валидацию
enableValidation(formValidationConfig);
