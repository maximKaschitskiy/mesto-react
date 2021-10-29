import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function FieldSet( {buttonTitle} ) {
    return (
    <>
      <button className="popup__form-submit-button popup__form-submit-button_dialog-button">{ buttonTitle }</button>
    </>
    );
}

function PopupDeleteCard( {isOpen, onClose, formTitle, fieldSet} ) {
  return (
    <>
      <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={formTitle} fieldSet={ <FieldSet buttonTitle={"Да"}/> } />
    </>
    );
  }

  export default PopupDeleteCard;