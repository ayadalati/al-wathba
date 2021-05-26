import { AddNewsComponent } from './admin/add-news/add-news.component';
import { AddTrainingComponent } from './admin/add-training/add-training.component';
import { AddMatchComponent } from './admin/add-match/add-match.component';
import { AddCoachComponent } from './admin/add-coach/add-coach.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { HomeComponent } from './website/home/home.component';
import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { SignInComponent } from './website/sign-in/sign-in.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  
  { path:  'home', component:HomeComponent},
  { path:  'admin-panel', component:AdminPanelComponent},
  { path:  'sign-in', component:SignInComponent},
  { path:  'add-player', component:AddPlayerComponent},
  { path:  'add-employee', component:AddEmployeeComponent},
  { path:  'add-coach', component:AddCoachComponent},
  { path:  'add-match', component:AddMatchComponent},
  { path:  'add-training', component:AddTrainingComponent},
  { path:  'add-news', component:AddNewsComponent},
  





  { path:  '**', component:HomeComponent},

  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
