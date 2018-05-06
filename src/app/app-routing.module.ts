import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
	/** Setting default route - set path as empty and set the component */
	{ path : '', component : HomeComponent },
	{ path : 'courses', component : CoursesListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
