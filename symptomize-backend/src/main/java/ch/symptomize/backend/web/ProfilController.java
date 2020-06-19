package ch.symptomize.backend.web;

import ch.symptomize.backend.Model.Profil;
import ch.symptomize.backend.repositories.ProfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProfilController {

    @Autowired
    ProfilRepository profilRepository;

    @PostMapping("/saveProfil")
    public String saveProfil(@RequestBody String symptome){
        String Url ;

        System.out.println("s----"+symptome);
        Profil p = new Profil(symptome);
        profilRepository.save(p);

        Url = String.valueOf(p.getId());
        System.out.println("ID---"+p.getId()+"--Symptome----"+p.getSymptome());
        return Url;
    }
}
