import React from 'react';

export const ListTable = ({clientes, handleDelete, setBanderaAndId}) => {

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
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Eamil</th>
            <th>Fecha</th>
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
                <td><button
                      onClick={() => (
                        handleFormCliente(cliente.id, cliente.nombre, cliente.apellido, cliente.email)
                      )}
                    >Editar</button></td>
                <td>
                  <button
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
