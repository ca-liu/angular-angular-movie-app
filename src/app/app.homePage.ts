import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_KEY = '881e6366967c3ea525fb4d98da893d4f'; // Use v3
const BASE_URL = 'http://api.themoviedb.org/3/discover/movie?api_key='
    + API_KEY;

const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list?api_key='
    + API_KEY
    + '&language=en-US';

@Component({
    selector: 'app-root',
    templateUrl: './app.homePage.html',
    styleUrls: ['./app.component.css']
})
export class HomePage {
    _movieArray!: Array<any>;
    _genreArray!: Array<any>;
    _http: HttpClient;
    modURL!: string;
    pageData = {
        page: 1,
        totalPages: 0
    }
    genre = '28';

    // Since we are using a provider above we can receive 
    // an instance through an instructor.
    constructor(private http: HttpClient) {
        this._http = http;
    }

    ngOnInit() {
        this.getUserPreference();
        this.getGenres();
        this.getMovies();
    }

    refresh() {
        this.pageData.page = 1;
        this.getUserPreference();
        this.getMovies();
    }

    getDateRange() {
        let days = [];

        let today = new Date();
        const formattedToday = this.getFormattedDate(today);

        let sixtyDaysAgo = new Date();
        const formattedThirdtyDaysAgo = sixtyDaysAgo.setDate(sixtyDaysAgo.getDate() - 30);

        days.push(formattedToday, formattedThirdtyDaysAgo)
        return days;
    }

    getFormattedDate(dt: Date) {
        var month = (Number(dt.getMonth() + 1));
        var padMonth = month.toString().padStart(2, '0')
        return `${dt.getFullYear()}-${padMonth}-${dt.getDate()}`;
    }

    getUserPreference() {
        const dates = this.getDateRange();

        this.modURL = BASE_URL.concat(
            '&primary_release_date.gte=',
            dates[1].toString(),
            '&primary_release_date.lte=',
            dates[0].toString(),
            '&page=',
            this.pageData.page.toString(),
            '&with_genres=',
            this.genre
        )
    }

    getMovies() {
        this._http.get<any>(this.modURL)
            .subscribe({
                next: (data) => {
                    this.pageData.page = data.page;
                    this.pageData.totalPages = data.total_pages;
                    this._movieArray = data.results;
                },
                error: (er) => {
                    // Let user know about the error.
                    alert(er);
                    console.error(er);
                }
            });
    }

    getGenres() {
        this._http.get<any>(GENRE_URL)
            .subscribe({
                next: (data) => {
                    this._genreArray = data.genres;
                },
                error: (er) => {
                    // Let user know about the error.
                    alert(er);
                    console.error(er)
                }
            });
    }

    handlePageClick(input: string) {
        switch (input) {
            case 'add':
                if (this.pageData.page < this.pageData.totalPages) {
                    this.pageData.page++
                    this.getUserPreference();
                    this.getMovies();
                }
                break;
            case 'subtract':
                if (this.pageData.page > 1) {
                    this.pageData.page--
                    this.getUserPreference();
                    this.getMovies();
                }
                break;
        }
    }

    trimOverview(text: string) {
        var spaceArray = text.split(" ")
        var newtextArray = spaceArray.splice(0, 35)
        var newtext = newtextArray.join(' ')
        return spaceArray.length < 35 ? text : newtext + "..."
    }
}
