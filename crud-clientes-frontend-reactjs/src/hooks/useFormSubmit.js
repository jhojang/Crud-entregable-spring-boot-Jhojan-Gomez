import { useState } from 'react'

export const useFormSubmit = () => {
    
    const [formData, setFormData] = useState({});

    const handleSubmit = ({target}) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    }

    return [formData, handleSubmit];

}
