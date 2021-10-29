import React from 'react';

import headerLogo from '../images/header/header__logo.svg';
import profileImage from '../images/profile/image.png';

import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import PopupAvatarEdit from './PopupAvatarEdit.js';
import PopupAddPlace from './PopupAddPlace.js';
import PopupProfileEdit from './PopupProfileEdit.js';
import ImagePopup from './ImagePopup.js';

function App() {

const [isEditAvatarPopupOpen, setIsAvatarPopupOpen] = React.useState(false);
const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
const [selectedCard, setSelectedCard] = React.useState(null);


function closePopups() {
  setIsAddPlacePopupOpen(false);
  setIsAvatarPopupOpen(false);
  setIsProfilePopupOpen(false);
  setIsImagePopupOpen(false);
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

  return (
    <>
        <div className="page">
          <Header />
          <Main
            isEditAvatarPopupOpen={handleEditAvatarClick}
            isEditProfilePopupOpen={handleEditProfileClick}
            isAddPlacePopupOpen={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupAvatarEdit isOpen={isEditAvatarPopupOpen} onClose={closePopups} />
          <PopupProfileEdit isOpen={isEditProfilePopupOpen} onClose={closePopups} />
          <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closePopups} />
          <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closePopups} />
        </div>
    </>
  );
}

export default App;
