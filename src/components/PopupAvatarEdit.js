import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function PopupAvatarEdit( {isOpen, onClose, formTitle, buttonTitle} ) {
  return (
      <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={"Обновить аватар"} buttonTitle={"Сохранить"}>
        <input type="url" placeholder="Ссылка на картинку" className="popup__form-input popup__form-input_field_userpic-link" name="userpic-link" id="userpic-link-field" required />
        <span className="popup__form-error-text popup__form-error-text_message_userpic-link userpic-link-field-error"></span>
      </PopupWithForm>
    );
  }

  export default PopupAvatarEdit;
