import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TaskComponent } from './tasks/task/task.component';
import {RouterModule} from "@angular/router";
import {routing} from "./app.routes";
import { TaskListComponent } from './tasks/task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
