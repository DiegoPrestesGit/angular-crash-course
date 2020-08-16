import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { GetsTodoServiceService } from '../../services/gets-todo.service';

interface ClassesData {
  todo: boolean;
  'is-complete': boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: GetsTodoServiceService) {}

  ngOnInit(): void {
  }

  setClasses(): ClassesData {
    const classes: ClassesData = {
      todo: true,
      'is-complete': this.todo.completed
    };

    return classes;
  }

  onToggle(todo): void {
    todo.completed = !todo.completed;

    this.todoService.toggleCompleted(todo).subscribe();
  }

  onDelete(todo): void {
    this.deleteTodo.emit(todo);
  }

}
