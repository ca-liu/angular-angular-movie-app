import { Component, Input } from '@angular/core';

@Component({
  selector: 'child',
  template: `
  <img src="http://image.tmdb.org/t/p/w500{{parentMovie.poster_path}}" />
  <img src="">
  `,
  styleUrls: ['./app.component.css']
})
export class ChildComponent {

  @Input() parentMovie = {
    poster_path: ""
  };
}