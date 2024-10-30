import { Component, Input, OnInit } from '@angular/core';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cineclubs-cineclub-details',
  templateUrl: './cineclub-details.component.html',
  styleUrls: ['./cineclub-details.component.scss']
})
export class CineclubDetailsComponent implements OnInit {
  @Input() pos = 0;
  cineclubProfile: Array<any> = [];

  constructor(private _empServiceMovie: FilmsProfileService ,
    private _empServiceCineclub: CineclubService,
    private route : ActivatedRoute,
  ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.pos = params['id'];
      console.log(this.pos)
    });
    this.getCineclub();
  }

  getCineclub(){
    this._empServiceCineclub.getCineclubs().subscribe({
      next: (res) => {
         this.cineclubProfile = res;

      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
