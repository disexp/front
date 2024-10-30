import { Component, Input, OnInit } from '@angular/core';
import { Film } from 'src/app/core/models/film.model';

@Component({
  selector: 'app-weekly-film',
  templateUrl: './weekly-film.component.html',
  styleUrls: ['./weekly-film.component.scss']
})
export class WeeklyFilmComponent{

  p:number=1;



  @Input()
  public movies:Film[]=[];

  constructor(){
  }

}
