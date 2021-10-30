import React from 'react';

import PopupWithForm from './PopupWithForm.js';

function PopupDeleteCard( {isOpen, onClose, formTitle, fieldSet} ) {
  return (
      <PopupWithForm isOpen={isOpen} onClose={onClose} formTitle={formTitle}>
      </PopupWithForm>
    );
  }

  export default PopupDeleteCard;