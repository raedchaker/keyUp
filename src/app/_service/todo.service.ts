import { ContentComponent } from './../content/content/content.component';
import { Injectable } from '@angular/core';
import { Todo } from '../todo/todo';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoList: Todo[] = [];

  constructor() { }

  getAllTodo(): Todo[]{
    return this.todoList;
  }

  addTodo(name: string, content: string): Todo[] {
    this.todoList.push(new Todo(uuidv4(), name, content));
    return this.todoList;
  }

  delete(id): Todo[]{
    this.todoList = this.todoList.filter(t=> t.id !== id);
    return this.todoList;
  }

}
