import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './website/header/header.component';
import { FooterComponent } from './website/footer/footer.component';
import { AboutComponent } from './website/about/about.component';
import { SignInComponent } from './website/sign-in/sign-in.component';
import { AdminPanelComponent } from './admin/admin-panel/admin-panel.component';
import { AddPlayerComponent } from './admin/add-player/add-player.component';
import { HomeComponent } from './website/home/home.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddCoachComponent } from './admin/add-coach/add-coach.component';
import { AddMatchComponent } from './admin/add-match/add-match.component';
import { FormsModule } from '@angular/forms';
import { AddTrainingComponent } from './admin/add-training/add-training.component';
import { AddNewsComponent } from './admin/add-news/add-news.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SignInComponent,
    AdminPanelComponent,
    AddPlayerComponent,
    HomeComponent,
    AddEmployeeComponent,
    AddCoachComponent,
    AddMatchComponent,
    AddTrainingComponent,
    AddNewsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
