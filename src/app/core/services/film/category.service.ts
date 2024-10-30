import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../../models/film.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = `${environment.serverBasePath}/categories`;


  public categoriesList:Category[]=[];

  constructor(private http: HttpClient) {
    this.getCategories().subscribe((categories) => {
      this.categoriesList = categories;
    } );
  }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURL);
  }

  public getCategorieById(id:number){
    return this.categoriesList.find((category)=>category.id==id)?.name;
  }

  public getCategoriesNamesOfFilm(ids:number[]): String[]{

    let categoriesNamesOfFilm:String[]=[];

    ids.forEach((id)=>{
      categoriesNamesOfFilm.push(this.categoriesList.find((category)=>category.id==id)?.name!.toLocaleLowerCase()!);
    });
    return categoriesNamesOfFilm;
  }

}
