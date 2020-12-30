import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  tasks;
  constructor(private service:TodoServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.tasks=this.service.showTasks();
    this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(map((res:Array<any>)=>{ 
      let i=0;
      res.map((v)=>{
        if(i<10){
        console.log(v);
        i++;
        }
      })
    })).subscribe();
  }

}
