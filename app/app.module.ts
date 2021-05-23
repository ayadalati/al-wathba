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


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SignInComponent,
    AdminPanelComponent,
    AddPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
