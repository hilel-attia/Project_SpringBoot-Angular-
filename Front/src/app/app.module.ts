import { ClientModule } from './layouts/client/client.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './core/components.module';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { MaterialModule } from 'app/core/material/material.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    ClientModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
