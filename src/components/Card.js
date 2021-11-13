import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import CardItemsContext from '../contexts/CardItemsContext.js';

import addApi from '../utils/Api.js';


function Card ( { items, owner, onCardClick, onCardLike, onCardDel } ) {

  const [liked, setLiked] = React.useState(false);
  
  const [cards, setCards] = React.useContext(CardItemsContext);
  const [currentUser, setCurrentUser] = React.useContext(CurrentUserContext);

  const handleCardClick = function () {
    onCardClick(items)
  }
  
  const handleCardLike = function () {
    onCardLike(items)
  }

  const handleCardDelete = function () {
    onCardDel(items)
  }

  React.useEffect(() => {
    if (items.likes.some(i => i._id === currentUser._id)) {
      setLiked(true);
    } else {
      setLiked(false);
    };
  }, [items.likes.length]);

    return (
      <div className="elements__element">
        {
          owner 
          ? <button className="elements__delete-button" type="button" onClick={()=>{handleCardDelete(items)}} ></button>
          : null
        }
          <a className="elements__picture-link" target="_self" onClick={handleCardClick}>
            <img className="elements__picture" alt={items.name} src={items.link}/>
          </a>
        <div className="elements__caption">
          <h2 className="elements__caption-text">{items.name}</h2>
          <div className="elements__like">
          <button className={`elements__like-button ${liked ? 'elements__like-button_active' : ''}`} type="button" onClick={()=>{handleCardLike(items)}}></button>
            <span className="elements__like-count">{items.likes.length}</span>
          </div>
        </div>
      </div>
    )
}

export default Card;
