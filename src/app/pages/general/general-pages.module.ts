import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InprogressComponent } from './inprogress/inprogress.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
	InprogressComponent,
	HomeComponent],
  imports: [
    CommonModule
  ]
})
export class GeneralPagesModule { }
