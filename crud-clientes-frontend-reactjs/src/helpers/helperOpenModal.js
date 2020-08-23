import React from 'react'

export const helperOpenModal = (modal_container, modal_form) => {
  modal_container.style.visibility = "visible";
  modal_form.classList.toggle("modal-form-display");
}
