import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';
import * as todoActions from '../store/actions/todo.actions'
import { Store } from '@ngrx/store';
import { Todo } from '../store/models/todo.model';

interface Appstate{
  todoAppState:Todo
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todoForm;
  constructor(private fb:FormBuilder, private todoService:TodoServiceService ,private store:Store<Todo>) { }
 
  ngOnInit(): void {
    this.todoForm=this.fb.group({
      task: ['',[Validators.required]]
    });
  }

  onSubmit(){
    this.todoService.onAdd(this.todoForm.get('task').value);
    console.log(this.todoForm.get('task').value);
    console.log(this.todoService.showTasks())
    this.store.dispatch(new todoActions.AddItem(this.todoService.showTasks()));
    this.pushNotification()
  
  }

pushNotification(){

    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    }
  
    
    else if (Notification.permission === "granted") {

      var notification = new Notification("New Item Added");
    }

    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        if (permission === "granted") {
          var notification = new Notification("New Item Added");
        }
      });
    }
  

}
}
