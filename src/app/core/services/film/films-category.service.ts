import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FilmCategory } from '../../models/film.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsCategoryService {

  public FilmCategoryList: FilmCategory[] = [];

  private apiURL = "http://localhost:3000/FilmCategory";

  constructor(private http: HttpClient) {
    this.getFilmCategory().subscribe((filmCategories) => {
      this.FilmCategoryList = filmCategories;
    });
  }

  // Obtener todas las categorías de películas desde la API
  public getFilmCategory(): Observable<FilmCategory[]> {
    return this.http.get<FilmCategory[]>(this.apiURL);
  }


  public getIDsCategoriesByFilmID(id: number): number[] {
    let arrayOfIDCategoriesOfFilm: number[] = [];
    this.FilmCategoryList.forEach((filmCategory) => {
      if (filmCategory.Film_id == id) {
        arrayOfIDCategoriesOfFilm.push(filmCategory.Category_id);
      }
    });
    return arrayOfIDCategoriesOfFilm;
  }
}
