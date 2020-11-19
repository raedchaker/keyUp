import { EmbaucheService } from './../../_service/embauche.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/models/personne';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() personne: Personne;
  @Output() embauche = new EventEmitter();
  constructor(private embaucheService: EmbaucheService) { }

  ngOnInit(): void {
  }
  embaucher(id: number){
    this.embaucheService.embaucherPersonne(id);
    this.embauche.emit();
  }

}
