import React, { useState } from 'react';
import './App.css';
import { useFetchSpringBoot } from './hooks/useFetchSpringBoot';
import { ListTable } from './ListTable';
import { FormCliente } from './FormCliente';
import { helperCloseModal } from './helpers/helperCloseModal';
import { helperOpenModal } from './helpers/helperOpenModal';

function App() {

  

  const [banderaAndId, setBanderaAndId] = useState({
    optionButton: null,
    idClient: null,
    client: {
      nombre: "",
      apellido: "",
      email: ""
    }
  });

  const [clientes, handleCreate, handleUpdate, handleDelete] = useFetchSpringBoot();

  const handleNewClient = () => {
    setBanderaAndId((previosValue) => ({
      ...previosValue,
      optionButton: "crear"
    }));
    helperOpenModal(modal_container, modal_form);
  }

  const modal_container = document.querySelector(".modal-container");
  const modal_form = document.querySelector(".modal-form");

  return (
    <>
      <div className="global-container">
        <h1>Lista de clientes</h1>
        
        <ListTable
          clientes={clientes}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          setBanderaAndId={setBanderaAndId}
          helperOpenModal={() => {
            helperOpenModal(modal_container, modal_form);
          }}
        />
        <button onClick={handleNewClient} className="btn-create">Nuevo Cliente</button>
        
      </div>
      <div 
        className="modal-container"
        onClick={(e) => {
          helperCloseModal(e, modal_container, modal_form, setBanderaAndId);
        }}
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
