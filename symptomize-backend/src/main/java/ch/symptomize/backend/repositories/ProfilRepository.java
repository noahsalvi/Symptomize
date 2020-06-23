package ch.symptomize.backend.repositories;

import ch.symptomize.backend.Model.Profil;
import org.springframework.data.repository.CrudRepository;

public interface ProfilRepository extends CrudRepository<Profil, Integer> {
    Profil findById(int Id);
}
