import React from 'react';

import addApi from '../utils/Api.js';
import Card from '../components/Card.js';

function Main( {isEditAvatarPopupOpen, isEditProfilePopupOpen, isAddPlacePopupOpen, onCardClick} ) {

    const [profileInfo, setProfileInfo] = React.useState([]);
    React.useEffect(() => {
      addApi.getUserInfo()
        .then(
          (response) => {
            setProfileInfo(response);
          })
        .catch((err) => {
          console.log(err);
        })
    }, []);

    const [items, setItems] = React.useState([]);
    React.useEffect(() => {
      addApi.getCards()
        .then(
          (response) => {
            setItems(response);
        })
        .catch((err) => {
          console.log(err);
        })
    }, [])

    return (
    <>
      <main>
        <section className="profile">
          <div className="profile__avatar-container">
            <button className="profile__avatar-edit" onClick={isEditAvatarPopupOpen}></button>
            <img className="profile__avatar" src={profileInfo.avatar} alt="Картинка пользователя" />
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{profileInfo.name}</h1>
            <button className="profile__edit-button" type="button" onClick={isEditProfilePopupOpen}></button>
            <p className="profile__status">{profileInfo.about}</p>
          </div>
          <button className="profile__add-button" type="button" onClick={isAddPlacePopupOpen}></button>
        </section>

        <section className="elements">
        
        {items.map(item => (
          <Card items={item} owner={ item.owner._id === profileInfo._id } onCardClick={onCardClick} key={item._id}/>
        ))}
        </section>
      </main>
    </>
    );
}

export default Main;
