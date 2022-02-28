import { Injectable } from '@angular/core';
import Todo from "../models/Todo";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  todos :Todo[]=[];
  finishedTodos :Todo[]=[];
  totalTodos :number=0;
  constructor() { }

  getTodos(){
    return this.todos;
  }

  getFinishedTodos(){
    return this.finishedTodos;
  }

 addTodo(todo: string){
   this.todos.push(new Todo(++this.totalTodos, todo, false));
 }

 markFinished(id: number){
   this.finishedTodos.push(<Todo>this.todos.find(todo => todo.id === id));
   this.todos = this.todos.filter(todo => todo.id !== id);
   return this.todos;
 }

}
