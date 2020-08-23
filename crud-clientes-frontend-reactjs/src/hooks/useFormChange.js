import { useState } from 'react'

export const useFormChange = (client) => {
    
  const [inputValue, setInputValue] = useState(client);

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