import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PopularNowService {

  constructor(private _http: HttpClient) {}

  addPopularEventNow(data: any): Observable<any>{
    return this._http.post(`${environment.serverBasePath}/popular-now`,data);
  }

  updatePopularEventNow(id: number, data: any): Observable<any>{
    return this._http.put(`${environment.serverBasePath}/popular-now/${id}`,data);
  }

  getPopularEventNowList(): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/popular-now`);
  }

  deletePopularEventNow(id: number): Observable<any>{
    return this._http.delete(`${environment.serverBasePath}/popular-now/${id}`)
  }
}
