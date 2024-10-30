import { Component, OnInit } from '@angular/core';
import { PopularNowService } from 'src/app/core/services/explore/popular-now/popular-now.service';

@Component({
  selector: 'explore-popular-now',
  templateUrl: './popular-now.component.html',
  styleUrls: ['./popular-now.component.scss']
})
export class PopularNowComponent implements OnInit{

  cards: Array<any> = [];

  constructor(
    private _empPopularEventNow: PopularNowService
  ){}

  ngOnInit(): void {
    this.getPopularEventNowList()
  }
  getPopularEventNowList(){
    this._empPopularEventNow.getPopularEventNowList().subscribe({
      next: (res) => {
        //console.log(res)
        this.cards = res;
      },
      error: (err) => {
        console.log(err)
      }
    })

  }
}
