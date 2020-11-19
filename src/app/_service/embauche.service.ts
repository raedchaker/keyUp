import { Personne } from './../models/personne';
import { Injectable } from '@angular/core';
import { PersonnesService } from './personnes.service';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {

  PersonnesEmbauches: Personne[]=[];
  constructor(private personService: PersonnesService) { }

  embaucherPersonne(id: number){
    const hired = this.personService.getPersonById(id);
    if(hired){
      if(!this.PersonnesEmbauches.find(p=> p.id == id)){
        this.PersonnesEmbauches.push(hired);
      }
      else{
        window.alert('vous avez déja embauché cette personne');
      }
    }
}

  getPersonnesEmbauches(){
    return this.PersonnesEmbauches;
  }

}
