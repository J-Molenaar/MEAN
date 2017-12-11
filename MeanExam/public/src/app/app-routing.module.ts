import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { ItemsComponent } from './items/items.component';
import { VoteComponent } from './vote/vote.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  { path: '', pathMatch: "full", component: UsersComponent },
  { path: 'dashboard', component: ItemsComponent },
  { path: 'poll/:itemId', component: VoteComponent },
  { path: 'create', component: CreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
