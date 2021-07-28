import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Todo[]> {
    let url = 'https://jsonplaceholder.typicode.com/todos';

    return this.http.get<Todo[]>(url).pipe(
      map((data: Todo[]) => {
        if (data) {
          return data;
        } else {
          return [] as Todo[];
        }
      })
    );
  }
}
