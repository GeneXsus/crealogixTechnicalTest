import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ResultPagesModule } from './pages/result/result-pages.module';
import { GeneralPagesModule } from './pages/general/general-pages.module';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
	
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
	FormsModule,
	GeneralPagesModule,
	ResultPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

