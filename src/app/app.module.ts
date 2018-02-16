import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component'

import { DashboardModule } from  './dashboard/dashboard.module';
import { AppRoutingModule } from './app.routing';
import { LoginModule } from './login/login.module';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavDrawerComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    FlexLayoutModule,
    LoginModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
