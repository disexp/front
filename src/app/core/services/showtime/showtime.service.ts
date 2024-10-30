import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ShowtimeService {

  constructor(private _http: HttpClient) { }

  getAllShowtimesByBusinessId(id: number): Observable<any>{
    return this._http.get(`${environment.serverBasePath}/businesses/${id}/showtimes`);
  }

}
