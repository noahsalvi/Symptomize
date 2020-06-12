package ch.symptomize.backend.repositories;

import ch.symptomize.backend.Model.Profil;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.*;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ProfilRepositoryTest {
    @Autowired
    private ProfilRepository profilRepository;
    @Before
    public void setUp() throws Exception{
        Profil profil1 = new Profil("Hand : Blau", "lornriveoubv");
        Profil profil2 = new Profil("Fuss : Bluten", "rgerbrebev");
        this.profilRepository.save(profil1);
        this.profilRepository.save(profil2);
        assertNotNull(profil1.getId());
        assertNotNull(profil2.getId());
    }

    @Test
    public void testFetchData() {
        /*Test data retrieval*/
        Profil profila = profilRepository.findByURL("rgerbrebev");
        assertNotNull(profila);
        assertEquals("Fuss : Bluten", profila.getSymptome());
        /*Get all products, list should only have two*/
        Iterable<Profil> profils = profilRepository.findAll();
        int count = 0;
        for (Profil p : profils) {
            count++;
        }
        assertEquals(count, 2);
    }
}
