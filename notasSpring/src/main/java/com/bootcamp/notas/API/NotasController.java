package com.bootcamp.notas.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("notas")
public class NotasController {

    private NotasService notasService;

    @Autowired
    public NotasController(NotasService notasService) {
        this.notasService = notasService;
    }

    @GetMapping
    public List<Notas> getEstudiantes(){
        return notasService.getAllNotas();
    }

    @GetMapping("/test")
    Notas notas(){
        Notas nuevaNota = new Notas(1L, "Nota", "Contenido");
        return nuevaNota;
    }

    @PostMapping
    public void createNota(@RequestBody Notas notas){
        notasService.createNota(notas);
    }

    @DeleteMapping("{id}")
    public void deleteNota(@PathVariable("id") Long notaId){
        notasService.deleteNota(notaId);
    }

//    @PutMapping("{id}")
//    public void actualizarNota(@PathVariable("id") Long estudianteId,@RequestBody Estudiante estudiante){
//        estudianteService.actualizarEstudiante(estudianteId, estudiante);
//    }

}
