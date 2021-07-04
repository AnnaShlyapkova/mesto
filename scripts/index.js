const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
      },
      {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
      },
      {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
      },
      {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
      },
      {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
      },
      {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
      }
    ]; 
    
//Добавляем элементы на страницу
  const itemContainer = document.querySelector('.elements');
  const itemTemplate = document.querySelector('.elements-tepmlate').content;

  function renderElement(arr) {
  
  const itemElement = itemTemplate.querySelector('.elements__item').cloneNode(true);
  const itemImageElement = itemElement.querySelector('.elements__image');
  const itemTextElement = itemElement.querySelector('.elements__title');
    
  itemImageElement.src = arr.link;
  itemImageElement.alt = arr.name;
  itemTextElement.textContent = arr.name;
//Лайк
  itemElement.querySelector('.elements__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('elements__like_active');
})
//Удаление
  function setEventListeners() {
  itemElement.querySelector('.elements__delete').addEventListener('click', cardDelete);
}
//Увеличение
 itemImageElement.addEventListener('click', function() {
    const popupImage = document.querySelector('.popup_type_image');
    popupTitleElement.value = itemTextElement.textContent;
    popupImageElement.src = itemImageElement.src;
    popupImageElement.alt = itemTextElement.textContent;
    popupImage.classList.add('popup_is-opened');

  const closePopupImage = function() {
        popupImage.classList.remove('popup_is-opened')
    }
    popupImageCloseElement.addEventListener('click', closePopupImage); 
})
  setEventListeners(itemElement);

  return itemElement;
  }

function renderElementAndAppend (item) {
    itemElement = renderElement(item);
    itemContainer.append(itemElement);
}

function renderElements () {
    initialCards.forEach(renderElementAndAppend);
  }
  renderElements(initialCards);
  
//Попап редактирование профиля
const popupElement = document.querySelector('.popup_type_edit')
const popupCloseElement = popupElement.querySelector('.popup__close')
const popupOpenElement = document.querySelector('.profile__info-button')
const formElement = document.querySelector('.popup__form')
const formNameElememt = document.querySelector('.popup__item_type_name')
const formJobElement = document.querySelector('.popup__item_type_job')
const profileNameElement = document.querySelector('.profile__name')
const profileJobElement = document.querySelector('.profile__description')
//Увеличение
const popupImageCloseElement = document.querySelector('.popup__close_type_image');
const popupImageElement = document.querySelector('.popup__image');
const popupTitleElement = document.querySelector('.popup__title_type_image');
//Попап добавления новой карточки
const popupAddElement = document.querySelector('.popup_type_add-place');
const popupElementAddButton = document.querySelector('.profile__add-button');
const popupAddCloseElement = document.querySelector('.popup__close_type_add-place');

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

//Сохранение новых данных в профиле
function formSubmitHandler(evt) {
    evt.preventDefault(); 
    profileNameElement.textContent = formNameElememt.value;
    profileJobElement.textContent = formJobElement.value;
    closePopup();
}
formElement.addEventListener('submit', formSubmitHandler); 

const openPopupAddElement = function () {
    popupAddElement.classList.add('popup_is-opened')
}
const closePopupAddElement = function() {
    popupAddElement.classList.remove('popup_is-opened')
}

popupElementAddButton.addEventListener('click', openPopupAddElement);
popupAddCloseElement.addEventListener('click', closePopupAddElement);
//Новая карточка
function addFormSubmitHandler(evt) {
    evt.preventDefault();
    addFormNameElement = document.querySelector('.popup__item_type_place-name');
    addFormUrlElement = document.querySelector('.popup__item_type_url');

    item = {name:addFormNameElement.value, link:addFormUrlElement.value};
    itemElement = renderElement(item);
    itemContainer.prepend(itemElement);
    closePopupAddElement();
    
  };

popupAddElement.addEventListener('submit', addFormSubmitHandler);
  
//Удаление карточки
function cardDelete(evt){
  const itemElement = evt.target.closest('.elements__item');
  itemElement.remove();
}







 
