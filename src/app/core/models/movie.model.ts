export interface OMDbMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OMDbSearchApiResponse {
  Search: OMDbMovie[];
  totalResults: string;
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}

export interface MovieDetail extends OMDbMovie {
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}
