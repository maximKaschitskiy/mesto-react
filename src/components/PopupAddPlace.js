import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function FieldSet( {buttonTitle} ) {
    return (
    <>
      <input type="text" placeholder="Название" className="popup__form-input popup__form-input_field_place-name" name="place-name" id="place-name-field" />
      <span className="popup__form-error-text popup__form-error-text_message_place-name place-name-field-error"></span>
      <input type="url" placeholder="Ссылка на картинку" className="popup__form-input popup__form-input_field_picture-link" name="picture-link" id="picture-link-field" />
      <span className="popup__form-error-text popup__form-error-text_message_picture-link picture-link-field-error"></span>
      <input type="submit" className="popup__form-submit-button popup__form-submit-button_form_add-place" defaultValue="Создать" />
    </>
    );
}

function PopupAddPlace( {isOpen, onClose, formTitle, fieldSet} ) {
  return (
    <>
    <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={"Новое место"} fieldSet={ <FieldSet buttonTitle={"Сохранить"} /> } />
    </>
    );
  }

  export default PopupAddPlace;