import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';
import { FilmsDetailsComponent } from './pages/films/films-details/films-details.component';
import { FilmsListComponent } from './pages/films/films-list/films-list.component';
import { InprogressComponent } from './pages/inprogress/inprogress.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavBarComponent,
	FilterPipe,
	PeopleDetailsComponent,
	PeopleListComponent,
	FilmsDetailsComponent,
	FilmsListComponent,
	InprogressComponent,
	HomeComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

