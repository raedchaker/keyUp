import { Personne } from './../../models/personne';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent implements OnInit {

  constructor() { }

  @Input() PersonnesEmbauches: Personne[]=[];
  ngOnInit(): void {
  }

}
