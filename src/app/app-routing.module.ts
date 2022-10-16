import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmsDetailsComponent } from './pages/films/films-details/films-details.component';
import { FilmsListComponent } from './pages/films/films-list/films-list.component';
import { HomeComponent } from './pages/home/home.component';
import { InprogressComponent } from './pages/inprogress/inprogress.component';
import { PeopleDetailsComponent } from './pages/people/people-details/people-details.component';
import { PeopleListComponent } from './pages/people/people-list/people-list.component';


const routes: Routes = [
	{
		path: 'people',
		component: PeopleListComponent
	},
	{
		path: 'people/:id',
		component: PeopleDetailsComponent
	},
	{
		path: 'films',
		component: FilmsListComponent
	},
	{
		path: 'films/:id',
		component: FilmsDetailsComponent
	},
	{
		path: '',
		component: HomeComponent
	},

	{
		path: '**',
		component: InprogressComponent
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
