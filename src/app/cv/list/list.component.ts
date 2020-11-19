import { PersonnesService } from './../../_service/personnes.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Personne } from 'src/app/models/personne';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  personnes: Personne[]= [];
  @Output() forward = new EventEmitter();
  constructor(private personnesService: PersonnesService) { }

  ngOnInit(): void {
    this.personnes = this.personnesService.getAllPersons();
  }
  sendPerson(event){
    this.forward.emit(event);
  }

}
