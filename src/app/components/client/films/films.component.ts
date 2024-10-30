import { Component, OnInit,ViewChild } from '@angular/core';
import { FilmService } from 'src/app/core/services/film/film.service';
import { Film } from 'src/app/core/models/film.model';

import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { FilmsCategoryService } from 'src/app/core/services/film/films-category.service';
import { T } from '@angular/cdk/keycodes';
import { CategoryService } from 'src/app/core/services/film/category.service';

interface Genre {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {

  @ViewChild('filterBar')
  filterBarComponent!: FilterBarComponent;

  currentMovieImage = "https://i.postimg.cc/BQ4pYSnk/image-9.png";
  Films: Film[] = [];
  FilmsCopy: Film[] = [];
  CategoryList= this.categoryService.categoriesList;
  FilmCategoryList=this.filmCategoriesService.FilmCategoryList;
  searchQuery = '';


  selectedFilters:Object[]=[];
  genreFilterInfo:string="default";

  constructor(private movieService: FilmService,private filmCategoriesService:FilmsCategoryService,private categoryService:CategoryService) {}

  ngOnInit(): void {
    this.movieService.getFilms().subscribe((response) => {
      this.Films = response;
      this.FilmsCopy = response.slice();
      console.log(this.Films);

      this.categoryService.getCategories().subscribe((categories) => {
        categories.forEach((element) => {
          this.filterBarComponent.genres.push({value:element.name.toLocaleLowerCase(),viewValue:element.name})
        });
      }
      );
    });
  }

  searchMovies(): void {
      this.Films = this.movieService.searchFilms(this.searchQuery, this.FilmsCopy);
  }

  applyFilter(event: { value: string, viewValue: string }[]) {

    this.selectedFilters=event;
    this.genreFilterInfo=event[0].value
    if (event.every(item => item.value === 'default')) {
      this.Films = this.FilmsCopy.slice();
    } else {
      this.Films=this.filterMoviesByGenre()!;
    }
  }

  filterMoviesByGenre() {
    this.Films=this.FilmsCopy.slice();

    if (this.genreFilterInfo === 'default') {
      return this.Films = this.FilmsCopy.slice();

    } else {
      const selectedFilms = new Set<Film>();//Array de peliculas que cumplen el filtro

      //Por cada pelicula dentro por cada categoria si el nombre de esta coincide con el filtro seleccionado entonces agregar pelicula a selectedFilms
      this.Films.forEach((film)=>{
        film.categories.forEach((category)=>{
          console.log(category.name)
          console.log(this.genreFilterInfo)
          if(category.name.toLocaleLowerCase()==this.genreFilterInfo){
            selectedFilms.add(film);
          }
        })
      }
      )
      return selectedFilms.size > 0 ? Array.from(selectedFilms) : []; //Si hay peliculas que cumplen el filtro devolvemos el array de peliculas que cumplen el filtro, si no, devolvemos un array vacio
    }


  }


}
