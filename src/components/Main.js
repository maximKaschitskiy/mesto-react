import React from 'react';

import addApi from '../utils/Api.js';
import Card from '../components/Card.js';

import CurrentUserContext from '../contexts/CurrentUserContext.js';
import CardItemsContext from '../contexts/CardItemsContext.js';

function Main( {isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, onCardDel, onCardClick} ) {

  const [currentUser, setCurrentUser] = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useContext(CardItemsContext);

  const changeLikeCardStatus = async function (card, isLiked) {
    if (isLiked) {
      let res = await addApi.unLikeCard(card)
      return res;
    } else {
      let res= await addApi.likeCard(card);
      return res;
    }
  }

  const handleCardLike = function (card) {
    const isLiked = card.likes.some((i) =>
      i._id === currentUser._id
    );
    changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) =>
        c._id === card._id ? newCard : c
      );
      setCards(newCards);
    })
    .catch(err => console.error(err))
  }

    return (
      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <button className="profile__avatar-edit" onClick={isEditAvatarPopupOpen}></button>
            <img className="profile__avatar" src={currentUser.avatar} alt="Картинка пользователя" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button" onClick={isEditProfilePopupOpen}></button>
            <p className="profile__status">{currentUser.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={isAddPlacePopupOpen}></button>
        </section>
        <section className="elements">
        {cards && cards.map((item) => {
        return (
            <Card 
            items={item} 
            owner={item.owner._id === currentUser._id}
            onCardClick={onCardClick}
            onCardDel={onCardDel}
            onCardLike={()=>{handleCardLike(item)}}
            key={item._id} />
            )
          }
        )}
        </section>
      </main>
    );
}

export default Main;
