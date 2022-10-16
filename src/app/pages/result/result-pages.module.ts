import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleDetailsComponent } from './people/people-details/people-details.component';
import { PeopleListComponent } from './people/people-list/people-list.component';
import { FilmsDetailsComponent } from './films/films-details/films-details.component';
import { FilmsListComponent } from './films/films-list/films-list.component';
import { FilterPipe } from '../../pipes/filter.pipe';



@NgModule({
  declarations: [
	FilterPipe,
	PeopleDetailsComponent,
	PeopleListComponent,
	FilmsDetailsComponent,
	FilmsListComponent,],
  imports: [
    CommonModule
  ]
})
export class ResultPagesModule { }
