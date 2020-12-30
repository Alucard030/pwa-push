import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  tasks=[];
  constructor() {  
    
   }

   onAdd(task){
     this.tasks.push(task);
   }
   showTasks(){
     return this.tasks;
   }
}
