package ch.symptomize.backend.Model;

import javax.persistence.*;

@Entity
@Table( name = "Profil" )
public class Profil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    private String Symptome;

    public Profil(){
    }

    public int getId() {
        return Id;
    }

    public Profil(String s){
        Symptome=s;
    }

    public String getSymptome() {
        return Symptome;
    }


    public void setSymptome(String symptome) {
        Symptome = symptome;
    }

}
