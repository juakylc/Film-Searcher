import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor( private http: HttpClient ) {
    console.log("servicio creado");
  }

  //Metodo que busca peliculas con ese nombre
  searchByTitle(title: string): Observable<any>  {
    const endPoint = 'http://www.omdbapi.com/?s=' + title + '&apikey=' + '9d12d8d7';
    return this.http.get(endPoint).pipe(map(res => {
      return res['Search'];
    }));
  }

  //Metodo que busca pelicula por id
  searchById(id: string): Promise<object>  {
    const endPoint = 'http://www.omdbapi.com/?i=' + id + '&apikey=' + '9d12d8d7';
    return this.http.get(endPoint).toPromise();
  }
}