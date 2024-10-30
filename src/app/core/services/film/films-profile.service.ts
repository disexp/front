import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Business } from '../../models/cineclub.model';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FilmsProfileService {

  constructor(private _http: HttpClient) {}

  addMovieProfile(data: any): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/films`, data);
  }

  updateMovieProfile(id: number, data: any): Observable<any>{
    return this._http.put(`${environment.serverBasePath}/films/${id}`, data); //Falta implementar
  }

  getMovieListProfile(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/films`);
  }

  getMoviebyId(id: number): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/films/${id}`);
  }

  deleteMovieProfile(id: number): Observable<any>{
    return this._http.delete(`${environment.serverBasePath}/films/${id}`); //Falta implementar
  }

  //Showtimes
  getShowtimesbyFilmId(id: number): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/films/${id}/showtimes`);
  }

  getBusinessById(id: number): Observable<any> {
    return this._http.get(`${environment.serverBasePath}/businesses/${id}`);
  }

  getBusinessTypeById(id: number): Observable<any> {
    return this._http.get(`${environment.serverBasePath}/businessTypes/${id}`);
  }

  getBusiness(): Observable<any[]>{
    return this._http.get<any[]>(`${environment.serverBasePath}/businesses`);
  }

  getBusinessType(): Observable<any[]>{
    return this._http.get<any[]>(`${environment.serverBasePath}/businessTypes`);
  }

  getShowtimebyId(id: number): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/showtimes/${id}`);
  }

  getFilmActorbyFilmId(id: number): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/films/${id}/actors`);
  }

  getActorList(): Observable<any[]>{
    return this._http.get<any[]>(`${environment.serverBasePath}/actors`);
  }

  getCineclubById(id: number): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/businesses/${id}`);
  }

}
