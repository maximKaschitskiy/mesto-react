import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function FieldSet( {buttonTitle} ) {
    return (
    <>
      <input type="text" placeholder="Имя" className="popup__form-input popup__form-input_field_name" name="name" id="name-field" />
      <span className="popup__form-error-text popup__form-error-text_message_name name-field-error"></span>
      <input type="text" placeholder="Должность" className="popup__form-input popup__form-input_field_status" name="status" id="status-field" />
      <span className="popup__form-error-text popup__form-error-text_message_status status-field-error"></span>
      <input type="submit" className="popup__form-submit-button popup__form-submit-button_form_profile" defaultValue={buttonTitle}></input>
    </>
    );
}

function PopupProfileEdit( {isOpen, onClose, formTitle, fieldSet} ) {
  return (
    <>
    <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={"Редактировать профиль"} fieldSet={ <FieldSet buttonTitle={"Сохранить"} /> } />
    </>
    );
  }

  export default PopupProfileEdit;