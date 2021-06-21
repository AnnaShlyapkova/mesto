const popupElement = document.querySelector('.popup')
const popupCloseElement = popupElement.querySelector('.popup__close')
const popupOpenElement = document.querySelector('.profile__info-button')
const formElement = document.querySelector('.popup__form')
const formNameElememt = document.querySelector('.popup__item_type_name')
const formJobElement = document.querySelector('.popup__item_type_job')
const profileNameElement = document.querySelector('.profile__name')
const profileJobElement = document.querySelector('.profile__description')

const openPopup = function () {
    formNameElememt.value = profileNameElement.textContent;
    formJobElement.value = profileJobElement.textContent;
    popupElement.classList.add('popup_is-opened')
}

const closePopup = function() {
    popupElement.classList.remove('popup_is-opened')
}

popupOpenElement.addEventListener('click', openPopup);
popupCloseElement.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
    evt.preventDefault(); 
    profileNameElement.textContent = formNameElememt.value;
    profileJobElement.textContent = formJobElement.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 








