import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowtimeService } from 'src/app/core/services/showtime/showtime.service';

@Component({
  selector: 'cineclubs-movies-available',
  templateUrl: './movies-available.component.html',
  styleUrls: ['./movies-available.component.scss']
})
export class MoviesAvailableComponent implements OnInit {
  idPost: any;
  films: any[] = [];
  dateAvailable: string[] = [];

  constructor(
    private _empServiceShowtime: ShowtimeService,
    private route: ActivatedRoute,
  ) {
    this.idPost = this.route.snapshot.paramMap.get('id');
    //console.log(convertirFecha('01-01-2021'));
   }

  ngOnInit(): void {
   this._empServiceShowtime.getAllShowtimesByBusinessId(this.idPost).subscribe({
      next: (res) => {

        this.films = res;
        console.log(res)
      }
    })
  }

  getShowtimesByFilmId(id: number){

  }


}
