import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  todoForm;
  constructor(private fb:FormBuilder, private service:TodoServiceService) { }
 
  ngOnInit(): void {
    this.todoForm=this.fb.group({
      task: ['',[Validators.required]]
    });
  }

  onSubmit(){
    this.service.onAdd(this.todoForm.value.task);
    console.log(this.service.showTasks());
  }


}
