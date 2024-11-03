import { inject, Injectable } from '@angular/core';
import { Todo } from '../model/todo.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  http = inject(HttpClient);

  todoItems: Array<Todo> = [
    {
      userId: 0,
      id: 0,
      completed: false,
      title: 'Coder',
    },
    {
      userId: 1,
      id: 1,
      completed: false,
      title: 'Programmer',
    },
  ];

  getTodoItemsFromApi() {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    return this.http.get<Array<Todo>>(url);
  }
}
