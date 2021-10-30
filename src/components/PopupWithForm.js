import React from 'react';

function PopupWithForm( {isOpen, onClose, formTitle, buttonTitle, children} ) {

  return (
  <>
    <section className={`popup-overlay ${isOpen ? "popup-overlay_active" : ""}`} onClick={onClose}></section>
    <section className={`popup ${isOpen ? "popup_active" : ""}`}>
      <div className="popup__window">
        <button className="popup__close-button" type="button" onClick={onClose}></button>
        <form className="popup__form">
          <h2 className="popup__form-title">{formTitle}</h2>
          <fieldset className="popup__form-fieldset">
            {children}
            <input type="submit" className="popup__form-submit-button popup__form-submit-button_form_profile" value={buttonTitle}></input>
          </fieldset>
        </form>
      </div>
    </section>
  </>
  );
}

export default PopupWithForm;