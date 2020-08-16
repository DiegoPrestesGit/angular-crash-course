import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/Todo';
import { GetsTodoServiceService } from '../../services/gets-todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private todoService: GetsTodoServiceService) {

  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  addTodo(todo: Todo): void {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

  deleteTodo(todo: Todo): void{
    this.todos = this.todos.filter(todoT => todoT.id !== todo.id);
    this.todoService.deleteTodo(todo).subscribe();
  }

}
