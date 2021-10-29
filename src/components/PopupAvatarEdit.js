import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function FieldSet( {buttonTitle} ) {
    return (
    <>
      <input type="url" placeholder="Ссылка на картинку" className="popup__form-input popup__form-input_field_userpic-link" name="userpic-link" id="userpic-link-field" required />
      <span className="popup__form-error-text popup__form-error-text_message_userpic-link userpic-link-field-error"></span>
      <input type="submit" className="popup__form-submit-button popup__form-submit-button_form_edit-userpic" defaultValue={buttonTitle}></input>
    </>
    );
}

function PopupAvatarEdit( {isOpen, onClose, formTitle, fieldSet} ) {
  return (
    <>
      <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={"Обновить аватар"} fieldSet={ <FieldSet buttonTitle={"Сохранить"}/> } />
    </>
    );
  }

  export default PopupAvatarEdit;
