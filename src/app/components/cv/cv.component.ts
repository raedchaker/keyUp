import { Personne } from './../../models/personne';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  p:Personne;
  constructor() { }

  ngOnInit(): void {
  }

  getPerson(event){
    this.p=event;
  }

}
