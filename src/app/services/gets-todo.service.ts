import { Injectable } from '@angular/core';
import { Todo } from '../models/Todo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

interface HttpOptionsData {
  headers: HttpHeaders;
}

const httpOptions: HttpOptionsData = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
};

// interface GetsTodoServiceServiceDTO{
//   getTodos(): Observable<Todo[]>;
//   addTodo(todo: Todo): Observable<Todo>;
//   toggleCompleted(todo: Todo): Observable<any>;
//   deleteTodo(todo: Todo): Observable<any>;
// }

@Injectable({
  providedIn: 'root'
})
export class GetsTodoServiceService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';
  todosLimiter = '?_limit=15';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todosUrl}${this.todosLimiter}`);
  }

  addTodo(todo: Todo): Observable<Todo>{
    return this.http.post<Todo>(this.todosUrl, todo, httpOptions);
  }

  toggleCompleted(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);
  }

  deleteTodo(todo: Todo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }
}
