import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from './itodo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: ITodo[]

  constructor( private route: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: {todos: ITodo[]}) => {
      this.todos = data.todos
    })
  }

}
