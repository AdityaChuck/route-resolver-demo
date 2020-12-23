import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ITodo } from './itodo';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root',
})
export class TodoResolverService implements Resolve<ITodo[]> {
  constructor(private todoService: TodoService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ITodo[]> | Promise<ITodo[]> | ITodo[] {
    /*let data = [
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
    ];

    let observable = new Observable<ITodo[]>(observer => {
      observer.next(data)
      observer.complete()
    })

    // be sure to complete the observable before returning it!

    return observable*/

    return this.todoService.getTodos()
  }
}
