import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
  <nav>
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/about" routerLinkActive="active">About</a>
  </nav>
  <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
