import React from 'react';

import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import addApi from '../utils/Api.js';

function PopupProfileEdit( {isOpen, onClose } ) {

  const [currentUser, setCurrentUser] = React.useContext(CurrentUserContext);
  const [onLoad, setOnLoad] = React.useState(false);
  const [inputField , setInputField] = React.useState({
    name: '',
    about: ''
  })
  
  

  const handleChange = (event) =>{
    setInputField( { ...inputField,
      [event.target.name]: event.target.value
    } );
  }

  const handleSubmit = (event) => {
      event.preventDefault()
      setOnLoad(true);
      addApi.setUserInfo(inputField.name, inputField.about)
      .then(
        (response) => {
          setCurrentUser(response);
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
    setInputField( {name: currentUser.name,
                    about: currentUser.about
                  } );
  }, [currentUser]); 

  return (
    <PopupWithForm
      className={"popup__form popup__form_state_edit-profile"}
      isOpen={isOpen}
      onClose={onClose}
      onLoad={onLoad}
      formTitle={"Редактировать профиль"}
      buttonTitle={"Сохранить"}
      buttonTitleLoading={"Сохранение..."}
      onSubmit={handleSubmit}>
      <input type="text" placeholder="Имя" className="popup__form-input popup__form-input_field_name" name="name" id="name-field" value={inputField.name || ''} onChange={(event)=>{handleChange(event)}}/>
      <span className="popup__form-error-text popup__form-error-text_message_name name-field-error"></span>
      <input type="text" placeholder="Должность" className="popup__form-input popup__form-input_field_status" name="about" id="about-field" value={inputField.about  || ''} onChange={(event)=>{handleChange(event)}}/>
      <span className="popup__form-error-text popup__form-error-text_message_status status-field-error"></span>
    </PopupWithForm>
    );
  }

  export default PopupProfileEdit;