import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { DisplayComponent } from './display/display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoServiceService } from './todo-service.service';
import { SortPipe } from './sort.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [FormComponent, DisplayComponent, SortPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[TodoServiceService]
})
export class TodoModule { }
