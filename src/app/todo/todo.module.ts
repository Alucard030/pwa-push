import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoServiceService } from './todo-service.service';
import { SortPipe } from './sort.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NewSortPipe } from './display/new-sort.pipe'
import { StoreModule } from '@ngrx/store';
import {todoReducer} from './store/reducers/todo.reducer'



@NgModule({
  declarations: [DisplayComponent, SortPipe, NewSortPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({todoAppState:todoReducer})
  ],
  providers:[TodoServiceService]
})
export class TodoModule { }
