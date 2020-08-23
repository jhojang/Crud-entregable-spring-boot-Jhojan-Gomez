import { useState, useEffect } from 'react'

export const useFetchSpringBoot = () => {

    const [clientes, setClientes] = useState([]);
    const url = "http://localhost:8080/api/clientes/";
    
    const handleListar = () => {
        fetch(url)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);
            setClientes(data);
        })
    }

    useEffect(() => {
        handleListar();
    }, [])

    const handleCreate = (formData) => {

        console.log(formData);

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleListar();
        })
    }

    const handleUpdate = (idCliente, formData) => {
        fetch(url + idCliente, {
            method: "PUT",
            body: JSON.stringify(formData),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            handleListar();
        });
    }

    const handleDelete = (idCliente) => {
        fetch(url + idCliente, {
            method: "DELETE"
        })
        .then(response => {
            handleListar();
        })
    }

    return [clientes, handleCreate, handleUpdate, handleDelete];

}
