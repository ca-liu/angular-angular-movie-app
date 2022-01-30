import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from './app.child';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutPage } from './app.aboutPage';
import { routing } from './app.routing';
import { HomePage } from './app.homePage';


@NgModule({
  declarations: [
    AppComponent, ChildComponent, AboutPage, HomePage
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }