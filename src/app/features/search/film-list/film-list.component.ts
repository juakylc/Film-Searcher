import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {

  loading = true;
  films: any;
  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  ngOnInit(): void {
    const filmCode = this.route.snapshot.paramMap.get('title');
    console.log(filmCode);
    this.filmsService.searchByTitle(filmCode)
    .subscribe(
      response => {
        this.films = response;
        this.loading = false;
        console.log(this.films);
      }, error => {
        console.log(error);
      }
    );
  }

}
