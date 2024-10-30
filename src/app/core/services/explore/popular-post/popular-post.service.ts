import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PopularPostService {

  constructor(private _http: HttpClient) {}

  addPopularPost(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/popular-posts',data);
  }

  updatePopularPost(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/popular-posts/${id}`,data);
  }

  getPopularPostList(): Observable<any>{
    return this._http.get('http://localhost:3000/popular-posts');
  }

  deletePopularPost(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/popular-posts/${id}`)
  }
}
