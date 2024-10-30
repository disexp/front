// export interface Movie {
//   id:          number;
//   title:       string;
//   year:        number;
//   duration:    string;
//   poster:      string;
//   trailer:     string;
//   director:    string;
//   genres:      string[];
//   synopsis:    string;
//   schedule:    Schedule;
//   cinemas:     Cinemas;
//   staff:       Staff;
//   nominations: Nominations;
// }


//NEW MODELS
export interface Film{
  id:               number;
  title:            string;
  year:             number;
  synopsis:         string;
  poster:           string;
  trailer:          string;
  duration:         string;
  ContentRating_id: number;
  categories:      Category[];
}

export interface FilmCategory {
  id:          number;
  Film_id:     number;
  Category_id: number;
}

export interface Category {
  id:   number;
  name: string;
}

export interface FilmDirector {
  id:          number;
  Film_id:     number;
  Director_id: number;
}

export interface ContentRating {
  id:          number;
  name:        string;
  description: string;
}

export interface Director {
  id:         number;
  first_name: string;
  last_name:  string;
}


//OLD MODELS
export interface Cinemas {
  cinema_1: string;
  cinema_2: string;
  cinema_3: string;
}

export interface Nominations {
  nomination_1: string;
  nomination_2: string;
  nomination_3: string;
}

export interface Schedule {
  schedule_1: Date;
  schedule_2: Date;
  schedule_3: Date;
}

export interface Staff {
  actor_1: string;
  actor_2: string;
  actor_3: string;
}
