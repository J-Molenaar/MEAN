import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { NotesComponent } from './notes/notes.component';
import { TaskNotesComponent } from './task-notes/task-notes.component';

const routes: Routes = [
  {path: '', redirectTo: '/task', pathMatch: 'full'},
  {path: 'task', component: TasksComponent },
  {path: 'task/:id', component: TaskNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
