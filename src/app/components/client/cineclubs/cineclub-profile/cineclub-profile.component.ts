import { Component, OnInit } from '@angular/core';
import { CineclubDetailsComponent } from '../cineclub-details/cineclub-details.component';
import { CineclubService } from 'src/app/core/services/cineclubs/cineclub.service';
import { FilmsProfileService } from 'src/app/core/services/film/films-profile.service';
import { ActivatedRoute } from '@angular/router';
import { Business } from 'src/app/core/models/user-profile.model';
import { BusinessType } from '../../../../core/models/cineclub.model';

@Component({
  selector: 'cineclub-cineclub-profile',
  templateUrl: './cineclub-profile.component.html',
  styleUrls: ['./cineclub-profile.component.scss']
})
export class CineclubProfileComponent implements OnInit  {
  idPost: any;
  cineclub!: Business;

  constructor(
    private _empServiceMovie: FilmsProfileService ,
    //private _empServiceCineclub: CineclubService,
    private route : ActivatedRoute,
  ){
    this.idPost = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getCineclubById();
  }

  getCineclubById(){
    this._empServiceMovie.getCineclubById(this.idPost).subscribe({
      next: (res) => {
        this.cineclub = res;
        console.log(res)
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

}
