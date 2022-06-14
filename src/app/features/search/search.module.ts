import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchFormComponent } from './search-form/search-form.component';
import { FilmComponent } from './film/film.component';
import { FilmListComponent } from './film-list/film-list.component';
import { CardModule } from 'primeng/card';
import { SharedModule } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {​​
    path: '',
    component: SearchFormComponent
  },
  {
      path: 'film/:id',
      component: FilmComponent
  },
  {
    path: 'films/:title',
    component: FilmListComponent
}
];

@NgModule({
  declarations: [SearchFormComponent, FilmComponent, FilmListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CardModule,
    SharedModule,
    ButtonModule,
    InputTextModule,
    FormsModule
  ]
})
export class SearchModule { }