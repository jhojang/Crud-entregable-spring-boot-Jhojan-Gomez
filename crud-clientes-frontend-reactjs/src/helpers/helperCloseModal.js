import React from 'react'

export const helperCloseModal = (e, modal_container, modal_form, setBanderaAndId) => {
  if (e.target.className === "modal-container") {
    modal_container.style.visibility = "hidden";
    modal_form.classList.toggle("modal-form-display");
    setBanderaAndId((previosValue) => ({
      ...previosValue,
      client: {
        nombre: "",
        apellido: "",
        email: ""
      }
    }));
  }
}
