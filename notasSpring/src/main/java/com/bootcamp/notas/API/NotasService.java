package com.bootcamp.notas.API;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NotasService {

    private NotasRepository notasRepository;

    @Autowired
    public NotasService(NotasRepository notasRepository) {
        this.notasRepository = notasRepository;
    }

    public List<Notas> getAllNotas(){
        List<Notas> notas = notasRepository.findAll();
        return notas;
    }

    public void createNota(Notas nota){
        notasRepository.save(nota);
    }

    public void deleteNota(Long notaId){
        // check si id existe, si no se imprime el warning
        boolean existe = getAllNotas().stream().anyMatch(e -> e.getId().equals(notaId));

        if (!existe){
            System.out.println("WARNING: ese Id no existe");
            return;
        }

        notasRepository.deleteById(notaId);
    }

}
