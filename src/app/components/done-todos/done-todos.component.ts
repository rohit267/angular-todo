import { Component, OnInit } from '@angular/core';
import {TodosService} from "../../services/todos.service";
import Todo from "../../models/Todo";

@Component({
  selector: 'app-done-todos',
  templateUrl: './done-todos.component.html',
  styleUrls: ['./done-todos.component.scss']
})
export class DoneTodosComponent implements OnInit {
  finishedTodos: Todo[] = [];
  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.finishedTodos = this.todoService.getFinishedTodos();
  }

}
