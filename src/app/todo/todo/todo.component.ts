import { Component, OnInit } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  name: string='';
  content: string='';
  todoList: Todo[] = [];
  constructor() { }

  ngOnInit(): void {
  }
  addBtnDisabled(): boolean{
    if(this.name.length==0 || this.content.length==0)
    return true;
    return false;
  }

  addTodo(){
    this.todoList.push(new Todo(uuidv4(), this.name, this.content));
    console.log(this.todoList);
    this.name = '';
    this.content = '';
  }
  delete(id){
    this.todoList = this.todoList.filter(t=> t.id !== id);
  }

}
