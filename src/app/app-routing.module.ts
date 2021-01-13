import { formatCurrency } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComponent } from './todo/display/display.component';
import { FormComponent } from './todo/form/form.component';

const routes: Routes = [
  {path:'display', component:DisplayComponent },
  {path: 'form', component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
