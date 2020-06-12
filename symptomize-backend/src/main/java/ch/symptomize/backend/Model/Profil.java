package ch.symptomize.backend.Model;

import javax.persistence.*;

@Entity
@Table( name = "Profil" )
public class Profil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String Symptome;
    private String URL;

    public Profil(){
    }

    public int getId() {
        return Id;
    }

    public Profil(String s, String u){
        Symptome=s;
        URL=u;
    }

    public String getSymptome() {
        return Symptome;
    }

    public String getURL() {
        return URL;
    }

    public void setSymptome(String symptome) {
        Symptome = symptome;
    }

    public void setURL(String URL) {
        this.URL = URL;
    }
}
