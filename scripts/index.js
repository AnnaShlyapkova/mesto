const popupElement = document.querySelector('.popup')
const popupCloseElement = popupElement.querySelector('.popup__close')
const popupOpenElement = document.querySelector('.profile__info-button')
console.log(popupOpenElement, popupCloseElement, popupElement);

const formElement = document.querySelector('.popup__form')
const formNameElememt = document.querySelector('.popup__item_name')
const formJobElement = document.querySelector('.popup__item_job')
const profileNameElement = document.querySelector('.profile__name')
const profileJobElement = document.querySelector('.profile__description')

console.log(formJobElement, formNameElememt, profileJobElement, profileNameElement);

const OpenPopup = function () {
    formNameElememt.value = profileNameElement.textContent;
    formJobElement.value = profileJobElement.textContent;
    popupElement.classList.add('popup_is-opened')
}

const ClosePopup = function() {
    popupElement.classList.remove('popup_is-opened')
}

popupOpenElement.addEventListener('click', OpenPopup);
popupCloseElement.addEventListener('click', ClosePopup);

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    profileNameElement.textContent = formNameElememt.value;
    profileJobElement.textContent = formJobElement.value;
}
formElement.addEventListener('submit', formSubmitHandler); 








