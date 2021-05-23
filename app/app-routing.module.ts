import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { SignInComponent } from './website/sign-in/sign-in.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:  'admin-panel', component:AdminPanelComponent},
  { path:  'sign-in', component:SignInComponent},
  { path:  'add-player', component:AddPlayerComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
