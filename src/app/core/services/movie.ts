import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal, computed } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OMDbMovie, MovieDetail, OMDbSearchApiResponse } from '../models/movie.model';

@Injectable({ providedIn: 'root' })
export class Movie {
  private http = inject(HttpClient);
  private readonly API_URL = `https://www.omdbapi.com/?apikey=${environment.apiKeyOMDb}`;
  private _movies = signal<OMDbMovie[]>([]);
  public movies = this._movies.asReadonly();
  public totalResults = computed(() => this._movies().length);
  private _currentMovie = signal<MovieDetail | null>(null);
  public currentMovie = this._currentMovie.asReadonly();
  private _favorites = signal<OMDbMovie[]>([]);
  public favorites = this._favorites.asReadonly();
  public favoritesCount = computed(() => this._favorites().length);

  searchMovies(title: string) {
    this.http.get<OMDbSearchApiResponse>(`${this.API_URL}&s=${title}`)
      .subscribe(response => {
        if (response.Response === 'True') {
          this._movies.set(response.Search);
        } else {
          this._movies.set([]);
        }
      });
  }

  getMovieDetails(id: string) {
    this.http.get<MovieDetail>(`${this.API_URL}&i=${id}`)
      .subscribe(response => {
        if (response.Response === 'True') {
          this._currentMovie.set(response);
        }
      });
  }

  toggleFavorite(movie: OMDbMovie) {
    const currentFavs = this._favorites();
    const isFavorite = currentFavs.some(m => m.imdbID === movie.imdbID);

    if (isFavorite) {
      this._favorites.set(currentFavs.filter(m => m.imdbID !== movie.imdbID));
    } else {
      this._favorites.set([...currentFavs, movie]);
    }
  }

  isFavorite(id: string) {
    return computed(() => this._favorites().some(m => m.imdbID === id));
  }
}
