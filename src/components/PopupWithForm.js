import React from 'react';

function PopupWithForm( {isOpen, onClose, formTitle, fieldSet} ) {

  return (
  <>
    <section className={`popup-overlay ${isOpen ? "popup-overlay_active" : ""}`} onClick={onClose}></section>
    <section className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__window">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <form className="popup__form">
          <h2 className="popup__form-title">{formTitle}</h2>
          <fieldset className="popup__form-fieldset">
            <>{fieldSet}</>
          </fieldset>
        </form>
      </div>
    </section>
  </>
  );
}

export default PopupWithForm;