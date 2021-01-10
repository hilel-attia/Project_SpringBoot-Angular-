
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsListComponent } from './departments-list/departments-list.component';
import { DepartmentsAddComponent } from './departments-add/departments-add.component';
import { DepartmentsEditComponent } from './departments-edit/departments-edit.component';

import { MaterialModule } from 'app/core/material/material.module';
import { MatTableModule } from '@angular/material/table'  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [DepartmentsListComponent, DepartmentsAddComponent, DepartmentsEditComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule
  ]
})
export class DepartmentsModule { }
