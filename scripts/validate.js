//Проверка input
const showInputError = (formElement, inputElement, errorMessage) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
errorElement.textContent = errorMessage;
inputElement.classList.add('popup__item-error_active');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = "";
  inputElement.classList.remove('popup__item-error_active');
};

const checkInputValidity = (formElement, inputElement) => {
    const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      showInputError(formElement, inputElement, errorMessage);
  } else {
      hideInputError(formElement, inputElement);
  }
};

//Активация кнопки
const toggleButtonState = (inputList, buttonElement) => {
  const hasNotValidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid);
  
  if (hasNotValidInput) {
      buttonElement.setAttribute('disabled', true);
      buttonElement.classList.add('popup__submit-button_disabled');
  } else {
    buttonElement.removeAttribute('disabled');
    buttonElement.classList.remove('popup__submit-button_disabled');
  }
}
//Установка слушателей на input
const setEventListeners = (formElement,config) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
});
const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
const buttonElement = formElement.querySelector('.popup__submit-button');
inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (event) => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
    })
})
};

const enableValidation = (config) => { 
    const formList = Array.from(document.querySelectorAll(config.formSelector)); 
    const setEventListenersWithConfig = (formElement) => { setEventListeners(formElement,config) }
    formList.forEach(setEventListenersWithConfig); 
  }; 


enableValidation({
    formSelector: '.popup__form', 
    inputSelector: '.popup__item', 
    submitButtonSelector: '.popup__submit-button', 
    inactiveButtonClass: '.popup__submit-button_disabled', 
    inputErrorClass: '.popup__input-error',
}); 
