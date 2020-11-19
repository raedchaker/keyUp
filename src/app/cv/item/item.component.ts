import { Personne } from './../../models/personne';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() personne : Personne;
  @Output() sendPerson = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  selectItem(){
    console.log(this.personne);
    this.sendPerson.emit(this.personne);
  }

}
