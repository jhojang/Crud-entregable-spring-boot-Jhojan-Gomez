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
  }

  //comentario

  return (
    <>
      <h1>Lista</h1>
      <button onClick={handleNewClient}>Nuevo Cliente</button>
      <ListTable
        clientes={clientes}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        setBanderaAndId={setBanderaAndId}
      />
      <div>
        {banderaAndId.optionButton === "crear" && (
          <FormCliente
            client={banderaAndId.client}
            titleComponent="Crear"
            handleCreateOrUpdate={handleCreate}
            setBanderaAndId={setBanderaAndId}
          />
        )}
      </div>
      <div>
      {banderaAndId.optionButton === "editar" && (
        <FormCliente
          idClient={banderaAndId.idClient}
          client={banderaAndId.client}
          titleComponent="Editar"
          handleCreateOrUpdate={handleUpdate}
          setBanderaAndId={setBanderaAndId}
        />
      )}
      </div>
    </>
  );
}

export default App;
