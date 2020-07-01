package ch.symptomize.backend.Model;

import javax.persistence.*;

@Entity
@Table( name = "Profil" )
public class Profil {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Id;
    @Column(columnDefinition="TEXT")
    private String Symptoms;

    public Profil(){
    }

    public int getId() {
        return Id;
    }

    public Profil(String s){
        Symptoms=s;
    }

    public String getSymptoms() {
        return Symptoms;
    }


    public void setSymptome(String symptome) {
        Symptoms = symptome;
    }

}
