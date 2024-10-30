import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Business } from '../../models/cineclub.model';

@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  constructor(private _http: HttpClient) {}

  addMovieProfile(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/film',data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/film/${id}`,data); //Falta implementar
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get('http://localhost:3000/film');
  }

  getMoviebyId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/film/${id}`);
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/film/${id}`) //Falta implementar
  }

  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/film/${id}/showtime`);
  }

  getBusinessById(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/business/${id}`);
  }

  getBusinessTypeById(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/businessType/${id}`);
  }

  getBusiness(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:3000/business');
  }

  getBusinessType(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:3000/businessType');
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/showtime/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/film/${id}/actor`);
  }

  getActorList(): Observable<any[]>{
    return this._http.get<any[]>('http://localhost:3000/actor');
  }

  getCineclubById(id: number): Observable<any>{
    return this._http.get(`http://localhost:3000/business/${id}`);
  }

}
