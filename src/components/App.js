import React from 'react';

import headerLogo from '../images/header/header__logo.svg';
import profileImage from '../images/profile/image.png';

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupAvatarEdit from './PopupAvatarEdit.js';
import PopupAddPlace from './PopupAddPlace.js';
import PopupProfileEdit from './PopupProfileEdit.js';
import PopupDeleteCard from './PopupDeleteCard.js';
import ImagePopup from './ImagePopup.js';
import addApi from '../utils/Api.js';

import CurrentUserContext from '../contexts/CurrentUserContext.js';
import CardItemsContext from '../contexts/CardItemsContext.js';

function App() {

const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(null);
const [currentUser, setCurrentUser] = React.useState({});
const [cards, setCards] = React.useState([]);

function closePopups() {
  setIsAddPlacePopupOpen(false);
  setIsAvatarPopupOpen(false);
  setIsProfilePopupOpen(false);
  setIsImagePopupOpen(false);
  setIsDeleteCardPopupOpen(false);
  setSelectedCard(null);
}

function handleCardClick(props) {
    setIsImagePopupOpen(true);
    setSelectedCard(props);
  }

function handleEditAvatarClick() {
  setIsAvatarPopupOpen(true);
}

function handleEditProfileClick() {
  setIsProfilePopupOpen(true);
}

function handleAddPlaceClick() {
  setIsAddPlacePopupOpen(true);
}

function handleCardDel(props) {
  setIsDeleteCardPopupOpen(true);
  setSelectedCard(props);
}

function handleEscKeydown (event) {
  if ((isEditAvatarPopupOpen || isDeleteCardPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || isImagePopupOpen) && event.keyCode === 27) {
    closePopups();
  }
}

React.useEffect(() => {
  addApi.getUserInfo()
    .then(
      (response) => {
        setCurrentUser(response);
      })
    .catch((err) => {
      console.log(err);
    })
}, []);

React.useEffect(() => {
  addApi.getCards()
    .then(
      (response) => {
        setCards(response);
      })
    .catch((err) => {
      console.log(err);
    })
}, []);

  return (
      <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
        <div className="page" tabIndex="0" onKeyDown={(event)=>{handleEscKeydown(event)}}>
          <Header />
            <CardItemsContext.Provider value={[cards, setCards]}>
              <Main
                isEditAvatarPopupOpen={handleEditAvatarClick}
                isEditProfilePopupOpen={handleEditProfileClick}
                isAddPlacePopupOpen={handleAddPlaceClick}
                onCardClick={handleCardClick}
                onCardDel={handleCardDel}
              />
            </CardItemsContext.Provider>
          <Footer />
          <CardItemsContext.Provider value={[cards, setCards]}>
            <PopupDeleteCard isOpen={isDeleteCardPopupOpen} onClose={closePopups} card={selectedCard} />
          </CardItemsContext.Provider>
          <PopupAvatarEdit isOpen={isEditAvatarPopupOpen} onClose={closePopups} />
          <PopupProfileEdit isOpen={isEditProfilePopupOpen} onClose={closePopups} />
          <CardItemsContext.Provider value={[cards, setCards]}>
            <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closePopups} />
          </CardItemsContext.Provider>
          <ImagePopup isOpen={isImagePopupOpen} onClose={closePopups} card={selectedCard} />
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
