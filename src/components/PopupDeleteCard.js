import React from 'react';

import PopupWithForm from './PopupWithForm.js';
import CardItemsContext from '../contexts/CardItemsContext.js';
import addApi from '../utils/Api.js';

function PopupDeleteCard( {card, isOpen, onClose}  ) {
  const [cards, setCards] = React.useContext(CardItemsContext);
  const [onLoad, setOnLoad] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOnLoad(true);
    addApi.deleteCard(card._id)
    .then(() => {
      setCards(cards.filter((c) =>
        c._id !== card._id
       ));
      })
    .then(
      () => {
        event.target.reset();
        onClose();
      })
    .finally(
      ()=> {
        setOnLoad(false);
      })
    .catch((err) => {
      console.log(err);
    }); 
}


  return (
      <PopupWithForm
        isOpen={isOpen}
        onClose={onClose}
        onLoad={onLoad}
        formTitle={"Вы уверены?"}
        buttonTitle={"Да"}
        buttonTitleLoading={"Удаление..."}
        onSubmit={handleSubmit}
      />
    );
  }

  export default PopupDeleteCard;