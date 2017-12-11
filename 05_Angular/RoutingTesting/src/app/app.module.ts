import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotesComponent } from './notes/notes.component';
import { TaskNotesComponent } from './task-notes/task-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    NotesComponent,
    TaskNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
