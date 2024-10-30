import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Movie } from 'src/app/core/models/film.model';
import { Film } from '../../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  public FilmList:Film[]=[]

  //private apiURL="http://localhost:3000/movies"

  private apiURL="http://localhost:3000/Film";

  private apiBackend= "httphttp://localhost:3000/film";

  constructor(private http:HttpClient) {
    this.getFilms().subscribe((films)=>{
      this.FilmList=films;
      });
  }

  public getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(this.apiURL);
  }

  public searchFilms(title: string, movies: Film[],filters?:string[]): Film[] {
    if(filters!=undefined){
    }

    return movies.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
  }

}
