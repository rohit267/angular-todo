import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  newTodo: string = '';
  constructor(private todoService:TodosService ) { }

  ngOnInit(): void {
  }

  addTodoClick() {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
  }
}
