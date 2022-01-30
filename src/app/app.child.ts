import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <img [src]="parentMovie.poster_path!= null? baseURL+parentMovie.poster_path:noImgURL" />
  `,
  styleUrls: ['./app.component.css']
})
export class ChildComponent {
  baseURL = "http://image.tmdb.org/t/p/w500"
  noImgURL = "https://www.malaco.com/wp-content/uploads/2016/06/no-photo-available-black-profile.jpg"
  @Input() parentMovie = {
    poster_path: ""
  };
}