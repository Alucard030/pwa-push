import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { map } from 'rxjs/operators'
import { Todo } from '../store/models/todo.model';
import { Store } from '@ngrx/store';
import * as todoActions from '../store/actions/todo.actions'

interface Appstate{
  todoAppState:Todo
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})

export class DisplayComponent implements OnInit {

  tasks$;
  tasks=[]
  constructor(private store:Store<Appstate>, private http: HttpClient) {
    this.tasks$=this.store.select('todoAppState');
    this.tasks$.subscribe((data)=>{
      this.tasks=data.todoList;
    })
   }

   clearList(){
     this.store.dispatch(new todoActions.ClearAll())
   }

  ngOnInit(): void {
    
  }
}
