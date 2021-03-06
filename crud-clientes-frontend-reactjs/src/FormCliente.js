import React, {useEffect} from 'react';
import { useFormChange } from './hooks/useFormChange';

export const FormCliente = ({idClient=null, client, titleComponent, handleCreateOrUpdate, setBanderaAndId}) => {

  const [inputValue, handleInputValue, handleInputReset] = useFormChange();

  useEffect(() => {
    handleInputReset(client)
  }, [client])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (idClient === null) {
      handleCreateOrUpdate(inputValue);
    } else {
      handleCreateOrUpdate(idClient, inputValue);
    }
    
    handleInputReset({
      nombre: "",
      apellido: "",
      email: ""
    });
  }

  //comentario

  return (
    <div>
        <h3>{titleComponent}</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Nombre"
            autoComplete="off"
            onChange={handleInputValue}
            value={inputValue.nombre}
          />
          <input
            type="text"
            name="apellido"
            placeholder="Apellido"
            autoComplete="off"
            onChange={handleInputValue}
            value={inputValue.apellido}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            onChange={handleInputValue}
            value={inputValue.email}
          />
          <input type="submit" value="Enviar" />
        </form>
     
    </div>
  )
}
