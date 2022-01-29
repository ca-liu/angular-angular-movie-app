import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChildComponent } from './app.child';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './app.highlight.directive';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, ChildComponent, HighlightDirective
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }