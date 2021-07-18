//Проверка input
const showInputError = (formElement, inputElement, errorMessage, config) => {
const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
errorElement.textContent = errorMessage;
inputElement.classList.add(config.inputErrorClassActive);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = "";
  inputElement.classList.remove(config.inputErrorClassActive);
};

const checkInputValidity = (formElement, inputElement, config) => {
    const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      showInputError(formElement, inputElement, errorMessage, config);
  } else {
      hideInputError(formElement, inputElement, config);
  }
};

//Активация кнопки
const toggleButtonState = (inputList, buttonElement, config) => {
  const hasNotValidInput = inputList.some(
    (inputElement) => !inputElement.validity.valid);
  
    if (hasNotValidInput) { 
      buttonElement.setAttribute('disabled', true); 
      buttonElement.classList.add(config.inactiveButtonClass); 
  } else { 
    buttonElement.removeAttribute('disabled'); 
    buttonElement.classList.remove(config.inactiveButtonClass); 
  }
}
//Установка слушателей на input
const setEventListeners = (formElement,config) => {
    formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
});
const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
const buttonElement = formElement.querySelector(config.submitButtonSelector);
inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (event) => {
        checkInputValidity(formElement, inputElement, config);
        toggleButtonState(inputList, buttonElement, config);
    })
})
};


const enableValidation = (config) => { 
    const formList = Array.from(document.querySelectorAll(config.formSelector)); 
    const setEventListenersWithConfig = (formElement) => { 
      setEventListeners(formElement,config) }
    formList.forEach(setEventListenersWithConfig); 
  }; 
 

enableValidation({
    formSelector: '.popup__form', 
    inputSelector: '.popup__item', 
    submitButtonSelector: '.popup__submit-button', 
    inactiveButtonClass: '.popup__submit-button_disabled', 
    inputErrorClassActive: '.popup__item-error_active',
}); 
