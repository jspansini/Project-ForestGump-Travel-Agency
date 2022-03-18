package br.com.jessica.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import br.com.jessica.entities.Destino;
import br.com.jessica.servicies.DestinoService;

@RestController
@RequestMapping("/destinos")
@CrossOrigin(origins = "http://localhost:3000")
public class DestinoResource {
	
	
	@Autowired
	private DestinoService service;
	
	
	@GetMapping
	public List<Destino> findAll(){
		return service.findAll();	
		
	}
	
	
	@GetMapping(value = "/{id}")
	public Destino findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<Destino> save(@RequestBody Destino destino) {
		service.save(destino);
		return ResponseEntity.ok().body(destino);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Destino> delete(@PathVariable Long id) {
		Destino destino = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(destino);
	}
	
	@PutMapping(value = "/update")
	public ResponseEntity<Destino> update(@RequestBody Destino destino) {
		destino = service.update(destino);
		return ResponseEntity.ok().body(destino);
	}


}
