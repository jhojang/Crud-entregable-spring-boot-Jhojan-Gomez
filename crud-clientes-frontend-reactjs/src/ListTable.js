import React from 'react';

export const ListTable = ({clientes, handleDelete, setBanderaAndId, openModal}) => {

  const handleFormCliente = (id, nombre, apellido, email) => {
    setBanderaAndId({
      optionButton: "editar",
      idClient: id,
      client: {
        nombre: nombre,
        apellido: apellido,
        email: email
      }
    });
    openModal();
  }

  return (
    <>
      <table border="none">
        <thead>
          <tr className="table-head">
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Eamil</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {
            clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.id}</td>
                <td>{cliente.nombre}</td>
                <td>{cliente.apellido}</td>
                <td>{cliente.email}</td>
                <td>
                  <button
                    className="btn-control"
                    onClick={() => (
                      handleFormCliente(cliente.id, cliente.nombre, cliente.apellido, cliente.email)
                    )}
                  >
                    Editar
                  </button>
                  <button
                    className="btn-control"
                    onClick={() => {
                      handleDelete(cliente.id);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      
    </>
  )
}
