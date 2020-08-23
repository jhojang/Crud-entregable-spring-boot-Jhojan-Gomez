import { useState } from 'react'

export const useFormChange = () => {
    
  const [inputValue, setInputValue] = useState({
    nombre: "",
    apellido: "",
    email: ""
  });

  const handleInputChange = ({target}) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    });
  }

  const handleInputReset = (client) => {
    setInputValue(client);
  }

  return [inputValue, handleInputChange, handleInputReset];

}