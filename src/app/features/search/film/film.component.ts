import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../services/films.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit {

  loading = true;
  film: any;
  constructor(private route: ActivatedRoute, private filmsService: FilmsService) { }

  async ngOnInit(): Promise<void> {
    const filmCode = this.route.snapshot.paramMap.get('id');
    console.log(filmCode);
    this.film = await this.filmsService.searchById(filmCode);
    this.loading = false;
    console.log(this.film);
  }

}
