import { useState } from 'react'

export const useFormChange = (client) => {
    
  const [inputValue, setInputValue] = useState(client);

  const handleInputChange = ({target}) => {
    setInputValue({
      ...inputValue,
      [target.name]: target.value
    });
  }

  // const handleInputEdit = (formData) => {
  //   setInputValue(formData);
  // }

  return [inputValue, handleInputChange];

}