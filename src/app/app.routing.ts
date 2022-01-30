import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPage } from './app.aboutPage';
import { AppComponent } from './app.component';
import { HomePage } from './app.homePage';


const appRoutes: Routes = [
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);