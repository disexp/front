import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.scss']
})
export class MoviePosterComponent {

  @Input() imageUrl!: string;
  @Input() altText!: string;

  changeMovieImage(direction: string) {
  }
}
