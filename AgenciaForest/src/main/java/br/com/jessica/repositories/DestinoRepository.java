package br.com.jessica.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.jessica.entities.Destino;

@Repository
public interface DestinoRepository extends JpaRepository<Destino, Long> {
	
	

}