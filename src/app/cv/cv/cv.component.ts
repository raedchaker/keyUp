import { EmbaucheService } from './../../_service/embauche.service';
import { Personne } from './../../models/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  p:Personne;
  PersonnesEmbauches: Personne[]=[];
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }

  getPerson(event){
    this.p=event;
  }

  reloadEmbauche(){
    this.PersonnesEmbauches = this.embaucheService.getPersonnesEmbauches();
  }

}
