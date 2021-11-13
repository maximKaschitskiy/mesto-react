import React from 'react';

import PopupWithForm from './PopupWithForm.js';
import CardItemsContext from '../contexts/CardItemsContext.js';
import addApi from '../utils/Api.js';

function PopupAddPlace( {isOpen, onClose, formTitle, buttonTitle} ) {

  const [cards, setCards] = React.useContext(CardItemsContext);
  const [onLoad, setOnLoad] = React.useState(false);
  const [inputField, setInputField] = React.useState({
    name: '',
    link: ''
  })

  const handleChange = (event) =>{
    setInputField( { ...inputField,
      [event.target.name]: event.target.value
    } );
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setOnLoad(true);
      addApi.postCard(inputField)
      .then(
        (response) => {
          setCards([ response,
            ...cards
          ]);
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

  React.useEffect(() => {
    setInputField( { name: '',
                     link: ''
                   } );
  }, []); 


  return (
    <>
    <PopupWithForm
    className={"popup__form popup__form_state_add-place"}
    isOpen={isOpen}
    onClose={onClose}
    onLoad={onLoad}
    formTitle={"Новое место"}
    buttonTitle={"Создать"}
    buttonTitleLoading={"Создание..."}
    onSubmit={handleSubmit}>
      <input type="text" placeholder="Название" className="popup__form-input popup__form-input_field_place-name" name="name" id="place-name-field"  onChange={(event)=>{handleChange(event)}}/>
      <span className="popup__form-error-text popup__form-error-text_message_place-name place-name-field-error"></span>
      <input type="url" placeholder="Ссылка на картинку" className="popup__form-input popup__form-input_field_picture-link" name="link" id="picture-link-field"  onChange={(event)=>{handleChange(event)}}/>
      <span className="popup__form-error-text popup__form-error-text_message_picture-link picture-link-field-error"></span>
    </PopupWithForm>
    </>
    );
  }

  export default PopupAddPlace;