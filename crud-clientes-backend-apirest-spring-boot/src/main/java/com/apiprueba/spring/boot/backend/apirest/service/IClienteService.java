package com.apiprueba.spring.boot.backend.apirest.service;

import java.util.List;

import com.apiprueba.spring.boot.backend.apirest.models.entity.Cliente;

public interface IClienteService {

	public List<Cliente> findAll();
	
	public Cliente findById(Long id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(long id);
	
}
