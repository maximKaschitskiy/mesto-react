import React from 'react';

import PopupWithForm from './PopupWithForm.js';
import addApi from '../utils/Api.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function PopupAvatarEdit( {isOpen, onClose, formTitle, buttonTitle} ) {

  const [currentUser, setCurrentUser] = React.useContext(CurrentUserContext);
  const [onLoad, setOnLoad] = React.useState(false);
  const [inputField , setInputField] = React.useState({
    avatar: ''
  })

  const handleChange = (event) =>{
    setInputField( { ...inputField,
      [event.target.name]: event.target.value
    } );
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      setOnLoad(true);
      addApi.setUserPic(inputField.avatar)
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
    setInputField( {avatar: currentUser.avatar
                  } );
  }, [currentUser]);


  return (
      <PopupWithForm
      className={"popup__form popup__form_state_edit-userpic"}
      isOpen={isOpen}
      onClose={onClose}
      onLoad={onLoad}
      formTitle={"Обновить аватар"}
      buttonTitle={"Сохранить"}
      buttonTitleLoading={"Сохранение..."}
      onSubmit={handleSubmit} >
        <input type="url" placeholder="Ссылка на картинку" className="popup__form-input popup__form-input_field_userpic-link" name="avatar" id="userpic-link-field" value={inputField.avatar || ''} onChange={(event)=>{handleChange(event)}} required />
        <span className="popup__form-error-text popup__form-error-text_message_userpic-link userpic-link-field-error"></span>
      </PopupWithForm>
    );
  }

  export default PopupAvatarEdit;
