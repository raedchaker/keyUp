import { Personne } from './../models/personne';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {
  private p: Personne[]= [
    new Personne(0,'name1','firstname1','job1','11111111',21,'image1.jpg'),
    new Personne(1,'name2','firstname2','job2','22222222',22,'image2.jpg'),
    new Personne(2,'name3','firstname3','job3','33333333',23),
    new Personne(3,'name4','firstname4','job4','44444444',24,'              ')
  ];
  constructor() { }

  getAllPersons(): Personne[] {
    return this.p;
  }

}
