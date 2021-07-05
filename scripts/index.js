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
  const popupImage = document.querySelector('.popup_type_image');

  function openPopup(popup) {
    popup.classList.add('popup_is-opened');
  }
  
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
  itemElement.querySelector('.elements__delete').addEventListener('click', cardDelete);
//Увеличение
 itemImageElement.addEventListener('click', function() {
    popupTitleElement.value = itemTextElement.textContent;
    popupImageElement.src = itemImageElement.src;
    popupImageElement.alt = itemTextElement.textContent;
    openPopup(popupImage);
})
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
const popupProfileElement = document.querySelector('.popup_type_edit')
const popupOpenElement = document.querySelector('.profile__info-button')
const formElement = document.querySelector('.popup__form')
const formNameElememt = document.querySelector('.popup__item_type_name')
const formJobElement = document.querySelector('.popup__item_type_job')
const profileNameElement = document.querySelector('.profile__name')
const profileJobElement = document.querySelector('.profile__description')
//Увеличение
const popupImageElement = document.querySelector('.popup__image');
const popupTitleElement = document.querySelector('.popup__title_type_image');
//Попап добавления новой карточки
const popupAddElement = document.querySelector('.popup_type_add-place');
const popupElementAddButton = document.querySelector('.profile__add-button');


popupOpenElement.addEventListener('click', function() {
  formNameElememt.value = profileNameElement.textContent;
  formJobElement.value = profileJobElement.textContent;
  openPopup(popupProfileElement);
});

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
}

//Сохранение новых данных в профиле
function handleFormSubmit(evt) {
    evt.preventDefault(); 
    profileNameElement.textContent = formNameElememt.value;
    profileJobElement.textContent = formJobElement.value;
    closePopup(popupProfileElement);
}
formElement.addEventListener('submit', handleFormSubmit); 

popupElementAddButton.addEventListener('click', function() {
  openPopup(popupAddElement);
});

//Новая карточка
const addFormNameElement = document.querySelector('.popup__item_type_place-name');
const addFormUrlElement = document.querySelector('.popup__item_type_url');
function addFormSubmitHandler(evt) {
    evt.preventDefault();
    item = {name:addFormNameElement.value, link:addFormUrlElement.value};
    itemElement = renderElement(item);
    itemContainer.prepend(itemElement);
    closePopup(popupAddElement);
  };
popupAddElement.addEventListener('submit', addFormSubmitHandler);
  
//Удаление карточки
function cardDelete(evt){
  const itemElement = evt.target.closest('.elements__item');
  itemElement.remove();
}
//Закрытие попапа другим способом
const popupCloseElement = document.querySelectorAll('.popup__close')
popupCloseElement.forEach((element) => {element.addEventListener('click', function(evt) {
  closePopup(evt.target.closest('.popup'))})
})













