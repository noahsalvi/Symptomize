package ch.symptomize.backend.web;

import ch.symptomize.backend.Model.Profil;
import ch.symptomize.backend.repositories.ProfilRepository;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ProfilController {

    @Autowired
    ProfilRepository profilRepository;

    @GetMapping("/profile/{id}")
    public JSONObject getProfil(@PathVariable String id) throws ParseException {
        String symptome ="";
        System.out.println("id----" + id);
        int ID = Integer.valueOf(id);
        System.out.println(ID);
        Profil p = profilRepository.findById(ID);
        System.out.println(p.getId()+"----"+ p.getSymptoms());
        symptome = p.getSymptoms();

        JSONParser parser = new JSONParser();
        JSONObject json = (JSONObject) parser.parse(symptome);

        return json;
    }

    @PostMapping("/saveProfil")
    public String saveProfil(@RequestBody String symptome){
        String Url ;

        System.out.println("s----"+symptome);
        Profil p = new Profil(symptome);
        profilRepository.save(p);

        Url = String.valueOf(p.getId());
        System.out.println("ID---"+p.getId()+"--Symptome----"+p.getSymptoms());
        return Url;
    }
}
