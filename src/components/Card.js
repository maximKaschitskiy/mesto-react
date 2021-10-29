import React from 'react';

function TrashbinIcon ( { owner } ) {
    if (owner) {
      return (
        <button className="elements__delete-button" type="button"></button>
      )
    } else {
        return (null)
    }
}

function Card ( { items, owner, onCardClick } ) {

  const handleCardClick = function () {
    onCardClick(items)
  }

    return (
    <>
      <div className="elements__element">
        <TrashbinIcon owner={ owner } />
          <a className="elements__picture-link" target="_self" onClick={handleCardClick}>
            <img className="elements__picture" alt={items.name} src={items.link}/>
          </a>
        <div className="elements__caption">
          <h2 className="elements__caption-text">{items.name}</h2>
          <div className="elements__like">
            <button className="elements__like-button" type="button"></button>
            <span className="elements__like-count">{items.likes.length}</span>
          </div>
        </div>
      </div>
    </>
    )
}

export default Card;
