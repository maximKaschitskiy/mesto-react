import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function PopupProfileEdit( {isOpen, onClose, formTitle, buttonTitle} ) {
  return (
    <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={"Редактировать профиль"} buttonTitle={"Сохранить"}>
      <input type="text" placeholder="Имя" className="popup__form-input popup__form-input_field_name" name="name" id="name-field" />
      <span className="popup__form-error-text popup__form-error-text_message_name name-field-error"></span>
      <input type="text" placeholder="Должность" className="popup__form-input popup__form-input_field_status" name="status" id="status-field" />
      <span className="popup__form-error-text popup__form-error-text_message_status status-field-error"></span>
    </PopupWithForm>
    );
  }

  export default PopupProfileEdit;