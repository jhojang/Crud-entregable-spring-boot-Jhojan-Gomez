import React, { useState } from 'react';
import './App.css';
import { useFetchSpringBoot } from './hooks/useFetchSpringBoot';
import { ListTable } from './ListTable';
import { FormCliente } from './FormCliente';

function App() {

  const [clientes, handleCreate, handleUpdate, handleDelete] = useFetchSpringBoot();

  const [banderaAndId, setBanderaAndId] = useState({
    optionButton: null,
    idClient: null,
    client: {
      nombre: "",
      apellido: "",
      email: ""
    }
  });

  const handleNewClient = () => {
    setBanderaAndId((c) => ({
      ...c,
      optionButton: "crear"
    }));
    openModal();
  }

  const openModal = () => {
    const modal_container = document.querySelector(".modal-container");
    const modal_form = document.querySelector(".modal-form");
    modal_container.style.visibility = "visible";
    modal_form.classList.toggle("modal-form-display");
  }

  const closeModal = () => {
    const modal_container = document.querySelector(".modal-container");
    const modal_form = document.querySelector(".modal-form");
    modal_container.style.visibility = "hidden";
    modal_form.classList.toggle("modal-form-display");
  }

  return (
    <>
      <div className="global-container">
        <h1>Lista de clientes</h1>
        
        <ListTable
          clientes={clientes}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          setBanderaAndId={setBanderaAndId}
          openModal={openModal}
        />
        <button onClick={handleNewClient} className="btn-create">Nuevo Cliente</button>
        
      </div>
      <div 
        className="modal-container"
        onClick={closeModal}
      >
        <div className="modal-form">
          {banderaAndId.optionButton === "crear" && (
            <FormCliente
              client={banderaAndId.client}
              titleComponent="Añadir nuevo cliente"
              handleCreateOrUpdate={handleCreate}
              setBanderaAndId={setBanderaAndId}
            />
          )}
          {banderaAndId.optionButton === "editar" && (
            <FormCliente
              idClient={banderaAndId.idClient}
              client={banderaAndId.client}
              titleComponent="Editar cliente"
              handleCreateOrUpdate={handleUpdate}
              setBanderaAndId={setBanderaAndId}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
