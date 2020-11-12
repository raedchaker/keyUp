import { TodoService } from './../../_service/todo.service';
import { Component, OnInit } from '@angular/core';
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
  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoList = this.todoService.getAllTodo();
  }
  addBtnDisabled(): boolean{
    if(this.name.length==0 || this.content.length==0)
    return true;
    return false;
  }

  addTodo(){
    this.todoList = this.todoService.addTodo(this.name, this.content);
    this.name = '';
    this.content = '';
  }
  delete(id){
    this.todoList = this.todoService.delete(id);
  }

}
