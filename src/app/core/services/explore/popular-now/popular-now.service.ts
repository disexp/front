import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopularNowService {

  constructor(private _http: HttpClient) {}

  addPopularEventNow(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/popular-now',data);
  }

  updatePopularEventNow(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/popular-now/${id}`,data);
  }

  getPopularEventNowList(): Observable<any>{
    return this._http.get('http://localhost:3000/popular-now');
  }

  deletePopularEventNow(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/popular-now/${id}`)
  }
}
