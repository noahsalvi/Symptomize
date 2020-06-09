package ch.symptomize.backend.Model;

import javax.persistence.*;

@Entity
@Table( name = "Link" )
public class Link {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String Symptome;
    private String URL;

    public Link(){
    }

    public Link(String s, String u){
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
