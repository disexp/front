import { Component, ElementRef, ViewChild } from '@angular/core';
import { ListCineclubsComponent } from '../list-cineclubs/list-cineclubs.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-search-bar-cineclubs',
  templateUrl: './search-bar-cineclubs.component.html',
  styleUrls: ['./search-bar-cineclubs.component.scss']
})
export class SearchBarCineclubsComponent {

  @ViewChild("searchCineclubInput")
  public cineclubInput!:ElementRef<HTMLInputElement>;

  constructor(private homeComponent:HomeComponent){

  }

  searchCineClubs(){
    const searchQuery = this.cineclubInput.nativeElement.value;
      this.homeComponent.searchQuery=searchQuery;
      this.homeComponent.searchCineClubs();
  }

}
