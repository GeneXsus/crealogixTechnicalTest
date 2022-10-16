import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/general/home/home.component';
import { InprogressComponent } from './pages/general/inprogress/inprogress.component';
import { FilmsDetailsComponent } from './pages/result/films/films-details/films-details.component';
import { FilmsListComponent } from './pages/result/films/films-list/films-list.component';
import { PeopleDetailsComponent } from './pages/result/people/people-details/people-details.component';
import { PeopleListComponent } from './pages/result/people/people-list/people-list.component';



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
