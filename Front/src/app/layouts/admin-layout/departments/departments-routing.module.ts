import { DepartmentsAddComponent } from './departments-add/departments-add.component';
import { DepartmentsEditComponent } from './departments-edit/departments-edit.component';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: DepartmentsListComponent },
  { path: 'add', component: DepartmentsAddComponent },
  { path: 'edit', component: DepartmentsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentsRoutingModule { }
