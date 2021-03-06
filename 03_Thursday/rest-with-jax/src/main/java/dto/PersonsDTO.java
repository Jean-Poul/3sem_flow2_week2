package dto;

import entities.Person;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


/**
 *
 * @author jplm
 */


public class PersonsDTO {
    
    List<PersonDTO> all = new ArrayList();

    public PersonsDTO(List<Person> personEntities) {
        personEntities.forEach((p) -> {
            all.add(new PersonDTO(p));
        });
    }

    public List<PersonDTO> getAll() {
        return all;
    }

    public void setAll(List<PersonDTO> all) {
        this.all = all;
    }
    
    

    @Override
    public int hashCode() {
        int hash = 7;
        hash = 97 * hash + Objects.hashCode(this.all);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final PersonsDTO other = (PersonsDTO) obj;
        if (!Objects.equals(this.all, other.all)) {
            return false;
        }
        return true;
    }
    
    
}

