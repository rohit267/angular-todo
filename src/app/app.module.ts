import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { DoneTodosComponent } from './components/done-todos/done-todos.component';
import { TodosComponent } from './components/todos/todos.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddTodoComponent,
    DoneTodosComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
